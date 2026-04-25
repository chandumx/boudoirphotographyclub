import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boudoir Photographers in Texas — Find Studios in Dallas, Houston, Austin & More",
  description: "Find the best boudoir photographers in Texas. Compare studios in Dallas, Houston, Austin, San Antonio, and 60+ Texas cities. Pricing $300–$3,000+.",
  keywords: ["boudoir photographer texas", "boudoir photography dallas", "boudoir photographer houston", "boudoir studio austin", "texas boudoir photography"],
  alternates: {
    canonical: "https://boudoirphotographyclub.com/boudoir-photographer-texas",
  },
};

const cities = [
  { name: "Dallas", slug: "dallas" },
  { name: "Houston", slug: "houston" },
  { name: "Austin", slug: "austin" },
  { name: "San Antonio", slug: "san-antonio" },
  { name: "Fort Worth", slug: "fort-worth" },
  { name: "El Paso", slug: "el-paso" },
  { name: "Arlington", slug: "arlington" },
  { name: "Corpus Christi", slug: "corpus-christi" },
  { name: "Plano", slug: "plano" },
  { name: "Lubbock", slug: "lubbock" },
];

const faqs = [
  {
    q: "How much does boudoir photography cost in Texas?",
    a: "Texas boudoir pricing ranges from $300 for a basic digital session to $3,000+ for a luxury all-inclusive experience. Dallas and Austin studios average $600–$1,800, while smaller markets like Lubbock or El Paso typically run $300–$900. Most mid-range packages include hair, makeup, and a digital gallery.",
  },
  {
    q: "Which Texas city has the best boudoir photography scene?",
    a: "Austin and Dallas lead the state in boudoir photography quality and variety. Austin draws creative photographers with an artsy, alternative edge, while Dallas studios tend toward classic luxury glamour. Houston has a large market with options at every price point.",
  },
  {
    q: "Are there boudoir photographers who specialize in military spouse sessions in Texas?",
    a: "Yes — with major military installations like Fort Hood, Fort Sam Houston, and Fort Bliss, many Texas photographers specialize in deployment and military homecoming boudoir sessions. Look for studios near Killeen, San Antonio, and El Paso for military-focused experience.",
  },
  {
    q: "Can I do an outdoor boudoir session in Texas?",
    a: "Outdoor boudoir is popular in Texas spring and fall. Hill Country near Austin and San Antonio offers stunning wildflower meadow and creek settings. Photographers in Houston and Corpus Christi offer beach and bayou sessions. Summers are very hot, so early morning outdoor shoots are preferred.",
  },
  {
    q: "What is the best time of year to book a Texas boudoir session?",
    a: "Spring (March–May) and fall (September–November) are ideal for Texas boudoir photography, especially for outdoor sessions. These months offer mild temperatures and beautiful natural light. Studio sessions can be booked year-round without weather concerns.",
  },
];

export default function TexasBoudoirPage() {
  return (
    <div className="bg-surface text-on-surface">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 py-16">

        {/* Hero */}
        <h1 className="font-headline text-4xl md:text-5xl italic text-on-surface mb-4">
          Boudoir Photographers in Texas
        </h1>
        <p className="text-on-surface-variant text-lg mb-10 max-w-[760px] font-body leading-relaxed">
          Texas is a boudoir photography powerhouse. The Lone Star State's sprawling metro areas — Dallas, Houston, Austin, and San Antonio — are home to hundreds of talented photographers spanning every style, from classic Hollywood glamour to bold editorial artistry. With a thriving creative scene, military spouse community, and deeply personal boudoir culture, Texas photographers understand how to make every client feel confident and celebrated. Pricing across Texas runs $300 to $3,000+, with exceptional value available across all major cities.
        </p>

        {/* Why Texas */}
        <div className="mb-14">
          <h2 className="font-headline text-2xl italic text-on-surface mb-6">
            Why Choose Texas for Boudoir Photography
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-container-lowest rounded-lg p-6">
              <h3 className="font-headline text-lg text-on-surface mb-2">Exceptional Value Across All Markets</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                Texas photographers consistently deliver high-quality work at prices well below comparable studios in New York or California. The competitive market means clients benefit from better packages, more inclusive pricing, and stronger customer service across every tier.
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-lg p-6">
              <h3 className="font-headline text-lg text-on-surface mb-2">Military-Friendly Studios</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                Texas has one of the largest military populations in the country. Many studios near bases like Fort Hood, Fort Sam Houston, and Fort Bliss specialize in military spouse boudoir, deployment gifts, and homecoming sessions with deep respect for military culture.
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-lg p-6">
              <h3 className="font-headline text-lg text-on-surface mb-2">Diverse Aesthetic Landscape</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                From Austin's eclectic creative studios to Dallas's luxury glam spaces, Texas offers every boudoir aesthetic. Hill Country, Gulf Coast beaches, and urban rooftops give photographers access to uniquely Texan backdrops that set sessions apart from standard studio work.
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-lg p-6">
              <h3 className="font-headline text-lg text-on-surface mb-2">Warm, Body-Positive Culture</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                Texas boudoir photographers are known for their welcoming, empowering approach. Many studios have built strong local communities around body positivity and self-love, with client walls, private Facebook groups, and inclusive marketing that speaks to real women at every life stage.
              </p>
            </div>
          </div>
        </div>

        {/* Cities Grid */}
        <div className="mb-14">
          <h2 className="font-headline text-2xl italic text-on-surface mb-6">
            Featured Texas Cities
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/boudoir-photographer/texas/${city.slug}`}
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
            Boudoir Photography Pricing in Texas
          </h2>
          <p className="text-sm text-on-surface-variant font-body leading-relaxed mb-4">
            Texas pricing reflects both regional cost-of-living differences and the competitive nature of the state's photography market:
          </p>
          <ul className="space-y-3 text-sm text-on-surface-variant font-body">
            <li><span className="text-on-surface font-label">Budget ($300–$700):</span> Entry-level digital packages in smaller markets. Typically 15–30 edited images with a short 1–2 hour session. Hair and makeup usually not included.</li>
            <li><span className="text-on-surface font-label">Mid-Range ($700–$1,800):</span> The sweet spot for most Texas clients. Hair and makeup, wardrobe guidance, 50–80 edited images, and possible album options. Available in all major metro areas.</li>
            <li><span className="text-on-surface font-label">Luxury ($1,800–$3,000+):</span> Premium all-inclusive experiences at top Dallas, Austin, and Houston studios. Full-day sessions, multiple outfit looks, extensive retouching, and luxury album products.</li>
          </ul>
        </div>

        {/* Tips */}
        <div className="mb-14">
          <h2 className="font-headline text-2xl italic text-on-surface mb-6">
            What to Look for in a Texas Boudoir Photographer
          </h2>
          <div className="space-y-4">
            <div className="border-l-2 border-primary pl-5">
              <h3 className="font-label text-on-surface text-sm uppercase tracking-widest mb-1">Studio Privacy Standards</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">A reputable Texas boudoir studio will have a private, lockable space where you will never share time with other clients or non-staff individuals. Ask explicitly about who else is present during your session before booking.</p>
            </div>
            <div className="border-l-2 border-primary pl-5">
              <h3 className="font-label text-on-surface text-sm uppercase tracking-widest mb-1">Experience with Your Body Type</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">Browse portfolio galleries specifically for clients who look like you. Texas photographers vary widely in their expertise with plus-size, petite, postpartum, and mature clients — find one with a proven track record for your body type.</p>
            </div>
            <div className="border-l-2 border-primary pl-5">
              <h3 className="font-label text-on-surface text-sm uppercase tracking-widest mb-1">Turnaround Time Commitments</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">Texas studios are busy. Ask upfront about gallery delivery timelines — most reputable studios deliver within 3–8 weeks. Avoid any photographer who cannot give you a written delivery window.</p>
            </div>
            <div className="border-l-2 border-primary pl-5">
              <h3 className="font-label text-on-surface text-sm uppercase tracking-widest mb-1">In-Person Reveal Sessions</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">Many top Texas studios offer an in-person image reveal and ordering appointment where you view your photos together in the studio. This experience is considered the gold standard — and it shows the photographer is invested in the full journey, not just the shoot.</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-14">
          <h2 className="font-headline text-2xl italic text-on-surface mb-6">
            Frequently Asked Questions — Texas Boudoir Photography
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
            Ready to Find Your Texas Boudoir Photographer?
          </h2>
          <p className="text-on-surface-variant font-body text-sm mb-6">Browse our full directory of verified boudoir photographers across Texas.</p>
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
