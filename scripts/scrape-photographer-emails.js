/**
 * Scrapes contact emails from photographer websites.
 * Run: node scripts/scrape-photographer-emails.js
 * Output: scripts/photographer-leads.csv
 */

const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

const photographers = require("../src/data/photographers.json");

const EMAIL_REGEX = /[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/g;
const SKIP_DOMAINS = ["sentry.io","wix.com","squarespace.com","example.com","gmail.com","yahoo.com","hotmail.com","placeholder"];

const OUTPUT_FILE = path.join(__dirname, "photographer-leads.csv");
const DELAY_MS = 800; // be polite — don't hammer servers

function delay(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function fetchUrl(url, timeoutMs = 8000) {
  return new Promise((resolve) => {
    const mod = url.startsWith("https") ? https : http;
    const req = mod.get(url, { headers: { "User-Agent": "Mozilla/5.0 (compatible; BoudoirClub/1.0)" } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const redirectUrl = res.headers.location.startsWith("http")
          ? res.headers.location
          : new URL(res.headers.location, url).href;
        return fetchUrl(redirectUrl, timeoutMs).then(resolve);
      }
      let body = "";
      res.on("data", chunk => { body += chunk; if (body.length > 200000) res.destroy(); });
      res.on("end", () => resolve(body));
      res.on("error", () => resolve(""));
    });
    req.setTimeout(timeoutMs, () => { req.destroy(); resolve(""); });
    req.on("error", () => resolve(""));
  });
}

function extractEmails(html, baseUrl) {
  const found = new Set();
  const matches = html.match(EMAIL_REGEX) || [];
  for (const email of matches) {
    const domain = email.split("@")[1]?.toLowerCase() || "";
    if (SKIP_DOMAINS.some(d => domain.includes(d))) continue;
    if (email.includes("..") || email.startsWith(".")) continue;
    found.add(email.toLowerCase());
  }
  // Also look for mailto: links
  const mailtoMatches = html.match(/mailto:([^"'\s>?]+)/gi) || [];
  for (const m of mailtoMatches) {
    const email = m.replace(/^mailto:/i, "").split("?")[0].toLowerCase();
    if (EMAIL_REGEX.test(email)) {
      const domain = email.split("@")[1] || "";
      if (!SKIP_DOMAINS.some(d => domain.includes(d))) found.add(email);
    }
  }
  return [...found];
}

async function findContactPageUrl(baseUrl, html) {
  const contactPatterns = [/href="([^"]*contact[^"]*)"/gi, /href="([^"]*about[^"]*)"/gi];
  for (const pattern of contactPatterns) {
    const match = pattern.exec(html);
    if (match) {
      try {
        const full = new URL(match[1], baseUrl).href;
        if (full.startsWith(baseUrl.replace(/\/$/, "").split("/")[0] + "//" + baseUrl.replace(/\/$/, "").split("/")[2])) {
          return full;
        }
      } catch {}
    }
  }
  return null;
}

async function scrapePhotographer(p) {
  const website = p.website?.replace(/\/$/, "");
  if (!website) return null;

  try {
    const html = await fetchUrl(website);
    if (!html) return null;

    let emails = extractEmails(html, website);

    // If no email on homepage, try /contact
    if (emails.length === 0) {
      const contactUrl = await findContactPageUrl(website, html) || website + "/contact";
      const contactHtml = await fetchUrl(contactUrl);
      if (contactHtml) emails = extractEmails(contactHtml, contactUrl);
    }

    if (emails.length === 0) return null;

    return {
      name: p.name,
      email: emails[0],
      allEmails: emails.join("|"),
      website,
      city: p.city,
      state: p.state,
      slug: p.slug,
    };
  } catch {
    return null;
  }
}

async function main() {
  // Deduplicate by website domain
  const seen = new Set();
  const unique = photographers.filter(p => {
    if (!p.website) return false;
    try {
      const domain = new URL(p.website).hostname;
      if (seen.has(domain)) return false;
      seen.add(domain);
      return true;
    } catch { return false; }
  });

  console.log(`Scraping ${unique.length} unique photographer websites for contact emails...`);
  console.log("This will take a while. Output: scripts/photographer-leads.csv\n");

  const results = [];
  const rows = ["Name,Email,Website,City,State,ProfileURL"];

  // Process in batches of 5
  const BATCH = 5;
  for (let i = 0; i < unique.length; i += BATCH) {
    const batch = unique.slice(i, i + BATCH);
    const found = await Promise.all(batch.map(scrapePhotographer));
    for (const r of found) {
      if (r) {
        results.push(r);
        rows.push(`"${r.name.replace(/"/g,'""')}","${r.email}","${r.website}","${r.city}","${r.state}","https://boudoirphotographyclub.com/photographer/${r.slug}"`);
        process.stdout.write(`  ✓ ${r.name} — ${r.email}\n`);
      }
    }
    process.stdout.write(`\r  Progress: ${Math.min(i + BATCH, unique.length)}/${unique.length} checked | ${results.length} emails found`);
    await delay(DELAY_MS);
  }

  fs.writeFileSync(OUTPUT_FILE, rows.join("\n"));
  console.log(`\n\nDone! Found ${results.length} emails → ${OUTPUT_FILE}`);
  console.log("\nNext step: import photographer-leads.csv into Instantly.ai or Brevo and send the pitch template.");
}

main().catch(console.error);
