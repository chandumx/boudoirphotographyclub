// Curated images for the directory — all from the site's own assets

export const heroImage = "/hero-boudoir.png";

export const styleImages: Record<string, string> = {
  romantic: "/style-romantic.png",
  luxury: "/style-luxury.png",
  bridal: "/style-bridal.png",
  "dark-moody": "/style-dark-moody.png",
  "fine-art": "/style-fine-art.png",
  glamour: "/style-glamour.png",
};

export const testimonialAvatars = [
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&q=80",
];

export const blogImages = [
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=450&fit=crop&q=80",
  "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&h=450&fit=crop&q=80",
  "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=450&fit=crop&q=80",
];

// Gallery images — uses the site's own boudoir photography assets
export const galleryImages = [
  "/hero-boudoir.png",
  "/style-romantic.png",
  "/style-luxury.png",
  "/style-bridal.png",
  "/style-dark-moody.png",
  "/style-fine-art.png",
  "/style-glamour.png",
];

// Map specialties to the best matching site image
const specialtyImageMap: Record<string, string> = {
  "romantic": "/style-romantic.png",
  "intimate": "/style-romantic.png",
  "soft light": "/style-romantic.png",
  "natural": "/style-romantic.png",
  "natural light": "/style-romantic.png",
  "organic": "/style-romantic.png",
  "luxury": "/style-luxury.png",
  "high-end": "/style-luxury.png",
  "professional": "/style-luxury.png",
  "award-winning": "/style-luxury.png",
  "bridal": "/style-bridal.png",
  "maternity": "/style-bridal.png",
  "dark & moody": "/style-dark-moody.png",
  "cinematic": "/style-dark-moody.png",
  "moody": "/style-dark-moody.png",
  "seductive": "/style-dark-moody.png",
  "noir": "/style-dark-moody.png",
  "fine art": "/style-fine-art.png",
  "editorial": "/style-fine-art.png",
  "artistic": "/style-fine-art.png",
  "minimalist": "/style-fine-art.png",
  "modern": "/style-fine-art.png",
  "timeless": "/style-fine-art.png",
  "glamour": "/style-glamour.png",
  "fashion": "/style-glamour.png",
  "magazine style": "/style-glamour.png",
  "pin-up": "/style-glamour.png",
  "vintage": "/style-glamour.png",
  "retro glamour": "/style-glamour.png",
  "conceptual": "/style-glamour.png",
  "fantasy": "/style-glamour.png",
};

export function getPhotographerImage(
  specialties: string[],
  slug: string
): string {
  // Try to match first specialty to a style image
  for (const s of specialties) {
    const key = s.toLowerCase();
    if (specialtyImageMap[key]) return specialtyImageMap[key];
  }
  // Fallback: deterministic pick from gallery
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash << 5) - hash + slug.charCodeAt(i);
    hash |= 0;
  }
  return galleryImages[Math.abs(hash) % galleryImages.length];
}

export function getGalleryForPhotographer(
  specialties: string[],
  slug: string,
  realImageUrl?: string | null
): string[] {
  // Start with real image if available, then fill with style-matched images
  const matched = getPhotographerImage(specialties, slug);
  const pool = galleryImages.filter(
    (img) => img !== matched && img !== realImageUrl
  );

  // Deterministic shuffle based on slug
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash << 5) - hash + slug.charCodeAt(i);
    hash |= 0;
  }
  const shuffled = pool.sort(
    (a, b) =>
      Math.abs((hash + a.charCodeAt(3)) % 100) -
      Math.abs((hash + b.charCodeAt(3)) % 100)
  );

  const result: string[] = [];
  // Real image always first
  if (realImageUrl) result.push(realImageUrl);
  // Then style-matched
  if (!result.includes(matched)) result.push(matched);
  // Fill remaining from shuffled pool
  for (const img of shuffled) {
    if (result.length >= 6) break;
    if (!result.includes(img)) result.push(img);
  }
  return result;
}

// For backward compat
export function getPlaceholderImage(slug: string): string {
  return getPhotographerImage([], slug);
}
