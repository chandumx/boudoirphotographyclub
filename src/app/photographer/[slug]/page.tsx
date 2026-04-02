import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { getPhotographerBySlug, getPhotographerSlugs } from "@/lib/locations";
import { generateLocalBusinessSchema } from "@/lib/seo";
import {
  getPhotographerImage,
  getGalleryForPhotographer,
} from "@/data/images";

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

        {/* Hero Gallery — Asymmetric Editorial Layout */}
        <section className="mt-10 mb-16 grid grid-cols-12 gap-3 h-[560px]">
          <div className="col-span-12 lg:col-span-8 relative overflow-hidden rounded-lg group">
            <img
              src={heroImg}
              alt={`${photographer.name} — ${photographer.specialties[0] || "Boudoir"} Photography in ${cityName}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
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
              <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl italic text-white leading-tight">
                {photographer.name}
              </h1>
              <p className="font-label text-xs uppercase tracking-widest text-white/70 mt-2">
                {photographer.specialties.join(" / ")} &bull; {cityName},{" "}
                {stateName}
              </p>
            </div>
          </div>
          <div className="hidden lg:grid lg:col-span-4 grid-rows-2 gap-3">
            <div className="overflow-hidden rounded-lg">
              <img
                src={gallery[1] || gallery[0]}
                alt={`${photographer.name} portfolio sample`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src={gallery[2] || gallery[0]}
                alt={`${photographer.name} portfolio sample`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
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

            {/* Details Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-14">
              <div>
                <p className="font-label text-[10px] uppercase tracking-widest text-outline mb-1">
                  Location
                </p>
                <p className="text-sm text-on-surface font-medium">
                  {cityName}, {stateName}
                </p>
              </div>
              <div>
                <p className="font-label text-[10px] uppercase tracking-widest text-outline mb-1">
                  Style
                </p>
                <p className="text-sm text-on-surface font-medium">
                  {photographer.specialties[0] || "Boudoir"}
                </p>
              </div>
              <div>
                <p className="font-label text-[10px] uppercase tracking-widest text-outline mb-1">
                  Rating
                </p>
                <p className="text-sm text-on-surface font-medium">
                  {photographer.rating.toFixed(1)} / 5.0
                </p>
              </div>
            </div>

            {/* Specialties */}
            {photographer.specialties.length > 0 && (
              <div className="mb-14">
                <h2 className="font-label text-[10px] uppercase tracking-widest text-outline mb-4">
                  Specialties
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
                    className={`overflow-hidden rounded-lg group/img ${
                      idx === 0
                        ? "col-span-2 row-span-2 aspect-square"
                        : "aspect-[3/4]"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${photographer.name} portfolio — ${photographer.specialties[idx] || "boudoir photography"} sample ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
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
            <div className="bg-surface-container-low p-8 rounded-lg shadow-[0_20px_40px_rgba(26,28,26,0.02)]">
              <h3 className="font-headline text-2xl italic mb-8">
                Reserve a Consultation
              </h3>

              <div className="space-y-4 mb-8">
                {photographer.website && (
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-widest text-outline mb-1">
                      Website
                    </p>
                    <a
                      href={photographer.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:text-primary/70 transition-colors break-all"
                    >
                      {photographer.website}
                    </a>
                  </div>
                )}
                {photographer.phone && (
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-widest text-outline mb-1">
                      Phone
                    </p>
                    <p className="text-sm text-on-surface">
                      {photographer.phone}
                    </p>
                  </div>
                )}
                {photographer.email && (
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-widest text-outline mb-1">
                      Email
                    </p>
                    <p className="text-sm text-on-surface">
                      {photographer.email}
                    </p>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <button className="w-full editorial-gradient text-on-primary font-label text-xs uppercase tracking-widest py-4 rounded-sm hover:opacity-90 transition-opacity">
                  Request Booking
                </button>
                <button className="w-full text-primary font-label text-[10px] uppercase tracking-widest underline underline-offset-8 py-3 hover:opacity-70 transition-opacity">
                  Contact Photographer
                </button>
              </div>
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
