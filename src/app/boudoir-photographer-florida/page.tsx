import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boudoir Photographers in Florida — Find Studios in Miami, Orlando, Tampa & More",
  description: "Find the best boudoir photographers in Florida. Compare studios in Miami, Orlando, Tampa, Jacksonville, and 50+ Florida cities. Year-round warm weather for indoor & outdoor sessions.",
  keywords: ["boudoir photographer florida", "boudoir photography miami", "boudoir photographer orlando", "boudoir studio tampa", "florida boudoir photography"],
  alternates: {
    canonical: "https://boudoirphotographyclub.com/boudoir-photographer-florida",
  },
};

const cities = [
  { name: "Miami", slug: "miami" },
  { name: "Orlando", slug: "orlando" },
  { name: "Tampa", slug: "tampa" },
  { name: "Jacksonville", slug: "jacksonville" },
  { name: "Fort Lauderdale", slug: "fort-lauderdale" },
  { name: "Boca Raton", slug: "boca-raton" },
  { name: "Naples", slug: "naples" },
  { name: "Sarasota", slug: "sarasota" },
  { name: "Gainesville", slug: "gainesville" },
  { name: "Tallahassee", slug: "tallahassee" },
];

const faqs = [
  {
    q: "How much does boudoir photography cost in Florida?",
    a: "Florida boudoir pricing spans $350 to $4,000+. Miami and Naples luxury studios command the highest prices at $1,000–$3,500. Orlando and Tampa mid-range studios average $500–$1,500, while smaller markets like Gainesville or Tallahassee start around $350–$800.",
  },
  {
    q: "Can I do a beach boudoir session in Florida?",
    a: "Absolutely. Florida's 1,350 miles of coastline make beach boudoir one of the state's most requested session types. Miami Beach, Clearwater, Siesta Key, and the Emerald Coast near Destin are popular locations. Most beach sessions happen at sunrise or sunset to avoid crowds and harsh midday light.",
  },
  {
    q: "Are Florida boudoir photographers experienced with diverse body types?",
    a: "Florida's highly diverse population has produced a boudoir community that is exceptionally inclusive. You will find photographers who specialize in plus-size boudoir, mature women, postpartum sessions, transgender and non-binary clients, and Latina boudoir throughout Miami, Orlando, and Tampa.",
  },
  {
    q: "What makes Miami boudoir photography unique?",
    a: "Miami's boudoir scene is strongly influenced by its Latin and Caribbean culture — expect vibrant colors, bold styling, and an energetic, confident aesthetic. South Beach architecture, Wynwood Walls, and luxury waterfront properties provide backdrops unlike anywhere else in the country.",
  },
  {
    q: "Should I get hair and makeup done before my Florida boudoir session?",
    a: "Yes — and most Florida studios include professional hair and makeup in their packages. Florida's heat and humidity require photographers and makeup artists experienced with long-lasting looks for your session. Ask your studio whether their included HMUA is on-site or if you travel to a salon.",
  },
];

export default function FloridaBoudoirPage() {
  return (
    <div className="bg-surface text-on-surface">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 py-16">

        {/* Hero */}
        <h1 className="font-headline text-4xl md:text-5xl italic text-on-surface mb-4">
          Boudoir Photographers in Florida
        </h1>
        <p className="text-on-surface-variant text-lg mb-10 max-w-[760px] font-body leading-relaxed">
          Florida's year-round sunshine, stunning coastlines, and vibrant multicultural cities make it one of the most exciting states for boudoir photography. From Miami's bold Latin-influenced studios to the serene waterfront settings of Naples and Sarasota, Florida photographers capture confidence and sensuality in settings you simply cannot replicate elsewhere. Whether you are dreaming of a beach session at golden hour, a luxury spa-day boudoir experience, or a classic studio session in Tampa or Orlando, Florida delivers. Pricing ranges from $350 to $4,000+ depending on city, photographer tier, and package selected.
        </p>

        {/* Why Florida */}
        <div className="mb-14">
          <h2 className="font-headline text-2xl italic text-on-surface mb-6">
            Why Choose Florida for Boudoir Photography
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-container-lowest rounded-lg p-6">
              <h3 className="font-headline text-lg text-on-surface mb-2">Year-Round Outdoor Sessions</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                No other state offers as many months of outdoor boudoir shooting. Florida's climate allows beach, garden, and outdoor architectural sessions in every season. January beach boudoir in Clearwater is not just possible — it is spectacular.
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-lg p-6">
              <h3 className="font-headline text-lg text-on-surface mb-2">Multicultural Creative Scene</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                Miami, Orlando, and Tampa are home to photographers from Latin American, Caribbean, and European traditions who bring rich visual storytelling to their boudoir work. Florida's diversity means you will find specialists in nearly every aesthetic and cultural expression.
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-lg p-6">
              <h3 className="font-headline text-lg text-on-surface mb-2">Destination Boudoir Options</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                Many clients travel to Florida specifically for boudoir sessions — pairing a Miami, Key West, or Sarasota studio experience with a vacation. Photographers in these markets are experienced with out-of-state clients and can coordinate your full experience remotely.
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-lg p-6">
              <h3 className="font-headline text-lg text-on-surface mb-2">Luxury & Value Both Available</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                Florida's large, competitive market means outstanding value at every price point. Naples and Boca Raton offer luxury experiences comparable to New York or Beverly Hills, while Orlando and Jacksonville studios deliver excellent quality at very accessible prices.
              </p>
            </div>
          </div>
        </div>

        {/* Cities Grid */}
        <div className="mb-14">
          <h2 className="font-headline text-2xl italic text-on-surface mb-6">
            Featured Florida Cities
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/boudoir-photographer/florida/${city.slug}`}
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
            Boudoir Photography Pricing in Florida
          </h2>
          <p className="text-sm text-on-surface-variant font-body leading-relaxed mb-4">
            Florida pricing varies significantly by region, with coastal luxury markets commanding a premium:
          </p>
          <ul className="space-y-3 text-sm text-on-surface-variant font-body">
            <li><span className="text-on-surface font-label">Budget ($350–$750):</span> Digital packages in inland cities and college towns. Good for first-time boudoir clients wanting to try the experience without a large investment. Usually 2–3 hours and 20–40 images.</li>
            <li><span className="text-on-surface font-label">Mid-Range ($750–$1,800):</span> Florida's most popular tier. Includes professional hair and makeup, 50–100 images, wardrobe consultation, and often one print product. Available across Miami, Orlando, Tampa, and Jacksonville.</li>
            <li><span className="text-on-surface font-label">Luxury ($1,800–$4,000+):</span> Full-day or multi-session experiences in Miami Beach, Naples, Sarasota, and Boca Raton. Expect editorial-level styling, luxury album products, and hotel or villa location options.</li>
          </ul>
        </div>

        {/* Tips */}
        <div className="mb-14">
          <h2 className="font-headline text-2xl italic text-on-surface mb-6">
            What to Look for in a Florida Boudoir Photographer
          </h2>
          <div className="space-y-4">
            <div className="border-l-2 border-primary pl-5">
              <h3 className="font-label text-on-surface text-sm uppercase tracking-widest mb-1">Outdoor Experience in Florida Conditions</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">Florida's humidity, bright sun, and afternoon rain require photographers experienced with fast-changing conditions. Look for portfolios that include outdoor work shot in the Florida climate — not just studio or indoor images.</p>
            </div>
            <div className="border-l-2 border-primary pl-5">
              <h3 className="font-label text-on-surface text-sm uppercase tracking-widest mb-1">Beach Session Logistics</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">If you want a beach session, confirm your photographer has experience obtaining necessary permits for commercial beach photography. Many Florida beaches require permits for professional photo sessions — a prepared photographer will handle this for you.</p>
            </div>
            <div className="border-l-2 border-primary pl-5">
              <h3 className="font-label text-on-surface text-sm uppercase tracking-widest mb-1">Travel and Destination Capability</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">If you are visiting Florida for a destination boudoir session, confirm the photographer is experienced working with out-of-state clients. The best destination studios offer virtual consultations, digital wardrobe planning, and flexible scheduling for travel days.</p>
            </div>
            <div className="border-l-2 border-primary pl-5">
              <h3 className="font-label text-on-surface text-sm uppercase tracking-widest mb-1">Bilingual Services</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">Miami, Orlando, and Tampa have large Spanish-speaking communities. If you are more comfortable communicating in Spanish, search specifically for bilingual photographers — many Florida studios offer fully Spanish-language consultations and sessions.</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-14">
          <h2 className="font-headline text-2xl italic text-on-surface mb-6">
            Frequently Asked Questions — Florida Boudoir Photography
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
            Ready to Find Your Florida Boudoir Photographer?
          </h2>
          <p className="text-on-surface-variant font-body text-sm mb-6">Browse our full directory of verified boudoir photographers across Florida.</p>
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
