import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bridal Boudoir Guide: The Ultimate Pre-Wedding Photo Experience",
  description:
    "Everything you need to know about bridal boudoir photography. Learn when to schedule before your wedding, how to incorporate bridal accessories, album ideas as a groom's gift, posing tips, pricing, and how to choose the right photographer.",
  keywords: [
    "bridal boudoir",
    "bridal boudoir photography",
    "bridal boudoir photos",
    "wedding boudoir",
    "boudoir for bride",
    "boudoir gift for groom",
    "bridal boudoir album",
    "bridal boudoir poses",
    "bridal boudoir photographer",
    "pre-wedding boudoir",
  ],
};

export default function BridalBoudoirGuidePage() {
  return (
    <div className="bg-surface text-on-surface">
      <article className="max-w-[800px] mx-auto px-6 sm:px-10 py-16">
        {/* Hero */}
        <header className="mb-12">
          <p className="font-label text-primary uppercase tracking-widest mb-4">
            Bridal Guide
          </p>
          <h1 className="font-headline text-4xl sm:text-5xl leading-tight mb-6">
            Bridal Boudoir: The Complete Guide to Your Pre-Wedding Photo
            Experience
          </h1>
          <p className="font-body text-on-surface-variant text-lg leading-relaxed">
            Bridal boudoir has become one of the most cherished parts of the
            wedding journey. It captures a bride in her most confident,
            radiant state -- celebrating the transition from engagement to
            marriage with a deeply personal photo experience. Whether you are
            creating a private album as a gift for your partner or simply
            honoring yourself during one of life&apos;s most transformative
            moments, bridal boudoir delivers images that will take your breath
            away for decades to come.
          </p>
        </header>

        {/* TOC */}
        <nav className="bg-surface-container-lowest rounded-2xl p-6 mb-12">
          <p className="font-label text-sm uppercase tracking-widest mb-3">
            In This Guide
          </p>
          <ul className="space-y-2 font-body text-primary">
            <li>
              <a href="#what-is-bridal-boudoir">What Is Bridal Boudoir?</a>
            </li>
            <li>
              <a href="#when-to-schedule">When to Schedule Before the Wedding</a>
            </li>
            <li>
              <a href="#gift-for-groom">Gift for the Groom (or Partner)</a>
            </li>
            <li>
              <a href="#wedding-accessories">
                Incorporating Wedding Accessories
              </a>
            </li>
            <li>
              <a href="#album-design">Album Design Ideas</a>
            </li>
            <li>
              <a href="#bridal-poses">Poses Specific to Bridal Boudoir</a>
            </li>
            <li>
              <a href="#choosing-photographer">
                How to Choose a Bridal Boudoir Photographer
              </a>
            </li>
            <li>
              <a href="#pricing">Bridal Boudoir Pricing</a>
            </li>
            <li>
              <a href="#timeline">Timeline Before Your Wedding Day</a>
            </li>
            <li>
              <a href="#faq">Frequently Asked Questions</a>
            </li>
          </ul>
        </nav>

        {/* What Is Bridal Boudoir */}
        <section id="what-is-bridal-boudoir" className="mb-14">
          <h2 className="font-headline text-2xl sm:text-3xl mb-4">
            What Is Bridal Boudoir Photography?
          </h2>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            Bridal boudoir is an intimate photography session specifically
            designed for brides-to-be. It blends the sensuality and confidence
            of traditional boudoir with bridal elements -- think veils draped
            over bare shoulders, wedding shoes against white sheets, or a
            bride wearing nothing but her engagement ring and a smile.
          </p>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            The session typically takes place weeks or months before the
            wedding and serves a dual purpose. First, it is a celebration of
            the bride as an individual -- a moment to feel beautiful, strong,
            and unapologetically herself before the whirlwind of the wedding
            day. Second, it often produces a stunning album or print collection
            that becomes a deeply personal wedding-day gift for the groom or
            partner.
          </p>
          <p className="font-body text-on-surface-variant leading-relaxed">
            Bridal boudoir is not about being provocative. It is about
            capturing a once-in-a-lifetime chapter with artistry, intention,
            and beauty. The images range from soft and romantic to bold and
            editorial, depending entirely on the bride&apos;s vision and
            comfort level.
          </p>
        </section>

        {/* When to Schedule */}
        <section id="when-to-schedule" className="mb-14">
          <h2 className="font-headline text-2xl sm:text-3xl mb-4">
            When to Schedule Your Bridal Boudoir Session
          </h2>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            Timing is critical for bridal boudoir because you need enough lead
            time for the session, retouching, and product creation -- all
            before the wedding day.
          </p>
          <h3 className="font-headline text-xl mb-3">
            The Ideal Window: 6 to 12 Weeks Before the Wedding
          </h3>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            This is the sweet spot. You are deep enough into wedding planning
            to feel the excitement, your fitness and beauty routines are in
            full swing, and there is plenty of time for the photographer to
            deliver a finished album before the big day.
          </p>
          <h3 className="font-headline text-xl mb-3">
            Minimum Lead Time: 4 Weeks
          </h3>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            If you are booking late, 4 weeks is the absolute minimum for most
            photographers to deliver retouched images. Album production adds
            another 3 to 6 weeks, so if you need a physical album for the
            wedding day, plan accordingly or ask about rush printing fees.
          </p>
          <h3 className="font-headline text-xl mb-3">
            Booking the Photographer: 3 to 6 Months Out
          </h3>
          <p className="font-body text-on-surface-variant leading-relaxed">
            The best bridal boudoir photographers book up quickly, especially
            during engagement season (November through February). Reach out 3
            to 6 months before your desired session date to secure your spot.
            Learn{" "}
            <Link href="/how-it-works" className="text-primary underline">
              how the booking process works
            </Link>{" "}
            to get started.
          </p>
        </section>

        {/* Gift for Groom */}
        <section id="gift-for-groom" className="mb-14">
          <h2 className="font-headline text-2xl sm:text-3xl mb-4">
            Creating a Bridal Boudoir Gift for Your Groom (or Partner)
          </h2>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            A bridal boudoir album is consistently rated as one of the most
            emotional and treasured gifts a bride can give on the wedding day.
            Here is how to make the presentation unforgettable.
          </p>
          <h3 className="font-headline text-xl mb-3">The Morning-of Reveal</h3>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            The most popular approach is to have the album delivered to the
            groom on the morning of the wedding while both partners are getting
            ready separately. Coordinate with your wedding planner or best man
            to place the album in a gift box with a handwritten note. The
            groom opens it privately, creating an intimate, emotional moment
            captured by the wedding photographer.
          </p>
          <h3 className="font-headline text-xl mb-3">The Night-Before Gift</h3>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            Some brides prefer to give the album the night before the wedding
            during a private dinner or quiet moment together. This allows the
            groom to process the gift without the rush of wedding-morning
            logistics.
          </p>
          <h3 className="font-headline text-xl mb-3">The Honeymoon Surprise</h3>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            If the album is not ready before the wedding or you prefer a more
            relaxed reveal, pack it in your honeymoon luggage. Presenting it
            during a quiet evening away creates a romantic post-wedding moment.
          </p>
          <h3 className="font-headline text-xl mb-3">
            Personalizing the Gift
          </h3>
          <p className="font-body text-on-surface-variant leading-relaxed">
            Include a handwritten letter inside the album cover. Engrave the
            album box with your wedding date or initials. Some brides add a
            pocket in the album for a printed copy of their wedding vows,
            creating a keepsake that intertwines both experiences.
          </p>
        </section>

        {/* Wedding Accessories */}
        <section id="wedding-accessories" className="mb-14">
          <h2 className="font-headline text-2xl sm:text-3xl mb-4">
            Incorporating Wedding Accessories into Your Session
          </h2>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            Bridal boudoir is unique because it allows you to incorporate
            wedding-specific items that tell the story of your upcoming day.
            These accessories bridge the gap between boudoir and bridal,
            creating a cohesive visual narrative.
          </p>
          <h3 className="font-headline text-xl mb-3">The Veil</h3>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            A cathedral-length veil draped over bare shoulders or cascading
            down the back creates ethereal, dreamlike images. Even a simple
            fingertip veil adds instant bridal context to any boudoir pose. The
            veil is arguably the single most powerful bridal prop.
          </p>
          <h3 className="font-headline text-xl mb-3">Wedding Shoes</h3>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            Heels add length to the legs and create beautiful lines in both
            standing and lying-down poses. Photograph them alone on the bed as
            a detail shot, or wear them with lingerie for a striking contrast
            between formal and intimate.
          </p>
          <h3 className="font-headline text-xl mb-3">The Wedding Dress</h3>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            Some brides bring their wedding gown to the boudoir session. Shots
            of the dress hanging in the background, worn loosely off the
            shoulders, or the bride stepping into it in beautiful light create
            a powerful visual connection to the wedding day. If your dress is
            not ready yet, a white robe or slip serves the same purpose.
          </p>
          <h3 className="font-headline text-xl mb-3">Jewelry</h3>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            Your engagement ring is a must. Photograph it prominently in
            close-up hand shots. Other wedding jewelry -- earrings, a necklace,
            a bracelet -- adds sparkle and reinforces the bridal theme.
          </p>
          <h3 className="font-headline text-xl mb-3">
            Something Borrowed, Something Blue
          </h3>
          <p className="font-body text-on-surface-variant leading-relaxed">
            Incorporate your &quot;something blue&quot; into the session --
            blue lingerie, a blue garter, blue heels, or a sapphire pendant.
            This subtle nod to wedding tradition adds a layered narrative to
            the images. For more wardrobe ideas, visit our{" "}
            <Link
              href="/blog/what-to-wear-to-boudoir-shoot"
              className="text-primary underline"
            >
              what to wear to a boudoir shoot
            </Link>{" "}
            guide.
          </p>
        </section>

        {/* Album Design */}
        <section id="album-design" className="mb-14">
          <h2 className="font-headline text-2xl sm:text-3xl mb-4">
            Bridal Boudoir Album Design Ideas
          </h2>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            The album is the centerpiece of a bridal boudoir gift. Choosing the
            right design elevates the images into a lasting work of art.
          </p>
          <h3 className="font-headline text-xl mb-3">Cover Options</h3>
          <ul className="list-disc pl-6 space-y-2 font-body text-on-surface-variant mb-4">
            <li>
              <strong>White or ivory leather:</strong> Classic, timeless, and
              unmistakably bridal. Pairs with any wedding aesthetic.
            </li>
            <li>
              <strong>Linen or fabric:</strong> Soft, textured covers in blush,
              champagne, or dusty rose feel romantic and modern.
            </li>
            <li>
              <strong>Image-wrapped:</strong> A favorite boudoir photo printed
              directly on the cover makes a bold, striking statement.
            </li>
            <li>
              <strong>Velvet:</strong> Deep jewel-toned velvet (emerald, navy,
              burgundy) adds drama and luxury.
            </li>
          </ul>
          <h3 className="font-headline text-xl mb-3">Layout Tips</h3>
          <ul className="list-disc pl-6 space-y-2 font-body text-on-surface-variant mb-4">
            <li>
              Open with a detail shot (shoes, veil, ring) before revealing full
              portraits. This builds anticipation.
            </li>
            <li>
              Use full-spread (panoramic) images for your most impactful poses.
            </li>
            <li>
              Alternate between close-ups and full-body shots for visual rhythm.
            </li>
            <li>
              End with a personal note page or your wedding vows printed on the
              final spread.
            </li>
          </ul>
          <h3 className="font-headline text-xl mb-3">Album Size</h3>
          <p className="font-body text-on-surface-variant leading-relaxed">
            Most bridal boudoir albums are 10x10 or 12x12 inches. Smaller
            formats (8x8) work well as more discreet, intimate keepsakes.
            Choose 20 to 30 images for a well-paced album that does not
            overwhelm -- every page should feel curated.
          </p>
        </section>

        {/* Bridal Poses */}
        <section id="bridal-poses" className="mb-14">
          <h2 className="font-headline text-2xl sm:text-3xl mb-4">
            Poses Specific to Bridal Boudoir
          </h2>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            While many standard boudoir poses work beautifully for bridal
            sessions, certain poses are uniquely suited to the bridal theme.
          </p>
          <h3 className="font-headline text-xl mb-3">The Veil Wrap</h3>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            Stand facing a window with the veil draped over your shoulders and
            pulled gently around your body. The sheer fabric creates layers of
            transparency and texture that are unmistakably bridal. Your
            photographer can shoot from behind for a mysterious silhouette or
            from the front to capture your expression through the tulle.
          </p>
          <h3 className="font-headline text-xl mb-3">Getting Ready</h3>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            Recreate the morning-of-the-wedding getting-ready moment. Sit at a
            vanity applying lipstick, step into your heels, or clasp a
            necklace while looking in a mirror. These documentary-style images
            feel natural and narrative-driven.
          </p>
          <h3 className="font-headline text-xl mb-3">The Ring Close-Up</h3>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            Place your hand prominently in a pose that showcases the engagement
            ring -- resting on your collarbone, touching your lips, or draped
            across white sheets. Ring detail shots are essential for bridal
            boudoir albums.
          </p>
          <h3 className="font-headline text-xl mb-3">
            The Dress Silhouette
          </h3>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            If you bring your wedding gown, let it hang in the background while
            you pose in lingerie in the foreground. The juxtaposition of the
            formal dress and intimate attire tells a compelling visual story
            about the public and private sides of the wedding experience.
          </p>
          <h3 className="font-headline text-xl mb-3">The Love Letter</h3>
          <p className="font-body text-on-surface-variant leading-relaxed">
            Write a short note to your partner and photograph yourself reading
            or writing it during the session. This adds an emotional layer and
            gives you a prop that doubles as a genuine keepsake.
          </p>
        </section>

        {/* Choosing a Photographer */}
        <section id="choosing-photographer" className="mb-14">
          <h2 className="font-headline text-2xl sm:text-3xl mb-4">
            How to Choose a Bridal Boudoir Photographer
          </h2>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            Your bridal boudoir photographer should understand both boudoir
            lighting and posing as well as the emotional significance of the
            bridal experience. Here is how to find the right fit.
          </p>
          <ol className="list-decimal pl-6 space-y-3 font-body text-on-surface-variant">
            <li>
              <strong>Look for bridal-specific work.</strong> A boudoir
              photographer who has a portfolio section dedicated to bridal
              sessions understands how to incorporate wedding elements
              naturally.
            </li>
            <li>
              <strong>Evaluate their editing style.</strong> Bridal boudoir
              benefits from soft, luminous editing that complements the
              romantic mood. Look for clean skin tones, soft shadows, and
              warmth.
            </li>
            <li>
              <strong>Ask about album production.</strong> Since many bridal
              boudoir sessions result in a physical album, choose a
              photographer who designs albums in-house or works with a
              professional lab. They should be able to show you samples.
            </li>
            <li>
              <strong>Confirm turnaround time.</strong> Explain your wedding
              date and ensure the photographer can deliver the finished product
              before it. Get this commitment in writing.
            </li>
            <li>
              <strong>Check personality fit.</strong> You will be in a
              vulnerable setting, so feeling comfortable with your photographer
              is non-negotiable. Schedule a consultation call or meeting before
              booking.
            </li>
            <li>
              <strong>Use our directory.</strong> Browse{" "}
              <Link
                href="/boudoir-photographers"
                className="text-primary underline"
              >
                our photographer directory
              </Link>{" "}
              to find bridal boudoir specialists in your area.
            </li>
          </ol>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mb-14">
          <h2 className="font-headline text-2xl sm:text-3xl mb-4">
            Bridal Boudoir Pricing
          </h2>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            Bridal boudoir pricing is similar to standard boudoir sessions, with
            potential add-ons for album production and rush delivery. Here is a
            general breakdown.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full font-body text-on-surface-variant border-collapse">
              <thead>
                <tr className="border-b border-on-surface/20">
                  <th className="text-left py-3 pr-4 font-label">Package</th>
                  <th className="text-left py-3 pr-4 font-label">Price Range</th>
                  <th className="text-left py-3 font-label">Typically Includes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-on-surface/10">
                  <td className="py-3 pr-4">Session Only</td>
                  <td className="py-3 pr-4">$300 -- $700</td>
                  <td className="py-3">
                    1 to 2 hour shoot, HMUA, 10 to 15 digital images
                  </td>
                </tr>
                <tr className="border-b border-on-surface/10">
                  <td className="py-3 pr-4">Session + Album</td>
                  <td className="py-3 pr-4">$800 -- $1,800</td>
                  <td className="py-3">
                    Full session, HMUA, 20 to 30 images, flush-mount album
                  </td>
                </tr>
                <tr className="border-b border-on-surface/10">
                  <td className="py-3 pr-4">Luxury Experience</td>
                  <td className="py-3 pr-4">$1,800 -- $4,000</td>
                  <td className="py-3">
                    Extended session, wardrobe styling, all images, designer
                    album, prints, gift box packaging
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Rush Delivery Add-On</td>
                  <td className="py-3 pr-4">$100 -- $500</td>
                  <td className="py-3">
                    Expedited retouching and album production (2 to 3 weeks
                    instead of 6 to 8)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-body text-on-surface-variant leading-relaxed">
            Many brides ask if bridal boudoir can be bundled with their wedding
            photography. Some photographers offer both services at a discounted
            rate, so it is always worth asking.
          </p>
        </section>

        {/* Timeline */}
        <section id="timeline" className="mb-14">
          <h2 className="font-headline text-2xl sm:text-3xl mb-4">
            Your Bridal Boudoir Timeline
          </h2>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            Here is a recommended timeline to ensure everything is ready before
            your wedding day.
          </p>
          <div className="bg-surface-container-lowest rounded-2xl p-6">
            <ul className="space-y-4 font-body text-on-surface-variant">
              <li>
                <span className="font-label text-primary">6 months out:</span>{" "}
                Research photographers, review portfolios, and book your
                session date.
              </li>
              <li>
                <span className="font-label text-primary">3 to 4 months out:</span>{" "}
                Shop for lingerie, select accessories, and finalize your vision
                with the photographer during a planning call.
              </li>
              <li>
                <span className="font-label text-primary">6 to 12 weeks out:</span>{" "}
                Complete your session. This is the ideal window for looking and
                feeling your best while leaving time for production.
              </li>
              <li>
                <span className="font-label text-primary">4 to 6 weeks out:</span>{" "}
                Attend your reveal session, select images, and place your album
                order.
              </li>
              <li>
                <span className="font-label text-primary">2 to 3 weeks out:</span>{" "}
                Receive your finished album and digital files. Verify quality
                and have the album gift-wrapped.
              </li>
              <li>
                <span className="font-label text-primary">Wedding week:</span>{" "}
                Prepare the album with a handwritten note. Coordinate delivery
                with your wedding planner or best man for the morning-of
                reveal.
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-14">
          <h2 className="font-headline text-2xl sm:text-3xl mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-headline text-lg mb-2">
                Is bridal boudoir only for brides?
              </h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                While it is most popular with brides, grooms and partners of all
                genders also book bridal-themed boudoir sessions. The concept
                works for anyone who wants to create a personal, intimate gift
                connected to their wedding.
              </p>
            </div>
            <div>
              <h3 className="font-headline text-lg mb-2">
                Will my partner see the images before the wedding?
              </h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Only if you want them to. Most brides keep the session a
                complete secret. Your photographer will deliver images to you
                through a private, password-protected gallery that only you can
                access.
              </p>
            </div>
            <div>
              <h3 className="font-headline text-lg mb-2">
                Can I use my wedding photographer for bridal boudoir?
              </h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                You can, but many brides prefer to hire a boudoir specialist.
                Boudoir requires specific lighting setups, posing expertise, and
                retouching skills that differ from wedding photography. If your
                wedding photographer also offers boudoir, review their boudoir
                portfolio separately to ensure it meets your expectations.
              </p>
            </div>
            <div>
              <h3 className="font-headline text-lg mb-2">
                Should I do my bridal boudoir session before or after my
                bridal shower?
              </h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                After is often ideal. If you receive lingerie as gifts at your
                bridal shower, you can incorporate those pieces into your
                boudoir session, adding sentimental value to the images.
              </p>
            </div>
            <div>
              <h3 className="font-headline text-lg mb-2">
                What if I am not comfortable showing a lot of skin?
              </h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Bridal boudoir is fully customizable. You can achieve stunning
                images in a silk robe, an oversized sweater, or even your
                wedding dress styled in a relaxed way. The session is about how
                you feel, not how much you reveal. Read our guide on{" "}
                <Link
                  href="/blog/what-to-wear-to-boudoir-shoot"
                  className="text-primary underline"
                >
                  what to wear to a boudoir shoot
                </Link>{" "}
                for more covered-up outfit inspiration.
              </p>
            </div>
            <div>
              <h3 className="font-headline text-lg mb-2">
                Can bridesmaids book a group bridal boudoir session?
              </h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Some photographers offer bridal party boudoir sessions where
                each bridesmaid gets individual images plus group shots. This
                works well as a bachelorette activity and creates a memorable
                bonding experience.
              </p>
            </div>
            <div>
              <h3 className="font-headline text-lg mb-2">
                How do I keep the session a secret from my partner?
              </h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Schedule the session during work hours or on a day when your
                partner is occupied. Use a separate email for photographer
                communications. Have albums shipped to a friend&apos;s address
                or to the studio for pickup. Most photographers are experienced
                in helping brides maintain secrecy and will support your plan.
              </p>
            </div>
            <div>
              <h3 className="font-headline text-lg mb-2">
                What is the difference between bridal boudoir and a bridal
                portrait session?
              </h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                A bridal portrait session typically features the bride fully
                dressed in her wedding gown in a formal setting. Bridal boudoir
                is more intimate, featuring lingerie, robes, or partial wedding
                attire in a private, sensual environment. Both are beautiful,
                but they serve different purposes and produce very different
                images.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="editorial-gradient rounded-2xl p-8 text-center">
          <h2 className="font-headline text-2xl mb-3">
            Make Your Wedding Journey Unforgettable
          </h2>
          <p className="font-body text-on-surface-variant mb-6 max-w-lg mx-auto">
            Find a bridal boudoir photographer who will capture this
            once-in-a-lifetime moment with artistry and care.
          </p>
          <Link
            href="/boudoir-photographers"
            className="inline-block bg-primary text-on-surface font-label px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Find a Bridal Boudoir Photographer
          </Link>
        </div>
      </article>
    </div>
  );
}
