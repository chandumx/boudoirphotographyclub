import { put, list, del } from "@vercel/blob";
import photographersData from "@/data/photographers.json";

export interface PhotographerOverride {
  slug: string;
  name?: string;
  bio?: string;
  website?: string;
  specialties?: string[];
  tier?: string;
  imageUrl?: string;
  gallery?: string[];
  updatedAt: string;
}

interface PhotographerBase {
  name: string;
  slug: string;
  city: string;
  state: string;
  website?: string;
  imageUrl: string | null;
  bio: string;
  specialties: string[];
  rating: number;
  reviewCount: number;
  verified: boolean;
  tier: string;
  gallery: string[];
  editToken?: string;
}

const OVERRIDES_PREFIX = "photographer-overrides/";

function overridePath(slug: string) {
  return `${OVERRIDES_PREFIX}${slug}.json`;
}

/**
 * Get a photographer's override data from Vercel Blob
 */
export async function getOverride(
  slug: string
): Promise<PhotographerOverride | null> {
  try {
    const { blobs } = await list({ prefix: overridePath(slug) });
    if (blobs.length === 0) return null;

    const res = await fetch(blobs[0].url);
    if (!res.ok) return null;

    return (await res.json()) as PhotographerOverride;
  } catch {
    return null;
  }
}

/**
 * Save a photographer's override data to Vercel Blob
 */
export async function saveOverride(
  override: PhotographerOverride
): Promise<void> {
  const path = overridePath(override.slug);

  // Delete old blob first
  try {
    const { blobs } = await list({ prefix: path });
    if (blobs.length > 0) {
      await del(blobs.map((b) => b.url));
    }
  } catch {
    // ignore delete errors
  }

  await put(path, JSON.stringify(override), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
  });
}

/**
 * Get a photographer with overrides applied on top of base JSON data
 */
export async function getPhotographerWithOverrides(slug: string) {
  const base = (photographersData as PhotographerBase[]).find(
    (p) => p.slug === slug
  );
  if (!base) return null;

  const override = await getOverride(slug);
  if (!override) return base;

  return {
    ...base,
    ...(override.name !== undefined && { name: override.name }),
    ...(override.bio !== undefined && { bio: override.bio }),
    ...(override.website !== undefined && { website: override.website }),
    ...(override.specialties !== undefined && {
      specialties: override.specialties,
    }),
    ...(override.tier !== undefined && { tier: override.tier }),
    ...(override.imageUrl !== undefined && { imageUrl: override.imageUrl }),
    ...(override.gallery !== undefined && { gallery: override.gallery }),
  };
}

/**
 * Upload an image to Vercel Blob
 */
export async function uploadImage(
  slug: string,
  file: File,
  purpose: string
): Promise<string> {
  const ext = file.name.split(".").pop() || "jpg";
  const path = `photographer-images/${slug}/${purpose}-${Date.now()}.${ext}`;

  const blob = await put(path, file, {
    access: "public",
    contentType: file.type,
  });

  return blob.url;
}
