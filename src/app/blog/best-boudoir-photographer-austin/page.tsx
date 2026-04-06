import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Boudoir Photographers in Austin TX (2026 Guide)",
  description:
    "Find the best boudoir photographers in Austin for 2026. Pricing from $350-$2,000+, top studio areas from South Congress to East Austin, and tips for booking your Austin boudoir session.",
  keywords: [
    "boudoir photographer austin",
    "austin boudoir photography",
    "boudoir photography austin tx",
    "best boudoir photographer austin",
    "austin boudoir session",
    "boudoir photos austin texas",
  ],
  alternates: {
    canonical: "https://boudoirphotographyclub.com/blog/best-boudoir-photographer-austin",
  },
};

export default function AustinBoudoirGuidePage() {
  return (
    <div className="bg-surface text-on-surface">
      <article className="max-w-[800px] mx-auto px-6 sm:px-10 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm font-label text-on-surface-variant">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/boudoir-photographers" className="hover:text-primary">Photographers</Link>
          <span className="mx-2">/</span>
          <span className="text-on-surface">Best Boudoir Photographers in Austin</span>
        </nav>

        {/* Hero */}
        <header className="mb-12">
          <h1 className="font-headline text-4xl sm:text-5xl leading-tight mb-6">
            Best Boudoir Photographers in Austin, TX (2026 Guide)
          </h1>
          <p className="text-on-surface-variant font-body text-lg leading-relaxed">
            Austin&rsquo;s boudoir photography scene is as vibrant and distinctive as the city itself &mdash; creative, unapologetically individual, and infused with the &ldquo;Keep Austin Weird&rdquo; spirit that has long defined this Texas capital. From the eclectic studios along South Congress to intimate spaces tucked into East Austin&rsquo;s arts district, the city offers a boudoir experience unlike anywhere else in Texas. This guide covers everything you need to know about finding and booking the perfect boudoir photographer in Austin.
          </p>
        </header>

        {/* Table of Contents */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 mb-12">
          <h2 className="font-headline text-lg mb-4">In This Guide</h2>
          <ul className="space-y-2 font-body text-primary">
            <li><a href="#scene" className="hover:underline">The Austin Boudoir Photography Scene</a></li>
            <li><a href="#pricing" className="hover:underline">Average Boudoir Photography Pricing in Austin</a></li>
            <li><a href="#neighborhoods" className="hover:underline">Best Areas for Boudoir Studios</a></li>
            <li><a href="#unique" className="hover:underline">What Makes Austin Unique for Boudoir</a></li>
            <li><a href="#choosing" className="hover:underline">Tips for Choosing a Photographer</a></li>
            <li><a href="#expect" className="hover:underline">What to Expect at Your Session</a></li>
            <li><a href="#timing" className="hover:underline">Best Time of Year to Book</a></li>
            <li><a href="#faq" className="hover:underline">Frequently Asked Questions</a></li>
          </ul>
        </div>

        {/* Scene */}
        <section id="scene" className="mb-12">
          <h2 className="font-headline text-3xl mb-6">The Austin Boudoir Photography Scene</h2>
          <p className="font-body text-lg leading-relaxed mb-4">
            Austin has cultivated one of the most dynamic and diverse boudoir photography communities in Texas. The city&rsquo;s explosive growth over the past decade &mdash; fueled by an influx of tech workers, musicians, artists, and entrepreneurs &mdash; has created a client base that is both adventurous and deeply invested in authentic self-expression. Where Dallas leans toward polished glamour and Houston toward classic elegance, Austin boudoir tends to embrace the unconventional, the artistic, and the genuinely personal.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            The &ldquo;Keep Austin Weird&rdquo; ethos permeates the boudoir scene in meaningful ways. Austin photographers are more likely to experiment with unusual locations, bold creative concepts, and unexpected styling choices. Clients here often arrive with strong creative visions of their own, collaborating with photographers as genuine partners rather than simply following direction. The result is a body of boudoir work that is consistently more experimental and expressive than you&rsquo;ll find in more conservative Texas markets.
          </p>
          <p className="font-body text-lg leading-relaxed">
            Austin&rsquo;s live music culture has also shaped the boudoir aesthetic. There is an inherent performance confidence in a city where musicians play on street corners and in venues every night of the week &mdash; and that energy translates beautifully into boudoir work. Many Austin photographers describe their clients as unusually comfortable in front of the camera, which often produces sessions with a natural electricity and ease. Browse our{" "}
            <Link href="/boudoir-photographers" className="text-primary hover:underline">photographer directory</Link>{" "}
            to explore options across Texas and beyond.
          </p>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mb-12">
          <h2 className="font-headline text-3xl mb-6">Average Boudoir Photography Pricing in Austin</h2>
          <p className="font-body text-lg leading-relaxed mb-4">
            Austin boudoir pricing has increased alongside the city&rsquo;s rising cost of living, though it remains more accessible than coastal markets like Los Angeles or New York. The range is wide, reflecting both a mature market with established luxury photographers at the top and a steady stream of talented emerging photographers at more accessible price points.
          </p>
          <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 mb-6">
            <ul className="space-y-3 font-body text-lg">
              <li><strong>Mini Sessions (30&ndash;45 min):</strong> $350&ndash;$600. Includes 1&ndash;2 outfit changes and a select gallery of 5&ndash;15 digital images.</li>
              <li><strong>Standard Sessions (1&ndash;2 hours):</strong> $600&ndash;$1,400. Includes professional hair and makeup, 3&ndash;4 outfit changes, and 20&ndash;40 edited digital images.</li>
              <li><strong>Luxury Experiences (2&ndash;4 hours):</strong> $1,400&ndash;$2,000+. Full styling consultation, multiple sets or outdoor locations, 50+ images, and premium printed products.</li>
              <li><strong>Hair &amp; Makeup (if not included):</strong> $125&ndash;$275.</li>
            </ul>
          </div>
          <p className="font-body text-lg leading-relaxed">
            Austin has a strong in-person sales (IPS) culture among established photographers, where total client investments typically range from $1,200 to $2,500 when products are included. All-inclusive packages are also widely available and make budgeting straightforward. For full national pricing context, visit our{" "}
            <Link href="/blog/how-much-does-boudoir-photography-cost" className="text-primary hover:underline">boudoir photography cost guide</Link>.
          </p>
        </section>

        {/* Neighborhoods */}
        <section id="neighborhoods" className="mb-12">
          <h2 className="font-headline text-3xl mb-6">Best Areas for Boudoir Studios in Austin</h2>

          <h3 className="font-headline text-xl mb-3 mt-8">South Congress (SoCo)</h3>
          <p className="font-body text-lg leading-relaxed mb-4">
            South Congress Avenue is arguably Austin&rsquo;s most iconic neighborhood, and it is home to some of the city&rsquo;s most creative and well-appointed boudoir studios. SoCo&rsquo;s mix of vintage shops, art galleries, boutique hotels, and vibrant street life creates an atmosphere that immediately puts clients in a creative, playful mindset. Studios in this area tend to have strong aesthetic identities &mdash; expect carefully curated interiors, bold color palettes, and props that reflect Austin&rsquo;s eclectic personality. The neighborhood&rsquo;s walkability and abundance of excellent coffee shops and restaurants make the pre- or post-session experience particularly enjoyable.
          </p>

          <h3 className="font-headline text-xl mb-3 mt-8">East Austin Arts District</h3>
          <p className="font-body text-lg leading-relaxed mb-4">
            East Austin has transformed into the city&rsquo;s most dynamic creative hub, with converted warehouses, muraled walls, and an ever-expanding community of artists, photographers, and makers. Boudoir studios in East Austin tend toward industrial-chic aesthetics &mdash; exposed concrete, weathered brick, oversized windows, and open floor plans that allow photographers to build a variety of distinct scenes within a single space. The neighborhood&rsquo;s artistic energy and unpretentious vibe make it particularly popular with clients seeking a more editorial or avant-garde boudoir experience. Parking can be competitive on weekends, so plan accordingly.
          </p>

          <h3 className="font-headline text-xl mb-3 mt-8">Downtown Austin</h3>
          <p className="font-body text-lg leading-relaxed mb-4">
            Downtown Austin studios cater to clients who want a polished, high-end experience in the heart of the city. Studios near the Sixth Street entertainment district or along Congress Avenue can offer dramatic urban backdrops &mdash; floor-to-ceiling windows with skyline views, rooftop access, and modern minimalist interiors. These spaces are ideal for clients seeking glamour and sophistication. Several luxury hotel suites in downtown Austin are also popular for boutique boudoir experiences. Downtown sessions pair well with a celebratory dinner at one of Austin&rsquo;s acclaimed restaurants.
          </p>

          <h3 className="font-headline text-xl mb-3 mt-8">Rainey Street District</h3>
          <p className="font-body text-lg leading-relaxed mb-4">
            The Rainey Street Historic District &mdash; a cluster of converted bungalows turned bars and creative spaces along the Colorado River &mdash; has quietly become a sought-after location for boutique boudoir studios. The charming residential architecture, mature trees, and proximity to Lady Bird Lake make this neighborhood distinctly Austinian. Studios here tend to have a warm, intimate feel that contrasts beautifully with the energy of East Austin&rsquo;s industrial spaces. The neighborhood&rsquo;s unique character often shines through in finished images, giving them an unmistakably Austin atmosphere.
          </p>

          <h3 className="font-headline text-xl mb-3 mt-8">North Austin, Cedar Park &amp; Round Rock</h3>
          <p className="font-body text-lg leading-relaxed">
            The northern suburbs have developed their own robust boudoir markets. Cedar Park, Round Rock, and the Domain area in North Austin are home to talented photographers who offer excellent work at price points often slightly below central Austin. For clients in the suburbs who prefer to stay local, these markets provide quality without compromise. Parking is universally easier in these areas, and studio spaces are often larger with more dedicated amenity areas for hair, makeup, and client prep.
          </p>
        </section>

        {/* What Makes Austin Unique */}
        <section id="unique" className="mb-12">
          <h2 className="font-headline text-3xl mb-6">What Makes Austin Unique for Boudoir Photography</h2>
          <ul className="list-disc pl-6 space-y-3 font-body text-lg leading-relaxed mb-4">
            <li><strong>The &ldquo;Keep Austin Weird&rdquo; culture.</strong> Austin&rsquo;s founding ethos celebrates individuality, creativity, and the unconventional. This translates directly into a boudoir scene that embraces all body types, aesthetics, and creative visions without judgment. Photographers here are generally more open to unusual concepts, alternative styling, and clients who want something genuinely different from a standard session.</li>
            <li><strong>Live music energy and performance confidence.</strong> In a city where live music is as much a part of daily life as coffee, there is a comfortable relationship with being seen and celebrated. Austin clients often bring a performer&rsquo;s ease to boudoir sessions &mdash; an ability to inhabit the moment and commit to the experience that produces consistently dynamic images.</li>
            <li><strong>Lady Bird Lake and outdoor options.</strong> Austin&rsquo;s beloved Lady Bird Lake, the greenbelt, and the broader Hill Country landscape offer distinctive outdoor boudoir options. Some photographers offer lake-adjacent sessions, cedar forest locations, or Hill Country ranchland settings that are simply unavailable in other Texas cities. These nature-forward sessions produce images with a uniquely Texan character.</li>
            <li><strong>Hot weather considerations and glow.</strong> Austin&rsquo;s intense heat &mdash; summers regularly exceed 100&deg;F &mdash; means that outdoor sessions require careful planning and timing. However, experienced Austin photographers know how to work with the light and warmth to create images with a golden, luminous quality that cold-weather cities simply cannot replicate. The Texas sun produces a skin-flattering warmth in images that many clients love.</li>
            <li><strong>A thriving wellness and body-positive movement.</strong> Austin&rsquo;s culture of wellness, yoga, and body positivity has made boudoir a mainstream form of self-celebration rather than a niche or taboo pursuit. Many photographers here have built their brands explicitly around empowerment and self-acceptance, creating studios where clients feel celebrated from the moment they walk through the door.</li>
          </ul>
          <p className="font-body text-lg leading-relaxed">
            Planning your outfits? Our{" "}
            <Link href="/blog/what-to-wear-to-boudoir-shoot" className="text-primary hover:underline">what to wear to a boudoir shoot</Link>{" "}
            guide has suggestions that work beautifully in Austin&rsquo;s studio and outdoor settings alike.
          </p>
        </section>

        {/* Choosing */}
        <section id="choosing" className="mb-12">
          <h2 className="font-headline text-3xl mb-6">Tips for Choosing a Boudoir Photographer in Austin</h2>
          <ul className="list-disc pl-6 space-y-3 font-body text-lg leading-relaxed">
            <li><strong>Identify your aesthetic before searching.</strong> Austin&rsquo;s boudoir market spans an unusually wide range of styles &mdash; from clean, minimalist, naturally lit work to bold, editorial, heavily styled productions. Spend time reviewing portfolios and identify the specific look and feel you want. The city has enough photographers that you should be able to find someone whose portfolio consistently reflects your vision.</li>
            <li><strong>Ask about heat management for outdoor sessions.</strong> If you want an outdoor Austin boudoir session, ask how the photographer handles Texas heat. The best photographers plan outdoor sessions for early morning or the golden hour before sunset, have a cool studio or vehicle nearby for breaks, and work efficiently to minimize client discomfort. Summer outdoor sessions should be approached carefully.</li>
            <li><strong>Consider the studio&rsquo;s air conditioning.</strong> This sounds trivial but matters. Austin summers are intense, and you will be changing outfits and posing in minimal clothing. A well-cooled studio is essential for comfort. Ask about studio climate control when booking, particularly for summer sessions.</li>
            <li><strong>Look for cultural fit as well as photographic fit.</strong> Austin photographers tend to have strong personalities and distinct studio cultures. Read reviews carefully for descriptions of the overall experience &mdash; energy, communication style, and the feeling in the room matter as much as the final images. A photographer whose culture matches your own will produce a more comfortable, authentic session.</li>
            <li><strong>Review our Austin listings.</strong> Start your search with our{" "}
              <Link href="/boudoir-photographers" className="text-primary hover:underline">boudoir photographer directory</Link>{" "}
              to browse verified Austin options with portfolio samples and pricing ranges. Our guide to{" "}
              <Link href="/blog/what-is-boudoir-photography" className="text-primary hover:underline">what boudoir photography is</Link>{" "}
              can also help you clarify your goals before your first consultation.</li>
          </ul>
        </section>

        {/* What to Expect */}
        <section id="expect" className="mb-12">
          <h2 className="font-headline text-3xl mb-6">What to Expect at a Boudoir Session in Austin</h2>
          <p className="font-body text-lg leading-relaxed mb-4">
            Austin boudoir sessions have a warm, personable energy that reflects the city&rsquo;s culture of genuine hospitality. Expect to arrive at a studio with a distinct personality &mdash; many Austin photographers have invested heavily in creating spaces that feel inspiring and welcoming from the moment you walk in. Your hair and makeup artist will spend 60&ndash;90 minutes creating your look while your photographer walks you through the session plan, answers questions, and helps you settle into a relaxed, excited state of mind.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            The shoot itself typically runs 1&ndash;2 hours for standard sessions, with 3&ndash;5 outfit changes. Austin photographers tend to be warm and conversational directors who create a collaborative atmosphere rather than issuing rigid instructions. Expect a mix of guided poses and organic, candid moments as you get comfortable. Music is always playing &mdash; and in Austin, your photographer may well have exceptional taste, given the city&rsquo;s musical heritage. Many photographers ask for your playlist preferences beforehand to create the right mood.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            Austin studios often stock locally made snacks and drinks &mdash; expect locally roasted coffee, artisan kombucha, or a chilled bottle of ros&eacute; alongside the standard champagne option. The city&rsquo;s culture of local pride and small-business support tends to extend to the entire studio experience. These small touches add up to a session that feels genuinely celebratory and intentional.
          </p>
          <p className="font-body text-lg leading-relaxed">
            Image delivery typically runs 2&ndash;4 weeks, with most photographers sending a sneak peek within 24&ndash;72 hours. IPS reveal appointments are common among established Austin photographers and are usually scheduled 2&ndash;3 weeks after your session. For a complete overview of the boudoir process from preparation through delivery, see our guide on{" "}
            <Link href="/blog/boudoir-photography-poses" className="text-primary hover:underline">boudoir photography poses</Link>{" "}
            and what to expect during your shoot.
          </p>
        </section>

        {/* Best Time to Book */}
        <section id="timing" className="mb-12">
          <h2 className="font-headline text-3xl mb-6">Best Time of Year to Book a Boudoir Session in Austin</h2>
          <ul className="list-disc pl-6 space-y-3 font-body text-lg leading-relaxed mb-4">
            <li><strong>January&ndash;February:</strong> Austin winters are mild by national standards &mdash; temperatures typically range from the low 40s to low 60s &mdash; making this one of the most comfortable times for boudoir sessions. Valentine&rsquo;s Day drives significant demand, so book 6&ndash;8 weeks ahead for February slots with established photographers.</li>
            <li><strong>March&ndash;April:</strong> Spring in Austin is spectacular. Bluebonnets blanket the Hill Country, temperatures are ideal (60&ndash;80&deg;F), and the natural light is long and golden. This is a standout season for outdoor boudoir options and one of the most popular booking windows. Bridal season begins in earnest &mdash; plan ahead.</li>
            <li><strong>May&ndash;June:</strong> Late spring offers excellent conditions before the intense summer heat arrives. May is a particularly sweet spot &mdash; warm enough for outdoor sessions in the early morning, with long evenings and beautiful light. Demand is moderate and availability is generally good.</li>
            <li><strong>July&ndash;August:</strong> Peak heat season, with temperatures regularly exceeding 100&deg;F. Outdoor sessions should be scheduled only at dawn or dusk with an experienced photographer who knows how to manage Texas summer conditions. Studio sessions are unaffected and benefit from some of the year&rsquo;s best available-light quality indoors. Demand is lower, which means better availability and potential value from photographers looking to fill their schedules.</li>
            <li><strong>September&ndash;October:</strong> Austin&rsquo;s unofficial boudoir peak season. The heat breaks in September, outdoor sessions become comfortable again, and the city fills with energy as the fall concert and festival season kicks off. This is the most competitive window for bookings &mdash; plan 2&ndash;3 months ahead for top photographers.</li>
            <li><strong>November&ndash;December:</strong> A quieter, more intimate season. Mild temperatures, softer light, and cozy studio atmospheres make fall and early winter a beautiful time for boudoir. Holiday gift bookings drive late November demand. The window between Thanksgiving and mid-December fills quickly.</li>
          </ul>
          <p className="font-body text-lg leading-relaxed">
            Austin&rsquo;s mild winters and long springs and falls give it an enviable boudoir calendar &mdash; there are very few truly difficult months for indoor studio sessions. The ideal booking windows for outdoor or nature-location sessions are March through May and September through October.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12">
          <h2 className="font-headline text-3xl mb-6">Frequently Asked Questions About Austin Boudoir Photography</h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-headline text-xl mb-3">Can I do an outdoor boudoir session near Austin?</h3>
              <p className="font-body text-lg leading-relaxed">
                Yes &mdash; Austin&rsquo;s natural surroundings offer some of the most distinctive outdoor boudoir backdrops in Texas. Lady Bird Lake, Barton Creek Greenbelt, and the Texas Hill Country all provide stunning natural settings. Several Austin photographers specialize in outdoor and nature-forward boudoir, shooting at dawn or in the golden hour to manage light and temperature. Hill Country ranch sessions are particularly popular and produce images with a genuinely cinematic quality. Expect an additional location fee of $150&ndash;$400 for private outdoor settings.
              </p>
            </div>
            <div>
              <h3 className="font-headline text-xl mb-3">Is the heat a real concern for Austin boudoir sessions?</h3>
              <p className="font-body text-lg leading-relaxed">
                For studio sessions, no. Austin boudoir studios are well air-conditioned and comfortable year-round. For outdoor sessions between June and September, heat is a genuine consideration. The best photographers plan outdoor summer sessions before 9 a.m. or after 6 p.m. and keep sessions brief and focused. If you are visiting Austin from a cooler climate and scheduling an outdoor session, communicate with your photographer about heat management and follow their guidance closely. The payoff &mdash; golden Texas light on your skin &mdash; is often worth the extra planning.
              </p>
            </div>
            <div>
              <h3 className="font-headline text-xl mb-3">Does the Keep Austin Weird culture extend to boudoir photography?</h3>
              <p className="font-body text-lg leading-relaxed">
                Absolutely, and it is one of the things that makes Austin boudoir special. Photographers here are generally more receptive to unusual creative concepts, unconventional styling, alternative aesthetics, and clients who want something genuinely different. If you have a specific vision that might feel too &ldquo;out there&rdquo; for a more conservative market &mdash; themed sessions, artistic nudes, alternative fashion, bold color concepts &mdash; Austin is likely the right city for you. Bring your ideas to the consultation and see how your photographer responds.
              </p>
            </div>
            <div>
              <h3 className="font-headline text-xl mb-3">Are there good boudoir photographers in the Austin suburbs?</h3>
              <p className="font-body text-lg leading-relaxed">
                Cedar Park, Round Rock, Pflugerville, Kyle, and Buda all have talented boudoir photographers serving the growing suburban Austin population. These markets typically offer slightly more accessible pricing than central Austin and the significant advantage of easy parking and shorter drives for clients in the northern and southern suburbs. Quality in the Austin metro suburbs is high across the board &mdash; the city&rsquo;s photography community has grown large enough that exceptional talent is distributed throughout the entire region.
              </p>
            </div>
            <div>
              <h3 className="font-headline text-xl mb-3">What is the difference between Austin and Dallas boudoir photography?</h3>
              <p className="font-body text-lg leading-relaxed">
                Austin and Dallas represent two distinct approaches to boudoir. Dallas boudoir tends toward polished glamour, luxury studio environments, and a classic, editorial-influenced aesthetic. Austin leans toward authenticity, creative individuality, and a more relaxed, collaborative energy. Pricing is broadly similar, though Dallas has a slightly larger concentration of luxury IPS photographers at the $2,500&ndash;$5,000+ total investment level. The right choice depends entirely on the experience and aesthetic you&rsquo;re seeking &mdash; neither city has objectively better photographers, but the cultural context of a session differs meaningfully between the two.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-surface-container-lowest rounded-2xl p-8 sm:p-10 text-center mb-12">
          <h2 className="font-headline text-2xl sm:text-3xl mb-4">Ready to Book Your Austin Boudoir Session?</h2>
          <p className="font-body text-lg text-on-surface-variant mb-6 max-w-lg mx-auto">
            Explore verified boudoir photographers in Austin, compare portfolios and pricing, and find the perfect photographer for your Keep Austin Weird experience.
          </p>
          <Link
            href="/boudoir-photographers"
            className="inline-block bg-primary text-on-primary font-label px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Find Austin Boudoir Photographers
          </Link>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="font-headline text-2xl mb-6">Related City Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog/best-boudoir-photographer-dallas"
              className="bg-surface-container-lowest rounded-2xl p-6 hover:bg-surface-container transition-colors"
            >
              <p className="font-headline text-lg mb-1">Best Boudoir Photographers in Dallas</p>
              <p className="font-body text-sm text-on-surface-variant">The complete 2026 guide to Dallas boudoir photography.</p>
            </Link>
            <Link
              href="/blog/best-boudoir-photographer-houston"
              className="bg-surface-container-lowest rounded-2xl p-6 hover:bg-surface-container transition-colors"
            >
              <p className="font-headline text-lg mb-1">Best Boudoir Photographers in Houston</p>
              <p className="font-body text-sm text-on-surface-variant">The complete 2026 guide to Houston boudoir photography.</p>
            </Link>
            <Link
              href="/blog/best-boudoir-photographer-nashville"
              className="bg-surface-container-lowest rounded-2xl p-6 hover:bg-surface-container transition-colors"
            >
              <p className="font-headline text-lg mb-1">Best Boudoir Photographers in Nashville</p>
              <p className="font-body text-sm text-on-surface-variant">The complete 2026 guide to Nashville boudoir photography.</p>
            </Link>
            <Link
              href="/blog/best-boudoir-photographer-denver"
              className="bg-surface-container-lowest rounded-2xl p-6 hover:bg-surface-container transition-colors"
            >
              <p className="font-headline text-lg mb-1">Best Boudoir Photographers in Denver</p>
              <p className="font-body text-sm text-on-surface-variant">The complete 2026 guide to Denver boudoir photography.</p>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
