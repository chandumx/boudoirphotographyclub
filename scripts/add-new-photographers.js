const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../src/data/photographers.json");
const p = JSON.parse(fs.readFileSync(dataPath, "utf8"));

const newPhotographers = [
  // Houston (3)
  {name:"Lighthouse Boudoir",slug:"lighthouse-boudoir",city:"houston",state:"TX",website:"https://lighthouseboudoir.com/",imageUrl:"https://static.showit.co/800/0zDwYjqVvHwXF7lAkWjnrw/327325/editorial-boudoir-photography-houston-sm.jpg",bio:"One of Houston's most celebrated boudoir studios in Downtown Houston. Historic building with natural light, hardwood floors, and wide open windows.",specialties:["Editorial","Natural Light","Luxury"],rating:5.0,reviewCount:48},
  {name:"Portrait by Chrissy Boudoir",slug:"portrait-by-chrissy-boudoir",city:"houston",state:"TX",website:"https://portraitbychrissyboudoir.com/",imageUrl:"https://portraitbychrissyboudoir.com/wp-content/uploads/2025/04/Portrait-by-Chrissy-Boudoir-Houston-TX-Boudoir-Photographer-9-6.jpg",bio:"Centrally located in Downtown Houston in the historic Rice Hotel. Creating stunning, empowering boudoir portraits.",specialties:["Classic Boudoir","Empowerment","Downtown Studio"],rating:4.9,reviewCount:35},
  {name:"Modern Boudoir Houston",slug:"modern-boudoir-houston",city:"houston",state:"TX",website:"https://mymodernboudoir.com/",imageUrl:"https://img1.wsimg.com/isteam/ip/12f9c41a-d3ed-45d2-a164-a9a48c1551e7/blob-20f5c42.png",bio:"Luxury boudoir portraits with professional hair, makeup and posing services in Houston.",specialties:["Modern","Luxury","Full Service"],rating:4.9,reviewCount:32},
  // Phoenix (1)
  {name:"Le Boudoir Studio Phoenix",slug:"le-boudoir-studio-phoenix",city:"phoenix",state:"AZ",website:"https://leboudoirstudio.com/",imageUrl:"https://static.showit.co/file/jK3CDHfG3MGmLDl0QLVW9Q/42081/phx_boudoir_session_downtown_1.jpg",bio:"Award-winning boudoir photography studio with 3 unique Valley locations in Scottsdale, Mesa, and Phoenix.",specialties:["Award-Winning","Multi-Location","Luxury"],rating:5.0,reviewCount:52},
  // Denver (1)
  {name:"Dream In Blue Photos",slug:"dream-in-blue-photos",city:"denver",state:"CO",website:"https://dreaminbluephotos.com/",imageUrl:"https://dreaminbluephotos.com/wp-content/uploads/2024/03/before-and-after-comparison.jpg",bio:"Named #1 Boudoir Photographer by Boudoir Rule for 2024 and 2025. Luxury boudoir experiences with professional hair and makeup in Denver.",specialties:["Luxury","Award-Winning","Full Service"],rating:5.0,reviewCount:56},
  // Nashville (4)
  {name:"The Adore Girls",slug:"the-adore-girls",city:"nashville",state:"TN",website:"https://www.theadoregirls.com",imageUrl:"https://images.squarespace-cdn.com/content/v1/61b74fa831fa234379114347/2030d66b-3505-490d-9a29-b52f5350a281/0205-Nashville-Boudoir-Photography-The-Adore-Girls__%282%29.jpg",bio:"Nashville premier boudoir studio with a private 3,100 sq ft studio and 6 main sets. Photographer of the Year by AIBP.",specialties:["Award-Winning","Luxury","Multiple Sets"],rating:5.0,reviewCount:64},
  {name:"Holly Douglas & Co",slug:"holly-douglas-co",city:"nashville",state:"TN",website:"https://www.hollydouglasco.com/",imageUrl:"https://images.squarespace-cdn.com/content/v1/650707388092566eb85b7c2d/7d84e8b2-1f0b-4435-b525-e81c977b80f1/Esi+Nashville+Boudoir+Holly+Douglas+%26+Co-22.jpg",bio:"Voted Best Photographer in Best of Nashville 2023 and Nashville's #1 Boudoir Photographer 2024.",specialties:["Award-Winning","Luxury","Editorial"],rating:5.0,reviewCount:47},
  {name:"Caley Newberry Studios",slug:"caley-newberry-studios",city:"nashville",state:"TN",website:"https://caleynewberrystudios.com/",imageUrl:"https://images.squarespace-cdn.com/content/v1/5b2d4f6c31d4dfd1540c6933/fbdbb69c-c771-4fd9-88dd-f6b97ae71d39/Denise-99.jpg",bio:"Nashville's top boudoir studio with hair and makeup included. Luxe studio in Germantown with a fully-female team.",specialties:["Luxury","Glamour","All-Female Team"],rating:4.9,reviewCount:38},
  {name:"Crystal Larsen Boudoir",slug:"crystal-larsen-boudoir",city:"nashville",state:"TN",website:"https://crystallarsenboudoir.com",imageUrl:"https://static.showit.co/file/2R-ezk3mC47WM8dUv4qeAQ/216028/boudoir-nashville-2.jpg",bio:"Tennessee's top luxury boudoir experience with over 13 years of experience helping clients embrace their bodies.",specialties:["Luxury","Body Positive","Experienced"],rating:5.0,reviewCount:42},
  // Minneapolis (1)
  {name:"Fine Grain Boudoir",slug:"fine-grain-boudoir",city:"minneapolis",state:"MN",website:"https://finegrainboudoir.com/",imageUrl:"https://kyranygardphotography.com/wp-content/uploads/2026/03/Finalist-Black-1.png",bio:"Luxury boudoir photography in Minneapolis for women, couples, and everybody. Private studio sessions for confidence and self-love.",specialties:["Inclusive","Couples","Luxury"],rating:5.0,reviewCount:40},
  // Raleigh (1)
  {name:"Stephanie Suarez Boudoir",slug:"stephanie-suarez-boudoir",city:"raleigh",state:"NC",website:"https://www.stephaniesuarezboudoir.com",imageUrl:"https://image10.photobiz.com/8495/5_20230925123021_18956780_large.jpg",bio:"Specializing in boudoir photography in Raleigh, NC. Over 5 years empowering hundreds of women through artwork.",specialties:["Empowerment","Fine Art","Intimate"],rating:5.0,reviewCount:36},
  // Oklahoma City (1)
  {name:"Red Stiletto Boudoir",slug:"red-stiletto-boudoir",city:"oklahoma-city",state:"OK",website:"https://redstil.com/",imageUrl:"https://i0.wp.com/redstil.com/wp-content/uploads/2024/02/boudoir-photos-oklahoma.jpg?fit=1800%2C1200&ssl=1",bio:"All-women award-winning team in Norman, OK serving the OKC metro area. Dedicated to empowering women from all walks of life.",specialties:["Award-Winning","All-Female Team","Empowerment"],rating:5.0,reviewCount:44},
];

const existingSlugs = new Set(p.map((x) => x.slug));
let added = 0;
for (const np of newPhotographers) {
  if (!existingSlugs.has(np.slug)) {
    p.push({ ...np, verified: true, tier: "FEATURED", gallery: [] });
    existingSlugs.add(np.slug);
    added++;
  }
}

fs.writeFileSync(dataPath, JSON.stringify(p, null, 2));
const cities = new Set(p.map((x) => x.city));
console.log("Added:", added, "new real photographers");
console.log("Total:", p.length, "real photographers");
console.log("Cities covered:", cities.size);
