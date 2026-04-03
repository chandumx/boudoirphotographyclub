const nodemailer = require('nodemailer');
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const APP_PASSWORD = 'xmvl chpx lajf qein';
const FROM_EMAIL = 'boudoirphotographyclub@gmail.com';
const FROM_NAME = 'Boudoir Photography Club';
const MAX_EMAILS_PER_RUN = 20;
const DELAY_BETWEEN_EMAILS = 10000; // 10 seconds - slow for new account

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: FROM_EMAIL, pass: APP_PASSWORD }
});

const photographersPath = path.join(__dirname, '../src/data/photographers.json');
const sentLogPath = path.join(__dirname, '../src/data/outreach-sent.json');

function getSentLog() {
  try { return JSON.parse(fs.readFileSync(sentLogPath, 'utf8')); }
  catch { return []; }
}

function saveSentLog(log) {
  fs.writeFileSync(sentLogPath, JSON.stringify(log, null, 2));
}

function formatCity(slug) {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const timeout = setTimeout(() => reject(new Error('timeout')), 8000);
    client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        clearTimeout(timeout);
        fetchPage(res.headers.location).then(resolve).catch(reject);
        return;
      }
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => { clearTimeout(timeout); resolve(data); });
    }).on('error', e => { clearTimeout(timeout); reject(e); });
  });
}

function findEmail(html) {
  // Match email patterns
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
  const matches = html.match(emailRegex) || [];
  // Filter out common non-contact emails
  const filtered = matches.filter(e =>
    !e.includes('example.com') &&
    !e.includes('sentry') &&
    !e.includes('schema.org') &&
    !e.includes('wixpress') &&
    !e.includes('squarespace') &&
    !e.includes('googleapis') &&
    !e.includes('w3.org') &&
    !e.includes('.png') &&
    !e.includes('.jpg') &&
    !e.includes('.webp') &&
    !e.includes('.svg') &&
    !e.includes('.css') &&
    !e.includes('.js') &&
    !e.includes('user@domain') &&
    !e.includes('email@') &&
    !e.includes('name@') &&
    !e.includes('test@') &&
    !e.includes('noreply') &&
    !e.includes('no-reply') &&
    !e.includes('wordpress') &&
    !e.includes('support@') &&
    !e.includes('2x') &&
    e.length < 50 &&
    e.length > 5 &&
    e.split('@')[1].includes('.')
  );
  return filtered.length > 0 ? filtered[0] : null;
}

function getEmailBody(name, city, listingUrl) {
  return `Hi ${name},

We recently added your boudoir photography profile to our directory to help clients discover amazing photographers in ${city}.

Your listing:
${listingUrl}

Our goal is to help photographers get more visibility and bookings through organic search traffic.

To support you, we would like to offer 3 months of free leads from our platform.

In return, we ask if you could mention us on your website as a partner.

Example:

Recommended Partner
Boudoir Photography Club – Find Boudoir Photographers in ${city}
https://boudoirphotographyclub.com

This helps both of us grow visibility and attract more clients.

If you're happy with this, we will prioritize your listing and send leads your way.

Thanks and looking forward to working together.

Best regards,
Boudoir Photography Club Team
https://boudoirphotographyclub.com`;
}

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function main() {
  const photographers = JSON.parse(fs.readFileSync(photographersPath, 'utf8'));
  const sentLog = getSentLog();
  const sentWebsites = new Set(sentLog.map(s => s.website));

  // Get unique photographers with websites
  const seen = new Set();
  const targets = [];
  for (const p of photographers) {
    if (!p.website || seen.has(p.website) || sentWebsites.has(p.website)) continue;
    seen.add(p.website);
    targets.push(p);
  }

  console.log(`Found ${targets.length} photographers not yet emailed`);
  console.log(`Sending up to ${MAX_EMAILS_PER_RUN} emails this run...\n`);

  let sent = 0;
  let failed = 0;
  let noEmail = 0;

  for (const p of targets) {
    if (sent >= MAX_EMAILS_PER_RUN) break;

    const city = formatCity(p.city);
    const listingUrl = `https://boudoirphotographyclub.com/photographer/${p.slug}`;

    // Try to find email from website
    let email = null;
    try {
      const html = await fetchPage(p.website);
      email = findEmail(html);

      // If no email on homepage, try /contact
      if (!email) {
        try {
          const contactUrl = p.website.replace(/\/$/, '') + '/contact';
          const contactHtml = await fetchPage(contactUrl);
          email = findEmail(contactHtml);
        } catch {}
      }
    } catch (e) {
      // Website unreachable
    }

    if (!email) {
      noEmail++;
      sentLog.push({
        website: p.website,
        name: p.name,
        email: null,
        status: 'no_email_found',
        date: new Date().toISOString(),
      });
      continue;
    }

    // Send email
    try {
      await transporter.sendMail({
        from: `"${FROM_NAME}" <${FROM_EMAIL}>`,
        to: email,
        subject: 'We listed your boudoir photography profile',
        text: getEmailBody(p.name, city, listingUrl),
      });

      sent++;
      console.log(`[${sent}] SENT to ${email} (${p.name}, ${city})`);

      sentLog.push({
        website: p.website,
        name: p.name,
        email: email,
        city: city,
        state: p.state,
        listingUrl: listingUrl,
        status: 'sent',
        date: new Date().toISOString(),
      });

      // Save after each send
      saveSentLog(sentLog);
      await sleep(DELAY_BETWEEN_EMAILS);

    } catch (e) {
      failed++;
      console.log(`[FAIL] ${email} (${p.name}): ${e.message}`);
      sentLog.push({
        website: p.website,
        name: p.name,
        email: email,
        status: 'failed',
        error: e.message,
        date: new Date().toISOString(),
      });
      saveSentLog(sentLog);
    }
  }

  saveSentLog(sentLog);
  console.log(`\n=== DONE ===`);
  console.log(`Sent: ${sent}`);
  console.log(`Failed: ${failed}`);
  console.log(`No email found: ${noEmail}`);
  console.log(`Total logged: ${sentLog.length}`);
}

main().catch(e => console.error('FATAL:', e.message));
