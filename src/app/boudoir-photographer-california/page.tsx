import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boudoir Photographers in California — Find Studios in LA, SF, San Diego & More",
  description: "Find the best boudoir photographers in California. Compare studios in Los Angeles, San Francisco, San Diego, Sacramento, and 50+ other California cities. Pricing $400–$5,000+.",
  keywords: ["boudoir photographer california", "boudoir photography los angeles", "boudoir photographer san francisco", "boudoir studio california", "california boudoir photography"],
  alternates: {
    canonical: "https://boudoirphotographyclub.com/boudoir-photographer-california",
  },
};

const cities = [
  { name: "Los Angeles", slug: "los-angeles" },
  { name: "San Francisco", slug: "san-francisco" },
  { name: "San Diego", slug: "san-diego" },
  { name: "Sacramento", slug: "sacramento" },
  { name: "San Jose", slug: "san-jose" },
  { name: "Fresno", slug: "fresno" },
  { name: "Oakland", slug: "oakland" },
  { name: "Santa Barbara", slug: "santa-barbara" },
  { name: "Palm Springs", slug: "palm-springs" },
  { name: "Monterey", slug: "monterey" },
];

const faqs = [
  {
    q: "How much does a boudoir photographer cost in California?",
    a: "California boudoir photography ranges from $400 for a basic digital package to $5,000+ for luxury all-inclusive experiences. Los Angeles and San Francisco studios typically price higher at $800–$3,000, while inland cities like Fresno or Sacramento average $400–$1,200.",
  },
  {
    q: "Where are the best boudoir studios in Los Angeles?",
    a: "Los Angeles has a thriving boudoir scene with studios in West Hollywood, Silver Lake, Santa Monica, and the Arts District. Many LA photographers work in private home studios or rent high-end loft spaces for editorial-style sessions.",
  },
  {
    q: "Do California boudoir photographers offer outdoor sessions?",
    a: "Yes — California's climate makes year-round outdoor boudoir possible. Popular locations include Malibu beaches, Joshua Tree desert, wine country in Napa, and redwood forests in Northern California.",
  },
  {
    q: "What should I bring to a boudoir session in California?",
    a: "Most California studios provide a wardrobe guide during consultation. Plan to bring 3–5 outfits including lingerie, a cozy oversized sweater, and any personal items meaningful to you. Many studios have a client closet with sizes 0–22.",
  },
  {
    q: "How far in advance should I book a California boudoir photographer?",
    a: "Top California boudoir photographers book 4–12 weeks in advance, especially in peak season (Valentine's Day, summer, and holiday gift season). San Francisco and LA studios often fill fastest — book early for premium weekend slots.",
  },
];

export default function CaliforniaBoudoirPage() {
  return (
    <div className="bg-surface text-on-surface">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 py-16">

        {/* Hero */}
        <h1 className="font-headline text-4xl md:text-5xl italic text-on-surface mb-4">
          Boudoir Photographers in California
        </h1>
        <p className="text-on-surface-variant text-lg mb-10 max-w-[760px] font-body leading-relaxed">
          California is home to one of the most vibrant and diverse boudoir photography markets in the United States. From world-class studios in Los Angeles and San Francisco to intimate boutique experiences in Santa Barbara and Monterey, California photographers blend cinematic artistry with empowering storytelling. Whether you want a sun-drenched beach session in Malibu or a dramatic editorial shoot in an LA loft, you will find exactly the right photographer here. Pricing ranges from $400 to $5,000+ depending on location, package, and studio tier.
        </p>

        {/* Why California */}
        <div className="mb-14">
          <h2 className="font-headline text-2xl italic text-on-surface mb-6">
            Why Choose California for Boudoir Photography
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-container-lowest rounded-lg p-6">
              <h3 className="font-headline text-lg text-on-surface mb-2">World-Class Creative Talent</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                California draws creative professionals from across the globe. Many boudoir photographers in LA and San Francisco come from fashion, film, and editorial backgrounds — bringing a cinematic quality to every session that is difficult to find elsewhere.
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-lg p-6">
              <h3 className="font-headline text-lg text-on-surface mb-2">Year-Round Outdoor Options</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                California's Mediterranean climate opens up boudoir possibilities unavailable in most states. Shoot in the Malibu surf, the Joshua Tree desert at golden hour, Napa vineyard estates, or among coastal redwoods — all year long.
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-lg p-6">
              <h3 className="font-headline text-lg text-on-surface mb-2">All Body Types, All Identities Welcomed</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                California's inclusive culture is reflected in its boudoir studios. You will find specialists in plus-size boudoir, maternity boudoir, couples sessions, gender-affirming boudoir, and LGBTQ+-focused studios throughout the state.
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-lg p-6">
              <h3 className="font-headline text-lg text-on-surface mb-2">Luxury Hair, Makeup & Styling</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                Most California boudoir packages include professional glam by top-tier makeup artists and stylists. The state's deep pool of beauty talent means your pre-session prep will rival what celebrities experience before a magazine shoot.
              </p>
            </div>
          </div>
        </div>

        {/* Cities Grid */}
        <div className="mb-14">
          <h2 className="font-headline text-2xl italic text-on-surface mb-6">
            Featured California Cities
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/boudoir-photographer/california/${city.slug}`}
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
            Boudoir Photography Pricing in California
          </h2>
          <p className="text-sm text-on-surface-variant font-body leading-relaxed mb-4">
            California has one of the widest pricing ranges in the country, reflecting its economic diversity across regions:
          </p>
          <ul className="space-y-3 text-sm text-on-surface-variant font-body">
            <li><span className="text-on-surface font-label">Budget ($400–$800):</span> Digital-only packages in smaller cities like Fresno, Bakersfield, or Stockton. Expect 20–40 edited images with no physical products.</li>
            <li><span className="text-on-surface font-label">Mid-Range ($800–$2,000):</span> The most popular tier. Includes hair and makeup, wardrobe guidance, 50–100 edited images, and possibly a small album or prints.</li>
            <li><span className="text-on-surface font-label">Luxury ($2,000–$5,000+):</span> All-inclusive experiences at top LA, SF, or Santa Barbara studios. Full-day sessions, multi-look styling, hand-retouched gallery, and heirloom album included.</li>
          </ul>
        </div>

        {/* Tips */}
        <div className="mb-14">
          <h2 className="font-headline text-2xl italic text-on-surface mb-6">
            What to Look for in a California Boudoir Photographer
          </h2>
          <div className="space-y-4">
            <div className="border-l-2 border-primary pl-5">
              <h3 className="font-label text-on-surface text-sm uppercase tracking-widest mb-1">Consistent Portfolio Quality</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">Review at least 30–50 images across different body types and lighting conditions. California photographers have no shortage of portfolio samples — if a gallery looks thin, keep looking.</p>
            </div>
            <div className="border-l-2 border-primary pl-5">
              <h3 className="font-label text-on-surface text-sm uppercase tracking-widest mb-1">In-Person or Video Consultation</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">The best California studios offer a pre-session consultation — either in the studio, by video, or by phone — to discuss your goals, comfort level, and wardrobe before your session date.</p>
            </div>
            <div className="border-l-2 border-primary pl-5">
              <h3 className="font-label text-on-surface text-sm uppercase tracking-widest mb-1">Clear Contract and Privacy Policy</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">California has strong consumer protection laws. A reputable photographer will have a clear contract specifying image rights, privacy protections, and cancellation/rescheduling policies in writing.</p>
            </div>
            <div className="border-l-2 border-primary pl-5">
              <h3 className="font-label text-on-surface text-sm uppercase tracking-widest mb-1">Verified Client Reviews</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">Look for Google and Yelp reviews, not just testimonials on a photographer's own website. Pay special attention to comments about how clients felt during the session — comfort and safety matter most.</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-14">
          <h2 className="font-headline text-2xl italic text-on-surface mb-6">
            Frequently Asked Questions — California Boudoir Photography
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
            Ready to Find Your California Boudoir Photographer?
          </h2>
          <p className="text-on-surface-variant font-body text-sm mb-6">Browse our full directory of verified boudoir photographers across California.</p>
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
