import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import SearchBar from "@/components/SearchBar";
import { getStateBySlug, getStateSlugs, neighboringStates } from "@/lib/locations";
import { getStateIntro, getStateFAQs, generateStateMetaTitle, generateStateMetaDescription } from "@/lib/content";
import faqData from "@/data/faqs.json";

interface PageProps {
  params: Promise<{ stateSlug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { stateSlug } = await params;
  const state = await getStateBySlug(stateSlug).catch(() => null);
  const stateName = state?.name || stateSlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: generateStateMetaTitle(stateName),
    description: generateStateMetaDescription(stateName),
    openGraph: {
      title: generateStateMetaTitle(stateName),
      description: generateStateMetaDescription(stateName),
      type: "website",
      images: [{ url: "/hero-boudoir.png", width: 1200, height: 630, alt: `Boudoir Photographers in ${stateName}` }],
    },
  };
}

export async function generateStaticParams() {
  try {
    const states = await getStateSlugs();
    return states.map((s) => ({ stateSlug: s.slug }));
  } catch {
    return [];
  }
}

export default async function StatePage({ params }: PageProps) {
  const { stateSlug } = await params;
  let state: Awaited<ReturnType<typeof getStateBySlug>> = null;

  try {
    state = await getStateBySlug(stateSlug);
  } catch {
    // Database not connected
  }

  const stateName = state?.name || stateSlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const intro = getStateIntro(stateName);
  const faqs = getStateFAQs(stateName, faqData.state);
  const neighbors = neighboringStates[stateSlug] || [];

  return (
    <div className="bg-surface text-on-surface">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-12">
        <Breadcrumbs
          items={[
            { name: "Boudoir Photographers", url: "/boudoir-photographers" },
            { name: stateName, url: `/boudoir-photographer/${stateSlug}` },
          ]}
        />

        {/* Hero */}
        <header className="mt-10 mb-12">
          <p className="font-label text-[10px] uppercase tracking-widest text-primary mb-4">
            State Directory
          </p>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl text-on-surface leading-tight mb-6">
            Boudoir Photographers in <em className="italic">{stateName}</em>
          </h1>
          <p className="font-body text-base md:text-lg text-on-surface/70 max-w-2xl leading-relaxed">
            {intro}
          </p>
        </header>

        <div className="mb-14 max-w-xl">
          <SearchBar />
        </div>

        {/* Cities Grid */}
        <section>
          <p className="font-label text-[10px] uppercase tracking-widest text-primary mb-3">
            Browse by City
          </p>
          <h2 className="font-headline text-2xl md:text-3xl text-on-surface mb-8">
            Cities in <em className="italic">{stateName}</em>
          </h2>
          {state && state.cities.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {state.cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/boudoir-photographer/${stateSlug}/${city.slug}`}
                  className="bg-surface-container-low rounded-sm p-5 hover:shadow-md transition-all group"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                    <span className="font-body text-sm text-on-surface group-hover:text-primary transition-colors">
                      {city.name}
                    </span>
                  </span>
                  {city._count.photographers > 0 && (
                    <span className="font-label text-[10px] uppercase tracking-widest text-on-surface/50 block mt-2 ml-4">
                      {city._count.photographers} photographer{city._count.photographers !== 1 ? "s" : ""}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-surface-container-low rounded-sm p-12 text-center">
              <p className="font-body text-on-surface/70 mb-6 max-w-md mx-auto leading-relaxed">
                We&apos;re building our directory of boudoir photographers in {stateName}.
                Check back soon or list your business to be the first!
              </p>
              <Link
                href="/submit"
                className="inline-block editorial-gradient text-on-primary px-10 py-5 rounded-sm font-label text-xs uppercase tracking-[0.2em] hover:opacity-90 transition-opacity"
              >
                List Your Business
              </Link>
            </div>
          )}
        </section>

        {/* Neighboring States */}
        {neighbors.length > 0 && (
          <section className="mt-20">
            <p className="font-label text-[10px] uppercase tracking-widest text-primary mb-3">
              Explore Nearby
            </p>
            <h2 className="font-headline text-2xl md:text-3xl text-on-surface mb-8">
              Neighboring States
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {neighbors.map((slug) => (
                <Link
                  key={slug}
                  href={`/boudoir-photographer/${slug}`}
                  className="bg-surface-container-low rounded-sm p-5 hover:shadow-md transition-all group"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                    <span className="font-body text-sm text-on-surface group-hover:text-primary transition-colors">
                      {slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <FAQSection faqs={faqs} />

        {/* CTA */}
        <section className="mt-20 bg-surface-container-low rounded-sm p-12 md:p-16 text-center">
          <p className="font-label text-[10px] uppercase tracking-widest text-primary mb-4">
            Join the Directory
          </p>
          <h2 className="font-headline text-2xl md:text-3xl text-on-surface mb-4">
            Are You a Boudoir Photographer in <em className="italic">{stateName}</em>?
          </h2>
          <p className="font-body text-on-surface/70 mb-8 max-w-lg mx-auto leading-relaxed">
            Join our directory and connect with clients looking for boudoir
            photography in {stateName}. Free listings available.
          </p>
          <Link
            href="/submit"
            className="inline-block editorial-gradient text-on-primary px-10 py-5 rounded-sm font-label text-xs uppercase tracking-[0.2em] hover:opacity-90 transition-opacity"
          >
            List Your Business Free
          </Link>
        </section>
      </div>
    </div>
  );
}
