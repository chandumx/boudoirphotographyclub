import { PrismaClient } from "../src/generated/prisma/client";
import statesData from "../src/data/states.json";
import citiesData from "../src/data/cities.json";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Create states
  const stateMap = new Map<string, string>();
  for (const state of statesData) {
    const created = await prisma.state.upsert({
      where: { slug: state.slug },
      update: {},
      create: {
        name: state.name,
        slug: state.slug,
        abbreviation: state.abbreviation,
      },
    });
    stateMap.set(state.abbreviation, created.id);
  }
  console.log(`Created ${stateMap.size} states`);

  // Create cities
  let cityCount = 0;
  for (const city of citiesData as Array<{
    name: string;
    slug: string;
    state: string;
    population: number;
    latitude: number;
    longitude: number;
  }>) {
    const stateId = stateMap.get(city.state);
    if (!stateId) {
      console.warn(`State not found for ${city.name}: ${city.state}`);
      continue;
    }
    await prisma.city.upsert({
      where: {
        slug_stateId: { slug: city.slug, stateId },
      },
      update: {
        population: city.population,
        latitude: city.latitude,
        longitude: city.longitude,
      },
      create: {
        name: city.name,
        slug: city.slug,
        stateId,
        population: city.population,
        latitude: city.latitude,
        longitude: city.longitude,
      },
    });
    cityCount++;
  }
  console.log(`Created ${cityCount} cities`);

  // Create some sample photographers
  const samplePhotographers = [
    { name: "Elegance Studio", city: "los-angeles", state: "CA", specialties: ["Luxury Boudoir", "Bridal Boudoir", "Fine Art Boudoir"], bio: "Award-winning boudoir photographer specializing in luxury editorial-style sessions in Los Angeles. Over 10 years of experience creating empowering portraits." },
    { name: "Intimate Portraits LA", city: "los-angeles", state: "CA", specialties: ["Classic Boudoir", "Couples Boudoir", "Maternity Boudoir"], bio: "Creating beautiful, intimate portraits in a comfortable studio environment. Every session is tailored to your unique vision." },
    { name: "NYC Boudoir Studio", city: "new-york-city", state: "NY", specialties: ["Luxury Boudoir", "Fine Art Boudoir", "Glamour"], bio: "Manhattan-based boudoir photographer offering sophisticated, fashion-inspired portraits in our private Midtown studio." },
    { name: "Miami Glow Photography", city: "miami", state: "FL", specialties: ["Outdoor Boudoir", "Bridal Boudoir", "Plus Size Boudoir"], bio: "Capturing the beauty and energy of Miami through stunning boudoir photography. Beach, studio, and hotel sessions available." },
    { name: "Lone Star Boudoir", city: "dallas", state: "TX", specialties: ["Classic Boudoir", "Bridal Boudoir", "Pin-Up"], bio: "Dallas-based boudoir photographer creating timeless, elegant portraits. Specializing in bridal boudoir and vintage pin-up styles." },
    { name: "Windy City Intimates", city: "chicago", state: "IL", specialties: ["Fine Art Boudoir", "Couples Boudoir", "Luxury Boudoir"], bio: "Chicago's premier boudoir photography studio. Fine art approach to intimate portraiture in our stunning downtown studio." },
    { name: "Vegas Glamour Shots", city: "las-vegas", state: "NV", specialties: ["Glamour", "Luxury Boudoir", "Bridal Boudoir"], bio: "Las Vegas glamour and boudoir photographer. Hotel suite sessions available on the Strip. Perfect for bachelorette parties." },
    { name: "Peach State Boudoir", city: "atlanta", state: "GA", specialties: ["Classic Boudoir", "Plus Size Boudoir", "Maternity Boudoir"], bio: "Atlanta boudoir photographer celebrating all body types. Inclusive, comfortable studio sessions that make every client feel beautiful." },
  ];

  for (const sp of samplePhotographers) {
    const stateId = stateMap.get(sp.state);
    if (!stateId) continue;

    const city = await prisma.city.findFirst({
      where: { slug: sp.city, stateId },
    });
    if (!city) continue;

    const slug = sp.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    await prisma.photographer.upsert({
      where: { slug },
      update: {},
      create: {
        name: sp.name,
        slug,
        bio: sp.bio,
        specialties: sp.specialties,
        cityId: city.id,
        stateId,
        tier: "FEATURED",
        featured: true,
        verified: true,
        rating: 4.5 + Math.random() * 0.5,
        reviewCount: Math.floor(Math.random() * 50) + 10,
      },
    });
  }
  console.log(`Created ${samplePhotographers.length} sample photographers`);

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
