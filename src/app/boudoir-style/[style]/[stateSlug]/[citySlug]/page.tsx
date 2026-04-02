import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import photographersData from "@/data/photographers.json";
import citiesData from "@/data/cities.json";
import statesData from "@/data/states.json";

const STYLES = {
  romantic: { name: "Romantic", description: "Soft light, warm tones, and dreamy aesthetics that celebrate intimacy and tenderness.", keywords: ["romantic boudoir", "soft boudoir", "intimate photography"] },
  luxury: { name: "Luxury", description: "High-end, premium boudoir experiences with professional styling, designer settings, and editorial quality.", keywords: ["luxury boudoir", "high-end boudoir", "premium photography"] },
  bridal: { name: "Bridal", description: "Beautiful bridal boudoir sessions perfect as a gift for your partner or a celebration of your wedding journey.", keywords: ["bridal boudoir", "wedding boudoir", "boudoir gift for groom"] },
  "dark-moody": { name: "Dark & Moody", description: "Dramatic lighting, deep shadows, and bold contrast for powerful, cinematic boudoir portraits.", keywords: ["dark moody boudoir", "dramatic boudoir", "cinematic boudoir"] },
  "fine-art": { name: "Fine Art", description: "Artistic, gallery-worthy boudoir photography that blends classic techniques with modern aesthetics.", keywords: ["fine art boudoir", "artistic boudoir", "editorial boudoir"] },
  glamour: { name: "Glamour", description: "Magazine-style glamour photography with polished styling, bold poses, and confident energy.", keywords: ["glamour photography", "glamour boudoir", "fashion boudoir"] },
  "couples-boudoir": { name: "Couples Boudoir", description: "Intimate photography sessions for couples celebrating their connection and chemistry together.", keywords: ["couples boudoir", "couples photography", "intimate couples"] },
  "plus-size": { name: "Plus Size Boudoir", description: "Body-positive boudoir photography celebrating every curve. Inclusive studios welcoming all body types.", keywords: ["plus size boudoir", "body positive boudoir", "curvy boudoir"] },
  "maternity-boudoir": { name: "Maternity Boudoir", description: "Capture the beauty of pregnancy with stunning maternity boudoir sessions celebrating motherhood.", keywords: ["maternity boudoir", "pregnancy boudoir", "bump photography"] },
  "women-owned": { name: "Women-Owned Studios", description: "Boudoir studios owned and operated by women, creating safe and empowering environments.", keywords: ["women-owned boudoir", "female photographer boudoir", "women empowerment"] },
};

type StyleKey = keyof typeof STYLES;

interface PageProps {
  params: Promise<{ style: string; stateSlug: string; citySlug: string }>;
}

function formatSlug(slug: string): string {
  return slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { style, stateSlug, citySlug } = await params;
  const styleInfo = STYLES[style as StyleKey];
  const cityName = formatSlug(citySlug);
  const stateName = formatSlug(stateSlug);

  if (!styleInfo) {
    return { title: "Style Not Found" };
  }

  return {
    title: `${styleInfo.name} Boudoir Photography in ${cityName}, ${stateName} (2026)`,
    description: `Find ${styleInfo.name.toLowerCase()} boudoir photographers in ${cityName}, ${stateName}. ${styleInfo.description} Browse portfolios, read reviews, and book your session.`,
    keywords: [...styleInfo.keywords, `${cityName} boudoir`, `boudoir photographer ${cityName}`],
    openGraph: {
      title: `${styleInfo.name} Boudoir Photography in ${cityName}, ${stateName}`,
      description: `Find ${styleInfo.name.toLowerCase()} boudoir photographers in ${cityName}, ${stateName}. Browse verified studios and book today.`,
    },
  };
}

export async function generateStaticParams() {
  const styleKeys = Object.keys(STYLES);
  const topCities = (citiesData as Array<{ slug: string; state: string; population: number }>)
    .sort((a, b) => b.population - a.population)
    .slice(0, 50);

  const params: Array<{ style: string; stateSlug: string; citySlug: string }> = [];

  for (const style of styleKeys) {
    for (const city of topCities) {
      const state = statesData.find(s => s.abbreviation === city.state);
      if (state) {
        params.push({ style, stateSlug: state.slug, citySlug: city.slug });
      }
    }
  }

  return params;
}

export default async function StyleCityPage({ params }: PageProps) {
  const { style, stateSlug, citySlug } = await params;
  const styleInfo = STYLES[style as StyleKey];

  if (!styleInfo) {
    return (
      <div className="bg-surface text-on-surface py-24 text-center">
        <h1 className="font-headline text-4xl italic">Style Not Found</h1>
        <Link href="/boudoir-photographers" className="text-primary mt-4 inline-block">Browse All Photographers</Link>
      </div>
    );
  }

  const cityName = formatSlug(citySlug);
  const stateName = formatSlug(stateSlug);
  const state = statesData.find(s => s.slug === stateSlug);
  const stateAbbr = state?.abbreviation || "";

  // Find photographers in this city
  const cityPhotographers = photographersData.filter(
    p => p.city === citySlug && p.state === stateAbbr
  );

  // Get other styles for this city
  const otherStyles = Object.entries(STYLES).filter(([key]) => key !== style).slice(0, 5);

  // Get other cities for this style
  const topCities = (citiesData as Array<{ name: string; slug: string; state: string; population: number }>)
    .sort((a, b) => b.population - a.population)
    .slice(0, 12)
    .filter(c => c.slug !== citySlug);

  return (
    <div className="bg-surface text-on-surface">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 py-12">
        <Breadcrumbs
          items={[
            { name: "Boudoir Photographers", url: "/boudoir-photographers" },
            { name: styleInfo.name, url: `/boudoir-style/${style}/${stateSlug}/${citySlug}` },
            { name: `${cityName}, ${stateName}`, url: `/boudoir-style/${style}/${stateSlug}/${citySlug}` },
          ]}
        />

        {/* Hero */}
        <div className="mt-8 mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="font-label text-[10px] uppercase tracking-widest text-primary bg-primary-container/30 px-3 py-1.5 rounded-full">
              {styleInfo.name}
            </span>
            <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
              {cityName}, {stateName}
            </span>
          </div>
          <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl italic text-on-surface mb-4">
            {styleInfo.name} Boudoir Photography in {cityName}
          </h1>
          <p className="text-on-surface-variant text-lg max-w-[700px]">
            {styleInfo.description} Discover {cityPhotographers.length} photographers in {cityName}, {stateName} who specialize in this style.
          </p>
        </div>

        {/* Photographers Grid */}
        <div className="mb-16">
          <h2 className="font-headline text-2xl italic mb-6">
            {cityPhotographers.length} Photographers in {cityName}
          </h2>
          {cityPhotographers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cityPhotographers.map(p => (
                <Link
                  key={p.slug}
                  href={`/photographer/${p.slug}`}
                  className="bg-surface-container-lowest rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    {p.imageUrl && (
                      <Image
                        src={p.imageUrl}
                        alt={`${p.name} - ${styleInfo.name} boudoir photographer in ${cityName}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    {p.tier === "FEATURED" && (
                      <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-0.5 font-label text-[8px] uppercase tracking-widest rounded-full">Featured</span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-headline text-base text-on-surface group-hover:text-primary transition-colors">{p.name}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-amber-500 text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                      <span className="text-xs text-on-surface">{p.rating}</span>
                      <span className="text-xs text-on-surface-variant">({p.reviewCount})</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {p.specialties.slice(0, 3).map(s => (
                        <span key={s} className="text-[9px] font-label uppercase tracking-wider text-primary bg-primary-container/20 px-2 py-0.5 rounded-sm">{s}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-surface-container-lowest rounded-lg p-12 text-center">
              <span className="material-symbols-outlined text-4xl text-on-surface-variant opacity-30 mb-4 block">search</span>
              <p className="text-on-surface-variant mb-4">No photographers found for this specific combination yet.</p>
              <Link href={`/boudoir-photographer/${stateSlug}/${citySlug}`} className="text-primary hover:underline text-sm">
                View all boudoir photographers in {cityName} &rarr;
              </Link>
            </div>
          )}
        </div>

        {/* About this style */}
        <div className="bg-surface-container-lowest rounded-lg p-8 mb-16">
          <h2 className="font-headline text-2xl italic mb-4">
            About {styleInfo.name} Boudoir Photography in {cityName}
          </h2>
          <div className="text-on-surface-variant leading-relaxed space-y-4">
            <p>
              {styleInfo.name} boudoir photography in {cityName}, {stateName} offers a unique experience tailored to capturing your beauty in a {styleInfo.name.toLowerCase()} aesthetic. Professional photographers in {cityName} bring years of expertise in creating {styleInfo.name.toLowerCase()} imagery that you will treasure forever.
            </p>
            <p>
              Whether you are celebrating a milestone, preparing a gift for someone special, or simply treating yourself, {cityName}&apos;s {styleInfo.name.toLowerCase()} boudoir photographers create a comfortable, empowering environment. Sessions typically include professional hair and makeup, wardrobe guidance, and expert posing direction.
            </p>
            <p>
              Pricing for {styleInfo.name.toLowerCase()} boudoir sessions in {cityName} ranges from $300 to $2,500 depending on the photographer, package, and inclusions. Most studios offer consultations to help you plan your perfect session.
            </p>
          </div>
        </div>

        {/* Other styles in this city */}
        <div className="mb-16">
          <h2 className="font-headline text-2xl italic mb-6">
            Other Boudoir Styles in {cityName}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {otherStyles.map(([key, info]) => (
              <Link
                key={key}
                href={`/boudoir-style/${key}/${stateSlug}/${citySlug}`}
                className="bg-surface-container-lowest rounded-sm p-4 text-center hover:bg-primary hover:text-on-primary transition-all group"
              >
                <p className="text-sm font-medium group-hover:text-on-primary">{info.name}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* This style in other cities */}
        <div className="mb-16">
          <h2 className="font-headline text-2xl italic mb-6">
            {styleInfo.name} Boudoir in Other Cities
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {topCities.map(c => {
              const cs = statesData.find(s => s.abbreviation === c.state);
              return cs ? (
                <Link
                  key={c.slug}
                  href={`/boudoir-style/${style}/${cs.slug}/${c.slug}`}
                  className="bg-surface-container-lowest rounded-sm px-4 py-3 text-sm hover:bg-primary hover:text-on-primary transition-all"
                >
                  {c.name}, {c.state}
                </Link>
              ) : null;
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-surface-container-lowest rounded-lg p-12">
          <h2 className="font-headline text-2xl italic mb-4">Are You a {styleInfo.name} Boudoir Photographer?</h2>
          <p className="text-on-surface-variant mb-6">Join our free directory and get discovered by clients in {cityName}.</p>
          <Link href="/submit" className="inline-block editorial-gradient text-on-primary py-3 px-8 font-label text-xs uppercase tracking-widest hover:opacity-90 transition-opacity">
            List Your Studio — Free
          </Link>
        </div>
      </div>
    </div>
  );
}
