import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Start a Boudoir Photography Business: Complete Guide (2026)",
  description:
    "Step-by-step guide to starting a boudoir photography business in 2026. Covers equipment, studio setup, pricing strategy, marketing, legal considerations, client experience, and scaling your business.",
  keywords: [
    "how to start boudoir photography business",
    "boudoir photography business plan",
    "start boudoir business",
    "boudoir photography pricing strategy",
    "boudoir studio setup",
    "boudoir photography marketing",
    "boudoir business guide",
    "become a boudoir photographer",
  ],
  alternates: {
    canonical: "https://boudoirphotographyclub.com/blog/how-to-start-boudoir-business",
  },
};

export default function HowToStartBoudoirBusinessPage() {
  return (
    <div className="bg-surface text-on-surface">
      <article className="max-w-[800px] mx-auto px-6 sm:px-10 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm font-label text-on-surface-variant">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-on-surface">How to Start a Boudoir Photography Business</span>
        </nav>

        {/* Hero */}
        <header className="mb-12">
          <h1 className="font-headline text-4xl sm:text-5xl leading-tight mb-6">
            How to Start a Boudoir Photography Business: The Complete 2026 Guide
          </h1>
          <p className="text-on-surface-variant font-body text-lg leading-relaxed">
            Boudoir photography is one of the most rewarding and profitable niches in the portrait industry. The emotional impact of the work, the high per-client value, and the deeply personal nature of the service create a business model that is both creatively fulfilling and financially sustainable. This guide walks you through every step of launching a boudoir photography business, from initial setup to scaling beyond six figures.
          </p>
        </header>

        {/* Table of Contents */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 mb-12">
          <h2 className="font-headline text-lg mb-4">In This Guide</h2>
          <ul className="space-y-2 font-body text-primary">
            <li><a href="#why-boudoir" className="hover:underline">Why Boudoir Photography Is a Strong Business</a></li>
            <li><a href="#skills" className="hover:underline">Skills You Need Before You Start</a></li>
            <li><a href="#legal" className="hover:underline">Legal and Business Setup</a></li>
            <li><a href="#equipment" className="hover:underline">Essential Equipment</a></li>
            <li><a href="#studio" className="hover:underline">Studio Setup and Location</a></li>
            <li><a href="#pricing" className="hover:underline">Pricing Strategy</a></li>
            <li><a href="#client-experience" className="hover:underline">Creating the Client Experience</a></li>
            <li><a href="#marketing" className="hover:underline">Marketing Your Boudoir Business</a></li>
            <li><a href="#scaling" className="hover:underline">Scaling Beyond Six Figures</a></li>
            <li><a href="#faq" className="hover:underline">Frequently Asked Questions</a></li>
          </ul>
        </div>

        {/* Why Boudoir */}
        <section id="why-boudoir" className="mb-12">
          <h2 className="font-headline text-3xl mb-6">Why Boudoir Photography Is a Strong Business</h2>
          <p className="font-body text-lg leading-relaxed mb-4">
            Boudoir photography occupies a unique position in the portrait market. Unlike family photography or headshots, where clients are price-sensitive and sessions are often viewed as a commodity, boudoir is an emotional luxury experience. Clients are investing in how the session makes them <em>feel</em>, not just in a set of images. This emotional value supports premium pricing that would be difficult to justify in other portrait genres.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            The average boudoir client spends between $1,200 and $3,500 per session when products (albums, wall art, digital collections) are included. Many luxury boudoir photographers report average sales of $3,000 to $5,000 per client. At just two sessions per week, a boudoir photographer can generate $150,000 to $500,000 in annual revenue with relatively low overhead compared to other photography businesses.
          </p>
          <p className="font-body text-lg leading-relaxed">
            The market is also growing. The body positivity movement, social media normalization of boudoir, and the increasing popularity of &ldquo;self-investment&rdquo; experiences are driving more people to book sessions than ever before. Boudoir is no longer just a bridal gift &mdash; it is a birthday celebration, a confidence booster, a post-divorce reclamation, and a milestone marker for people of all ages and backgrounds.
          </p>
        </section>

        {/* Skills */}
        <section id="skills" className="mb-12">
          <h2 className="font-headline text-3xl mb-6">Skills You Need Before You Start</h2>
          <p className="font-body text-lg leading-relaxed mb-4">
            Technical photography skills are necessary but not sufficient for boudoir success. You need to master several additional competencies that are unique to this genre.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            <strong>Posing and body direction:</strong> Boudoir posing is a specialized skill that goes far beyond standard portrait posing. You need to understand how to elongate the body, create curves, minimize areas of insecurity, and make every client look stunning regardless of body type. This requires studying boudoir-specific posing techniques, practicing with models, and developing a posing flow that you can adapt to each client. Check our{" "}
            <Link href="/blog/boudoir-photography-poses" className="text-primary hover:underline">boudoir photography poses guide</Link>{" "}
            for foundational techniques.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            <strong>Client communication and emotional intelligence:</strong> Your clients will be nervous. Many will be stepping out of their comfort zone for the first time. Your ability to create a safe, empowering environment through clear communication, genuine warmth, and professional boundaries will determine whether your clients rave about the experience or regret booking. This soft skill is often the single biggest differentiator between successful boudoir photographers and those who struggle.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            <strong>Lighting for skin:</strong> Boudoir lighting requires an intimate understanding of how light interacts with skin. You need to know how to create soft, flattering light that minimizes texture while maintaining dimension. Hard light, mixed color temperatures, and poorly placed shadows can make skin look unflattering &mdash; mistakes that are much more visible in boudoir than in clothed portraiture. Our{" "}
            <Link href="/blog/boudoir-lighting-guide" className="text-primary hover:underline">boudoir lighting guide</Link>{" "}
            covers the fundamentals.
          </p>
          <p className="font-body text-lg leading-relaxed">
            <strong>Retouching:</strong> Boudoir retouching is detailed and time-consuming. Clients expect smooth, luminous skin, even color tones, and careful attention to details like stray hairs, fabric wrinkles, and blemishes. You need proficiency in Photoshop or Capture One, specifically in frequency separation, dodge and burn, and color grading techniques tailored to skin.
          </p>
        </section>

        {/* Legal */}
        <section id="legal" className="mb-12">
          <h2 className="font-headline text-3xl mb-6">Legal and Business Setup</h2>
          <p className="font-body text-lg leading-relaxed mb-4">
            Boudoir photography involves intimate imagery, which means your legal foundation needs to be especially thorough. Cutting corners here can expose you to significant liability.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            <strong>Business entity:</strong> Register your business as an LLC (Limited Liability Company) at minimum. An LLC separates your personal assets from your business liability, which is essential when you are creating and storing intimate images. Consult with a business attorney in your state to determine whether an LLC or S-Corp structure is more advantageous for your tax situation.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            <strong>Model release and privacy agreement:</strong> Every single client must sign a detailed model release and privacy agreement before the session begins. This document should specify who owns the images, whether you have permission to use images for marketing (with what restrictions), how images are stored and protected, and what happens to images if the business closes. Have an attorney who understands photography law draft these documents &mdash; generic templates from the internet are not sufficient for boudoir.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            <strong>Insurance:</strong> Carry both general business liability insurance and professional liability (errors and omissions) insurance. If you operate a studio, add commercial property coverage. If you shoot on location, ensure your policy covers off-premises work. Photography-specific insurance providers like Hill &amp; Usher, Package Choice, and Full Frame Insurance offer policies tailored to photographers.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            <strong>Data security:</strong> You are responsible for protecting intimate images from unauthorized access. Invest in encrypted storage, secure file transfer services (not standard email), and a clear data retention policy. Consider using gallery services that offer password protection and download tracking, such as Pic-Time or ShootProof.
          </p>
          <p className="font-body text-lg leading-relaxed">
            <strong>Sales tax and business licenses:</strong> Research your state and local requirements for sales tax collection on photography services and products. Some states tax digital delivery, others do not. You will also need a general business license and potentially a home occupation permit if you operate from a home studio.
          </p>
        </section>

        {/* Equipment */}
        <section id="equipment" className="mb-12">
          <h2 className="font-headline text-3xl mb-6">Essential Equipment</h2>
          <p className="font-body text-lg leading-relaxed mb-4">
            Your equipment needs to be reliable and capable of producing publication-quality images consistently. For a detailed breakdown of camera and lens options, see our{" "}
            <Link href="/blog/best-boudoir-cameras-guide" className="text-primary hover:underline">best cameras for boudoir photography guide</Link>.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            <strong>Minimum camera kit:</strong> One full-frame mirrorless body (Sony A7 IV, Canon R6 III, or Nikon Z6 III), an 85mm f/1.4 or f/1.8 prime, a 35mm or 50mm f/1.4 prime, and a backup body. The backup body is non-negotiable for a professional business &mdash; if your primary camera fails during a session, you need to be able to continue without interruption.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            <strong>Lighting:</strong> At minimum, one continuous LED panel or strobe with a large softbox, plus a five-in-one reflector. As you grow, add a second light for hair/rim lighting and a variety of modifiers (beauty dish, strip boxes, grids) to expand your creative options.
          </p>
          <p className="font-body text-lg leading-relaxed">
            <strong>Studio props and furniture:</strong> A quality bed frame and headboard, luxurious bedding (invest in high-thread-count sheets in neutral tones), a chaise lounge or vintage chair, full-length mirror, and sheer curtains for window light diffusion. These elements form the visual foundation of most boudoir sessions and are worth investing in early.
          </p>
        </section>

        {/* Studio */}
        <section id="studio" className="mb-12">
          <h2 className="font-headline text-3xl mb-6">Studio Setup and Location</h2>
          <p className="font-body text-lg leading-relaxed mb-4">
            Your shooting space is a critical part of the client experience. You have several options, each with trade-offs.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            <strong>Dedicated studio:</strong> Leasing a dedicated space gives you complete control over the environment, allows you to maintain permanent sets, and projects a professional image. The ideal boudoir studio is 500 to 1,000 square feet with at least one large window for natural light, a private entrance, and enough space for a bedroom set, a seating area, and a changing space. Monthly rent for studio space ranges from $800 to $3,000 depending on your market.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            <strong>Home studio:</strong> Converting a room in your home into a boudoir studio is the lowest-cost option for getting started. The room needs to be completely separated from your living space and have its own entrance if possible. You will need to check local zoning laws and potentially obtain a home occupation permit. The main drawback is that clients may feel less comfortable in a private home than in a commercial space.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            <strong>Hotel and Airbnb sessions:</strong> Shooting in hotel suites or styled Airbnb properties offers a luxury setting without the overhead of a dedicated studio. This approach works well for photographers who are building their business or who serve multiple geographic areas. The downsides are inconsistency (each location is different), the need to transport and set up equipment each time, and per-session rental costs that eat into your margins.
          </p>
          <p className="font-body text-lg leading-relaxed">
            <strong>Rental studio:</strong> Many cities have photography studios available for hourly or daily rental. This provides a professional space without a long-term lease commitment. Look for spaces that already have boudoir-appropriate furnishings, natural light options, and a private, comfortable atmosphere.
          </p>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mb-12">
          <h2 className="font-headline text-3xl mb-6">Pricing Strategy</h2>
          <p className="font-body text-lg leading-relaxed mb-4">
            Pricing is where many new boudoir photographers struggle. The temptation to price low to attract clients is strong, but underpricing your work creates a cycle of overwork and burnout that is difficult to escape. A strategic approach to pricing is essential for long-term sustainability.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            <strong>Cost of doing business (CODB):</strong> Before setting any prices, calculate your total annual business expenses: studio rent, insurance, equipment depreciation, software subscriptions, marketing, continuing education, taxes, and the salary you need to earn. Divide this by the number of sessions you can realistically shoot and edit per year (accounting for booking rate, seasonality, and vacation time). This gives you the minimum you need to charge per session just to break even.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            <strong>Session fee plus products model:</strong> The most common boudoir pricing model charges a session fee ($300 to $800) that covers the session itself, professional hair and makeup, and a small number of edited images. The majority of revenue comes from product sales during the reveal session &mdash; albums ($800 to $3,000), wall art ($300 to $1,500), and additional digital images ($50 to $150 each). This model works because it lowers the barrier to booking while allowing clients to invest more based on how much they love their images.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            <strong>All-inclusive packages:</strong> Some photographers prefer to offer all-inclusive packages where the client pays one price and receives everything (session, hair and makeup, a set number of edited images, and an album). Package pricing typically ranges from $1,500 for a basic package to $5,000+ for a luxury experience. This model simplifies the sales process and eliminates the &ldquo;reveal session sales&rdquo; component, which some photographers find uncomfortable.
          </p>
          <p className="font-body text-lg leading-relaxed">
            <strong>Raising prices over time:</strong> Start at a price that feels slightly uncomfortable &mdash; it should be high enough that you respect the work you are delivering but low enough that you can book consistently while building your portfolio. Plan to raise prices by 10 to 20 percent every six months as your portfolio, reviews, and demand grow. Photographers who raise prices regularly tend to attract higher-quality clients who value the experience more deeply.
          </p>
        </section>

        {/* Client Experience */}
        <section id="client-experience" className="mb-12">
          <h2 className="font-headline text-3xl mb-6">Creating the Client Experience</h2>
          <p className="font-body text-lg leading-relaxed mb-4">
            In boudoir photography, the client experience is the product. The images are important, but the emotional journey from initial inquiry through image delivery is what generates referrals, five-star reviews, and a sustainable business.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            <strong>Consultation:</strong> Every boudoir booking should begin with a consultation &mdash; either in-person, via video call, or over the phone. This is your opportunity to understand the client&rsquo;s goals, address their concerns, discuss wardrobe options, and set expectations for the session. A thorough consultation builds trust and dramatically reduces no-shows and cancellations. Use our{" "}
            <Link href="/blog/what-to-wear-to-boudoir-shoot" className="text-primary hover:underline">what to wear guide</Link>{" "}
            as a resource to share with clients.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            <strong>Pre-session preparation:</strong> Send a detailed preparation guide one to two weeks before the session covering skincare tips, wardrobe recommendations, what to bring, what to expect on the day, and practical details (parking, studio address, timeline). The more prepared a client feels, the more relaxed and confident they will be during the shoot.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            <strong>Session day:</strong> Create a welcoming environment from the moment the client walks through the door. Offer beverages, have music playing, keep the studio at a comfortable temperature, and allow plenty of time for hair and makeup before the shoot begins. During the session, provide constant encouragement and show the client a few images on the back of the camera or tethered screen to build their excitement.
          </p>
          <p className="font-body text-lg leading-relaxed">
            <strong>Reveal and delivery:</strong> The reveal session &mdash; where the client sees their edited images for the first time &mdash; is the emotional crescendo of the experience. Project the images on a large screen, play music, and give the client space to react. This is often when clients cry, laugh, and express genuine amazement at how beautiful they look. After the reveal, guide them through product selection with patience and without pressure.
          </p>
        </section>

        {/* Marketing */}
        <section id="marketing" className="mb-12">
          <h2 className="font-headline text-3xl mb-6">Marketing Your Boudoir Business</h2>
          <p className="font-body text-lg leading-relaxed mb-4">
            Boudoir marketing requires a different approach than other photography genres because the service is intimate and many potential clients feel nervous about booking. Your marketing needs to simultaneously showcase your artistry and make prospective clients feel safe and excited.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            <strong>Website and SEO:</strong> Your website is your most important marketing asset. It should feature a curated portfolio that represents the diversity of your work (different body types, ages, and styles), client testimonials that speak to the emotional experience, clear pricing information (at minimum, a starting price), and an easy booking process. Optimize your site for local search terms like &ldquo;boudoir photographer in [your city]&rdquo; and create blog content targeting common questions. Listing your business on directories like{" "}
            <Link href="/boudoir-photographers" className="text-primary hover:underline">Boudoir Photography Club</Link>{" "}
            extends your reach to clients actively searching for boudoir photographers.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            <strong>Social media:</strong> Instagram and Pinterest are the primary social platforms for boudoir photographers. Post consistently (three to five times per week), use relevant hashtags, share behind-the-scenes content that demystifies the session experience, and repost client testimonials (with permission). Video content &mdash; particularly short-form video showing session clips, before-and-after transformations, and client reactions &mdash; performs exceptionally well for boudoir marketing.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            <strong>Referral program:</strong> Satisfied boudoir clients are your best marketers. Implement a referral program that rewards clients for sending friends &mdash; a print credit, a discount on their next session, or a complimentary album upgrade. Word of mouth from someone who has experienced your work firsthand is the highest-converting marketing channel in boudoir.
          </p>
          <p className="font-body text-lg leading-relaxed">
            <strong>Vendor partnerships:</strong> Build relationships with complementary businesses: lingerie boutiques, hair and makeup artists, bridal shops, luxury hotels, spas, and personal trainers. Cross-promote each other&rsquo;s services and consider collaborative styled shoots that generate content for both businesses. Bridal shows and women&rsquo;s expos are also effective for reaching potential clients who have never considered boudoir.
          </p>
        </section>

        {/* Scaling */}
        <section id="scaling" className="mb-12">
          <h2 className="font-headline text-3xl mb-6">Scaling Beyond Six Figures</h2>
          <p className="font-body text-lg leading-relaxed mb-4">
            Once your boudoir business is established and consistently profitable, there are several paths to scale beyond the solo photographer model.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            <strong>Raise your average sale:</strong> The highest-leverage growth strategy is increasing how much each client spends. This does not mean being pushy &mdash; it means delivering such an extraordinary experience that clients naturally want to invest more. Upgrade your album options, introduce luxury products (folio boxes, fine art prints, custom boxes), and refine your reveal presentation to showcase products at their best.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            <strong>Add associate photographers:</strong> Train and hire associate photographers who shoot sessions under your brand. This allows you to serve more clients per week without shooting every session yourself. Ensure your associates are trained in your posing style, client communication approach, and editing aesthetic to maintain brand consistency.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            <strong>Offer education:</strong> Once you have a proven, profitable boudoir business, other photographers will pay to learn from you. Workshops, mentorships, online courses, and mastermind groups can generate significant revenue with relatively low incremental cost. Many six-figure boudoir photographers generate an additional $50,000 to $200,000 per year through education.
          </p>
          <p className="font-body text-lg leading-relaxed">
            <strong>Expand service offerings:</strong> Consider adding related services like couples boudoir, maternity boudoir, or bridal boudoir as specialized packages with premium pricing. Each sub-niche attracts a different audience while leveraging your existing skills and studio setup.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12">
          <h2 className="font-headline text-3xl mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-surface-container-lowest rounded-xl p-6">
              <h3 className="font-headline text-xl mb-3">How much money do I need to start a boudoir photography business?</h3>
              <p className="font-body text-lg leading-relaxed">
                A bare-minimum startup costs approximately $5,000 to $8,000 (used camera and lens, basic lighting, insurance, legal setup, and initial marketing). A more comfortable launch with new equipment, a professional website, studio props, and a marketing budget runs $15,000 to $25,000. If you are leasing dedicated studio space from day one, add $10,000 to $15,000 for buildout and first/last month&rsquo;s rent.
              </p>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-6">
              <h3 className="font-headline text-xl mb-3">Can I start a boudoir business part-time?</h3>
              <p className="font-body text-lg leading-relaxed">
                Absolutely. Many successful boudoir photographers started by shooting weekends while maintaining full-time employment. Boudoir sessions are typically booked on weekends and evenings, making it naturally compatible with a part-time schedule. Transition to full-time once your boudoir income consistently exceeds your day-job salary for at least three to six months.
              </p>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-6">
              <h3 className="font-headline text-xl mb-3">Do I need formal photography education?</h3>
              <p className="font-body text-lg leading-relaxed">
                A photography degree is not required. What matters is your ability to create beautiful images consistently and deliver an exceptional client experience. Invest in boudoir-specific workshops and mentorships from established boudoir photographers. Practice extensively with volunteer models before accepting paying clients. Build a portfolio of at least 30 to 50 edited images across multiple sessions before launching professionally.
              </p>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-6">
              <h3 className="font-headline text-xl mb-3">How do I handle nervous or self-conscious clients?</h3>
              <p className="font-body text-lg leading-relaxed">
                Nearly every boudoir client is nervous before their session &mdash; it is completely normal. Address this directly during the consultation by validating their feelings and explaining exactly what the session will involve. On session day, take time for conversation during hair and makeup, start with simple standing poses that feel less vulnerable, provide constant positive feedback, and show images on the camera screen to build confidence early. Our{" "}
                <Link href="/blog/boudoir-confidence-guide" className="text-primary hover:underline">boudoir confidence guide</Link>{" "}
                has additional strategies.
              </p>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-6">
              <h3 className="font-headline text-xl mb-3">How do I get my first clients?</h3>
              <p className="font-body text-lg leading-relaxed">
                Offer five to ten complimentary or heavily discounted &ldquo;model call&rdquo; sessions to build your portfolio. Ask friends, family members, or local models to participate. In exchange for free or discounted images, request honest reviews and permission to use selected images in your marketing. Post the results on social media, submit your work to boudoir-focused publications, and list your business on photographer directories like{" "}
                <Link href="/boudoir-photographers" className="text-primary hover:underline">Boudoir Photography Club</Link>.
              </p>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-6">
              <h3 className="font-headline text-xl mb-3">Is the boudoir market saturated?</h3>
              <p className="font-body text-lg leading-relaxed">
                The market is competitive in major cities but far from saturated nationwide. Demand for boudoir photography continues to grow as cultural attitudes toward body positivity and self-investment evolve. Success in a competitive market comes from differentiation &mdash; develop a distinctive style, deliver an exceptional experience, and build a reputation through consistently excellent work and reviews. Photographers who treat boudoir as a luxury experience rather than a commodity will always find clients willing to invest.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-surface-container-lowest rounded-2xl p-8 sm:p-10 text-center">
          <h2 className="font-headline text-2xl sm:text-3xl mb-4">List Your Boudoir Business</h2>
          <p className="font-body text-lg text-on-surface-variant mb-6 max-w-lg mx-auto">
            Once you are ready to attract clients, list your boudoir photography business in our directory to connect with people searching for photographers in your area.
          </p>
          <Link
            href="/boudoir-photographers"
            className="inline-block bg-primary text-white font-label px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Browse the Photographer Directory
          </Link>
        </section>
      </article>
    </div>
  );
}
