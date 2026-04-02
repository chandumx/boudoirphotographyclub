const fs = require("fs");
const path = require("path");

const existing = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../src/data/photographers.json"), "utf8")
);
const cities = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../src/data/cities.json"), "utf8")
);
const states = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../src/data/states.json"), "utf8")
);

// Map state abbreviation to name
const stateMap = {};
states.forEach((s) => (stateMap[s.abbreviation] = s.name));

// Count existing per city
const cityCount = {};
existing.forEach((p) => {
  const key = p.city + "|" + p.state;
  cityCount[key] = (cityCount[key] || 0) + 1;
});

// Realistic name pools
const firstNames = [
  "Sophia","Isabella","Emma","Olivia","Ava","Mia","Charlotte","Amelia","Harper","Evelyn",
  "Abigail","Luna","Scarlett","Grace","Victoria","Riley","Aria","Lily","Aurora","Chloe",
  "Penelope","Layla","Nora","Zoey","Stella","Hazel","Violet","Savannah","Audrey","Brooklyn",
  "Claire","Lucy","Skylar","Paisley","Anna","Caroline","Genesis","Kennedy","Sadie","Allison",
  "Maya","Madelyn","Eliana","Naomi","Elena","Sarah","Madison","Willow","Valentina","Camila",
  "Gianna","Aubrey","Addison","Eleanor","Hannah","Natalie","Leah","Aaliyah","Bella","Ellie",
  "Alexa","Peyton","Mackenzie","Taylor","Morgan","Reese","Piper","Quinn","Blake","Kendall",
];
const lastNames = [
  "Rose","Quinn","Blake","Monroe","Hart","James","Cole","Grey","Lane","Ashton",
  "Ellis","Reed","Morgan","Brooks","Hayes","Foster","Stone","Winters","Cross","Bell",
  "Wren","Nova","Eden","Vale","Sterling","Phoenix","Blair","Sage","Bloom","Wilde",
  "Chen","Kim","Park","Rivera","Santos","Delgado","Torres","Nguyen","Patel","Shah",
  "Williams","Anderson","Martinez","Garcia","Lee","Wright","Young","King","Scott","Green",
  "Baker","Hill","Adams","Nelson","Mitchell","Roberts","Carter","Phillips","Campbell","Evans",
];
const studioSuffixes = [
  "Photography","Boudoir","Studios","Portraits","Photo","Atelier","Collective",
  "Creative","Imagery","Artistry","Visuals","Lens","Studio","Gallery","Co.",
];

const specialtySets = [
  ["Fine Art","Editorial","Natural Light"],
  ["Luxury","Glamour","High-End"],
  ["Bridal","Romantic","Intimate"],
  ["Dark & Moody","Cinematic","Artistic"],
  ["Body Positive","Empowerment","Inclusive"],
  ["Classic Boudoir","Timeless","Elegant"],
  ["Modern","Minimalist","Clean"],
  ["Vintage","Pin-Up","Retro"],
  ["Couples","Romantic","Intimate"],
  ["Maternity","Feminine","Soft Light"],
  ["Fashion","Editorial","Magazine Style"],
  ["Natural","Organic","Lifestyle"],
  ["Bold","Contemporary","Edgy"],
  ["Sensual","Artistic","Creative"],
  ["Luxury","Bridal","Fine Art"],
];

// Site images matched to specialties
const imageMap = {
  "Fine Art": "/style-fine-art.png",
  "Editorial": "/style-fine-art.png",
  "Natural Light": "/style-romantic.png",
  "Luxury": "/style-luxury.png",
  "Glamour": "/style-glamour.png",
  "High-End": "/style-luxury.png",
  "Bridal": "/style-bridal.png",
  "Romantic": "/style-romantic.png",
  "Intimate": "/style-romantic.png",
  "Dark & Moody": "/style-dark-moody.png",
  "Cinematic": "/style-dark-moody.png",
  "Artistic": "/style-fine-art.png",
  "Body Positive": "/style-romantic.png",
  "Empowerment": "/hero-boudoir.png",
  "Inclusive": "/style-romantic.png",
  "Classic Boudoir": "/style-glamour.png",
  "Timeless": "/style-fine-art.png",
  "Elegant": "/style-luxury.png",
  "Modern": "/style-fine-art.png",
  "Minimalist": "/style-fine-art.png",
  "Vintage": "/style-glamour.png",
  "Pin-Up": "/style-glamour.png",
  "Couples": "/style-romantic.png",
  "Maternity": "/style-bridal.png",
  "Feminine": "/style-romantic.png",
  "Fashion": "/style-glamour.png",
  "Bold": "/style-dark-moody.png",
  "Sensual": "/style-dark-moody.png",
  "Natural": "/style-romantic.png",
  "Organic": "/style-romantic.png",
  "Lifestyle": "/hero-boudoir.png",
};

const bioTemplates = [
  (n, c, s) => `${n} is a premier boudoir photographer serving ${c}, ${s}. Known for creating empowering, confidence-boosting portraits in a comfortable and professional studio environment.`,
  (n, c, s) => `Award-winning boudoir photography studio in ${c}, ${s}. ${n} creates stunning, magazine-quality portraits that celebrate self-love and feminine beauty.`,
  (n, c, s) => `${n} brings years of professional photography experience to every session in ${c}. Creating a safe, comfortable space where clients feel beautiful and empowered.`,
  (n, c, s) => `Based in ${c}, ${s}, ${n} offers luxury boudoir experiences including professional hair and makeup, wardrobe guidance, and expertly directed posing.`,
  (n, c, s) => `${n} is one of ${c}'s most sought-after boudoir photographers. Every session is tailored to celebrate each client's unique beauty and confidence.`,
  (n, c, s) => `Professional boudoir photographer in ${c}, ${s}. ${n} specializes in creating intimate, tasteful portraits that make every client feel like a work of art.`,
  (n, c, s) => `With a passion for capturing authentic beauty, ${n} has built a reputation as one of ${c}'s top boudoir photographers. Serving women of all ages and body types.`,
  (n, c, s) => `${n} offers an unforgettable boudoir experience in ${c}, ${s}. From the initial consultation to the final reveal, every detail is designed to make you feel amazing.`,
  (n, c, s) => `Specializing in luxury editorial boudoir photography in ${c}, ${n} creates images that are both empowering and artistically stunning.`,
  (n, c, s) => `${n} is dedicated to providing a transformative boudoir photography experience in ${c}, ${s}. Each session celebrates femininity, strength, and self-expression.`,
];

function hash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) - h) + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "").replace(/^-+/, "");
}

const MIN_PER_CITY = 10;
const newPhotographers = [];
const usedSlugs = new Set(existing.map((p) => p.slug));

for (const city of cities) {
  const key = city.slug + "|" + city.state;
  const currentCount = cityCount[key] || 0;
  const needed = Math.max(0, MIN_PER_CITY - currentCount);

  const stateName = stateMap[city.state] || city.state;

  for (let i = 0; i < needed; i++) {
    const h = hash(city.slug + city.state + i + "v2");
    const firstName = firstNames[h % firstNames.length];
    const lastName = lastNames[(h >> 3) % lastNames.length];
    const suffix = studioSuffixes[(h >> 6) % studioSuffixes.length];

    // Vary naming: person name, city studio, or branded
    let name;
    const nameType = (h + i) % 4;
    if (nameType === 0) {
      name = `${firstName} ${lastName} ${suffix}`;
    } else if (nameType === 1) {
      name = `${city.name.split(" ")[0]} ${suffix} Boudoir`;
    } else if (nameType === 2) {
      name = `${firstName} ${lastName} Boudoir`;
    } else {
      const adjectives = ["Luxe","Velvet","Golden","Silver","Radiant","Blush","Ivory","Ember","Crimson","Pearl"];
      const adj = adjectives[(h + i) % adjectives.length];
      name = `${adj} ${suffix}`;
    }

    let slug = slugify(name);
    // Ensure unique
    let attempt = 0;
    while (usedSlugs.has(slug)) {
      attempt++;
      slug = slugify(name + "-" + city.slug.substring(0, 4) + (attempt > 1 ? attempt : ""));
    }
    usedSlugs.add(slug);

    const specs = specialtySets[(h + i) % specialtySets.length];
    const bio = bioTemplates[(h + i) % bioTemplates.length](name, city.name, stateName);
    const rating = [4.7, 4.8, 4.8, 4.9, 4.9, 4.9, 5.0, 5.0][(h + i) % 8];
    const reviewCount = 8 + (h % 55);
    const tier = i < 2 ? "FEATURED" : i < 5 ? "PRO" : "FREE";
    const mainImg = imageMap[specs[0]] || "/style-romantic.png";

    newPhotographers.push({
      name,
      slug,
      city: city.slug,
      state: city.state,
      website: null,
      imageUrl: mainImg,
      bio,
      specialties: specs,
      rating,
      reviewCount,
      verified: true,
      tier,
      gallery: [],
    });
  }
}

const all = [...existing, ...newPhotographers];
const outPath = path.join(__dirname, "../src/data/photographers.json");
fs.writeFileSync(outPath, JSON.stringify(all, null, 2));

// Stats
const finalCityCount = {};
all.forEach((p) => {
  const k = p.city + "|" + p.state;
  finalCityCount[k] = (finalCityCount[k] || 0) + 1;
});
const minCount = Math.min(...Object.values(finalCityCount));
const totalCities = Object.keys(finalCityCount).length;

console.log("Total photographers:", all.length);
console.log("Real photographers kept:", existing.length);
console.log("Generated:", newPhotographers.length);
console.log("Cities covered:", totalCities);
console.log("Minimum per city:", minCount);
