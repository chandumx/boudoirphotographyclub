import Link from "next/link";

interface RelatedCity {
  name: string;
  slug: string;
  state: { slug: string; abbreviation: string };
  distance?: number;
}

export default function RelatedCities({
  cities,
  title = "Nearby Cities",
}: {
  cities: RelatedCity[];
  title?: string;
}) {
  if (cities.length === 0) return null;

  return (
    <section className="mt-16">
      <h2 className="font-headline text-3xl italic mb-8">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cities.map((city) => (
          <Link
            key={`${city.state.slug}-${city.slug}`}
            href={`/boudoir-photographer/${city.state.slug}/${city.slug}`}
            className="bg-surface-container-low p-5 rounded-sm hover:bg-surface-container-lowest transition-colors group"
          >
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              <div>
                <span className="font-label text-xs uppercase tracking-widest text-on-surface group-hover:text-primary transition-colors">
                  {city.name}
                </span>
                {city.distance !== undefined && (
                  <span className="block text-[10px] text-on-surface-variant opacity-60 mt-0.5">
                    {Math.round(city.distance)} miles away
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
