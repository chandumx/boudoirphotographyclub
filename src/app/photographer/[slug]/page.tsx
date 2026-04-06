import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { getPhotographerBySlug, getPhotographerSlugs } from "@/lib/locations";
import { generateLocalBusinessSchema } from "@/lib/seo";
import LeadCaptureWidget from "@/components/LeadCaptureWidget";
import {
  getPhotographerImage,
  getGalleryForPhotographer,
} from "@/data/images";

// Revalidate every 60 seconds so Blob overrides appear quickly
export const revalidate = 60;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  let photographer: Awaited<ReturnType<typeof getPhotographerBySlug>> = null;
  try {
    photographer = await getPhotographerBySlug(slug);
  } catch {}

  const name =
    photographer?.name ||
    slug
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  const city = photographer?.city?.name || "";
  const state = photographer?.state?.name || "";
  const specialties = photographer?.specialties?.join(", ") || "Boudoir";

  return {
    title: `${name} | ${specialties} Boudoir Photographer in ${city}, ${state}`,
    description: `Book a session with ${name}, a top-rated ${specialties.toLowerCase()} boudoir photographer in ${city}, ${state}. View portfolio, read reviews, and reserve your consultation today.`,
    openGraph: {
      title: `${name} — Boudoir Photographer in ${city}, ${state}`,
      description: photographer?.bio || `Professional boudoir photographer in ${city}, ${state}.`,
      type: "profile",
      images: photographer?.imageUrl ? [{ url: photographer.imageUrl, alt: `${name} boudoir photographer` }] : [{ url: "/hero-boudoir.png", width: 1200, height: 630 }],
    },
  };
}

export async function generateStaticParams() {
  const photographers = await getPhotographerSlugs();
  return photographers.map((p) => ({ slug: p.slug }));
}

export default async function PhotographerPage({ params }: PageProps) {
  const { slug } = await params;
  let photographer: Awaited<ReturnType<typeof getPhotographerBySlug>> = null;

  try {
    photographer = await getPhotographerBySlug(slug);
  } catch {}

  if (!photographer) {
    return (
      <div className="bg-surface text-on-surface">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-24 text-center">
          <h1 className="font-headline text-5xl italic text-on-surface mb-4">
            Photographer Not Found
          </h1>
          <p className="text-on-surface-variant mb-8">
            This photographer profile doesn&apos;t exist or has been removed.
          </p>
          <Link
            href="/boudoir-photographers"
            className="font-label text-xs uppercase tracking-widest text-primary hover:opacity-80 transition-opacity"
          >
            Browse All Photographers
          </Link>
        </div>
      </div>
    );
  }

  const cityName = photographer.city.name;
  const stateName = photographer.state.name;
  const stateSlug = photographer.state.slug;
  const citySlug = photographer.city.slug;

  const heroImg =
    photographer.imageUrl ||
    getPhotographerImage(photographer.specialties, photographer.slug);
  const hasRealGallery = photographer.gallery.length > 0;
  const gallery = hasRealGallery
    ? photographer.gallery
    : getGalleryForPhotographer(
        photographer.specialties,
        photographer.slug,
        photographer.imageUrl
      );

  return (
    <div className="bg-surface text-on-surface">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-12">
        <JsonLd
          data={generateLocalBusinessSchema({
            name: photographer.name,
            description: photographer.bio || undefined,
            city: cityName,
            state: stateName,
            rating: photographer.rating || undefined,
            reviewCount: photographer.reviewCount,
            website: photographer.website || undefined,
            phone: photographer.phone || undefined,
          })}
        />

        <Breadcrumbs
          items={[
            { name: "Boudoir Photographers", url: "/boudoir-photographers" },
            { name: stateName, url: `/boudoir-photographer/${stateSlug}` },
            {
              name: cityName,
              url: `/boudoir-photographer/${stateSlug}/${citySlug}`,
            },
            { name: photographer.name, url: `/photographer/${slug}` },
          ]}
        />

        {/* Hero Section */}
        <section className="mt-10 mb-16">
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-lg">
            <Image
              src={heroImg}
              alt={`${photographer.name} — ${photographer.specialties[0] || "Boudoir"} Photography in ${cityName}`}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1440px) 100vw, 1440px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-3 mb-2">
                {photographer.verified && (
                  <span className="font-label text-[9px] uppercase tracking-widest text-white bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full">
                    Verified
                  </span>
                )}
                {photographer.tier === "FEATURED" && (
                  <span className="font-label text-[9px] uppercase tracking-widest text-white bg-primary/80 backdrop-blur-md px-2.5 py-1 rounded-full">
                    Featured
                  </span>
                )}
                {photographer.tier === "PRO" && (
                  <span className="font-label text-[9px] uppercase tracking-widest text-white bg-tertiary/80 backdrop-blur-md px-2.5 py-1 rounded-full">
                    Pro
                  </span>
                )}
              </div>
              <h1 className="font-headline text-2xl sm:text-3xl lg:text-5xl italic text-white leading-tight">
                {photographer.name}
              </h1>
              <p className="font-label text-xs uppercase tracking-widest text-white/70 mt-2">
                {photographer.specialties.join(" / ")} &bull; {cityName},{" "}
                {stateName}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: Photographer Info */}
          <div className="lg:col-span-7">
            {/* Rating */}
            {photographer.rating > 0 && (
              <div className="flex items-center gap-3 mb-8">
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-base"
                      style={{
                        fontVariationSettings: `'FILL' ${i < Math.round(photographer.rating) ? 1 : 0}`,
                      }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <span className="text-sm font-bold text-on-surface">
                  {photographer.rating.toFixed(1)}
                </span>
                <span className="text-xs text-outline">
                  ({photographer.reviewCount} reviews)
                </span>
              </div>
            )}

            {/* About */}
            {photographer.bio && (
              <div className="mb-14">
                <h2 className="font-headline text-2xl italic mb-6">
                  About the Artist
                </h2>
                <p className="text-on-surface-variant leading-[1.9] text-base max-w-2xl">
                  {photographer.bio}
                </p>
              </div>
            )}

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-pink-50 text-pink-700 border border-pink-200">
                <span className="material-symbols-outlined text-sm">female</span>
                Women-Owned
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
                <span className="material-symbols-outlined text-sm">photo_camera</span>
                Boudoir Photography
              </span>
              {photographer.tier === "FEATURED" && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">
                  <span className="material-symbols-outlined text-sm">workspace_premium</span>
                  Featured Studio
                </span>
              )}
              {photographer.verified && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                  <span className="material-symbols-outlined text-sm">verified</span>
                  Verified
                </span>
              )}
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-14">
              <div className="bg-surface-container-lowest p-4 rounded-sm">
                <p className="font-label text-[10px] uppercase tracking-widest text-outline mb-1">
                  Location
                </p>
                <p className="text-sm text-on-surface font-medium">
                  {cityName}, {stateName}
                </p>
              </div>
              <div className="bg-surface-container-lowest p-4 rounded-sm">
                <p className="font-label text-[10px] uppercase tracking-widest text-outline mb-1">
                  Style
                </p>
                <p className="text-sm text-on-surface font-medium">
                  {photographer.specialties[0] || "Boudoir"}
                </p>
              </div>
              <div className="bg-surface-container-lowest p-4 rounded-sm">
                <p className="font-label text-[10px] uppercase tracking-widest text-outline mb-1">
                  Rating
                </p>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-amber-500 text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <p className="text-sm text-on-surface font-medium">
                    {photographer.rating.toFixed(1)} ({photographer.reviewCount} reviews)
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-4 rounded-sm">
                <p className="font-label text-[10px] uppercase tracking-widest text-outline mb-1">
                  Budget
                </p>
                <p className="text-sm text-on-surface font-medium">
                  {photographer.tier === "FEATURED" ? "$$$$ · Premium" : photographer.tier === "PRO" ? "$$$ · Mid-Range" : "$$ · Affordable"}
                </p>
              </div>
            </div>

            {/* Specialties & Category */}
            {photographer.specialties.length > 0 && (
              <div className="mb-14">
                <h2 className="font-label text-[10px] uppercase tracking-widest text-outline mb-4">
                  Specialties & Categories
                </h2>
                <div className="flex flex-wrap gap-2">
                  {photographer.specialties.map((s) => (
                    <span
                      key={s}
                      className="font-label text-[10px] uppercase tracking-wider text-primary bg-primary-container/30 px-3 py-1.5 rounded-sm"
                    >
                      {s}
                    </span>
                  ))}
                  <span className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant bg-surface-container-low px-3 py-1.5 rounded-sm">
                    Portrait Photography
                  </span>
                  <span className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant bg-surface-container-low px-3 py-1.5 rounded-sm">
                    Women&apos;s Empowerment
                  </span>
                </div>
              </div>
            )}

            {/* Portfolio Gallery */}
            <div className="mb-14">
              <div className="flex justify-between items-end mb-8">
                <h2 className="font-headline text-2xl italic">
                  Selected Portfolio
                </h2>
                <span className="font-label text-[10px] uppercase tracking-widest text-primary border-b border-primary pb-1">
                  {gallery.length} Images
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {gallery.map((img, idx) => (
                  <div
                    key={idx}
                    className="overflow-hidden rounded-lg group/img aspect-[3/4] relative"
                  >
                    <Image
                      src={img}
                      alt={`${photographer.name} portfolio — ${photographer.specialties[idx] || "boudoir photography"} sample ${idx + 1}`}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover/img:scale-105"
                      sizes="(max-width: 768px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            {photographer.reviews.length > 0 && (
              <div className="mb-14">
                <h2 className="font-headline text-2xl italic mb-8">
                  Kind Words
                </h2>
                <div className="space-y-8">
                  {photographer.reviews.map((review) => (
                    <div
                      key={review.id}
                      className="border-l border-primary/20 pl-8 py-2"
                    >
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className="material-symbols-outlined text-primary text-sm"
                            style={{
                              fontVariationSettings: `'FILL' ${i < Math.round(review.rating) ? 1 : 0}`,
                            }}
                          >
                            star
                          </span>
                        ))}
                      </div>
                      <p className="font-headline italic text-base leading-relaxed mb-3">
                        &ldquo;{review.content}&rdquo;
                      </p>
                      <cite className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant not-italic">
                        &mdash; {review.authorName}
                      </cite>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Booking Widget (Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <LeadCaptureWidget
              photographerName={photographer.name}
              photographerSlug={slug}
              website={photographer.website}
              phone={photographer.phone}
              email={photographer.email}
              city={cityName}
              state={stateName}
            />

            {/* Edit Listing */}
            <div className="mt-8 bg-primary/5 border border-primary/10 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-primary text-lg">edit</span>
                <h4 className="font-label text-[10px] uppercase tracking-widest text-primary">
                  Is this your listing?
                </h4>
              </div>
              <p className="text-xs text-on-surface-variant mb-4 leading-relaxed">
                Update your name, description, style, budget, and images anytime using your private edit link.
              </p>
              <a
                href="mailto:hello@boudoirphotographyclub.com?subject=Edit%20Link%20Request%20-%20{photographer.name}&body=Hi%2C%20I%27d%20like%20to%20edit%20my%20listing.%20My%20profile%20URL%20is%3A%20https%3A%2F%2Fboudoirphotographyclub.com%2Fphotographer%2F{slug}"
                className="inline-flex items-center gap-2 font-label text-xs uppercase tracking-widest text-primary hover:opacity-70 transition-opacity"
              >
                <span className="material-symbols-outlined text-sm">mail</span>
                Request Your Edit Link
              </a>
            </div>

            {/* Related Info */}
            <div className="mt-8 bg-surface-container-low p-6 rounded-lg">
              <h4 className="font-label text-[10px] uppercase tracking-widest text-outline mb-4">
                More Photographers In
              </h4>
              <div className="space-y-2">
                <Link
                  href={`/boudoir-photographer/${stateSlug}/${citySlug}`}
                  className="flex items-center gap-2 text-sm text-on-surface hover:text-primary transition-colors"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {cityName}, {stateName}
                </Link>
                <Link
                  href={`/boudoir-photographer/${stateSlug}`}
                  className="flex items-center gap-2 text-sm text-on-surface hover:text-primary transition-colors"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  All of {stateName}
                </Link>
                <Link
                  href="/boudoir-photographers"
                  className="flex items-center gap-2 text-sm text-on-surface hover:text-primary transition-colors"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Browse All States
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
