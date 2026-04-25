import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boudoir Photographers in Illinois — Find Studios in Chicago & Beyond",
  description: "Find the best boudoir photographers in Illinois. Compare studios in Chicago, Naperville, Rockford, and 30+ Illinois cities. Chicago's world-class boudoir scene at accessible prices.",
  keywords: ["boudoir photographer illinois", "boudoir photography chicago", "boudoir photographer naperville", "boudoir studio illinois", "chicago boudoir photography"],
  alternates: {
    canonical: "https://boudoirphotographyclub.com/boudoir-photographer-illinois",
  },
};

const cities = [
  { name: "Chicago", slug: "chicago" },
  { name: "Naperville", slug: "naperville" },
  { name: "Rockford", slug: "rockford" },
  { name: "Aurora", slug: "aurora" },
  { name: "Joliet", slug: "joliet" },
  { name: "Springfield", slug: "springfield" },
  { name: "Peoria", slug: "peoria" },
  { name: "Elgin", slug: "elgin" },
  { name: "Waukegan", slug: "waukegan" },
  { name: "Champaign", slug: "champaign" },
];

const faqs = [
  {
    q: "How much does boudoir photography cost in Chicago?",
    a: "Chicago boudoir photography ranges from $500 to $3,500+. River North, Wicker Park, and Logan Square studios offering full-service experiences typically price between $900–$2,500. Suburban markets like Naperville, Elgin, and Joliet offer comparable quality at $400–$1,200.",
  },
  {
    q: "What neighborhoods in Chicago have the best boudoir studios?",
    a: "Chicago's most active boudoir photography neighborhoods include Wicker Park, Logan Square, River North, and the West Loop. Many photographers work from private loft studios in these creative districts. The South Loop and Pilsen also have emerging boudoir talent at more accessible prices.",
  },
  {
    q: "Do Chicago boudoir photographers offer outdoor sessions?",
    a: "Yes, though Chicago's outdoor season runs May through October. Popular outdoor boudoir locations include Lincoln Park, the 606 Trail, Millennium Park's architectural surroundings, and rooftop spaces with city skyline views. Some photographers travel to the North Shore and Indiana Dunes for natural settings.",
  },
  {
    q: "Are there plus-size boudoir specialists in Illinois?",
    a: "Chicago has a particularly strong body-positive boudoir community. Many photographers in the Wicker Park and Andersonville neighborhoods have built their businesses specifically around plus-size and curve-celebrating boudoir. Look for studios that explicitly feature diverse body types throughout their portfolio.",
  },
  {
    q: "Can I book a boudoir session in Chicago as a gift?",
    a: "Boudoir as a gift is extremely popular in Chicago — especially for partners of military members, for Valentine's Day, and for milestone celebrations. Most studios offer gift certificates and can coordinate surprise gift packages. Booking lead time of 4–8 weeks is recommended for gift-timed sessions.",
  },
];

export default function IllinoisBoudoirPage() {
  return (
    <div className="bg-surface text-on-surface">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 py-16">

        {/* Hero */}
        <h1 className="font-headline text-4xl md:text-5xl italic text-on-surface mb-4">
          Boudoir Photographers in Illinois
        </h1>
        <p className="text-on-surface-variant text-lg mb-10 max-w-[760px] font-body leading-relaxed">
          Illinois punches well above its weight in boudoir photography, led by Chicago's extraordinary creative community. The city's blend of Midwestern warmth and world-class artistic talent has produced a boudoir scene that is simultaneously technically excellent and deeply personal. From intimate loft studios in Logan Square to luxury experiences in River North, Chicago boudoir photographers deliver magazine-quality results with the client-centered approach the Midwest is known for. Suburban studios in Naperville, Joliet, and Champaign extend that excellence statewide at accessible price points ranging from $400 to $3,500+.
        </p>

        {/* Why Illinois */}
        <div className="mb-14">
          <h2 className="font-headline text-2xl italic text-on-surface mb-6">
            Why Choose Illinois for Boudoir Photography
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-container-lowest rounded-lg p-6">
              <h3 className="font-headline text-lg text-on-surface mb-2">Midwestern Client-First Culture</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                Illinois photographers — especially outside the city core — are known for the Midwestern hospitality that makes first-time boudoir clients feel immediately comfortable and cared for. The emphasis is on your experience and confidence, not just the final images.
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-lg p-6">
              <h3 className="font-headline text-lg text-on-surface mb-2">Chicago's World-Class Creative Scene</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                Chicago is a top-five photography market in the US. Many boudoir photographers here have commercial advertising, editorial fashion, and fine art backgrounds that translate directly into technically superior boudoir work with exceptional lighting and composition.
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-lg p-6">
              <h3 className="font-headline text-lg text-on-surface mb-2">City and Suburban Options</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                Illinois clients can choose between Chicago's curated urban studio experiences and the more personal boutique feel of suburban studios. For many clients, suburban studios in Naperville or Elgin offer the same quality with easier parking, lower prices, and a more relaxed atmosphere.
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-lg p-6">
              <h3 className="font-headline text-lg text-on-surface mb-2">Strong Body-Positive Community</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                Chicago's boudoir community has been at the forefront of the body-positive movement in photography for over a decade. You will find studios with inclusive marketing, diverse client walls, and photographers who actively cultivate a welcoming space for every body.
              </p>
            </div>
          </div>
        </div>

        {/* Cities Grid */}
        <div className="mb-14">
          <h2 className="font-headline text-2xl italic text-on-surface mb-6">
            Featured Illinois Cities
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/boudoir-photographer/illinois/${city.slug}`}
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
            Boudoir Photography Pricing in Illinois
          </h2>
          <p className="text-sm text-on-surface-variant font-body leading-relaxed mb-4">
            Illinois pricing reflects Chicago's premium creative market alongside more accessible suburban and downstate options:
          </p>
          <ul className="space-y-3 text-sm text-on-surface-variant font-body">
            <li><span className="text-on-surface font-label">Accessible ($400–$900):</span> Downstate markets and some suburban studios. Good quality digital-only packages with 2–3 hour sessions and 20–40 images. Often no hair and makeup included.</li>
            <li><span className="text-on-surface font-label">Mid-Range ($900–$2,000):</span> The dominant tier across Chicago metro. Full-service sessions with professional hair and makeup, 50–80 edited images, and multiple outfit looks. Suburban studios often offer this tier with extra value compared to city pricing.</li>
            <li><span className="text-on-surface font-label">Premium ($2,000–$3,500+):</span> Top Chicago city studios in River North, West Loop, and Wicker Park. Extended sessions, luxury studio environments, editorial-level direction, and heirloom album products.</li>
          </ul>
        </div>

        {/* Tips */}
        <div className="mb-14">
          <h2 className="font-headline text-2xl italic text-on-surface mb-6">
            What to Look for in an Illinois Boudoir Photographer
          </h2>
          <div className="space-y-4">
            <div className="border-l-2 border-primary pl-5">
              <h3 className="font-label text-on-surface text-sm uppercase tracking-widest mb-1">Studio vs. Natural Light</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">Chicago photographers split between controlled artificial lighting studios and natural-light loft spaces. Both approaches produce beautiful results, but they create different aesthetics. Review portfolios specifically for the lighting style you prefer before booking.</p>
            </div>
            <div className="border-l-2 border-primary pl-5">
              <h3 className="font-label text-on-surface text-sm uppercase tracking-widest mb-1">Seasonal Flexibility</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">Illinois winters make year-round outdoor sessions impossible. If you want an outdoor element, plan for May through October. The best Illinois studios are fully equipped for beautiful indoor sessions any time of year — do not let season limit your booking timeline.</p>
            </div>
            <div className="border-l-2 border-primary pl-5">
              <h3 className="font-label text-on-surface text-sm uppercase tracking-widest mb-1">Post-Session Experience</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">Ask about the image delivery process. Many top Illinois studios offer an in-person reveal appointment where you view your images together in the studio — a deeply moving experience that makes the investment feel complete. Studios that mail a USB drive are skipping an important part of the journey.</p>
            </div>
            <div className="border-l-2 border-primary pl-5">
              <h3 className="font-label text-on-surface text-sm uppercase tracking-widest mb-1">Payment Plans</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">Many Illinois studios offer payment plans that allow you to spread the cost over 3–6 months. This makes premium experiences accessible without sacrificing the quality of photographer you book. Ask about payment plans during your initial consultation.</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-14">
          <h2 className="font-headline text-2xl italic text-on-surface mb-6">
            Frequently Asked Questions — Illinois Boudoir Photography
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
            Ready to Find Your Illinois Boudoir Photographer?
          </h2>
          <p className="text-on-surface-variant font-body text-sm mb-6">Browse our full directory of verified boudoir photographers across Illinois.</p>
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
