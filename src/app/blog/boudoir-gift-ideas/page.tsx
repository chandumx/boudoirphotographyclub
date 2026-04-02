import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boudoir Gift Ideas: The Ultimate Guide to Gifting a Boudoir Experience",
  description:
    "Discover the best boudoir gift ideas for anniversaries, birthdays, weddings, and Valentine's Day. Learn how to book a boudoir shoot for someone else, album options, packaging tips, and budget-friendly choices.",
  keywords: [
    "boudoir gift ideas",
    "boudoir gift certificate",
    "boudoir album gift",
    "boudoir photography gift",
    "anniversary boudoir gift",
    "valentine boudoir gift",
    "wedding boudoir gift",
    "boudoir gift for him",
    "boudoir gift for partner",
    "surprise boudoir shoot",
  ],
};

export default function BoudoirGiftIdeasPage() {
  return (
    <div className="bg-surface text-on-surface">
      <article className="max-w-[800px] mx-auto px-6 sm:px-10 py-16">
        {/* Hero / Intro */}
        <header className="mb-12">
          <p className="font-label text-primary uppercase tracking-widest mb-4">
            Gift Guide
          </p>
          <h1 className="font-headline text-4xl sm:text-5xl leading-tight mb-6">
            Boudoir Gift Ideas: The Ultimate Guide to Gifting a Boudoir
            Experience
          </h1>
          <p className="font-body text-on-surface-variant text-lg leading-relaxed">
            A boudoir photography session is one of the most personal,
            confidence-boosting gifts you can give -- or receive. Whether you are
            surprising your partner, treating yourself, or celebrating a
            milestone with someone you love, this guide covers every angle of
            turning boudoir photography into an unforgettable present.
          </p>
        </header>

        {/* Table of Contents */}
        <nav className="bg-surface-container-lowest rounded-2xl p-6 mb-12">
          <p className="font-label text-sm uppercase tracking-widest mb-3">
            In This Guide
          </p>
          <ul className="space-y-2 font-body text-primary">
            <li>
              <a href="#gift-certificates">Gift Certificates &amp; Vouchers</a>
            </li>
            <li>
              <a href="#album-ideas">Boudoir Album &amp; Print Ideas</a>
            </li>
            <li>
              <a href="#when-to-gift">When to Gift a Boudoir Session</a>
            </li>
            <li>
              <a href="#surprise-planning">Surprise Planning Tips</a>
            </li>
            <li>
              <a href="#booking-for-someone-else">
                How to Book for Someone Else
              </a>
            </li>
            <li>
              <a href="#packaging">Packaging &amp; Presentation Ideas</a>
            </li>
            <li>
              <a href="#what-to-include">What to Include in the Gift</a>
            </li>
            <li>
              <a href="#budget-options">Budget-Friendly Options</a>
            </li>
            <li>
              <a href="#faq">Frequently Asked Questions</a>
            </li>
          </ul>
        </nav>

        {/* Section 1 */}
        <section id="gift-certificates" className="mb-14">
          <h2 className="font-headline text-2xl sm:text-3xl mb-4">
            Gift Certificates &amp; Vouchers
          </h2>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            The most popular way to gift a boudoir experience is through a gift
            certificate. Most professional boudoir photographers offer
            beautifully designed certificates that you can present in person or
            send digitally. Here is what you should know before purchasing one.
          </p>
          <h3 className="font-headline text-xl mb-3">
            What a Typical Gift Certificate Covers
          </h3>
          <ul className="list-disc pl-6 space-y-2 font-body text-on-surface-variant mb-4">
            <li>
              <strong>Session fee only:</strong> Some certificates cover the
              shoot itself -- usually 1 to 2 hours of studio time -- but leave
              print and album purchases for later.
            </li>
            <li>
              <strong>All-inclusive packages:</strong> Premium certificates
              bundle the session, professional hair and makeup, a set number of
              retouched images, and sometimes a finished album.
            </li>
            <li>
              <strong>Dollar-amount credits:</strong> A flexible option that lets
              the recipient apply the credit toward any package the photographer
              offers.
            </li>
          </ul>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            When shopping for a gift certificate, ask about expiration dates.
            Most studios honor certificates for 12 months, but some extend to 18
            months or longer. A generous validity window takes the pressure off
            the recipient to schedule immediately.
          </p>
          <p className="font-body text-on-surface-variant leading-relaxed">
            Not sure which photographer to choose? Browse our{" "}
            <Link href="/boudoir-photographers" className="text-primary underline">
              directory of boudoir photographers
            </Link>{" "}
            to find studios that offer gift certificates in your area.
          </p>
        </section>

        {/* Section 2 */}
        <section id="album-ideas" className="mb-14">
          <h2 className="font-headline text-2xl sm:text-3xl mb-4">
            Boudoir Album &amp; Print Ideas
          </h2>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            If your partner or loved one has already completed a boudoir session,
            upgrading their images into a tangible keepsake is a fantastic gift
            on its own. Here are the most sought-after product options.
          </p>
          <h3 className="font-headline text-xl mb-3">Luxury Flush-Mount Albums</h3>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            Thick, lay-flat pages with seamless panoramic spreads create a
            gallery-quality book. Covers range from Italian leather to linen and
            velvet. Albums typically hold 20 to 40 images and start around $300,
            with high-end versions reaching $1,200 or more. They are the gold
            standard for boudoir presentation.
          </p>
          <h3 className="font-headline text-xl mb-3">Metal &amp; Acrylic Prints</h3>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            For a modern, museum-like feel, metal prints infuse the image
            directly into aluminum, producing vivid color and striking contrast.
            Acrylic prints add depth with a glass-like face. Both are perfect for
            a private bedroom gallery wall.
          </p>
          <h3 className="font-headline text-xl mb-3">Boudoir Photo Boxes</h3>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            A curated set of matted 5x7 or 8x10 prints nestled inside a
            monogrammed keepsake box offers a tactile, intimate viewing
            experience. Photo boxes are an affordable alternative to a full album
            and feel luxurious to unwrap.
          </p>
          <h3 className="font-headline text-xl mb-3">Digital Collections</h3>
          <p className="font-body text-on-surface-variant leading-relaxed">
            If the recipient prefers digital files, many photographers offer
            high-resolution image galleries delivered via a private online link
            or USB drive packaged in a custom box. Digital collections are ideal
            for those who want to create their own prints, phone wallpapers, or
            private slideshows.
          </p>
        </section>

        {/* Section 3 */}
        <section id="when-to-gift" className="mb-14">
          <h2 className="font-headline text-2xl sm:text-3xl mb-4">
            When to Gift a Boudoir Session
          </h2>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            A boudoir session works for almost any occasion, but certain
            milestones make the timing especially meaningful.
          </p>

          <h3 className="font-headline text-xl mb-3">Anniversary</h3>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            Anniversaries are the number-one occasion for boudoir gifts.
            Presenting your partner with an album or booking a session for
            yourself to create a surprise album is deeply romantic. Paper
            anniversaries (first year) pair beautifully with a printed album,
            while milestone years like five or ten call for a luxury experience.
          </p>

          <h3 className="font-headline text-xl mb-3">Birthday</h3>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            Turning 30, 40, 50, or any age is worth celebrating with a session
            that captures confidence and beauty at that moment in life. Birthday
            boudoir gifts are especially popular among friend groups who chip in
            together for the experience.
          </p>

          <h3 className="font-headline text-xl mb-3">Wedding &amp; Engagement</h3>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            A bridal boudoir album is one of the most treasured wedding-day
            gifts a bride can present to a groom (or partner). Bridesmaids
            often pool funds to gift the session, and engagement boudoir shoots
            make incredible additions to a couple&apos;s love story.
          </p>

          <h3 className="font-headline text-xl mb-3">Valentine&apos;s Day</h3>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            Valentine&apos;s Day is peak season for boudoir bookings. If you plan
            to gift a session, book at least 6 to 8 weeks in advance since
            photographers fill up quickly. A Valentine&apos;s boudoir album is far
            more memorable than flowers and chocolate.
          </p>

          <h3 className="font-headline text-xl mb-3">Just Because</h3>
          <p className="font-body text-on-surface-variant leading-relaxed">
            You do not need a calendar event to justify a boudoir gift. Life
            transitions -- a fitness milestone, overcoming a challenge, entering
            a new decade -- are perfect reasons. Self-love boudoir sessions are
            increasingly popular as gifts to oneself.
          </p>
        </section>

        {/* Section 4 */}
        <section id="surprise-planning" className="mb-14">
          <h2 className="font-headline text-2xl sm:text-3xl mb-4">
            Surprise Planning Tips
          </h2>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            Surprising someone with a boudoir shoot requires a bit of
            behind-the-scenes coordination. Follow these steps to pull it off
            smoothly.
          </p>
          <ol className="list-decimal pl-6 space-y-3 font-body text-on-surface-variant">
            <li>
              <strong>Choose the right photographer first.</strong> Browse
              portfolios, read reviews, and shortlist two or three studios. Our{" "}
              <Link href="/boudoir-photographers" className="text-primary underline">
                photographer directory
              </Link>{" "}
              makes this easy by letting you filter by location and style.
            </li>
            <li>
              <strong>Talk to the photographer privately.</strong> Explain that
              it is a surprise. Experienced studios handle this regularly and
              can advise on timing, wardrobe, and how to present the gift
              without spoiling the secret.
            </li>
            <li>
              <strong>Pick flexible dates.</strong> Rather than locking in a
              specific date, purchase a gift certificate that lets the recipient
              choose their own session date. This respects their schedule and
              comfort level.
            </li>
            <li>
              <strong>Create a reveal moment.</strong> Pair the gift certificate
              with a small prop -- lingerie, a robe, or a styled card -- so the
              recipient immediately understands what the gift is.
            </li>
            <li>
              <strong>Manage expectations gently.</strong> Some people feel
              nervous about boudoir. Include a note that emphasizes how the
              experience is about feeling confident and beautiful, with zero
              pressure. Linking them to information about{" "}
              <Link href="/how-it-works" className="text-primary underline">
                how the process works
              </Link>{" "}
              can ease their nerves.
            </li>
          </ol>
        </section>

        {/* Section 5 */}
        <section id="booking-for-someone-else" className="mb-14">
          <h2 className="font-headline text-2xl sm:text-3xl mb-4">
            How to Book a Boudoir Session for Someone Else
          </h2>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            Booking on behalf of another person is straightforward, but there
            are a few details to get right.
          </p>
          <ul className="list-disc pl-6 space-y-2 font-body text-on-surface-variant mb-4">
            <li>
              <strong>Provide your payment details, their contact info.</strong>{" "}
              The photographer will need the recipient&apos;s name and email (or
              phone) to send booking confirmations and preparation guides once
              the surprise is revealed.
            </li>
            <li>
              <strong>Clarify what is included.</strong> Confirm whether the
              certificate covers just the session or also includes hair and
              makeup, a set number of retouched images, and products.
            </li>
            <li>
              <strong>Ask about add-on policies.</strong> Let the recipient know
              if they can upgrade their package later by paying the difference.
              This avoids any awkwardness about unexpected costs.
            </li>
            <li>
              <strong>Request a physical or digital certificate.</strong> Most
              studios will email a beautifully designed PDF or ship a printed
              card. Specify which format you prefer.
            </li>
          </ul>
          <p className="font-body text-on-surface-variant leading-relaxed">
            Curious about typical pricing? Read our detailed breakdown of{" "}
            <Link
              href="/blog/how-much-does-boudoir-photography-cost"
              className="text-primary underline"
            >
              how much boudoir photography costs
            </Link>{" "}
            so you know what to budget.
          </p>
        </section>

        {/* Section 6 */}
        <section id="packaging" className="mb-14">
          <h2 className="font-headline text-2xl sm:text-3xl mb-4">
            Packaging &amp; Presentation Ideas
          </h2>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            How you present the gift is almost as important as the gift itself.
            Thoughtful packaging builds excitement and signals that this is
            something special.
          </p>
          <h3 className="font-headline text-xl mb-3">The Luxury Box</h3>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            Place the gift certificate inside a matte-black or velvet gift box
            lined with tissue paper. Add a silk robe, a scented candle, and a
            handwritten card. The unboxing experience sets the tone for the
            entire boudoir journey.
          </p>
          <h3 className="font-headline text-xl mb-3">The Envelope Tease</h3>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            For a simpler approach, use a wax-sealed envelope containing the
            certificate and a printed card explaining the experience. Tuck it
            under their pillow or place it on their nightstand with a single
            rose.
          </p>
          <h3 className="font-headline text-xl mb-3">The Digital Reveal</h3>
          <p className="font-body text-on-surface-variant leading-relaxed">
            If you are gifting long-distance, create a short video message
            explaining the surprise, then text or email the digital certificate
            immediately after. Some photographers will create a custom landing
            page for gift recipients.
          </p>
        </section>

        {/* Section 7 */}
        <section id="what-to-include" className="mb-14">
          <h2 className="font-headline text-2xl sm:text-3xl mb-4">
            What to Include in the Gift
          </h2>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            A boudoir gift is elevated when you pair the session certificate
            with complementary items. Consider bundling any of these alongside
            the booking.
          </p>
          <ul className="list-disc pl-6 space-y-2 font-body text-on-surface-variant">
            <li>
              <strong>Lingerie or loungewear:</strong> A silk robe, bodysuit, or
              matching set gives them something to wear during the shoot. Choose
              neutral tones or classic black if you are unsure of preferences.
            </li>
            <li>
              <strong>Jewelry:</strong> Simple, elegant pieces like drop
              earrings or a delicate necklace photograph beautifully and double
              as a wearable keepsake.
            </li>
            <li>
              <strong>Self-care items:</strong> A luxe body lotion, bath salts,
              or a facial mask set pampers the recipient in the days leading up
              to their session.
            </li>
            <li>
              <strong>A personal note:</strong> Write a heartfelt letter
              explaining why you chose this gift. It will be treasured long
              after the session.
            </li>
            <li>
              <strong>A preparation checklist:</strong> Many photographers
              provide a digital prep guide. Printing it and including it in the
              gift package shows thoughtfulness.
            </li>
          </ul>
        </section>

        {/* Section 8 */}
        <section id="budget-options" className="mb-14">
          <h2 className="font-headline text-2xl sm:text-3xl mb-4">
            Budget-Friendly Boudoir Gift Options
          </h2>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            Boudoir photography can range from a few hundred dollars to several
            thousand, but there are smart ways to gift the experience at every
            price point.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full font-body text-on-surface-variant border-collapse">
              <thead>
                <tr className="border-b border-on-surface/20">
                  <th className="text-left py-3 pr-4 font-label">Budget Range</th>
                  <th className="text-left py-3 pr-4 font-label">What You Can Gift</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-on-surface/10">
                  <td className="py-3 pr-4">$100 -- $250</td>
                  <td className="py-3 pr-4">
                    A partial session credit or mini session (30 minutes, 5 to
                    10 images). Great for first-timers.
                  </td>
                </tr>
                <tr className="border-b border-on-surface/10">
                  <td className="py-3 pr-4">$250 -- $600</td>
                  <td className="py-3 pr-4">
                    A full session fee including hair and makeup, plus a small
                    set of digital images. The sweet spot for most gifters.
                  </td>
                </tr>
                <tr className="border-b border-on-surface/10">
                  <td className="py-3 pr-4">$600 -- $1,200</td>
                  <td className="py-3 pr-4">
                    An all-inclusive package with a finished album or print
                    collection. A premium experience from start to finish.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">$1,200+</td>
                  <td className="py-3 pr-4">
                    Luxury packages with multiple outfit changes, extended
                    sessions, designer albums, and wall art. The ultimate gift.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            <strong>Tip for groups:</strong> If you are organizing a group gift
            (bridesmaids, friends, family), many photographers accept split
            payments or allow multiple people to contribute toward a single
            certificate. This makes higher-end packages accessible.
          </p>
          <p className="font-body text-on-surface-variant leading-relaxed">
            For a full cost breakdown, see our guide on{" "}
            <Link
              href="/blog/how-much-does-boudoir-photography-cost"
              className="text-primary underline"
            >
              how much boudoir photography costs
            </Link>
            .
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-14">
          <h2 className="font-headline text-2xl sm:text-3xl mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-headline text-lg mb-2">
                Can I buy a boudoir session for someone without their knowledge?
              </h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Yes. The best approach is to purchase a gift certificate rather
                than booking a specific date. This lets the recipient schedule
                the session when they feel ready, which is essential for
                something as personal as boudoir photography.
              </p>
            </div>
            <div>
              <h3 className="font-headline text-lg mb-2">
                What if they are nervous about doing a boudoir shoot?
              </h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Nervousness is completely normal. Reassure them that professional
                boudoir photographers specialize in making clients feel
                comfortable and guided throughout the entire experience. Check
                out{" "}
                <Link href="/how-it-works" className="text-primary underline">
                  how the boudoir process works
                </Link>{" "}
                for more details to share with them.
              </p>
            </div>
            <div>
              <h3 className="font-headline text-lg mb-2">
                Do boudoir gift certificates expire?
              </h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Most certificates are valid for 6 to 18 months. Always confirm
                the expiration policy before purchasing. Some photographers will
                extend the validity for a small fee if needed.
              </p>
            </div>
            <div>
              <h3 className="font-headline text-lg mb-2">
                Can men receive boudoir gifts too?
              </h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Absolutely. Boudoir photography is for everyone regardless of
                gender. Many photographers specialize in male boudoir or
                &quot;dudeoir&quot; sessions, and couples boudoir is another
                inclusive option.
              </p>
            </div>
            <div>
              <h3 className="font-headline text-lg mb-2">
                Is boudoir photography appropriate as a gift from a friend?
              </h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Yes. Boudoir is not exclusively romantic. Friends frequently gift
                sessions for birthdays, divorces (celebrate-yourself shoots),
                body-positive milestones, and bachelorette parties. It is one of
                the most empowering experiences you can share with someone.
              </p>
            </div>
            <div>
              <h3 className="font-headline text-lg mb-2">
                Can I add extras after purchasing the certificate?
              </h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Most photographers allow upgrades. You or the recipient can add
                hair and makeup, additional outfit changes, extra retouched
                images, or album upgrades by paying the difference at any point
                before or after the session.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="editorial-gradient rounded-2xl p-8 text-center">
          <h2 className="font-headline text-2xl mb-3">
            Ready to Gift an Unforgettable Experience?
          </h2>
          <p className="font-body text-on-surface-variant mb-6 max-w-lg mx-auto">
            Find a boudoir photographer near you who offers gift certificates,
            luxury albums, and all-inclusive packages.
          </p>
          <Link
            href="/boudoir-photographers"
            className="inline-block bg-primary text-on-surface font-label px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Browse Boudoir Photographers
          </Link>
        </div>
      </article>
    </div>
  );
}
