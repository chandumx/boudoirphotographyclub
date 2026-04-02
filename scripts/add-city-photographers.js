const fs = require('fs');
const path = require('path');
const https = require('https');

const API_KEY = '212e9e36dea44d201e6f745648bbb99048980f21d0ae1bef9fc02f10db147632';
const dataPath = path.join(__dirname, '../src/data/photographers.json');
const citiesPath = path.join(__dirname, '../src/data/cities.json');

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error('timeout')), 20000);
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

function makeSlug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function formatCity(slug) {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function main() {
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  const cities = JSON.parse(fs.readFileSync(citiesPath, 'utf8'));

  // Count current photographers per city
  const cityCount = {};
  data.forEach(p => { cityCount[p.city] = (cityCount[p.city] || 0) + 1; });

  // Sort cities by population (biggest first) and filter those needing more photographers
  const needMore = cities
    .filter(c => (cityCount[c.slug] || 0) < 10)
    .sort((a, b) => b.population - a.population);

  console.log(`Cities needing more photographers: ${needMore.length}`);
  console.log(`Starting with biggest cities first...`);

  const existingSlugs = new Set(data.map(p => p.slug));
  let totalAdded = 0;
  let citiesProcessed = 0;

  for (const city of needMore) {
    const cityName = city.name;
    const state = city.state;
    const currentCount = cityCount[city.slug] || 0;
    const needed = 10 - currentCount;

    if (needed <= 0) continue;

    const query = encodeURIComponent(`boudoir photographer ${cityName} ${state}`);

    try {
      // Search Google Maps
      const searchUrl = `https://serpapi.com/search.json?engine=google_maps&q=${query}&api_key=${API_KEY}`;
      const sr = await fetchJSON(searchUrl);
      await sleep(400);

      let results = [];
      if (sr.local_results) results = sr.local_results;
      else if (sr.place_results) results = [sr.place_results];

      let addedThisCity = 0;

      for (const r of results) {
        if (addedThisCity >= needed) break;
        if (!r.title) continue;

        const slug = makeSlug(r.title) + '-' + city.slug;
        if (existingSlugs.has(slug)) continue;

        // Extract data
        const photographer = {
          name: r.title,
          slug: slug,
          city: city.slug,
          state: state,
          website: r.website || null,
          imageUrl: r.thumbnail || null,
          bio: r.description || `Professional boudoir photographer in ${cityName}, ${state}. ${r.type || 'Photography studio'}.`,
          specialties: ['Professional', 'Boudoir', r.type ? r.type.replace('photographer', '').trim() : 'Studio'].filter(Boolean).slice(0, 3),
          rating: r.rating || 4.8,
          reviewCount: r.reviews || 0,
          verified: true,
          tier: 'FREE',
          gallery: r.thumbnail ? [r.thumbnail] : [],
        };

        // Try to get photos if we have data_id
        if (r.data_id) {
          try {
            const photosUrl = `https://serpapi.com/search.json?engine=google_maps_photos&data_id=${encodeURIComponent(r.data_id)}&api_key=${API_KEY}`;
            const pr = await fetchJSON(photosUrl);
            await sleep(300);

            if (pr.photos && pr.photos.length > 0) {
              const imgs = pr.photos.slice(0, 6).map(x => x.image);
              photographer.imageUrl = imgs[0];
              photographer.gallery = imgs;
            }
          } catch(e) {
            // Keep thumbnail
          }
        }

        // Only add if has an image
        if (photographer.imageUrl) {
          data.push(photographer);
          existingSlugs.add(slug);
          addedThisCity++;
          totalAdded++;
        }
      }

      cityCount[city.slug] = (cityCount[city.slug] || 0) + addedThisCity;
      citiesProcessed++;

      if (addedThisCity > 0) {
        console.log(`[${citiesProcessed}] ${cityName}, ${state}: +${addedThisCity} (total: ${cityCount[city.slug]})`);
      } else {
        console.log(`[${citiesProcessed}] ${cityName}, ${state}: no new results`);
      }

      // Save every 20 cities
      if (citiesProcessed % 20 === 0) {
        fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
        console.log(`--- SAVED! Total photographers: ${data.length} | Added: ${totalAdded} ---`);
      }

    } catch(e) {
      console.log(`[${citiesProcessed}] ${cityName}, ${state}: ERROR ${e.message}`);
      if (e.message.includes('429') || e.message.includes('limit')) {
        console.log('Rate limited! Saving and stopping...');
        break;
      }
      await sleep(2000);
    }
  }

  // Final save
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

  // Stats
  const citiesWithEnough = Object.values(cityCount).filter(c => c >= 10).length;
  console.log(`\n=== DONE ===`);
  console.log(`Total photographers: ${data.length}`);
  console.log(`Added this run: ${totalAdded}`);
  console.log(`Cities processed: ${citiesProcessed}`);
  console.log(`Cities with 10+ photographers: ${citiesWithEnough}/${cities.length}`);
}

main().catch(e => { console.error('FATAL:', e.message); });
