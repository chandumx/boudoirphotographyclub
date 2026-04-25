import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boudoir Photographers in North Carolina — Find Studios in Charlotte, Raleigh & More",
  description: "Find the best boudoir photographers in North Carolina. Compare studios in Charlotte, Raleigh, Durham, Asheville, and 30+ NC cities. Research Triangle tech market meets Southern warmth.",
  keywords: ["boudoir photographer north carolina", "boudoir photography charlotte", "boudoir photographer raleigh", "boudoir studio asheville", "north carolina boudoir photography"],
  alternates: {
    canonical: "https://boudoirphotographyclub.com/boudoir-photographer-north-carolina",
  },
};

const cities = [
  { name: "Charlotte", slug: "charlotte" },
  { name: "Raleigh", slug: "raleigh" },
  { name: "Durham", slug: "durham" },
  { name: "Greensboro", slug: "greensboro" },
  { name: "Winston-Salem", slug: "winston-salem" },
  { name: "Fayetteville", slug: "fayetteville" },
  { name: "Asheville", slug: "asheville" },
  { name: "Cary", slug: "cary" },
  { name: "Wilmington", slug: "wilmington" },
  { name: "High Point", slug: "high-point" },
];

const faqs = [
  {
    q: "How much does boudoir photography cost in North Carolina?",
    a: "North Carolina boudoir pricing ranges from $400 to $2,500+. Charlotte and Raleigh studios average $600–$1,800. Asheville studios, known for their artistic quality, typically price at $700–$2,000. Smaller markets like Greensboro, High Point, and Wilmington offer quality experiences at $400–$1,000.",
  },
  {
    q: "What makes Asheville unique for boudoir photography?",
    a: "Asheville is one of the most creatively distinctive boudoir markets in the South. The city's arts community, mountain setting, and eclectic aesthetic attract photographers who specialize in alternative, fine art, and bohemian boudoir styles. The Blue Ridge Parkway and local waterfall settings offer breathtaking outdoor options.",
  },
  {
    q: "Are there boudoir photographers near Fort Bragg or other NC military bases?",
    a: "Yes — Fayetteville, near Fort Bragg (now Fort Liberty), has several photographers who specialize in military spouse boudoir and deployment gift sessions. They understand military culture, flexible scheduling for deployment timelines, and the particular pride and emotion that makes military boudoir so meaningful.",
  },
  {
    q: "Is the Research Triangle a good market for boudoir photography?",
    a: "Raleigh, Durham, and Cary form one of the Southeast's fastest-growing metro areas with a highly educated, professional clientele. The Triangle's boudoir scene reflects this — technically polished photographers, modern studio environments, and a client base that invests in quality. Pricing is competitive with Charlotte at $600–$1,800.",
  },
  {
    q: "Can I do a beach boudoir session in North Carolina?",
    a: "Absolutely. Wilmington, the Outer Banks, and Crystal Coast offer stunning coastal boudoir settings. NC coastal photographers are experienced with beach permitting, golden hour timing, and the Atlantic Ocean as a backdrop. Fall is particularly popular for NC beach boudoir when crowds thin and light turns golden.",
  },
];

export default function NorthCarolinaBoudoirPage() {
  return (
    <div className="bg-surface text-on-surface">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 py-16">

        {/* Hero */}
        <h1 className="font-headline text-4xl md:text-5xl italic text-on-surface mb-4">
          Boudoir Photographers in North Carolina
        </h1>
        <p className="text-on-surface-variant text-lg mb-10 max-w-[760px] font-body leading-relaxed">
          North Carolina's boudoir photography scene reflects the state's remarkable diversity — from Charlotte's financial-district polish and the Research Triangle's tech-forward creativity to Asheville's bohemian artistry and Wilmington's coastal elegance. The state's blend of Southern warmth and modern metropolitan energy has produced photographers who excel at making clients feel both completely at ease and powerfully seen. Whether you are drawn to the mountains, the coast, or an urban studio setting, North Carolina offers exceptional boudoir experiences at prices ranging from $400 to $2,500+.
        </p>

        {/* Why North Carolina */}
        <div className="mb-14">
          <h2 className="font-headline text-2xl italic text-on-surface mb-6">
            Why Choose North Carolina for Boudoir Photography
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-container-lowest rounded-lg p-6">
              <h3 className="font-headline text-lg text-on-surface mb-2">Mountains, Coast, and Urban Studios</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                Few states offer such geographic diversity within driving distance. Blue Ridge mountain settings near Asheville, Atlantic Coast beaches near Wilmington, and polished urban studios in Charlotte and Raleigh give North Carolina clients an exceptional range of boudoir environments.
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-lg p-6">
              <h3 className="font-headline text-lg text-on-surface mb-2">Research Triangle Creative Talent</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                The Raleigh-Durham-Chapel Hill corridor's concentration of universities and tech companies has attracted creative professionals from across the country. Triangle boudoir photographers tend to be technically sophisticated, artistically diverse, and invested in delivering a premium experience at competitive prices.
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-lg p-6">
              <h3 className="font-headline text-lg text-on-surface mb-2">Military Community Expertise</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                With Fort Liberty (formerly Fort Bragg), Camp Lejeune, and Seymour Johnson Air Force Base all within the state, North Carolina has a large and experienced military spouse boudoir community. Many photographers offer military discounts, flexible scheduling, and deep familiarity with deployment and homecoming gifting.
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-lg p-6">
              <h3 className="font-headline text-lg text-on-surface mb-2">Southern Warmth, Modern Approach</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                North Carolina photographers are celebrated for combining genuine Southern hospitality with progressive, inclusive values. You will feel welcomed, never judged, and consistently encouraged throughout your session — a balance that has made NC studios some of the most reviewed and recommended in the Southeast.
              </p>
            </div>
          </div>
        </div>

        {/* Cities Grid */}
        <div className="mb-14">
          <h2 className="font-headline text-2xl italic text-on-surface mb-6">
            Featured North Carolina Cities
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/boudoir-photographer/north-carolina/${city.slug}`}
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
            Boudoir Photography Pricing in North Carolina
          </h2>
          <p className="text-sm text-on-surface-variant font-body leading-relaxed mb-4">
            North Carolina delivers strong value relative to coastal markets, with pricing that reflects both local cost of living and session quality:
          </p>
          <ul className="space-y-3 text-sm text-on-surface-variant font-body">
            <li><span className="text-on-surface font-label">Budget ($400–$800):</span> Smaller markets and emerging photographers across Greensboro, High Point, and Fayetteville. Digital-only packages with 2–3 hour sessions and 20–40 images. Great entry point for first-time boudoir clients.</li>
            <li><span className="text-on-surface font-label">Mid-Range ($800–$1,600):</span> The primary tier across Charlotte, Raleigh, and Asheville. Professional hair and makeup, 50–80 edited images, wardrobe consultation, and often one print product included. Exceptional quality for the investment.</li>
            <li><span className="text-on-surface font-label">Luxury ($1,600–$2,500+):</span> Top-tier studios in Charlotte's South End, Raleigh's Five Points, and Asheville's River Arts District. Extended sessions, editorial direction, luxury album products, and photographers with significant portfolio and publication experience.</li>
          </ul>
        </div>

        {/* Tips */}
        <div className="mb-14">
          <h2 className="font-headline text-2xl italic text-on-surface mb-6">
            What to Look for in a North Carolina Boudoir Photographer
          </h2>
          <div className="space-y-4">
            <div className="border-l-2 border-primary pl-5">
              <h3 className="font-label text-on-surface text-sm uppercase tracking-widest mb-1">Specialty Alignment with Your Vision</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">NC's diverse markets mean you can find a genuine specialist — not just a generalist photographer who also does boudoir. Asheville's artists specialize in fine art and bohemian styles; Charlotte studios in luxury glam; Triangle photographers in clean, editorial looks. Choose a photographer whose specialty matches your vision.</p>
            </div>
            <div className="border-l-2 border-primary pl-5">
              <h3 className="font-label text-on-surface text-sm uppercase tracking-widest mb-1">Military Accommodation Policies</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">If you are a military spouse, ask specifically about rescheduling policies for deployment changes, military discount availability, and rush delivery timelines for homecoming gifts. Experienced NC military photographers will have clear policies for all of these situations.</p>
            </div>
            <div className="border-l-2 border-primary pl-5">
              <h3 className="font-label text-on-surface text-sm uppercase tracking-widest mb-1">Portfolio Recency</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">Boudoir photography techniques evolve quickly. Ask how old the images in the portfolio are and confirm the photographer is still actively creating boudoir work. Portfolios more than 3–4 years old may not accurately reflect current quality or equipment capabilities.</p>
            </div>
            <div className="border-l-2 border-primary pl-5">
              <h3 className="font-label text-on-surface text-sm uppercase tracking-widest mb-1">Comfort Level Communication</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">The best NC photographers actively invite clients to communicate comfort levels throughout the session. Ask during consultation how they handle requests to slow down, skip a pose, or adjust wardrobe choices. A photographer with clear, proactive communication protocols about comfort is one you can trust.</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-14">
          <h2 className="font-headline text-2xl italic text-on-surface mb-6">
            Frequently Asked Questions — North Carolina Boudoir Photography
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
            Ready to Find Your North Carolina Boudoir Photographer?
          </h2>
          <p className="text-on-surface-variant font-body text-sm mb-6">Browse our full directory of verified boudoir photographers across North Carolina.</p>
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
