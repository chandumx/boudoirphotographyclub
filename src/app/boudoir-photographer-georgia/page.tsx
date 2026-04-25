import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boudoir Photographers in Georgia — Find Studios in Atlanta, Savannah & More",
  description: "Find the best boudoir photographers in Georgia. Compare studios in Atlanta, Savannah, Augusta, and 30+ Georgia cities. Southern charm meets modern boudoir artistry.",
  keywords: ["boudoir photographer georgia", "boudoir photography atlanta", "boudoir photographer savannah", "boudoir studio georgia", "georgia boudoir photography"],
  alternates: {
    canonical: "https://boudoirphotographyclub.com/boudoir-photographer-georgia",
  },
};

const cities = [
  { name: "Atlanta", slug: "atlanta" },
  { name: "Savannah", slug: "savannah" },
  { name: "Augusta", slug: "augusta" },
  { name: "Columbus", slug: "columbus" },
  { name: "Macon", slug: "macon" },
  { name: "Athens", slug: "athens" },
  { name: "Roswell", slug: "roswell" },
  { name: "Sandy Springs", slug: "sandy-springs" },
  { name: "Albany", slug: "albany" },
  { name: "Alpharetta", slug: "alpharetta" },
];

const faqs = [
  {
    q: "How much does boudoir photography cost in Georgia?",
    a: "Georgia boudoir pricing ranges from $350 to $3,000+. Atlanta studios — especially in Buckhead, Midtown, and Decatur — average $700–$2,000. Savannah's boutique studios run $500–$1,500. Smaller markets like Macon, Columbus, and Albany offer quality sessions at $350–$900.",
  },
  {
    q: "What makes Savannah a special destination for boudoir photography?",
    a: "Savannah's historic squares, antebellum architecture, Spanish moss-draped oaks, and cobblestone streets create a boudoir backdrop unlike anywhere else in the US. Many photographers incorporate the city's Forsyth Park, riverfront warehouses, and boutique inn interiors into sessions for an Old South romance aesthetic.",
  },
  {
    q: "Are Atlanta boudoir photographers experienced with diverse clients?",
    a: "Atlanta's cosmopolitan, majority Black city has a particularly rich and diverse boudoir photography scene. Many Atlanta photographers specialize in celebrating Black women, with lighting expertise for deeper skin tones and styling that honors cultural identity. The city's diverse clientele has produced a community of inclusive, culturally aware photographers.",
  },
  {
    q: "Can I do an outdoor boudoir session in Georgia?",
    a: "Georgia's mild climate and stunning natural scenery make outdoor boudoir popular nine months of the year. Peach orchards in spring, fall foliage in the North Georgia mountains, and year-round coastal marsh settings near Savannah and Brunswick all provide exceptional outdoor boudoir environments.",
  },
  {
    q: "What should I expect from a Georgia boudoir session experience?",
    a: "Georgia photographers are known for exceptional Southern hospitality — warm consultations, thorough preparation guidance, and a session-day experience focused on making you feel pampered and celebrated. Expect a relaxed pace, genuine encouragement, and personal attention that makes the whole experience feel special.",
  },
];

export default function GeorgiaBoudoirPage() {
  return (
    <div className="bg-surface text-on-surface">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 py-16">

        {/* Hero */}
        <h1 className="font-headline text-4xl md:text-5xl italic text-on-surface mb-4">
          Boudoir Photographers in Georgia
        </h1>
        <p className="text-on-surface-variant text-lg mb-10 max-w-[760px] font-body leading-relaxed">
          Georgia's boudoir photography scene blends the warmth of Southern hospitality with serious modern artistry. Atlanta's booming creative industry has attracted exceptional photographers from across the country, while Savannah's historic beauty and Athens' college-town energy each offer something distinct. Georgia photographers are celebrated for making clients feel deeply welcomed, thoroughly prepared, and beautifully seen — from the initial consultation through the final reveal. Whether you seek Atlanta's urban energy, Savannah's antebellum romance, or the North Georgia mountains as a backdrop, Georgia has the right photographer for your vision. Pricing ranges from $350 to $3,000+.
        </p>

        {/* Why Georgia */}
        <div className="mb-14">
          <h2 className="font-headline text-2xl italic text-on-surface mb-6">
            Why Choose Georgia for Boudoir Photography
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-container-lowest rounded-lg p-6">
              <h3 className="font-headline text-lg text-on-surface mb-2">Southern Hospitality in Every Session</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                Georgia photographers prioritize the client relationship above all else. From the first phone call to your image reveal, you will be treated with a warmth and genuine personal investment that is hallmark Southern. First-time boudoir clients consistently report that Georgia studios put them at ease faster than anywhere else.
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-lg p-6">
              <h3 className="font-headline text-lg text-on-surface mb-2">Unmatched Diversity of Backdrops</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                Georgia offers coastal marshes, antebellum mansions, Appalachian mountain valleys, urban Atlanta architecture, and the deeply unique atmosphere of Savannah's historic district — all within a few hours of each other. Few states give photographers access to such radically different visual environments.
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-lg p-6">
              <h3 className="font-headline text-lg text-on-surface mb-2">Atlanta's Film Industry Influence</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                Atlanta's emergence as "Hollywood of the South" has brought significant creative talent to the city. Many boudoir photographers have crossover experience in film and TV production, giving their work sophisticated lighting technique and a cinematic quality that elevates every session.
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-lg p-6">
              <h3 className="font-headline text-lg text-on-surface mb-2">Culturally Inclusive Studios</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                Georgia's diverse population has shaped a boudoir community that reflects it. Atlanta, in particular, has many photographers who specialize in celebrating Black women, Latinas, and multicultural clients with the specific lighting expertise, styling knowledge, and cultural sensitivity their work deserves.
              </p>
            </div>
          </div>
        </div>

        {/* Cities Grid */}
        <div className="mb-14">
          <h2 className="font-headline text-2xl italic text-on-surface mb-6">
            Featured Georgia Cities
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/boudoir-photographer/georgia/${city.slug}`}
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
            Boudoir Photography Pricing in Georgia
          </h2>
          <p className="text-sm text-on-surface-variant font-body leading-relaxed mb-4">
            Georgia offers outstanding value relative to comparable markets in the Northeast or on the West Coast:
          </p>
          <ul className="space-y-3 text-sm text-on-surface-variant font-body">
            <li><span className="text-on-surface font-label">Budget ($350–$800):</span> Smaller cities and newer photographers. Digital-only packages with 2–3 hour sessions. Good for first-time clients wanting to explore boudoir without a significant investment. Hair and makeup usually separate or not included.</li>
            <li><span className="text-on-surface font-label">Mid-Range ($800–$1,800):</span> The most popular tier across Atlanta, Savannah, and Augusta. Includes professional glam, full wardrobe guidance, 50–80 edited images, and multiple outfit looks. Exceptional value compared to comparable Northern cities.</li>
            <li><span className="text-on-surface font-label">Luxury ($1,800–$3,000+):</span> Premium Atlanta studios in Buckhead and Midtown, and destination experiences in Savannah's historic district. Full-day sessions, editorial styling, luxury album products, and photographers with national publication credits.</li>
          </ul>
        </div>

        {/* Tips */}
        <div className="mb-14">
          <h2 className="font-headline text-2xl italic text-on-surface mb-6">
            What to Look for in a Georgia Boudoir Photographer
          </h2>
          <div className="space-y-4">
            <div className="border-l-2 border-primary pl-5">
              <h3 className="font-label text-on-surface text-sm uppercase tracking-widest mb-1">Experience with Skin Tone Diversity</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">Georgia's diverse clientele means you should look for portfolios demonstrating mastery across a range of skin tones. Proper lighting and retouching for deeper skin tones requires specific expertise — verify this in the portfolio before booking.</p>
            </div>
            <div className="border-l-2 border-primary pl-5">
              <h3 className="font-label text-on-surface text-sm uppercase tracking-widest mb-1">Location Session Experience</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">If you want a Savannah historic district or North Georgia mountain session, confirm the photographer has specific location experience. Permits, golden hour timing, and managing Georgia's variable humidity all require hands-on local knowledge.</p>
            </div>
            <div className="border-l-2 border-primary pl-5">
              <h3 className="font-label text-on-surface text-sm uppercase tracking-widest mb-1">Consultation Quality</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">Georgia studios known for excellence invest heavily in pre-session consultations. A thorough consultation — covering your goals, concerns, wardrobe, and what to expect — is a hallmark of a photographer who cares about your experience, not just the sale.</p>
            </div>
            <div className="border-l-2 border-primary pl-5">
              <h3 className="font-label text-on-surface text-sm uppercase tracking-widest mb-1">Client Community and Testimonials</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">The best Georgia studios have active client communities — private Facebook groups, Instagram features, and local word-of-mouth referral networks. Ask potential photographers how many of their clients come through referrals. High referral rates indicate deeply satisfied clients.</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-14">
          <h2 className="font-headline text-2xl italic text-on-surface mb-6">
            Frequently Asked Questions — Georgia Boudoir Photography
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
            Ready to Find Your Georgia Boudoir Photographer?
          </h2>
          <p className="text-on-surface-variant font-body text-sm mb-6">Browse our full directory of verified boudoir photographers across Georgia.</p>
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
