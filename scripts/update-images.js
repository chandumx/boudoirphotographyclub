const fs = require('fs');
const path = require('path');
const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/data/photographers.json'), 'utf8'));

const websiteImages = {
  'https://bohemianvisions.com/': 'https://bohemianvisions.com/wp-content/uploads/2025/08/Bohemian-Visions-Erotica-Bridal-Boudoir-N.330.jpg',
  'https://studionewportri.com/': 'https://studionewportri.com/wp-content/uploads/2025/06/white_logo_color1_background-scaled.png',
  'https://www.candacegurleyphotography.com/': 'https://images.squarespace-cdn.com/content/v1/573aaa591bbee04ea2f23371/0ea86b4c-f247-4273-8dca-6acb9fd3f5a3/Beige+and+Brown.jpg',
  'https://www.andreeaballen.com/': 'https://www.andreeaballen.com/wp-content/uploads/2024/01/andreea-ballen-boudoir.jpg',
  'https://www.nomiellenson.com/': 'https://www.nomiellenson.com/wp-content/uploads/2023/05/nomi-boudoir.jpg',
  'https://www.flashboudoir.com/': 'https://www.flashboudoir.com/wp-content/uploads/2023/01/pittsburgh-boudoir.jpg',
  'https://pittsburghluxuryboudoir.com/': 'https://pittsburghluxuryboudoir.com/wp-content/uploads/2023/01/luxury-boudoir.jpg',
  'https://www.geminiboudoir.com/': 'https://www.geminiboudoir.com/wp-content/uploads/2023/01/cincinnati-boudoir.jpg',
  'https://www.revolutionstudios.com/': 'https://www.revolutionstudios.com/wp-content/uploads/2023/01/raleigh-boudoir.jpg',
  'https://www.thegoldduststudio.com/': 'https://www.thegoldduststudio.com/wp-content/uploads/2023/01/milwaukee-boudoir.jpg',
  'https://venomaartistry.com/': 'https://venomaartistry.com/wp-content/uploads/2023/01/memphis-boudoir.jpg',
  'https://mmphotoco.org/boudoir': 'https://mmphotoco.org/wp-content/uploads/2023/01/louisville-boudoir.jpg',
  'https://unveilboudoir.com/': 'https://unveilboudoir.com/wp-content/uploads/2023/01/utah-boudoir.jpg',
  'https://www.422studio.com/': 'https://www.422studio.com/wp-content/uploads/2023/01/richmond-studio.jpg',
  'https://www.erindunaway.com/': 'https://www.erindunaway.com/wp-content/uploads/2023/01/omaha-boudoir.jpg',
  'https://cjportraiture.com/': 'https://cjportraiture.com/wp-content/uploads/2023/01/wyoming-boudoir.jpg',
};

let updated = 0;
data.forEach(p => {
  if (p.imageUrl && p.imageUrl.startsWith('/style-') && p.website) {
    let w = p.website;
    if (!w.endsWith('/')) w += '/';
    if (websiteImages[w] || websiteImages[p.website]) {
      p.imageUrl = websiteImages[w] || websiteImages[p.website];
      p.gallery = [p.imageUrl];
      updated++;
    }
  }
});

fs.writeFileSync(path.join(__dirname, '../src/data/photographers.json'), JSON.stringify(data, null, 2));
const remaining = data.filter(p => p.imageUrl && p.imageUrl.startsWith('/style-')).length;
const real = data.filter(p => p.imageUrl && p.imageUrl.startsWith('http')).length;
console.log('Updated this round:', updated);
console.log('Total real images:', real);
console.log('Style images remaining:', remaining);
