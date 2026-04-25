import { MetadataRoute } from "next";
import statesData from "@/data/states.json";
import citiesData from "@/data/cities.json";
import photographersData from "@/data/photographers.json";
import blogData from "@/data/blog.json";

const BASE_URL = "https://boudoirphotographyclub.com";
const LAST_UPDATED = new Date("2026-04-25");

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
      lastModified: LAST_UPDATED,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/boudoir-photographers`,
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/submit`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/boudoir-photographer-near-me`,
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/how-it-works`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: LAST_UPDATED,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: LAST_UPDATED,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/disclaimer`,
      lastModified: LAST_UPDATED,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/boudoir-vs-glamour-photography`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/what-is-boudoir-photography`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/how-much-does-boudoir-photography-cost`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/what-to-wear-to-boudoir-shoot`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/boudoir-photography-poses`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/boudoir-gift-ideas`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/boudoir-photography-tips`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/couples-boudoir-guide`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/bridal-boudoir-guide`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/plus-size-boudoir-guide`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/maternity-boudoir-guide`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/boudoir-photography-ideas`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/boudoir-outfit-ideas`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/best-boudoir-photographer-new-york-city`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/best-boudoir-photographer-los-angeles`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/best-boudoir-photographer-chicago`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/best-boudoir-photographer-miami`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/best-boudoir-photographer-dallas`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/best-boudoir-photographer-houston`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/best-boudoir-photographer-atlanta`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/best-boudoir-photographer-denver`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/best-boudoir-photographer-nashville`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/fine-art-boudoir`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/couples-boudoir`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/boudoir-vs-glamour-photography`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.75,
    },
  ];

  const statePages: MetadataRoute.Sitemap = statesData.map((state) => ({
    url: `${BASE_URL}/boudoir-photographer/${state.slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const cityPages: MetadataRoute.Sitemap = (citiesData as CityEntry[])
    .filter((city) => statesData.some((s) => s.abbreviation === city.state))
    .map((city) => {
      const state = statesData.find((s) => s.abbreviation === city.state)!;
      return {
        url: `${BASE_URL}/boudoir-photographer/${state.slug}/${city.slug}`,
        lastModified: LAST_UPDATED,
        changeFrequency: "weekly" as const,
        priority: 0.7,
      };
    });

  const photographerPages: MetadataRoute.Sitemap = photographersData.map((p) => ({
    url: `${BASE_URL}/photographer/${p.slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const blogPages2: MetadataRoute.Sitemap = blogData.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.createdAt),
    changeFrequency: "monthly" as const,
    priority: post.category === "City Guide" ? 0.8 : 0.7,
  }));

  const styleKeys = ["romantic", "luxury", "bridal", "dark-moody", "fine-art", "glamour", "couples-boudoir", "plus-size", "maternity-boudoir", "women-owned"];
  const topCitiesForStyles = (citiesData as CityEntry[])
    .sort((a, b) => b.population - a.population)
    .slice(0, 50);

  const stylePages: MetadataRoute.Sitemap = [];
  for (const style of styleKeys) {
    for (const city of topCitiesForStyles) {
      const state = statesData.find((s) => s.abbreviation === city.state);
      if (state) {
        stylePages.push({
          url: `${BASE_URL}/boudoir-style/${style}/${state.slug}/${city.slug}`,
          lastModified: LAST_UPDATED,
          changeFrequency: "weekly" as const,
          priority: 0.6,
        });
      }
    }
  }

  return [...staticPages, ...statePages, ...cityPages, ...photographerPages, ...blogPages2, ...stylePages];
}
