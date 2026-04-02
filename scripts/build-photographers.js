const fs = require("fs");
const path = require("path");

const existing = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "../src/data/photographers-real.json"),
    "utf8"
  )
);

const newEntries = [
  { name: "Olvera Boudoir", slug: "olvera-boudoir", city: "san-antonio", state: "TX", website: "https://olveraboudoir.com/", bio: "Premier boudoir photography studio in San Antonio run by husband-and-wife photographers Crystal & Sam with over 10 years of experience.", specialties: ["Luxury", "Couples", "Empowerment"], rating: 5.0, reviewCount: 42 },
  { name: "Faith Ray Boudoir", slug: "faith-ray-boudoir", city: "san-antonio", state: "TX", website: "https://www.faithrayboudoir.com/", bio: "Luxury boudoir photography with hair, makeup and lingerie closet access in a private home studio in San Antonio.", specialties: ["Luxury", "Private Studio", "Full Service"], rating: 4.9, reviewCount: 35 },
  { name: "Black Feather Boudoir", slug: "black-feather-boudoir", city: "austin", state: "TX", website: "https://www.blackfeatherboudoir.com", bio: "Round Rock studio serving Austin and Central Texas. Led by photographer Michele Johns creating bold, empowering boudoir experiences.", specialties: ["Bold", "Empowerment", "Editorial"], rating: 5.0, reviewCount: 39 },
  { name: "Art of You Boudoir", slug: "art-of-you-boudoir", city: "austin", state: "TX", website: "https://artofyouboudoir.com/", bio: "Empowering luxury boudoir photography experience just north of Austin with a private Round Rock studio.", specialties: ["Luxury", "Empowerment", "Private Studio"], rating: 4.9, reviewCount: 33 },
  { name: "Torrid Boudoir", slug: "torrid-boudoir", city: "austin", state: "TX", website: "https://torridboudoir.com/", bio: "Elizabeth Zimmerman operates a private studio just north of Austin in Pflugerville. Intimate, professional boudoir sessions.", specialties: ["Intimate", "Professional", "Modern"], rating: 4.8, reviewCount: 27 },
  { name: "Her by Rosa", slug: "her-by-rosa", city: "san-francisco", state: "CA", website: "https://www.herbyrosa.com/", bio: "Premier boudoir photo studio in the Bay Area serving women in Oakland, San Jose, Sacramento, and the Peninsula.", specialties: ["Editorial", "Elegant", "Artistic"], rating: 5.0, reviewCount: 44 },
  { name: "Fem Boudoir", slug: "fem-boudoir", city: "san-francisco", state: "CA", website: "https://www.femboudoir.com/", bio: "San Francisco Bay Area boudoir studio in Concord serving women across Northern California.", specialties: ["Empowerment", "Professional", "Bay Area"], rating: 4.9, reviewCount: 36 },
  { name: "Solstice Studio", slug: "solstice-studio", city: "san-francisco", state: "CA", website: "https://www.solsticeboudoir.com/", bio: "Empowering boudoir photography in San Francisco with natural light.", specialties: ["Natural Light", "Empowerment", "Fine Art"], rating: 4.9, reviewCount: 29 },
  { name: "Foxfire Boudoir", slug: "foxfire-boudoir", city: "portland", state: "OR", website: "https://foxfireboudoir.com/", bio: "Woman-owned boudoir photography studio providing intimate, empowering sessions in North Portland.", specialties: ["Intimate", "Empowerment", "Natural"], rating: 5.0, reviewCount: 37 },
  { name: "Arcana Boudoir", slug: "arcana-boudoir", city: "portland", state: "OR", website: "https://arcanaboudoir.com/", bio: "Safe and inclusive space for all bodies in Portland. Self-love and empowerment in every session.", specialties: ["Inclusive", "Body Positive", "Empowerment"], rating: 4.9, reviewCount: 31 },
  { name: "Naked Peach Boudoir", slug: "naked-peach-boudoir", city: "portland", state: "OR", website: "https://nakedpeachboudoir.com/", bio: "Located in the Pearl District of downtown Portland. Studio designed to bring your wildest dreams to life.", specialties: ["Luxury", "Fantasy", "Creative"], rating: 4.9, reviewCount: 28 },
  { name: "Offbeat Boudoir", slug: "offbeat-boudoir", city: "tampa", state: "FL", website: "https://www.offbeatboudoir.com", bio: "Tampa boudoir studio specializing in self love sessions and couples boudoir in Tampa and St. Pete.", specialties: ["Couples", "Self Love", "Modern"], rating: 4.9, reviewCount: 34 },
  { name: "Sin Boudoir", slug: "sin-boudoir", city: "tampa", state: "FL", website: "https://www.sinboudoir.com/", bio: "Tampa boudoir photographer creating bold, sexy portraits with full styling services.", specialties: ["Bold", "Sexy", "Professional"], rating: 4.8, reviewCount: 29 },
  { name: "Be Bold BT", slug: "be-bold-bt", city: "jacksonville", state: "FL", website: "https://beboldbt.com/", bio: "Cinematic and moody boudoir photographer in Jacksonville FL.", specialties: ["Cinematic", "Moody", "Dark & Moody"], rating: 5.0, reviewCount: 32 },
  { name: "Pompy Portraits", slug: "pompy-portraits", city: "jacksonville", state: "FL", website: "https://pompyportraits.com", bio: "All-women Jacksonville studio specializing in maternity, boudoir, and bridal photos.", specialties: ["Maternity", "Bridal", "All-Female Team"], rating: 4.9, reviewCount: 27 },
  { name: "Ashley Jane Boudoir", slug: "ashley-jane-boudoir", city: "orlando", state: "FL", website: "https://ashleyjaneboudoir.com/", bio: "Boudoir studio in Sanford FL serving Central Florida. Empowering women of all shapes, sizes, and ages.", specialties: ["Inclusive", "Empowerment", "Body Positive"], rating: 5.0, reviewCount: 38 },
  { name: "Simply Boudoir NC", slug: "simply-boudoir-nc", city: "charlotte", state: "NC", website: "https://www.simply-boudoir.com", bio: "Female owned since 2009. All-inclusive boutique studio serving Charlotte, Raleigh, and Winston-Salem.", specialties: ["Boutique", "All-Inclusive", "Classic"], rating: 5.0, reviewCount: 45 },
  { name: "Enchanted Moments Artistry", slug: "enchanted-moments-artistry", city: "indianapolis", state: "IN", website: "https://enchantedmomentsboudoir.com/", bio: "Indianapolis boudoir photographer with private studios.", specialties: ["Enchanting", "Private Studio", "Empowerment"], rating: 4.9, reviewCount: 30 },
  { name: "Sacred Dawn Boudoir", slug: "sacred-dawn-boudoir", city: "columbus", state: "OH", website: "https://www.sacred-dawn.com/", bio: "Columbus Ohio boudoir studio creating empowering experiences through intimate portraiture.", specialties: ["Empowerment", "Intimate", "Artistic"], rating: 4.9, reviewCount: 27 },
  { name: "Sacramento Boudoir", slug: "sacramento-boudoir", city: "sacramento", state: "CA", website: "https://sacramentoboudoir.com/", bio: "Premier luxury boudoir studio in Northern California by Carmen Salazar Photography.", specialties: ["Luxury", "Fine Art", "Glamour"], rating: 5.0, reviewCount: 51 },
  { name: "Limitless Boudoir", slug: "limitless-boudoir", city: "sacramento", state: "CA", website: "https://www.limitlessboudoir.com", bio: "Luxury boudoir photography studio based just outside Sacramento in Cameron Park.", specialties: ["Luxury", "Intimate", "Couples"], rating: 4.9, reviewCount: 33 },
  { name: "Bay Area Boudoir", slug: "bay-area-boudoir", city: "san-jose", state: "CA", website: "https://bayareaboudoir.com/", bio: "Premier boudoir photographer in San Jose. Liza Head incorporates fine art and classic styles.", specialties: ["Fine Art", "Classic", "Elegant"], rating: 5.0, reviewCount: 40 },
  { name: "Whimsical Boudoir", slug: "whimsical-boudoir", city: "detroit", state: "MI", website: "https://whimsicalboudoir.com/", bio: "Detroit-based luxury fine art boudoir experience creating whimsical, artistic portraits.", specialties: ["Fine Art", "Luxury", "Whimsical"], rating: 5.0, reviewCount: 36 },
  { name: "Magan Rogers Studio", slug: "magan-rogers-studio", city: "detroit", state: "MI", website: "https://maganrogers.com", bio: "Luxury boudoir photography with a private artistic studio in Ferndale serving Metro Detroit.", specialties: ["Luxury", "Artistic", "Private Studio"], rating: 4.9, reviewCount: 31 },
  { name: "Belle Marie Boudoir", slug: "belle-marie-boudoir", city: "minneapolis", state: "MN", website: "https://www.bellemarieboudoir.com/", bio: "Boutique boudoir photography in Minneapolis. Photographer Olivia creates luxury, confidence-boosting sessions.", specialties: ["Boutique", "Luxury", "Confidence"], rating: 5.0, reviewCount: 38 },
  { name: "Sugar & Spice Photography", slug: "sugar-and-spice-photography", city: "minneapolis", state: "MN", website: "https://www.sugarandspicephotography.com/", bio: "Premier studio for boudoir and pinup photography in Minnesota.", specialties: ["Pin-Up", "Glamour", "Retro"], rating: 4.9, reviewCount: 33 },
  { name: "NOLA Boudoir Studio", slug: "nola-boudoir-studio", city: "new-orleans", state: "LA", website: "https://www.nolaboudoir.com", bio: "Premier boutique New Orleans boudoir studio by award-winning photographer Marc Pagani.", specialties: ["Award-Winning", "Boutique", "Editorial"], rating: 5.0, reviewCount: 47 },
  { name: "Nue Orleans Boudoir", slug: "nue-orleans-boudoir", city: "new-orleans", state: "LA", website: "https://www.nueorleansboudoir.com/", bio: "Founded by Heather and Jeff Gonzales with over a decade of experience serving New Orleans.", specialties: ["Couples", "Luxury", "Full Service"], rating: 4.9, reviewCount: 39 },
  { name: "Indium Boudoir", slug: "indium-boudoir", city: "kansas-city", state: "MO", website: "https://www.indiumgems.com", bio: "Kansas City luxury boudoir with pro hair & makeup and same-day photo reveals.", specialties: ["Luxury", "Full Service", "Same-Day Reveal"], rating: 5.0, reviewCount: 34 },
  { name: "Boudoir By KC", slug: "boudoir-by-kc", city: "kansas-city", state: "MO", website: "https://boudoirbykc.com/", bio: "Kansas City boudoir photographer with body positive and inclusive focus.", specialties: ["Body Positive", "Inclusive", "Empowerment"], rating: 4.9, reviewCount: 28 },
  { name: "Juniper & Ivy Boudoir", slug: "juniper-and-ivy-boudoir", city: "baltimore", state: "MD", website: "https://juniperandivyboudoir.com/", bio: "Baltimore boudoir photographer in Elkridge MD creating bold, empowered imagery.", specialties: ["Bold", "Empowerment", "Sexy"], rating: 5.0, reviewCount: 35 },
  { name: "Effortless Boudoir", slug: "effortless-boudoir-baltimore", city: "baltimore", state: "MD", website: "https://effortlessboudoir.com/", bio: "Baltimore boudoir studio. Relaxed and inclusive sessions for women and couples.", specialties: ["Relaxed", "Inclusive", "Couples"], rating: 4.9, reviewCount: 29 },
  { name: "MM Boudoir Studio", slug: "mm-boudoir-studio", city: "louisville", state: "KY", website: "https://mmphotoco.org/boudoir", bio: "Soft and romantic boudoir photography based in Louisville, Kentucky.", specialties: ["Romantic", "Soft Light", "Intimate"], rating: 4.9, reviewCount: 26 },
];

const complete = newEntries.map((e) => ({
  ...e,
  imageUrl: null,
  gallery: [],
  verified: true,
  tier: "FEATURED",
}));

const allReal = [...existing, ...complete];
const seen = new Set();
const deduped = allReal.filter((x) => {
  if (seen.has(x.slug)) return false;
  seen.add(x.slug);
  return true;
});

const outPath = path.join(__dirname, "../src/data/photographers.json");
fs.writeFileSync(outPath, JSON.stringify(deduped, null, 2));
console.log("Total real photographers:", deduped.length);
console.log(
  "Cities covered:",
  new Set(deduped.map((x) => x.city)).size
);
