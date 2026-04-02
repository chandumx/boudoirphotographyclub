import Link from "next/link";

const popularStates = [
  { name: "California", slug: "california" },
  { name: "Texas", slug: "texas" },
  { name: "Florida", slug: "florida" },
  { name: "New York", slug: "new-york" },
  { name: "Illinois", slug: "illinois" },
];

const popularCities = [
  { name: "Los Angeles", state: "california", slug: "los-angeles" },
  { name: "New York City", state: "new-york", slug: "new-york-city" },
  { name: "Miami", state: "florida", slug: "miami" },
  { name: "Chicago", state: "illinois", slug: "chicago" },
  { name: "Dallas", state: "texas", slug: "dallas" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1c1a] py-16 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 max-w-[1440px] mx-auto">
        <div className="md:col-span-1">
          <Link href="/" className="font-headline text-xl text-white italic block mb-6">
            Boudoir Photography Club
          </Link>
          <p className="font-body text-xs tracking-wider uppercase text-[#faf9f6] opacity-50 leading-relaxed">
            The Digital Atelier for Fine Art Photography. Empowering artists and
            muses worldwide.
          </p>
        </div>
        <div>
          <h4 className="font-label text-xs uppercase tracking-widest text-white mb-6">
            Popular States
          </h4>
          <ul className="space-y-4">
            {popularStates.map((state) => (
              <li key={state.slug}>
                <Link
                  href={`/boudoir-photographer/${state.slug}`}
                  className="font-body text-xs tracking-wider uppercase text-[#faf9f6] opacity-50 hover:opacity-100 underline underline-offset-4 duration-300"
                >
                  {state.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-label text-xs uppercase tracking-widest text-white mb-6">
            Popular Cities
          </h4>
          <ul className="space-y-4">
            {popularCities.map((city) => (
              <li key={city.slug}>
                <Link
                  href={`/boudoir-photographer/${city.state}/${city.slug}`}
                  className="font-body text-xs tracking-wider uppercase text-[#faf9f6] opacity-50 hover:opacity-100 underline underline-offset-4 duration-300"
                >
                  {city.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-label text-xs uppercase tracking-widest text-white mb-6">
            For Photographers
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                href="/submit"
                className="font-body text-xs tracking-wider uppercase text-[#faf9f6] opacity-50 hover:opacity-100 underline underline-offset-4 duration-300"
              >
                List Your Studio
              </Link>
            </li>
            <li>
              <Link
                href="/submit"
                className="font-body text-xs tracking-wider uppercase text-[#faf9f6] opacity-50 hover:opacity-100 underline underline-offset-4 duration-300"
              >
                Pricing Plans
              </Link>
            </li>
            <li>
              <Link
                href="/submit"
                className="font-body text-xs tracking-wider uppercase text-[#faf9f6] opacity-50 hover:opacity-100 underline underline-offset-4 duration-300"
              >
                Artist Guidelines
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-16 px-12 max-w-[1440px] mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-body text-xs tracking-wider uppercase text-[#f5c1c1] opacity-50">
          &copy; {new Date().getFullYear()} Boudoir Photography Club. The Digital
          Atelier for Fine Art Photography.
        </p>
        <div className="flex gap-6">
          <Link href="/about" className="font-body text-xs tracking-wider uppercase text-[#faf9f6] opacity-40 hover:opacity-100 duration-300">About</Link>
          <Link href="/contact" className="font-body text-xs tracking-wider uppercase text-[#faf9f6] opacity-40 hover:opacity-100 duration-300">Contact</Link>
          <Link href="/privacy" className="font-body text-xs tracking-wider uppercase text-[#faf9f6] opacity-40 hover:opacity-100 duration-300">Privacy</Link>
          <Link href="/terms" className="font-body text-xs tracking-wider uppercase text-[#faf9f6] opacity-40 hover:opacity-100 duration-300">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
