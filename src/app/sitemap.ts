import { MetadataRoute } from "next";
import statesData from "@/data/states.json";
import citiesData from "@/data/cities.json";

const BASE_URL = "https://boudoirdirectory.com";

interface CityEntry {
  name: string;
  slug: string;
  state: string;
  population: number;
  latitude: number;
  longitude: number;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/boudoir-photographers`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/submit`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const statePages: MetadataRoute.Sitemap = statesData.map((state) => ({
    url: `${BASE_URL}/boudoir-photographer/${state.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const cityPages: MetadataRoute.Sitemap = (citiesData as CityEntry[]).map((city) => {
    const state = statesData.find((s) => s.abbreviation === city.state);
    return {
      url: `${BASE_URL}/boudoir-photographer/${state?.slug || ""}/${city.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    };
  });

  return [...staticPages, ...statePages, ...cityPages];
}
