import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import PhotographerCard from "@/components/PhotographerCard";
import RelatedCities from "@/components/RelatedCities";
import { getCityBySlug, getNearbyCities, getCitySlugs } from "@/lib/locations";
import {
  getCityIntro,
  getCityFAQs,
  generateCityMetaTitle,
  generateCityMetaDescription,
} from "@/lib/content";
import faqData from "@/data/faqs.json";

interface PageProps {
  params: Promise<{ stateSlug: string; citySlug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { stateSlug, citySlug } = await params;
  const cityName = citySlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const stateName = stateSlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: generateCityMetaTitle(cityName, stateName),
    description: generateCityMetaDescription(cityName, stateName),
    openGraph: {
      title: generateCityMetaTitle(cityName, stateName),
      description: generateCityMetaDescription(cityName, stateName),
      type: "website",
      images: [{ url: "/hero-boudoir.png", width: 1200, height: 630, alt: `Boudoir Photographers in ${cityName}, ${stateName}` }],
    },
  };
}

export async function generateStaticParams() {
  try {
    const cities = await getCitySlugs();
    return cities.map((c) => ({
      stateSlug: c.state.slug,
      citySlug: c.slug,
    }));
  } catch {
    return [];
  }
}

export default async function CityPage({ params }: PageProps) {
  const { stateSlug, citySlug } = await params;

  let city: Awaited<ReturnType<typeof getCityBySlug>> = null;
  let nearbyCities: Awaited<ReturnType<typeof getNearbyCities>> = [];

  try {
    city = await getCityBySlug(stateSlug, citySlug);
    if (city) {
      nearbyCities = await getNearbyCities(
        city.state.abbreviation,
        city.slug,
        city.latitude,
        city.longitude
      );
    }
  } catch {
    // Database not connected
  }

  const cityName =
    city?.name ||
    citySlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const stateName =
    city?.state?.name ||
    stateSlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const stateAbbr = city?.state?.abbreviation || "";

  const intro = getCityIntro(cityName, stateName);
  const faqs = getCityFAQs(cityName, stateName, faqData.city);
  const photographers = city?.photographers || [];

  return (
    <div className="bg-surface text-on-surface">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-12">
        <Breadcrumbs
          items={[
            { name: "Boudoir Photographers", url: "/boudoir-photographers" },
            { name: stateName, url: `/boudoir-photographer/${stateSlug}` },
            {
              name: cityName,
              url: `/boudoir-photographer/${stateSlug}/${citySlug}`,
            },
          ]}
        />

        {/* Hero */}
        <header className="mt-10 mb-16">
          <span className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-4 block">
            {stateName} / {cityName}
          </span>
          <h1 className="font-headline italic text-4xl md:text-5xl lg:text-6xl text-on-surface mb-6 leading-tight">
            Boudoir Photographers in {cityName}, {stateName}
          </h1>
          <p className="font-body text-lg text-on-surface/70 max-w-2xl leading-relaxed">
            {intro}
          </p>
        </header>

        {/* Photographer Listings */}
        <section>
          <span className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-4 block">
            Directory
          </span>
          <h2 className="font-headline italic text-2xl md:text-3xl text-on-surface mb-8">
            {photographers.length > 0
              ? `${photographers.length} Boudoir Photographer${photographers.length !== 1 ? "s" : ""} in ${cityName}`
              : `Boudoir Photographers in ${cityName}`}
          </h2>
          {photographers.length > 0 ? (
            <div className="space-y-4">
              {photographers.map((photographer) => (
                <PhotographerCard
                  key={photographer.id}
                  name={photographer.name}
                  slug={photographer.slug}
                  imageUrl={photographer.imageUrl}
                  specialties={photographer.specialties}
                  rating={photographer.rating}
                  reviewCount={photographer.reviewCount}
                  tier={photographer.tier}
                  bio={photographer.bio}
                  cityName={cityName}
                  stateAbbreviation={stateAbbr}
                  verified={photographer.verified}
                />
              ))}
            </div>
          ) : (
            <div className="bg-surface-container-low rounded-sm p-10 text-center">
              <div className="max-w-md mx-auto">
                <h3 className="font-headline italic text-xl text-on-surface mb-3">
                  No Photographers Listed Yet
                </h3>
                <p className="font-body text-on-surface/60 mb-8 leading-relaxed">
                  We&apos;re growing our directory of boudoir photographers in{" "}
                  {cityName}, {stateName}. Be the first to list your business and
                  reach clients in this area.
                </p>
                <Link
                  href="/submit"
                  className="inline-block editorial-gradient text-on-primary px-10 py-5 rounded-sm font-label text-xs uppercase tracking-[0.2em] hover:opacity-90 transition-opacity"
                >
                  List Your Business Free
                </Link>
              </div>
            </div>
          )}
        </section>

        {/* Get a Quote CTA */}
        <section className="mt-20 bg-surface-container-low rounded-sm p-10 md:p-14">
          <div className="max-w-2xl">
            <span className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-4 block">
              Get Started
            </span>
            <h2 className="font-headline italic text-2xl md:text-3xl text-on-surface mb-4">
              Looking for a Boudoir Photographer in {cityName}?
            </h2>
            <p className="font-body text-on-surface/60 mb-8 leading-relaxed">
              Tell us what you&apos;re looking for and we&apos;ll connect you with
              top boudoir photographers in {cityName}, {stateName}.
            </p>
            <Link
              href={`/submit?type=lead&city=${citySlug}&state=${stateSlug}`}
              className="inline-block editorial-gradient text-on-primary px-10 py-5 rounded-sm font-label text-xs uppercase tracking-[0.2em] hover:opacity-90 transition-opacity"
            >
              Get Free Quotes
            </Link>
          </div>
        </section>

        {/* Tips Section */}
        <section className="mt-20">
          <span className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-4 block">
            Expert Guidance
          </span>
          <h2 className="font-headline italic text-2xl md:text-3xl text-on-surface mb-10">
            Tips for Choosing a Boudoir Photographer in {cityName}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Review Their Portfolio",
                description: `Look at their past work to ensure their style aligns with your vision. ${cityName} photographers often showcase a range from classic to modern boudoir.`,
              },
              {
                title: "Check Reviews & Testimonials",
                description: `Read what other clients in ${cityName} have said about their experience. Pay attention to comments about comfort level and professionalism.`,
              },
              {
                title: "Ask About the Experience",
                description: `A great boudoir photographer in ${cityName} will make you feel comfortable from start to finish. Ask about their process, wardrobe guidance, and what to expect.`,
              },
              {
                title: "Compare Packages & Pricing",
                description: `${cityName} boudoir photographers offer various packages. Compare what's included — number of looks, edited images, prints, and albums.`,
              },
            ].map((tip) => (
              <div
                key={tip.title}
                className="border-l border-primary/20 pl-6"
              >
                <h3 className="font-headline italic text-lg text-on-surface mb-2">
                  {tip.title}
                </h3>
                <p className="font-body text-sm text-on-surface/60 leading-relaxed">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Cities */}
        <RelatedCities cities={nearbyCities} />

        {/* Back to State */}
        <div className="mt-12">
          <Link
            href={`/boudoir-photographer/${stateSlug}`}
            className="font-label text-xs uppercase tracking-[0.2em] text-primary hover:text-primary/70 transition-colors"
          >
            &larr; All {stateName} Boudoir Photographers
          </Link>
        </div>

        <FAQSection faqs={faqs} />

        {/* Photographer CTA */}
        <section className="mt-20 bg-[#1a1c1a] rounded-sm p-10 md:p-14 text-center">
          <span className="font-label text-xs uppercase tracking-[0.2em] text-white/50 mb-4 block">
            For Photographers
          </span>
          <h2 className="font-headline italic text-2xl md:text-3xl text-white mb-4">
            Are You a Boudoir Photographer in {cityName}?
          </h2>
          <p className="font-body text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
            Get listed in our directory and reach clients searching for boudoir
            photography in {cityName}, {stateName}.
          </p>
          <div className="flex justify-center gap-5 flex-wrap">
            <Link
              href="/submit"
              className="editorial-gradient text-on-primary px-10 py-5 rounded-sm font-label text-xs uppercase tracking-[0.2em] hover:opacity-90 transition-opacity"
            >
              Free Listing
            </Link>
            <Link
              href="/submit?plan=featured"
              className="bg-white text-[#1a1c1a] px-10 py-5 rounded-sm font-label text-xs uppercase tracking-[0.2em] hover:bg-white/90 transition-colors"
            >
              Featured Listing — $79/mo
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
