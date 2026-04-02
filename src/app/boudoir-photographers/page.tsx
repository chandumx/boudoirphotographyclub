import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SearchBar from "@/components/SearchBar";
import { getAllStates } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Boudoir Photographers by State | Browse All 50 States",
  description:
    "Find boudoir photographers in every US state. Browse our comprehensive directory to discover professional boudoir photography studios near you.",
};

export default async function NationalDirectoryPage() {
  let states: Awaited<ReturnType<typeof getAllStates>> = [];
  try {
    states = await getAllStates();
  } catch {
    // Database not available yet - use static data
  }

  const staticStates = [
    { name: "Alabama", slug: "alabama" }, { name: "Alaska", slug: "alaska" },
    { name: "Arizona", slug: "arizona" }, { name: "Arkansas", slug: "arkansas" },
    { name: "California", slug: "california" }, { name: "Colorado", slug: "colorado" },
    { name: "Connecticut", slug: "connecticut" }, { name: "Delaware", slug: "delaware" },
    { name: "Florida", slug: "florida" }, { name: "Georgia", slug: "georgia" },
    { name: "Hawaii", slug: "hawaii" }, { name: "Idaho", slug: "idaho" },
    { name: "Illinois", slug: "illinois" }, { name: "Indiana", slug: "indiana" },
    { name: "Iowa", slug: "iowa" }, { name: "Kansas", slug: "kansas" },
    { name: "Kentucky", slug: "kentucky" }, { name: "Louisiana", slug: "louisiana" },
    { name: "Maine", slug: "maine" }, { name: "Maryland", slug: "maryland" },
    { name: "Massachusetts", slug: "massachusetts" }, { name: "Michigan", slug: "michigan" },
    { name: "Minnesota", slug: "minnesota" }, { name: "Mississippi", slug: "mississippi" },
    { name: "Missouri", slug: "missouri" }, { name: "Montana", slug: "montana" },
    { name: "Nebraska", slug: "nebraska" }, { name: "Nevada", slug: "nevada" },
    { name: "New Hampshire", slug: "new-hampshire" }, { name: "New Jersey", slug: "new-jersey" },
    { name: "New Mexico", slug: "new-mexico" }, { name: "New York", slug: "new-york" },
    { name: "North Carolina", slug: "north-carolina" }, { name: "North Dakota", slug: "north-dakota" },
    { name: "Ohio", slug: "ohio" }, { name: "Oklahoma", slug: "oklahoma" },
    { name: "Oregon", slug: "oregon" }, { name: "Pennsylvania", slug: "pennsylvania" },
    { name: "Rhode Island", slug: "rhode-island" }, { name: "South Carolina", slug: "south-carolina" },
    { name: "South Dakota", slug: "south-dakota" }, { name: "Tennessee", slug: "tennessee" },
    { name: "Texas", slug: "texas" }, { name: "Utah", slug: "utah" },
    { name: "Vermont", slug: "vermont" }, { name: "Virginia", slug: "virginia" },
    { name: "Washington", slug: "washington" }, { name: "West Virginia", slug: "west-virginia" },
    { name: "Wisconsin", slug: "wisconsin" }, { name: "Wyoming", slug: "wyoming" },
  ];

  const displayStates = states.length > 0 ? states : staticStates;

  return (
    <div className="bg-surface text-on-surface">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-12">
        <Breadcrumbs
          items={[{ name: "Boudoir Photographers", url: "/boudoir-photographers" }]}
        />

        <header className="mt-8 mb-14 max-w-3xl">
          <span className="font-label text-[10px] uppercase tracking-[0.2em] text-primary mb-4 block">
            National Directory
          </span>
          <h1 className="font-headline text-4xl md:text-5xl italic text-on-surface mb-6">
            Boudoir Photographers Across the United States
          </h1>
          <p className="font-body text-base leading-relaxed text-on-surface/70 max-w-2xl">
            Find professional boudoir photographers in all 50 states. Our directory
            connects you with talented photographers who specialize in creating
            beautiful, empowering portraits. Select your state below to get started.
          </p>
        </header>

        <div className="mb-14 max-w-xl">
          <SearchBar />
        </div>

        <section>
          <span className="font-label text-[10px] uppercase tracking-[0.2em] text-primary mb-6 block">
            Browse by State
          </span>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {displayStates.map((state) => (
              <Link
                key={state.slug}
                href={`/boudoir-photographer/${state.slug}`}
                className="bg-surface-container-low rounded-sm px-5 py-4 flex items-center gap-3 group transition-colors hover:bg-primary-container/30"
              >
                <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                <span className="font-body text-sm text-on-surface group-hover:text-primary transition-colors underline underline-offset-8 decoration-transparent group-hover:decoration-primary/40">
                  {state.name}
                </span>
                {"_count" in state && (
                  <span className="font-label text-[10px] text-on-surface/50 ml-auto">
                    {(state as { _count: { cities: number; photographers: number } })._count.cities} cities
                  </span>
                )}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
