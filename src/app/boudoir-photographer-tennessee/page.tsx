import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boudoir Photographers in Tennessee — Find Studios in Nashville, Memphis & More",
  description: "Find the best boudoir photographers in Tennessee. Compare studios in Nashville, Memphis, Knoxville, Chattanooga, and more. Music City boudoir to Smoky Mountain escapes.",
  keywords: ["boudoir photographer tennessee", "boudoir photography nashville", "boudoir photographer memphis", "boudoir studio knoxville", "tennessee boudoir photography"],
  alternates: {
    canonical: "https://boudoirphotographyclub.com/boudoir-photographer-tennessee",
  },
};

const cities = [
  { name: "Nashville", slug: "nashville" },
  { name: "Memphis", slug: "memphis" },
  { name: "Knoxville", slug: "knoxville" },
  { name: "Chattanooga", slug: "chattanooga" },
  { name: "Clarksville", slug: "clarksville" },
  { name: "Murfreesboro", slug: "murfreesboro" },
  { name: "Franklin", slug: "franklin" },
  { name: "Jackson", slug: "jackson" },
  { name: "Johnson City", slug: "johnson-city" },
  { name: "Kingsport", slug: "kingsport" },
];

const faqs = [
  {
    q: "How much does boudoir photography cost in Tennessee?",
    a: "Tennessee boudoir pricing ranges from $350 to $2,500+. Nashville studios — especially in 12 South, East Nashville, and the Gulch — average $600–$2,000. Memphis and Knoxville mid-range studios run $450–$1,400. Smaller markets like Johnson City, Kingsport, and Jackson typically offer sessions starting at $350–$800.",
  },
  {
    q: "What makes Nashville a great city for boudoir photography?",
    a: "Nashville's bachelorette capital status has made it a natural hub for boudoir photography. Many women visiting for bachelorette weekends book boudoir sessions as part of their trip, creating a vibrant, experienced market of photographers. Nashville studios are expert at making first-timers feel confident and celebrating women at major life milestones.",
  },
  {
    q: "Are there boudoir photographers near Smoky Mountain national parks?",
    a: "Yes — Knoxville, Gatlinburg, and Pigeon Forge area photographers regularly use the Great Smoky Mountains National Park vicinity for stunning outdoor boudoir settings. Fall foliage sessions in the Smokies are particularly spectacular and book up months in advance.",
  },
  {
    q: "What is the boudoir scene like in Memphis?",
    a: "Memphis has a deeply soulful, creative boudoir community influenced by the city's blues, soul, and R&B heritage. Studios in Midtown and Cooper-Young reflect Memphis's artistic character — bold, authentic, and deeply personal. Many Memphis photographers specialize in celebrating Southern Black women with culturally resonant styling and storytelling.",
  },
  {
    q: "Can boudoir photography be a bachelorette experience in Nashville?",
    a: "Absolutely — this is actually one of Nashville's most popular boudoir categories. Many Nashville studios offer group bachelorette packages where the bride and her bridal party each get their own session back-to-back or simultaneously in separate spaces. Some studios even provide champagne service and a party atmosphere for bachelorette boudoir events.",
  },
];

export default function TennesseeBoudoirPage() {
  return (
    <div className="bg-surface text-on-surface">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 py-16">

        {/* Hero */}
        <h1 className="font-headline text-4xl md:text-5xl italic text-on-surface mb-4">
          Boudoir Photographers in Tennessee
        </h1>
        <p className="text-on-surface-variant text-lg mb-10 max-w-[760px] font-body leading-relaxed">
          Tennessee's boudoir photography scene is as rich and varied as the state itself — Music City's high-energy studios that cater to bachelorette celebrations and bridal gifts, Memphis's soulful and culturally expressive photographers, and the serene mountain-adjacent studios near the Smokies in Knoxville and Chattanooga. Tennessee photographers deliver warmth, creativity, and an atmosphere of celebration that makes every session feel special. Whether you are visiting Nashville for a bachelorette weekend, seeking a milestone session in Memphis, or escaping to the mountains near Knoxville, Tennessee has the right photographer for your moment. Pricing ranges from $350 to $2,500+.
        </p>

        {/* Why Tennessee */}
        <div className="mb-14">
          <h2 className="font-headline text-2xl italic text-on-surface mb-6">
            Why Choose Tennessee for Boudoir Photography
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-container-lowest rounded-lg p-6">
              <h3 className="font-headline text-lg text-on-surface mb-2">Nashville's Celebration Culture</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                Nashville is one of the bachelorette party capitals of the US, and boudoir photography has grown alongside that culture. Nashville studios are expertly designed around celebrating women at their best — confident, joyful, and beautifully captured at a meaningful moment in their lives.
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-lg p-6">
              <h3 className="font-headline text-lg text-on-surface mb-2">Smoky Mountain Outdoor Sessions</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                The Great Smoky Mountains provide one of the most dramatic and unique outdoor boudoir settings in the American South. Knoxville and Gatlinburg photographers offer mountain sessions ranging from secluded waterfall locations to rustic cabin settings that create truly unforgettable imagery.
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-lg p-6">
              <h3 className="font-headline text-lg text-on-surface mb-2">Memphis Soul and Cultural Richness</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                Memphis photographers bring the city's musical and artistic soul into their boudoir work. The city's deep creative heritage, combined with photographers who understand and honor the lives of Southern women, produces boudoir imagery with remarkable emotional depth and authenticity.
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-lg p-6">
              <h3 className="font-headline text-lg text-on-surface mb-2">Exceptional Value Statewide</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                Tennessee's cost of living advantage translates directly to boudoir photography pricing. You will find full-service experiences — professional glam, extended sessions, luxury album options — at prices significantly below comparable quality in Nashville's peer cities of Atlanta or Charlotte, and dramatically below NYC or LA.
              </p>
            </div>
          </div>
        </div>

        {/* Cities Grid */}
        <div className="mb-14">
          <h2 className="font-headline text-2xl italic text-on-surface mb-6">
            Featured Tennessee Cities
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/boudoir-photographer/tennessee/${city.slug}`}
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
            Boudoir Photography Pricing in Tennessee
          </h2>
          <p className="text-sm text-on-surface-variant font-body leading-relaxed mb-4">
            Tennessee offers outstanding value, with Nashville commanding the highest prices in the state due to its destination status:
          </p>
          <ul className="space-y-3 text-sm text-on-surface-variant font-body">
            <li><span className="text-on-surface font-label">Budget ($350–$750):</span> Smaller markets like Jackson, Johnson City, Kingsport, and Clarksville. Digital-only packages with shorter sessions. Ideal for first-time clients or those working within a tight budget. Hair and makeup usually not included or available as add-on.</li>
            <li><span className="text-on-surface font-label">Mid-Range ($750–$1,600):</span> The most popular tier across Nashville, Memphis, Knoxville, and Chattanooga. Full hair and makeup, 50–80 images, multiple outfit looks, and often a small print product. Strong client satisfaction at this investment level across all Tennessee major cities.</li>
            <li><span className="text-on-surface font-label">Luxury ($1,600–$2,500+):</span> Nashville flagship studios in 12 South and the Gulch, and boutique luxury experiences in Chattanooga's scenic North Shore. Extended sessions, bachelorette packages, heirloom albums, and photographers whose portfolios are consistently featured in regional bridal media.</li>
          </ul>
        </div>

        {/* Tips */}
        <div className="mb-14">
          <h2 className="font-headline text-2xl italic text-on-surface mb-6">
            What to Look for in a Tennessee Boudoir Photographer
          </h2>
          <div className="space-y-4">
            <div className="border-l-2 border-primary pl-5">
              <h3 className="font-label text-on-surface text-sm uppercase tracking-widest mb-1">Bachelorette and Group Experience</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">If you are booking a Nashville bachelorette boudoir experience, confirm the studio can accommodate groups and has dedicated bachelorette packages. Ask how many clients they can serve simultaneously and whether they provide champagne, robes, and celebration touches that make the experience feel like an event, not just a photoshoot.</p>
            </div>
            <div className="border-l-2 border-primary pl-5">
              <h3 className="font-label text-on-surface text-sm uppercase tracking-widest mb-1">Mountain Session Logistics</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">Smoky Mountain outdoor sessions require photographers familiar with the terrain, seasonal permits for Great Smoky Mountains National Park, and timing around the park's busy seasons. Fall foliage sessions book up extremely fast — plan to book 4–6 months in advance for October Smokies sessions.</p>
            </div>
            <div className="border-l-2 border-primary pl-5">
              <h3 className="font-label text-on-surface text-sm uppercase tracking-widest mb-1">Bridal and Honeymoon Specialization</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">Many Tennessee photographers specialize specifically in bridal boudoir — sessions booked as a wedding gift for a partner. Look for a photographer who understands how to create images that feel both romantic and personal, with special attention to packaging and gifting presentation for reveal books and albums.</p>
            </div>
            <div className="border-l-2 border-primary pl-5">
              <h3 className="font-label text-on-surface text-sm uppercase tracking-widest mb-1">Rush and Turnaround Timelines</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">Because many Tennessee boudoir sessions are gift-timed — for a bachelorette, wedding, or anniversary — confirm delivery timelines explicitly before booking. Reputable studios offer rush delivery options when needed, typically for an additional fee. Always get estimated delivery dates in writing as part of your contract.</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-14">
          <h2 className="font-headline text-2xl italic text-on-surface mb-6">
            Frequently Asked Questions — Tennessee Boudoir Photography
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
            Ready to Find Your Tennessee Boudoir Photographer?
          </h2>
          <p className="text-on-surface-variant font-body text-sm mb-6">Browse our full directory of verified boudoir photographers across Tennessee.</p>
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
