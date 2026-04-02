const fs = require('fs');
const path = require('path');
const https = require('https');

const API_KEY = '212e9e36dea44d201e6f745648bbb99048980f21d0ae1bef9fc02f10db147632';
const dataPath = path.join(__dirname, '../src/data/photographers.json');

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error('timeout')), 15000);
    https.get(url, (res) => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => {
        clearTimeout(timeout);
        try { resolve(JSON.parse(data)); } catch(e) { reject(e); }
      });
    }).on('error', e => { clearTimeout(timeout); reject(e); });
  });
}

function formatCity(slug) {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function main() {
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  const seen = new Set();
  const toProcess = [];

  for (const p of data) {
    if (!p.website || seen.has(p.website)) continue;
    seen.add(p.website);
    if (!p.gallery || p.gallery.length <= 1 || (p.gallery.length === 1 && !p.gallery[0].includes('googleusercontent'))) {
      toProcess.push(p);
    }
  }

  console.log('Processing ' + toProcess.length + ' photographers...');
  const websitePhotos = {};
  let found = 0;

  for (let i = 0; i < toProcess.length; i++) {
    const p = toProcess[i];
    const city = formatCity(p.city);
    const query = encodeURIComponent(p.name + ' ' + city + ' ' + p.state);

    try {
      const searchUrl = 'https://serpapi.com/search.json?engine=google_maps&q=' + query + '&api_key=' + API_KEY;
      const sr = await fetchJSON(searchUrl);
      await sleep(300);

      let dataId = null;
      if (sr.place_results && sr.place_results.data_id) dataId = sr.place_results.data_id;
      else if (sr.local_results && sr.local_results[0]) dataId = sr.local_results[0].data_id;

      if (dataId) {
        const photosUrl = 'https://serpapi.com/search.json?engine=google_maps_photos&data_id=' + encodeURIComponent(dataId) + '&api_key=' + API_KEY;
        const pr = await fetchJSON(photosUrl);
        await sleep(300);

        if (pr.photos && pr.photos.length > 0) {
          websitePhotos[p.website] = pr.photos.slice(0, 6).map(x => x.image);
          found++;
          console.log('[' + (i+1) + '/' + toProcess.length + '] ' + p.name + ': ' + websitePhotos[p.website].length + ' photos');
        } else {
          console.log('[' + (i+1) + '/' + toProcess.length + '] ' + p.name + ': no photos');
        }
      } else {
        console.log('[' + (i+1) + '/' + toProcess.length + '] ' + p.name + ': not on Maps');
      }

      // Save every 10 photographers
      if ((i + 1) % 10 === 0) {
        let updated = 0;
        for (const d of data) {
          if (d.website && websitePhotos[d.website]) {
            d.imageUrl = websitePhotos[d.website][0];
            d.gallery = websitePhotos[d.website];
            updated++;
          }
        }
        fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
        console.log('--- Saved! ' + updated + ' entries updated so far ---');
      }

    } catch(e) {
      console.log('[' + (i+1) + '/' + toProcess.length + '] ' + p.name + ': ERROR ' + e.message);
      await sleep(2000);
    }
  }

  // Final save
  let updated = 0;
  for (const d of data) {
    if (d.website && websitePhotos[d.website]) {
      d.imageUrl = websitePhotos[d.website][0];
      d.gallery = websitePhotos[d.website];
      updated++;
    }
  }
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

  const googleCount = data.filter(p => p.imageUrl && p.imageUrl.includes('googleusercontent')).length;
  const styleCount = data.filter(p => p.imageUrl && p.imageUrl.startsWith('/style-')).length;
  console.log('\nDONE! Found: ' + found + ' | Updated: ' + updated + ' | Google imgs: ' + googleCount + ' | Style remaining: ' + styleCount);
}

main().catch(e => console.error('FATAL:', e.message));
