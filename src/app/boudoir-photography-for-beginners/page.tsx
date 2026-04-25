import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boudoir Photography for Beginners: Everything First-Timers Need to Know (2026)",
  description:
    "Never done boudoir before? This beginner's guide covers everything: what to expect, how to prepare, what to wear, how much it costs, how to find a photographer, and what happens with your photos.",
  keywords: [
    "boudoir photography for beginners",
    "first time boudoir photography",
    "boudoir photography what to expect",
    "new to boudoir",
    "boudoir photography guide",
    "beginner boudoir tips",
    "what is boudoir photography",
  ],
  alternates: {
    canonical: "https://boudoirphotographyclub.com/boudoir-photography-for-beginners",
  },
};

export default function BoudoirPhotographyForBeginnersPage() {
  return (
    <div className="bg-surface text-on-surface">
      <article className="max-w-[800px] mx-auto px-6 sm:px-10 py-16">

        {/* Breadcrumb */}
        <nav className="mb-8 text-sm font-label text-on-surface-variant">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-on-surface">Boudoir Photography for Beginners</span>
        </nav>

        {/* Hero */}
        <header className="mb-12">
          <p className="font-label text-primary uppercase tracking-widest mb-4">
            The First-Timer&rsquo;s Guide
          </p>
          <h1 className="font-headline text-4xl sm:text-5xl leading-tight mb-6">
            Boudoir Photography for Beginners: Everything First-Timers Need to Know (2026)
          </h1>
          <p className="font-body text-on-surface-variant text-lg leading-relaxed">
            You have been thinking about doing boudoir — maybe for a while. You keep saving inspiration images. You almost booked once. This guide is for that version of you: someone who is genuinely curious, maybe a little nervous, and wants to understand exactly what they are signing up for before they commit. By the time you finish reading, you will know everything a first-timer needs to know and feel ready to take the next step.
          </p>
        </header>

        {/* Table of Contents */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 mb-12">
          <h2 className="font-headline text-lg mb-4">In This Guide</h2>
          <ul className="space-y-2 font-body text-primary">
            <li><a href="#what-is-boudoir" className="hover:underline">What Is Boudoir Photography?</a></li>
            <li><a href="#common-fears" className="hover:underline">The Most Common Fears (and Why They&rsquo;re Unfounded)</a></li>
            <li><a href="#how-it-works" className="hover:underline">How a Typical Session Works, Step by Step</a></li>
            <li><a href="#what-to-wear" className="hover:underline">What to Wear: 3 Outfit Suggestions for Beginners</a></li>
            <li><a href="#how-to-prepare" className="hover:underline">How to Prepare in the 2 Weeks Before</a></li>
            <li><a href="#what-to-expect-day" className="hover:underline">What to Expect on the Day</a></li>
            <li><a href="#cost" className="hover:underline">How Much Does Boudoir Photography Cost?</a></li>
            <li><a href="#after-photos" className="hover:underline">What Happens to Your Photos After?</a></li>
            <li><a href="#find-photographer" className="hover:underline">How to Find the Right Photographer for a First-Timer</a></li>
            <li><a href="#faq" className="hover:underline">Frequently Asked Questions</a></li>
          </ul>
        </div>

        {/* Section 1 */}
        <section id="what-is-boudoir" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">What Is Boudoir Photography?</h2>
          <p className="font-body text-lg leading-relaxed mb-4">
            Boudoir photography is intimate portrait photography — typically featuring the subject in lingerie, loungewear, or artfully minimal clothing — that focuses on celebrating the subject rather than creating imagery for an audience. The word &ldquo;boudoir&rdquo; comes from the French for a woman&rsquo;s private dressing room or sitting room, which reflects the genre&rsquo;s origins in the intimate, personal nature of the imagery.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            Modern boudoir photography has evolved well beyond its origins. It now encompasses everything from classic, soft-lit lingerie portraits to{" "}
            <Link href="/fine-art-boudoir" className="text-primary hover:underline">
              fine art boudoir
            </Link>{" "}
            with gallery-level artistic intent to editorial, fashion-forward shoots that feel more magazine than bedroom. The unifying thread is intimacy — these images are made for the subject and for people the subject chooses to share them with.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            People do boudoir for many reasons: as a gift for a partner, as a personal milestone celebration (birthday, divorce, weight loss or gain, cancer survival, sobriety anniversary), as a self-love practice, or simply because they have always wanted to see themselves through a skilled photographer&rsquo;s lens. There is no wrong reason.
          </p>
          <p className="font-body text-lg leading-relaxed">
            For a deeper dive into what boudoir photography is and where it comes from, see our full{" "}
            <Link href="/blog/what-is-boudoir-photography" className="text-primary hover:underline">
              guide to what boudoir photography is
            </Link>
            .
          </p>
        </section>

        {/* Section 2 */}
        <section id="common-fears" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">The Most Common Fears (and Why They&rsquo;re Unfounded)</h2>
          <p className="font-body text-lg leading-relaxed mb-8">
            First-time boudoir clients share a remarkably consistent set of fears. Here is each one — and the honest answer to why it should not stop you.
          </p>

          <div className="space-y-6">
            {[
              {
                fear: "&ldquo;I&rsquo;m not the right body type for boudoir.&rdquo;",
                answer: "Every body type is the right body type for boudoir. The photographers who do this work well create extraordinary images of bodies of all sizes, ages, and shapes — not as a charitable act, but because every body is genuinely photographable. What changes between body types is posing, lighting, and angle — not whether beautiful images are possible.",
              },
              {
                fear: "&ldquo;I&rsquo;ll freeze in front of the camera and ruin it.&rdquo;",
                answer: "Almost every first-time boudoir client freezes in front of the camera at some point — and almost every first-time client also relaxes within 20&ndash;30 minutes of shooting. A skilled photographer knows how to ease you in. They give you specific direction that keeps you moving and thinking rather than standing still and self-conscious. The freeze is temporary.",
              },
              {
                fear: "&ldquo;I&rsquo;m going to be embarrassed or uncomfortable.&rdquo;",
                answer: "Discomfort at the start of a boudoir session is normal and anticipated by every professional boudoir photographer. The consultation call, the pre-session conversation, the unhurried pace of the session itself — all of these are designed to move you through discomfort into something that feels surprisingly natural. The vast majority of clients describe the experience as far more comfortable than they expected.",
              },
              {
                fear: "&ldquo;What if my images leak or someone sees them?&rdquo;",
                answer: "Your images are legally yours, protected by the contract you sign with the photographer. A reputable photographer will not share your images without your written consent. You control who sees your images — they live in your gallery, your download, your chosen products. You can opt out of any portfolio or marketing use in your model release.",
              },
              {
                fear: "&ldquo;I won&rsquo;t know how to pose.&rdquo;",
                answer: "You are not expected to know how to pose. That is the photographer&rsquo;s job. You will be guided through every position, with specific instructions for where to put your hands, how to angle your chin, where to look. Your only job is to listen, move, and breathe. Experience with posing is not a prerequisite — comfort with following direction is.",
              },
              {
                fear: "&ldquo;I&rsquo;m too old for boudoir.&rdquo;",
                answer: "The most powerful boudoir images are often of women in their 40s, 50s, 60s and beyond — because those clients tend to bring a self-awareness and comfort in their own skin that younger clients are still developing. Boudoir has no age limit. It has never had one.",
              },
            ].map((item, i) => (
              <div key={i} className="border-b border-outline-variant/40 pb-6">
                <h3 className="font-headline text-lg mb-3" dangerouslySetInnerHTML={{ __html: item.fear }} />
                <p className="font-body text-on-surface-variant leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 */}
        <section id="how-it-works" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">How a Typical Boudoir Session Works, Step by Step</h2>
          <p className="font-body text-lg leading-relaxed mb-8">
            Knowing exactly what to expect removes the anxiety of the unknown. Here is the standard arc of a boudoir session from first contact to final delivery.
          </p>

          <div className="space-y-6">
            {[
              {
                step: "1. Initial Inquiry & Consultation",
                desc: "You reach out to a photographer via their website or social media. They respond with information about their packages. If you are interested, you schedule a consultation call — typically 20&ndash;45 minutes — where you discuss your vision, your concerns, what you want to wear, and what you hope to get out of the experience. The photographer explains what to expect. You ask your questions. If it feels right, you pay a deposit and book your date.",
              },
              {
                step: "2. Pre-Session Preparation",
                desc: "In the weeks before your session, you gather your outfits, do your skin prep, and attend to any timing-sensitive preparations (spray tan, hair color, waxing). Many photographers send a prep guide. Your only other preparation is mental: giving yourself permission to arrive with openness rather than specific expectations.",
              },
              {
                step: "3. Hair & Makeup",
                desc: "For sessions that include professional hair and makeup, this is typically the first thing that happens when you arrive — or you arrive having just left the MUA. The chair time is itself part of the experience: 60&ndash;90 minutes of being cared for, of quiet focus, of transitioning from your everyday self into your session self. Many clients find this is when the nervousness fully releases.",
              },
              {
                step: "4. The Wardrobe Walkthrough",
                desc: "Before shooting begins, many photographers look through your outfits and discuss the order of looks. They may suggest adjustments, accessories, or a different sequence than you planned. This is their expertise working for you — trust the input.",
              },
              {
                step: "5. The Shoot",
                desc: "Sessions typically run 2&ndash;4 hours. The first 20&ndash;30 minutes tend to be the most awkward — then something shifts. You start to trust the direction. You see images on the back of the camera that look better than you imagined. The nervousness is replaced by something that feels surprisingly like fun. You move through your looks, take breaks, drink water, and by the end of the session most clients say they would do it again immediately.",
              },
              {
                step: "6. The Reveal & Ordering",
                desc: "2&ndash;6 weeks after your session, your photographer presents your edited gallery — either in person, via a private link, or through a video reveal call. This is the moment most clients describe as the most emotional. You see yourself the way your photographer saw you. Then you choose what you want: digital files, prints, an album, wall art. Some photographers do the reveal and ordering in the same appointment.",
              },
              {
                step: "7. Delivery",
                desc: "Digital files are typically delivered within a few days of the ordering appointment via download link. Physical products (albums, prints, wall art) take an additional 2&ndash;8 weeks depending on the product and the lab. Your photographer should give you a clear timeline for each product type.",
              },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-primary pl-6 mb-6">
                <h3 className="font-headline text-xl mb-2">{item.step}</h3>
                <p className="font-body text-on-surface-variant leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 */}
        <section id="what-to-wear" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">What to Wear: 3 Outfit Suggestions for Beginners</h2>
          <p className="font-body text-lg leading-relaxed mb-6">
            For your first session, the most important thing about your outfits is that they make you feel good — not that they are the most editorial or the boldest choices. Here are three beginner-friendly approaches that photograph beautifully and feel comfortable to wear.
          </p>

          <div className="space-y-5">
            <div className="bg-surface-container-lowest rounded-xl p-6">
              <h3 className="font-headline text-xl mb-3">Look 1: The Classic Lingerie Set</h3>
              <p className="font-body text-on-surface-variant leading-relaxed text-sm mb-3">
                A matching bra and underwear set in a neutral (black, nude, ivory, burgundy) or soft color. This is the quintessential boudoir look for a reason: it is timeless, flattering, and creates clean lines that photograph well in any lighting. Choose a fit that is genuinely comfortable — not a size down from your actual measurement.
              </p>
              <p className="font-body text-on-surface-variant text-sm"><strong className="text-on-surface">Beginner tip:</strong> Wear the set for 30 minutes before the session to confirm it is comfortable and stays in place when you move.</p>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-6">
              <h3 className="font-headline text-xl mb-3">Look 2: The Oversized Shirt or Button-Down</h3>
              <p className="font-body text-on-surface-variant leading-relaxed text-sm mb-3">
                A man&rsquo;s button-down shirt (your partner&rsquo;s, if you have one — the sentimental value shows in the images), an oversized band tee, or a soft flannel worn open or partially buttoned. This look is casual and approachable but photographs in a way that is anything but. It also functions as a transitional look — you can wear it fully open over a lingerie set, creating two distinct looks from one piece.
              </p>
              <p className="font-body text-on-surface-variant text-sm"><strong className="text-on-surface">Beginner tip:</strong> Choose something that holds personal meaning. The emotional context of wearing someone else&rsquo;s shirt, or a shirt that represents something important to you, comes through in photographs in a way that is difficult to replicate with purchased pieces.</p>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-6">
              <h3 className="font-headline text-xl mb-3">Look 3: The Robe or Slip</h3>
              <p className="font-body text-on-surface-variant leading-relaxed text-sm mb-3">
                A silk, satin, or lightweight lace robe worn belted, draped open, or slipping off one shoulder. Or a simple slip dress in a natural or neutral tone. Draped fabric creates movement and visual interest that more structured pieces cannot, and robes give your photographer enormous compositional flexibility — the look changes dramatically depending on how open or closed the robe is.
              </p>
              <p className="font-body text-on-surface-variant text-sm"><strong className="text-on-surface">Beginner tip:</strong> Choose a robe with some weight and drape — thin, stiff fabrics do not move as beautifully. Silk and satin read as luxurious on camera even at affordable price points.</p>
            </div>
          </div>

          <p className="font-body text-on-surface-variant leading-relaxed mt-6">
            For more guidance on what to bring, including brand recommendations and a full packing list, see our{" "}
            <Link href="/blog/what-to-wear-to-boudoir-shoot" className="text-primary hover:underline">
              complete guide on what to wear to a boudoir shoot
            </Link>
            .
          </p>
        </section>

        {/* Section 5 */}
        <section id="how-to-prepare" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">How to Prepare in the 2 Weeks Before</h2>
          <p className="font-body text-lg leading-relaxed mb-6">
            The most impactful preparation happens in the 14 days before your session. Focus on the things that make a visible and felt difference.
          </p>

          <div className="space-y-3 font-body text-on-surface-variant">
            {[
              { title: "Hydrate more than usual", detail: "Drink 2&ndash;3 liters of water daily. Skin hydration is visible in photographs and affects skin texture, under-eye circles, and the overall vibrancy of your appearance." },
              { title: "Start a daily moisturizing routine", detail: "Body lotion or oil applied daily for two weeks makes a real difference in skin texture. Pay attention to elbows, knees, and any rough patches." },
              { title: "Finalize and try on all outfits", detail: "Wear each outfit for 30 minutes and check for fit, comfort, and how it looks in decent lighting. Remove anything that makes you feel self-conscious." },
              { title: "Schedule any timing-sensitive appointments", detail: "Hair color: 1&ndash;2 weeks before. Spray tan: 5&ndash;7 days before. Waxing: 3&ndash;5 days before. Manicure: 1&ndash;2 days before." },
              { title: "Reduce alcohol intake", detail: "Alcohol causes facial puffiness and under-eye swelling. Reducing consumption in the 3&ndash;4 days before your session makes a noticeable difference." },
              { title: "Gather your inspiration images", detail: "Create a folder or Pinterest board of boudoir images you love. Share it with your photographer before the session. Even a vague sense of the mood and aesthetic you prefer helps them tailor the shoot." },
              { title: "Confirm your appointment", detail: "Send a quick message to your photographer to confirm date, time, and logistics. Raise any last-minute questions. Confirm whether you need to bring anything specific." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-surface-container-lowest rounded-xl p-4">
                <span className="text-primary font-label text-sm mt-0.5 flex-shrink-0">&#10003;</span>
                <div>
                  <p className="font-headline text-base mb-1">{item.title}</p>
                  <p className="font-body text-on-surface-variant text-sm leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="font-body text-on-surface-variant leading-relaxed mt-6">
            For the complete week-by-week timeline including everything from 4 weeks out through the day after, see our full{" "}
            <Link href="/boudoir-session-checklist" className="text-primary hover:underline">
              boudoir session checklist
            </Link>
            .
          </p>
        </section>

        {/* Section 6 */}
        <section id="what-to-expect-day" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">What to Expect on the Day</h2>
          <p className="font-body text-lg leading-relaxed mb-4">
            There is a particular arc to boudoir session days, and knowing it in advance makes the experience more manageable.
          </p>

          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            <strong className="text-on-surface">The first 30 minutes</strong> tend to be the most self-conscious. You are in a new space, possibly in less clothing than you are used to, being seen by a professional whose entire job is to look at you. This is uncomfortable. It is also temporary. Every boudoir photographer knows this and structures the beginning of the session accordingly — easing you in with simpler, more covered looks, talking with you while they adjust lighting, giving you time to settle.
          </p>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            <strong className="text-on-surface">The middle portion</strong> of most sessions is when things shift. You start to trust the direction you are receiving. You see an image or two that genuinely surprises you. The effort of following posing cues keeps your mind occupied and your self-consciousness quieter. Some clients describe a kind of flow state in this phase.
          </p>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            <strong className="text-on-surface">The end of the session</strong> — for most clients — produces a sense of accomplishment and often euphoria. You did something you were afraid of. You have been seen in a way you have never been seen before. You have images that will exist for the rest of your life. The session ends and you feel, almost universally, like you wish it had been longer.
          </p>
          <p className="font-body text-on-surface-variant leading-relaxed">
            <strong className="text-on-surface">After the session</strong>, give yourself permission to feel whatever comes up. Some clients are immediately elated. Some feel quiet and reflective. Some cry — not from distress, but from the release of something they have been holding. All of this is part of the experience.
          </p>
        </section>

        {/* Section 7 */}
        <section id="cost" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">How Much Does Boudoir Photography Cost?</h2>
          <p className="font-body text-lg leading-relaxed mb-6">
            Boudoir photography pricing varies significantly based on the photographer&rsquo;s experience level, what is included in the session, and your location. Here is a general overview.
          </p>

          <div className="space-y-4 mb-6">
            {[
              {
                tier: "Entry-Level",
                range: "$150 – $400",
                desc: "Newer photographers building their portfolio. Session fee may not include hair and makeup or digital files. Quality varies widely. Good option if budget is a primary constraint, but research thoroughly.",
              },
              {
                tier: "Mid-Range",
                range: "$400 – $1,500",
                desc: "Established photographers with a consistent portfolio. Often includes professional hair and makeup and a digital gallery. This is the range where quality and experience reliably deliver strong results for most clients.",
              },
              {
                tier: "Premium",
                range: "$1,500 – $3,000+",
                desc: "Experienced photographers with distinctive artistic voices and proven results across diverse clients. Often includes hair, makeup, extended session time, and a print credit. Products are typically ordered separately.",
              },
              {
                tier: "Luxury / Fine Art",
                range: "$3,000 – $5,000+",
                desc: "Nationally recognized photographers with gallery-quality portfolios. All-inclusive packages typically include everything from hair and makeup through finished wall art or heirloom albums.",
              },
            ].map((tier, i) => (
              <div key={i} className="border border-outline-variant rounded-xl p-5">
                <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                  <h3 className="font-headline text-lg">{tier.tier}</h3>
                  <span className="font-label text-primary text-sm uppercase tracking-widest">{tier.range}</span>
                </div>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed">{tier.desc}</p>
              </div>
            ))}
          </div>

          <p className="font-body text-on-surface-variant leading-relaxed">
            The session fee is rarely the full cost. Products — albums, prints, digital files — are often ordered and priced separately. Budget an additional $500&ndash;$2,000+ for products if you want physical items. For a complete breakdown of how boudoir photography is priced, see our{" "}
            <Link href="/blog/how-much-does-boudoir-photography-cost" className="text-primary hover:underline">
              guide to boudoir photography costs
            </Link>
            .
          </p>
        </section>

        {/* Section 8 */}
        <section id="after-photos" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">What Happens to Your Photos After?</h2>
          <p className="font-body text-lg leading-relaxed mb-6">
            Understanding what happens to your images after the session removes one of the most common sources of anxiety for first-timers.
          </p>

          <h3 className="font-headline text-xl mb-4">Editing and Delivery</h3>
          <p className="font-body text-on-surface-variant leading-relaxed mb-6">
            After your session, the photographer edits the images — typically taking 2&ndash;6 weeks for digital delivery. Most boudoir photographers cull the images (selecting the best from the full shoot) and then retouch the selected images. Retouching typically includes blemish removal, lighting adjustments, and color grading. Some photographers include body retouching; others (particularly fine art photographers) keep retouching minimal.
          </p>

          <h3 className="font-headline text-xl mb-4">Who Owns the Images?</h3>
          <p className="font-body text-on-surface-variant leading-relaxed mb-6">
            The photographer retains copyright of the images as the creator, but you have broad usage rights for personal use. Your contract should specify: what you can and cannot do with the images (printing, sharing privately, posting on social media), and whether the photographer can use your images for their portfolio or marketing (and whether you can opt out of this via a model release).
          </p>

          <h3 className="font-headline text-xl mb-4">How to Protect Your Images</h3>
          <ul className="space-y-3 font-body text-on-surface-variant">
            <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>Download your full gallery immediately upon receipt and back it up in at least two locations (an external drive and a cloud service).</span></li>
            <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>Do not rely on the photographer&rsquo;s hosting as permanent storage. Most galleries expire within 30&ndash;90 days.</span></li>
            <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>Store images in a password-protected or hidden album on your device if privacy is a concern.</span></li>
            <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>Order physical products as soon as you can after your reveal appointment. Products are typically available to reorder but the original editing files may not be.</span></li>
          </ul>
        </section>

        {/* Section 9 */}
        <section id="find-photographer" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">How to Find the Right Photographer for a First-Timer</h2>
          <p className="font-body text-lg leading-relaxed mb-6">
            For a first boudoir session, certain qualities matter more than others. Here is what to prioritize.
          </p>

          <div className="space-y-4">
            {[
              {
                quality: "Warm, responsive communication",
                detail: "How a photographer communicates before you book tells you how they will make you feel in the room. Choose someone whose messages feel warm, personalized, and unhurried. A photographer who takes days to respond or sends copy-paste templates is signaling something about their approach.",
              },
              {
                quality: "A clear pre-session consultation",
                detail: "For a first-timer, a consultation call is essential. Choose a photographer who requires or enthusiastically offers one. This conversation is where you establish trust — and without trust, comfort in the session is very hard to achieve.",
              },
              {
                quality: "A portfolio that includes clients who look like you",
                detail: "This is not vanity — it is practical. A photographer whose portfolio is exclusively young, conventionally thin, or otherwise different from you may not have the posing and lighting experience to work with your specific body. Look for someone who regularly works with diverse clients.",
              },
              {
                quality: "Clear safety and consent policies",
                detail: "A professional boudoir photographer will voluntarily discuss their model release, image privacy policy, and consent practices. A first-timer should feel entirely in control of how their images are used. This should be non-negotiable.",
              },
              {
                quality: "Reviews that mention first-timer experiences specifically",
                detail: "Look for reviews from clients who also described being nervous or new to boudoir. &ldquo;I was terrified and she made me feel completely comfortable&rdquo; is the highest praise a boudoir photographer can receive from a beginner client — and it tells you everything you need to know.",
              },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-primary pl-6">
                <h3 className="font-headline text-xl mb-2">{item.quality}</h3>
                <p className="font-body text-on-surface-variant leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="bg-surface-container-lowest rounded-2xl p-6 mt-8">
            <p className="font-body text-on-surface-variant leading-relaxed">
              For the full checklist of what to evaluate before booking, see our guide on{" "}
              <Link href="/how-to-choose-a-boudoir-photographer" className="text-primary hover:underline font-bold">
                how to choose a boudoir photographer
              </Link>
              .
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-14">
          <h2 className="font-headline text-3xl mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Do I have to take off all my clothes?",
                a: "Absolutely not. Boudoir photography spans a huge range of coverage, from fully clothed editorial portraits to more revealing imagery — and you decide where on that spectrum your session sits. Many of the most powerful boudoir images show very little skin. Discuss your comfort level clearly in your consultation and a good photographer will design the session accordingly.",
              },
              {
                q: "What if I hate the images?",
                a: "This is rare — genuinely rare — but it happens. Most photographers offer some form of recourse: a reshoot, an additional editing round, or a partial refund for images that do not meet the agreed standard. Read your contract carefully before booking to understand what recourse exists. More importantly: choose a photographer whose portfolio consistently excites you before you book, so you know what you are getting.",
              },
              {
                q: "Can I bring my partner to the session?",
                a: "This depends on the photographer. Some welcome a supportive partner in the room; others find that a partner&rsquo;s presence changes the client&rsquo;s energy in ways that make the session less successful. Discuss this directly in your consultation. Most photographers who prefer to work one-on-one have solid reasons for it and will explain them honestly.",
              },
              {
                q: "I am not photogenic. Can boudoir still work for me?",
                a: "Yes, and this is actually one of the most consistent testimonials in boudoir photography: people who consider themselves un-photogenic are consistently stunned by their boudoir images. The difference is professional direction, intentional lighting, and a photographer whose entire job is to make you look extraordinary. Being &ldquo;photogenic&rdquo; in everyday photos is mostly about luck and angle. A boudoir session removes luck from the equation.",
              },
              {
                q: "How many images will I get?",
                a: "This varies by package and photographer. Entry-level packages may include 10&ndash;20 retouched images. Mid-range packages typically include 25&ndash;50. Premium packages may include more, or may include fewer highly curated images. Understand what is included in your package before you book, and ask what the cost is if you want additional images beyond the included amount.",
              },
              {
                q: "What is the difference between boudoir and glamour photography?",
                a: "Boudoir is intimate and personal — it is made for the subject and people they choose to share it with. Glamour photography is typically more fashion-forward and publicly oriented, with editorial styling and heavier retouching. Boudoir tends toward authenticity; glamour tends toward polish. The two overlap, and some photographers do both, but the intention and experience of each is distinct.",
              },
              {
                q: "Is it weird to do boudoir alone (without a partner)?",
                a: "Not at all. The majority of boudoir clients come alone. Boudoir for yourself — as a personal milestone, a self-love practice, or simply because you want the experience — is at least as common as boudoir gifted to a partner. There is nothing that requires boudoir to be for someone else. It can be entirely, completely for you.",
              },
            ].map((item, i) => (
              <div key={i} className="border-b border-outline-variant/40 pb-6">
                <h3 className="font-headline text-lg mb-3">{item.q}</h3>
                <p className="font-body text-on-surface-variant leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-surface-container-lowest rounded-2xl p-8 text-center">
          <h2 className="font-headline text-2xl italic mb-4">Ready to Find Your First Boudoir Photographer?</h2>
          <p className="font-body text-on-surface-variant leading-relaxed mb-6 max-w-[560px] mx-auto">
            Browse our vetted directory of boudoir photographers across the United States. Every photographer has verified reviews so you can choose with confidence — even as a complete first-timer.
          </p>
          <Link
            href="/boudoir-photographers"
            className="inline-block py-3 px-8 editorial-gradient text-on-primary font-label text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Browse the Photographer Directory
          </Link>
        </div>

      </article>
    </div>
  );
}
