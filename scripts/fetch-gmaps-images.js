const fs = require('fs');
const path = require('path');
const https = require('https');

const API_KEY = '212e9e36dea44d201e6f745648bbb99048980f21d0ae1bef9fc02f10db147632';
const dataPath = path.join(__dirname, '../src/data/photographers.json');

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch(e) { reject(e); }
      });
    }).on('error', reject);
  });
}

function formatCity(slug) {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function main() {
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

  // Get unique photographers (by website) that need more images
  const seen = new Set();
  const toProcess = [];

  for (const p of data) {
    if (!p.website || seen.has(p.website)) continue;
    seen.add(p.website);
    // Only process if gallery has 1 or fewer images
    if (!p.gallery || p.gallery.length <= 1) {
      toProcess.push(p);
    }
  }

  console.log(`Processing ${toProcess.length} unique photographers...`);

  const websitePhotos = {};
  let processed = 0;
  let found = 0;

  for (const p of toProcess) {
    const city = formatCity(p.city);
    const query = encodeURIComponent(`${p.name} boudoir photographer ${city} ${p.state}`);

    try {
      // Step 1: Search Google Maps
      const searchUrl = `https://serpapi.com/search.json?engine=google_maps&q=${query}&api_key=${API_KEY}`;
      const searchResult = await fetchJSON(searchUrl);

      let dataId = null;
      if (searchResult.place_results && searchResult.place_results.data_id) {
        dataId = searchResult.place_results.data_id;
      } else if (searchResult.local_results && searchResult.local_results[0]) {
        dataId = searchResult.local_results[0].data_id;
      }

      if (dataId) {
        // Step 2: Fetch photos
        const photosUrl = `https://serpapi.com/search.json?engine=google_maps_photos&data_id=${encodeURIComponent(dataId)}&api_key=${API_KEY}`;
        const photosResult = await fetchJSON(photosUrl);

        if (photosResult.photos && photosResult.photos.length > 0) {
          const images = photosResult.photos.slice(0, 6).map(p => p.image);
          websitePhotos[p.website] = images;
          found++;
          console.log(`[${++processed}/${toProcess.length}] ${p.name}: ${images.length} photos`);
        } else {
          console.log(`[${++processed}/${toProcess.length}] ${p.name}: no photos on Maps`);
        }
      } else {
        console.log(`[${++processed}/${toProcess.length}] ${p.name}: not found on Maps`);
      }

      // Rate limit - SerpAPI allows ~10 req/s
      await sleep(500);

    } catch(e) {
      console.log(`[${++processed}/${toProcess.length}] ${p.name}: error - ${e.message}`);
    }
  }

  // Step 3: Update all photographers with found photos
  let updated = 0;
  for (const p of data) {
    if (p.website && websitePhotos[p.website]) {
      const photos = websitePhotos[p.website];
      p.imageUrl = photos[0];
      p.gallery = photos;
      updated++;
    }
  }

  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  console.log(`\nDone! Found photos for ${found} businesses`);
  console.log(`Updated ${updated} photographer entries`);
  console.log(`Remaining without real images: ${data.filter(p => p.imageUrl && p.imageUrl.startsWith('/style-')).length}`);
}

main().catch(console.error);
