import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boudoir Photographers in New York — Find Studios in NYC, Buffalo & Beyond",
  description: "Find the best boudoir photographers in New York. Compare studios in New York City, Brooklyn, Buffalo, Rochester, and 40+ NY locations. Premium NYC market to upstate value options.",
  keywords: ["boudoir photographer new york", "boudoir photography nyc", "boudoir photographer brooklyn", "boudoir studio manhattan", "new york boudoir photography"],
  alternates: {
    canonical: "https://boudoirphotographyclub.com/boudoir-photographer-new-york",
  },
};

const cities = [
  { name: "New York City", slug: "new-york-city" },
  { name: "Brooklyn", slug: "brooklyn" },
  { name: "Buffalo", slug: "buffalo" },
  { name: "Rochester", slug: "rochester" },
  { name: "Albany", slug: "albany" },
  { name: "Syracuse", slug: "syracuse" },
  { name: "White Plains", slug: "white-plains" },
  { name: "Binghamton", slug: "binghamton" },
  { name: "Ithaca", slug: "ithaca" },
  { name: "Saratoga Springs", slug: "saratoga-springs" },
];

const faqs = [
  {
    q: "How much does boudoir photography cost in New York City?",
    a: "NYC boudoir photography is among the priciest in the country, ranging from $800 to $6,000+. Manhattan and Tribeca studios with editorial pedigrees typically start at $1,500–$2,500. Brooklyn studios offer slightly more accessible pricing at $700–$2,000. Upstate cities like Buffalo and Rochester average $400–$1,200.",
  },
  {
    q: "Where are the best boudoir studios in New York City?",
    a: "NYC's boudoir scene clusters in SoHo, Tribeca, Brooklyn's DUMBO and Williamsburg, and the Upper West Side. Many top NYC photographers shoot in private penthouse lofts or luxury hotel suites rather than traditional studio spaces, creating editorial-level environments for every session.",
  },
  {
    q: "Is upstate New York a good option for boudoir photography?",
    a: "Absolutely. Cities like Buffalo, Rochester, Saratoga Springs, and Ithaca have thriving boudoir communities at a fraction of NYC prices. Many upstate clients get premium experiences — full hair and makeup, luxury albums, and spacious private studios — for $400–$1,000, which would buy a basic session in Manhattan.",
  },
  {
    q: "What should I wear for my New York boudoir session?",
    a: "NYC photographers tend to favor clean, fashion-forward styling — think minimalist lingerie, sheer fabrics, and structured pieces that photograph beautifully in the city's architectural environments. Your photographer will provide a full wardrobe guide, and many NYC studios have extensive client closets.",
  },
  {
    q: "Can I book a hotel or location boudoir session in NYC?",
    a: "Yes — many New York boudoir photographers specialize in location sessions at iconic NYC hotels, private lofts, and rooftop spaces. Popular locations include boutique hotels in the West Village, Hudson Yards penthouses, and Brooklyn brownstones. Location fees typically add $200–$800 to session cost.",
  },
];

export default function NewYorkBoudoirPage() {
  return (
    <div className="bg-surface text-on-surface">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 py-16">

        {/* Hero */}
        <h1 className="font-headline text-4xl md:text-5xl italic text-on-surface mb-4">
          Boudoir Photographers in New York
        </h1>
        <p className="text-on-surface-variant text-lg mb-10 max-w-[760px] font-body leading-relaxed">
          New York offers the full spectrum of boudoir photography — from world-class NYC studios that rival Vogue editorial shoots to intimate boutique experiences in Saratoga Springs, Ithaca, and the Hudson Valley. New York City's boudoir photographers work with fashion-trained stylists, luxury hotel suites, and iconic architectural backdrops to create images with a cinematic quality unlike anywhere else. Meanwhile, upstate New York provides exceptional value, personal service, and a warmth that makes first-time boudoir clients feel instantly at ease. Pricing ranges from $400 upstate to $6,000+ in Manhattan.
        </p>

        {/* Why New York */}
        <div className="mb-14">
          <h2 className="font-headline text-2xl italic text-on-surface mb-6">
            Why Choose New York for Boudoir Photography
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-container-lowest rounded-lg p-6">
              <h3 className="font-headline text-lg text-on-surface mb-2">The World's Fashion Capital</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                NYC boudoir photographers work alongside fashion photographers, editorial stylists, and beauty professionals whose standards rival any market in the world. A New York boudoir session channels that creative energy into a deeply personal, empowering experience.
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-lg p-6">
              <h3 className="font-headline text-lg text-on-surface mb-2">Iconic Architectural Backdrops</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                From Brooklyn brownstones and Manhattan lofts to Hudson Valley estates and Finger Lakes vineyard properties, New York offers architectural backdrops that give boudoir images a sense of place and prestige that generic studios simply cannot replicate.
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-lg p-6">
              <h3 className="font-headline text-lg text-on-surface mb-2">Premium to Value — Every Budget Served</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                New York's geographic diversity means you can calibrate your investment precisely. Splurge on a full-day Manhattan experience or find exceptional photographers upstate at prices that make the whole experience accessible without compromise.
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-lg p-6">
              <h3 className="font-headline text-lg text-on-surface mb-2">Deeply Experienced Photographers</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                New York boudoir photographers — particularly in NYC — often have decades of experience across commercial, editorial, and portrait work. This breadth of experience translates into superior posing direction, lighting mastery, and the ability to make any client look extraordinary.
              </p>
            </div>
          </div>
        </div>

        {/* Cities Grid */}
        <div className="mb-14">
          <h2 className="font-headline text-2xl italic text-on-surface mb-6">
            Featured New York Cities
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/boudoir-photographer/new-york/${city.slug}`}
                className="bg-surface-container-lowest rounded-lg px-4 py-3 text-sm text-on-surface hover:text-primary transition-colors text-center font-label"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-surface-container-lowest rounded-lg p-8 mb-14">
          <h2 className="font-headline text-2xl italic text-on-surface mb-4">
            Boudoir Photography Pricing in New York
          </h2>
          <p className="text-sm text-on-surface-variant font-body leading-relaxed mb-4">
            New York's pricing range is among the widest in the country due to the stark contrast between NYC and upstate markets:
          </p>
          <ul className="space-y-3 text-sm text-on-surface-variant font-body">
            <li><span className="text-on-surface font-label">Upstate Value ($400–$1,000):</span> Buffalo, Rochester, Syracuse, and Albany studios offer full packages — hair, makeup, digital gallery — at prices that rival mid-tier markets in other states. Exceptional value for quality received.</li>
            <li><span className="text-on-surface font-label">NYC Mid-Range ($1,000–$2,500):</span> Brooklyn and Queens studios offer the NYC experience at more accessible prices than Manhattan. Full-service sessions with fashion-trained teams in curated studio environments.</li>
            <li><span className="text-on-surface font-label">NYC Premium ($2,500–$6,000+):</span> Manhattan, Tribeca, and SoHo flagship studios. Full-day sessions, editorial-level styling, luxury hotel locations, museum-quality album products, and photographers whose work appears in national publications.</li>
          </ul>
        </div>

        {/* Tips */}
        <div className="mb-14">
          <h2 className="font-headline text-2xl italic text-on-surface mb-6">
            What to Look for in a New York Boudoir Photographer
          </h2>
          <div className="space-y-4">
            <div className="border-l-2 border-primary pl-5">
              <h3 className="font-label text-on-surface text-sm uppercase tracking-widest mb-1">Transparent Pricing — No Hidden Fees</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">Some NYC photographers advertise low session fees then charge separately for every image. Ask for a full breakdown of what is included before booking — ideally in writing. Reputable studios are upfront about all costs.</p>
            </div>
            <div className="border-l-2 border-primary pl-5">
              <h3 className="font-label text-on-surface text-sm uppercase tracking-widest mb-1">Location Expertise</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">If shooting in NYC outside a traditional studio, confirm your photographer has experience securing locations and navigating NYC's permitting requirements. Experienced photographers have established relationships with locations and will not scramble on the day of your session.</p>
            </div>
            <div className="border-l-2 border-primary pl-5">
              <h3 className="font-label text-on-surface text-sm uppercase tracking-widest mb-1">Professional Hair and Makeup Artists</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">NYC has the deepest pool of beauty talent in the world. Ensure your photographer works with dedicated beauty professionals, not just part-time assistants. Ask to see examples of the makeup artist's work in the portfolio.</p>
            </div>
            <div className="border-l-2 border-primary pl-5">
              <h3 className="font-label text-on-surface text-sm uppercase tracking-widest mb-1">Portfolio Diversity</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">New York's boudoir clients span every background, body type, age, and identity. The best photographers show this diversity proudly. If a portfolio shows only one body type or demographic, look for a studio with broader representation.</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-14">
          <h2 className="font-headline text-2xl italic text-on-surface mb-6">
            Frequently Asked Questions — New York Boudoir Photography
          </h2>
          <div className="space-y-5">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-surface-container-lowest rounded-lg p-6">
                <h3 className="font-label text-on-surface text-sm uppercase tracking-widest mb-2">{faq.q}</h3>
                <p className="text-sm text-on-surface-variant font-body leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="font-headline text-2xl italic text-on-surface mb-4">
            Ready to Find Your New York Boudoir Photographer?
          </h2>
          <p className="text-on-surface-variant font-body text-sm mb-6">Browse our full directory of verified boudoir photographers across New York.</p>
          <Link
            href="/boudoir-photographers"
            className="inline-block py-3 px-8 editorial-gradient text-on-primary font-label text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Browse All Photographers
          </Link>
        </div>

      </div>
    </div>
  );
}
