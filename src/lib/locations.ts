import statesData from "@/data/states.json";
import citiesData from "@/data/cities.json";
import photographersData from "@/data/photographers.json";

interface StateData {
  name: string;
  slug: string;
  abbreviation: string;
}

interface CityData {
  name: string;
  slug: string;
  state: string;
  population: number;
  latitude: number;
  longitude: number;
}

interface PhotographerData {
  name: string;
  slug: string;
  city: string;
  state: string;
  website: string | null;
  imageUrl: string | null;
  gallery?: string[];
  bio: string;
  specialties: string[];
  rating: number;
  reviewCount: number;
  verified: boolean;
  tier: "FREE" | "PRO" | "FEATURED";
}

const states = statesData as StateData[];
const cities = citiesData as CityData[];
const photographers = photographersData as PhotographerData[];

export async function getAllStates() {
  return states.map((s) => ({
    ...s,
    _count: {
      cities: cities.filter((c) => c.state === s.abbreviation).length,
      photographers: photographers.filter((p) => p.state === s.abbreviation).length,
    },
  }));
}

export async function getStateBySlug(slug: string) {
  const state = states.find((s) => s.slug === slug);
  if (!state) return null;

  const statePhotographers = photographers.filter(
    (p) => p.state === state.abbreviation
  );

  const stateCities = cities
    .filter((c) => c.state === state.abbreviation)
    .sort((a, b) => b.population - a.population)
    .map((c) => ({
      ...c,
      id: c.slug,
      stateId: state.slug,
      _count: {
        photographers: statePhotographers.filter((p) => p.city === c.slug).length,
      },
    }));

  return {
    ...state,
    id: state.slug,
    cities: stateCities,
    _count: {
      photographers: statePhotographers.length,
      cities: stateCities.length,
    },
  };
}

export async function getCityBySlug(stateSlug: string, citySlug: string) {
  const state = states.find((s) => s.slug === stateSlug);
  if (!state) return null;

  const city = cities.find(
    (c) => c.slug === citySlug && c.state === state.abbreviation
  );
  if (!city) return null;

  const cityPhotographers = photographers
    .filter((p) => p.city === citySlug && p.state === state.abbreviation)
    .sort((a, b) => {
      // FEATURED first, then PRO, then FREE
      const tierOrder = { FEATURED: 0, PRO: 1, FREE: 2 };
      if (tierOrder[a.tier] !== tierOrder[b.tier])
        return tierOrder[a.tier] - tierOrder[b.tier];
      return b.rating - a.rating;
    })
    .map((p) => ({
      id: p.slug,
      name: p.name,
      slug: p.slug,
      imageUrl: p.imageUrl,
      specialties: p.specialties,
      rating: p.rating,
      reviewCount: p.reviewCount,
      tier: p.tier,
      bio: p.bio,
      verified: p.verified,
      featured: p.tier === "FEATURED",
    }));

  return {
    ...city,
    id: city.slug,
    stateId: state.slug,
    state: state,
    photographers: cityPhotographers,
    _count: { photographers: cityPhotographers.length },
  };
}

export async function getNearbyCities(
  stateAbbr: string,
  citySlug: string,
  latitude: number,
  longitude: number,
  limit: number = 8
) {
  const state = states.find(
    (s) => s.abbreviation === stateAbbr || s.slug === stateAbbr
  );
  if (!state) return [];

  return cities
    .filter((c) => c.state === state.abbreviation && c.slug !== citySlug)
    .map((c) => ({
      ...c,
      id: c.slug,
      state: { slug: state.slug, abbreviation: state.abbreviation },
      distance: getDistance(latitude, longitude, c.latitude, c.longitude),
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, limit);
}

export async function getStateSlugs() {
  return states.map((s) => ({ slug: s.slug }));
}

export async function getCitySlugs() {
  return cities.map((c) => {
    const state = states.find((s) => s.abbreviation === c.state);
    return {
      slug: c.slug,
      state: { slug: state?.slug || "" },
    };
  });
}

export async function getPhotographerSlugs() {
  return photographers.map((p) => ({ slug: p.slug }));
}

export interface PhotographerProfile {
  id: string;
  name: string;
  slug: string;
  email: string | null;
  phone: string | null;
  website: string | null;
  imageUrl: string | null;
  gallery: string[];
  bio: string | null;
  specialties: string[];
  tier: "FREE" | "PRO" | "FEATURED";
  featured: boolean;
  verified: boolean;
  rating: number;
  reviewCount: number;
  city: { name: string; slug: string };
  state: { name: string; slug: string; abbreviation: string };
  reviews: Array<{
    id: string;
    rating: number;
    content: string;
    authorName: string;
    createdAt: Date;
  }>;
}

export async function getPhotographerBySlug(
  slug: string
): Promise<PhotographerProfile | null> {
  const p = photographers.find((ph) => ph.slug === slug);
  if (!p) return null;

  const state = states.find((s) => s.abbreviation === p.state);
  if (!state) return null;

  const city = cities.find(
    (c) => c.slug === p.city && c.state === p.state
  );
  if (!city) return null;

  // Apply Blob overrides if available
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let override: any = null;
  try {
    const { getOverride } = await import("@/lib/photographer-store");
    override = await getOverride(slug);
  } catch {
    // Blob not available (e.g. build time), use base data
  }

  // If marked as deleted via Blob override, return null
  if (override?.deleted) return null;

  const name = (override?.name as string) || p.name;
  const tier = ((override?.tier as string) || p.tier) as "FEATURED" | "PRO" | "FREE";

  return {
    id: p.slug,
    name,
    slug: p.slug,
    email: null,
    phone: null,
    website: (override?.website as string) || p.website,
    imageUrl: (override?.imageUrl as string) || p.imageUrl,
    gallery: (override?.gallery as string[]) || p.gallery || [],
    bio: (override?.bio as string) || p.bio,
    specialties: (override?.specialties as string[]) || p.specialties,
    tier,
    featured: tier === "FEATURED",
    verified: p.verified,
    rating: p.rating,
    reviewCount: p.reviewCount,
    city: { name: city.name, slug: city.slug },
    state: { name: state.name, slug: state.slug, abbreviation: state.abbreviation },
    reviews: [],
  };
}

function getDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 3959;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(deg: number): number {
  return deg * (Math.PI / 180);
}

export const neighboringStates: Record<string, string[]> = {
  alabama: ["florida", "georgia", "mississippi", "tennessee"],
  alaska: [],
  arizona: ["california", "colorado", "nevada", "new-mexico", "utah"],
  arkansas: ["louisiana", "mississippi", "missouri", "oklahoma", "tennessee", "texas"],
  california: ["arizona", "nevada", "oregon"],
  colorado: ["arizona", "kansas", "nebraska", "new-mexico", "oklahoma", "utah", "wyoming"],
  connecticut: ["massachusetts", "new-york", "rhode-island"],
  delaware: ["maryland", "new-jersey", "pennsylvania"],
  florida: ["alabama", "georgia"],
  georgia: ["alabama", "florida", "north-carolina", "south-carolina", "tennessee"],
  hawaii: [],
  idaho: ["montana", "nevada", "oregon", "utah", "washington", "wyoming"],
  illinois: ["indiana", "iowa", "kentucky", "missouri", "wisconsin"],
  indiana: ["illinois", "kentucky", "michigan", "ohio"],
  iowa: ["illinois", "minnesota", "missouri", "nebraska", "south-dakota", "wisconsin"],
  kansas: ["colorado", "missouri", "nebraska", "oklahoma"],
  kentucky: ["illinois", "indiana", "missouri", "ohio", "tennessee", "virginia", "west-virginia"],
  louisiana: ["arkansas", "mississippi", "texas"],
  maine: ["new-hampshire"],
  maryland: ["delaware", "pennsylvania", "virginia", "west-virginia"],
  massachusetts: ["connecticut", "new-hampshire", "new-york", "rhode-island", "vermont"],
  michigan: ["indiana", "ohio", "wisconsin"],
  minnesota: ["iowa", "north-dakota", "south-dakota", "wisconsin"],
  mississippi: ["alabama", "arkansas", "louisiana", "tennessee"],
  missouri: ["arkansas", "illinois", "iowa", "kansas", "kentucky", "nebraska", "oklahoma", "tennessee"],
  montana: ["idaho", "north-dakota", "south-dakota", "wyoming"],
  nebraska: ["colorado", "iowa", "kansas", "missouri", "south-dakota", "wyoming"],
  nevada: ["arizona", "california", "idaho", "oregon", "utah"],
  "new-hampshire": ["maine", "massachusetts", "vermont"],
  "new-jersey": ["delaware", "new-york", "pennsylvania"],
  "new-mexico": ["arizona", "colorado", "oklahoma", "texas", "utah"],
  "new-york": ["connecticut", "massachusetts", "new-jersey", "pennsylvania", "vermont"],
  "north-carolina": ["georgia", "south-carolina", "tennessee", "virginia"],
  "north-dakota": ["minnesota", "montana", "south-dakota"],
  ohio: ["indiana", "kentucky", "michigan", "pennsylvania", "west-virginia"],
  oklahoma: ["arkansas", "colorado", "kansas", "missouri", "new-mexico", "texas"],
  oregon: ["california", "idaho", "nevada", "washington"],
  pennsylvania: ["delaware", "maryland", "new-jersey", "new-york", "ohio", "west-virginia"],
  "rhode-island": ["connecticut", "massachusetts"],
  "south-carolina": ["georgia", "north-carolina"],
  "south-dakota": ["iowa", "minnesota", "montana", "nebraska", "north-dakota", "wyoming"],
  tennessee: ["alabama", "arkansas", "georgia", "kentucky", "mississippi", "missouri", "north-carolina", "virginia"],
  texas: ["arkansas", "louisiana", "new-mexico", "oklahoma"],
  utah: ["arizona", "colorado", "idaho", "nevada", "new-mexico", "wyoming"],
  vermont: ["massachusetts", "new-hampshire", "new-york"],
  virginia: ["kentucky", "maryland", "north-carolina", "tennessee", "west-virginia"],
  washington: ["idaho", "oregon"],
  "west-virginia": ["kentucky", "maryland", "ohio", "pennsylvania", "virginia"],
  wisconsin: ["illinois", "iowa", "michigan", "minnesota"],
  wyoming: ["colorado", "idaho", "montana", "nebraska", "south-dakota", "utah"],
};
