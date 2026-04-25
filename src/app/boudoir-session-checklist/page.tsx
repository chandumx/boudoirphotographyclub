import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boudoir Session Checklist: Everything to Do Before, During & After (2026)",
  description:
    "The complete boudoir session checklist: skin prep 2 weeks out, what to pack day-of, how to pose naturally, what to do after your session, and how to store your images.",
  keywords: [
    "boudoir session checklist",
    "boudoir photoshoot checklist",
    "boudoir preparation checklist",
    "boudoir session tips",
    "how to prepare for boudoir",
    "what to bring to boudoir session",
    "boudoir photography tips",
  ],
  alternates: {
    canonical: "https://boudoirphotographyclub.com/boudoir-session-checklist",
  },
};

export default function BoudoirSessionChecklistPage() {
  return (
    <div className="bg-surface text-on-surface">
      <article className="max-w-[800px] mx-auto px-6 sm:px-10 py-16">

        {/* Breadcrumb */}
        <nav className="mb-8 text-sm font-label text-on-surface-variant">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-on-surface">Boudoir Session Checklist</span>
        </nav>

        {/* Hero */}
        <header className="mb-12">
          <p className="font-label text-primary uppercase tracking-widest mb-4">
            The Preparation Guide
          </p>
          <h1 className="font-headline text-4xl sm:text-5xl leading-tight mb-6">
            Boudoir Session Checklist: Everything to Do Before, During &amp; After (2026)
          </h1>
          <p className="font-body text-on-surface-variant text-lg leading-relaxed">
            The difference between a boudoir session that exceeds your expectations and one that falls flat often comes down to preparation — not beauty or body type or modeling experience. This week-by-week checklist covers everything from booking to delivery, so you walk into your session feeling genuinely ready.
          </p>
        </header>

        {/* Table of Contents */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 mb-12">
          <h2 className="font-headline text-lg mb-4">In This Guide</h2>
          <ul className="space-y-2 font-body text-primary">
            <li><a href="#four-weeks" className="hover:underline">4 Weeks Before</a></li>
            <li><a href="#two-weeks" className="hover:underline">2 Weeks Before</a></li>
            <li><a href="#one-week" className="hover:underline">1 Week Before</a></li>
            <li><a href="#day-before" className="hover:underline">Day Before</a></li>
            <li><a href="#day-of" className="hover:underline">Day Of</a></li>
            <li><a href="#during" className="hover:underline">During the Session</a></li>
            <li><a href="#after" className="hover:underline">After the Session</a></li>
            <li><a href="#packing-list" className="hover:underline">Printable Packing List</a></li>
            <li><a href="#faq" className="hover:underline">Frequently Asked Questions</a></li>
          </ul>
        </div>

        {/* Section: 4 Weeks Before */}
        <section id="four-weeks" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">4 Weeks Before Your Session</h2>
          <p className="font-body text-lg leading-relaxed mb-6">
            The weeks before your session are when the most important decisions get made. Do not leave them until the last minute.
          </p>

          <div className="space-y-4">
            {[
              {
                title: "Research and book your photographer",
                detail: "Use our guide on how to choose a boudoir photographer to evaluate portfolios, ask the right questions, and sign your contract. Four weeks is the minimum lead time; 8&ndash;12 weeks is safer for popular photographers.",
              },
              {
                title: "Confirm your package details in writing",
                detail: "Before you pay your deposit, confirm: what is included in the session fee, whether hair and makeup are provided, the delivery timeline, the cancellation policy, and how your images may be used.",
              },
              {
                title: "Schedule your pre-session consultation",
                detail: "Most reputable boudoir photographers include a consultation call. Use it. This is your opportunity to discuss your vision, your insecurities, your goals for the session, and any wardrobe questions.",
              },
              {
                title: "Begin outfit research",
                detail: "Start thinking about what you want to wear. Three outfit changes are typical. Consider: one sentimental piece (a robe, a shirt that belongs to your partner), one classic lingerie look, and one more editorial or unexpected look. Order anything you need online now — four weeks gives time for returns and exchanges.",
              },
              {
                title: "Book hair and makeup (if not included)",
                detail: "If your session does not include a professional MUA and you want one, book now. Good MUAs who specialize in boudoir or photo-ready makeup fill quickly. Ask your photographer for a recommendation — they will know who produces results that photograph well.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-surface-container-lowest rounded-xl p-5">
                <span className="text-primary font-label text-sm mt-0.5 flex-shrink-0">&#10003;</span>
                <div>
                  <p className="font-headline text-base mb-1">{item.title}</p>
                  <p className="font-body text-on-surface-variant text-sm leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: 2 Weeks Before */}
        <section id="two-weeks" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">2 Weeks Before Your Session</h2>
          <p className="font-body text-lg leading-relaxed mb-6">
            Two weeks out is when your body preparation begins. Small changes made now make a visible difference on the day.
          </p>

          <div className="space-y-4">
            {[
              {
                title: "Start a daily moisturizing routine",
                detail: "Hydrated skin photographs significantly better than dry skin. Start moisturizing from head to toe daily — pay extra attention to elbows, knees, and any area that tends to be rough or ashy. A body oil applied after showering while skin is still slightly damp is more effective than lotion alone.",
              },
              {
                title: "Finalize your outfits and try them on",
                detail: "Try on every outfit you plan to bring and look at yourself honestly in good lighting. Does the bra fit properly? Do the underwear waistbands create deep indentations? Are there any pieces that make you feel uncomfortable rather than confident? Eliminate anything that makes you feel self-conscious — on session day, those feelings are amplified.",
              },
              {
                title: "Plan your spray tan timing",
                detail: "If you want a spray tan, get it 5&ndash;7 days before your session — not 1&ndash;2 days before. This gives the tan time to develop fully and fade to its most natural-looking shade. A very fresh spray tan can look orange or streaky in photographs and make editing more difficult.",
              },
              {
                title: "Order any final wardrobe pieces",
                detail: "This is your last chance for online orders to arrive with time for returns. Anything ordered after this point may not arrive in time, and you will not have room to exchange.",
              },
              {
                title: "Start drinking more water",
                detail: "Hydration affects skin texture, under-eye circles, and how you carry yourself. Two weeks of better hydration is enough to make a noticeable difference. Aim for at least 2 liters per day.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-surface-container-lowest rounded-xl p-5">
                <span className="text-primary font-label text-sm mt-0.5 flex-shrink-0">&#10003;</span>
                <div>
                  <p className="font-headline text-base mb-1">{item.title}</p>
                  <p className="font-body text-on-surface-variant text-sm leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: 1 Week Before */}
        <section id="one-week" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">1 Week Before Your Session</h2>
          <p className="font-body text-lg leading-relaxed mb-6">
            The week before is for logistics and small physical preparations.
          </p>

          <div className="space-y-4">
            {[
              {
                title: "Get a hair trim or blowout (if desired)",
                detail: "If you want your hair to look its best, a trim 5&ndash;7 days before gives any blunt cuts time to soften slightly. If you are getting a color treatment, aim for 1&ndash;2 weeks before so it settles and the shine is at its peak.",
              },
              {
                title: "Steam or wash and hang all your outfits",
                detail: "Wrinkles are distracting in boudoir images and can be difficult to retouch. Steam or carefully wash all your planned outfits and hang them in your bag now so they arrive at the session ready to wear.",
              },
              {
                title: "Reduce alcohol consumption",
                detail: "Alcohol causes facial puffiness and under-eye swelling that takes 48&ndash;72 hours to resolve. The week before your session is a good time to drink less, especially in the last three days.",
              },
              {
                title: "Confirm your appointment",
                detail: "Send your photographer a quick confirmation — confirm the date, time, address, and whether you need to bring anything specific. This is also a good moment to share any last-minute questions or wardrobe decisions you want their input on.",
              },
              {
                title: "Plan your session-day transportation",
                detail: "Know exactly how you are getting to the studio and how long it takes. Arriving stressed and late is one of the fastest ways to undermine an otherwise well-prepared session. Aim to arrive 10&ndash;15 minutes early.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-surface-container-lowest rounded-xl p-5">
                <span className="text-primary font-label text-sm mt-0.5 flex-shrink-0">&#10003;</span>
                <div>
                  <p className="font-headline text-base mb-1">{item.title}</p>
                  <p className="font-body text-on-surface-variant text-sm leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Day Before */}
        <section id="day-before" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">The Day Before Your Session</h2>
          <p className="font-body text-lg leading-relaxed mb-6">
            The 24 hours before your session are when small decisions have the biggest visible impact.
          </p>

          <div className="space-y-4">
            {[
              {
                title: "Get a full night of sleep",
                detail: "Sleep deprivation shows visibly in photographs — in under-eye circles, skin dullness, and the subtle tension in facial muscles. Aim for 8 hours. If you are anxious, a magnesium supplement or melatonin can help without the groggy hangover of other sleep aids.",
              },
              {
                title: "Time your shaving or waxing correctly",
                detail: "If you shave, do it the night before — not the morning of. Freshly shaved skin is often slightly irritated and red. If you wax, do it 3&ndash;5 days before to allow any redness to fully resolve. If you use a depilatory cream, patch test it at least a week before to confirm your skin does not react.",
              },
              {
                title: "Do your nails",
                detail: "Your hands appear in many boudoir images. A fresh manicure — even just a clear coat — makes your hands look polished in photographs. For pedicures, bare feet appear frequently; painted or groomed toenails look intentional rather than accidental.",
              },
              {
                title: "Avoid new skincare products",
                detail: "Do not try a new moisturizer, serum, or exfoliant the night before your session. New products can cause unexpected reactions, breakouts, or irritation. Stick to your established routine.",
              },
              {
                title: "Pack your bag",
                detail: "Use the packing list below. Pack the night before so you are not rushing in the morning and risk forgetting something.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-surface-container-lowest rounded-xl p-5">
                <span className="text-primary font-label text-sm mt-0.5 flex-shrink-0">&#10003;</span>
                <div>
                  <p className="font-headline text-base mb-1">{item.title}</p>
                  <p className="font-body text-on-surface-variant text-sm leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Day Of */}
        <section id="day-of" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">Day of Your Session</h2>
          <p className="font-body text-lg leading-relaxed mb-6">
            Today is about arriving as relaxed, nourished, and present as possible.
          </p>

          <div className="space-y-4">
            {[
              {
                title: "Eat a real meal before you go",
                detail: "Do not arrive hungry. Low blood sugar affects posture, mood, expression, and your ability to follow direction. Eat a normal, satisfying meal 1&ndash;2 hours before the session. Avoid anything that causes significant bloating for you personally — though this is individual and you know your body better than anyone.",
              },
              {
                title: "Wear loose clothing on the way there",
                detail: "Tight waistbands, bra straps, and sock elastic leave marks that take 30&ndash;45 minutes to fade. Wear loose, comfortable clothing on the way to the session. Bring your session outfits in a bag rather than wearing them.",
              },
              {
                title: "Arrive 10&ndash;15 minutes early",
                detail: "The transition time between arriving and starting to shoot is important. You need a few minutes to settle into the space, ask any last-minute questions, and start to relax. Arriving rushed compresses this time and makes it harder to get comfortable quickly.",
              },
              {
                title: "Bring a snack and water",
                detail: "Sessions run 2&ndash;4 hours. A light snack and a water bottle keep your energy steady throughout. Many photographers have water available, but your own snack is a personal comfort.",
              },
              {
                title: "Leave your phone in your bag",
                detail: "Notifications, texts, and social media pull you out of the present moment. Ask someone to cover any urgent responsibilities for the duration of the session and give yourself permission to be fully there.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-surface-container-lowest rounded-xl p-5">
                <span className="text-primary font-label text-sm mt-0.5 flex-shrink-0">&#10003;</span>
                <div>
                  <p className="font-headline text-base mb-1">{item.title}</p>
                  <p className="font-body text-on-surface-variant text-sm leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: During */}
        <section id="during" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">During the Session</h2>
          <p className="font-body text-lg leading-relaxed mb-6">
            Being in front of a camera is a skill, but it is one your photographer will help you develop in real time. Your only job is to communicate and stay present.
          </p>

          <h3 className="font-headline text-xl mb-4">Communication Tips</h3>
          <ul className="space-y-3 font-body text-on-surface-variant mb-8">
            <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>Tell your photographer in the moment if something feels uncomfortable — a pose, a wardrobe piece, the direction of a shot. Good photographers want this feedback and will adjust immediately.</span></li>
            <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>Ask to see images on the back of the camera partway through. Seeing a few images that look better than you expected can completely shift your confidence for the rest of the session.</span></li>
            <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>If you feel tired or overwhelmed, say so. Take a break. Drink some water. A five-minute reset is far better than struggling through 30 minutes of images where your exhaustion is visible.</span></li>
          </ul>

          <h3 className="font-headline text-xl mb-4">Posing Tips for First-Timers</h3>
          <ul className="space-y-3 font-body text-on-surface-variant">
            <li className="flex gap-3"><span className="text-primary mt-1">—</span><span><strong className="text-on-surface">Trust the direction you are given.</strong> Poses that feel strange often look beautiful. Your photographer sees the image; you only feel it. Let their guidance override your instincts, especially early in the session.</span></li>
            <li className="flex gap-3"><span className="text-primary mt-1">—</span><span><strong className="text-on-surface">Move slowly and breathe.</strong> Tension shows in photographs. Slow, deliberate movements and conscious exhales relax the face and shoulders in ways that posing instructions alone cannot.</span></li>
            <li className="flex gap-3"><span className="text-primary mt-1">—</span><span><strong className="text-on-surface">Push your hips back slightly</strong> in most standing and lying poses. This creates a natural curve in the back that is flattering for nearly every body type.</span></li>
            <li className="flex gap-3"><span className="text-primary mt-1">—</span><span><strong className="text-on-surface">Avoid pressing arms flat against your body.</strong> A small gap between your arm and torso creates more definition and looks more relaxed than arms clamped to the sides.</span></li>
            <li className="flex gap-3"><span className="text-primary mt-1">—</span><span><strong className="text-on-surface">Look off-camera occasionally.</strong> Direct-to-camera eye contact is powerful, but some of the most beautiful boudoir images capture a private, thoughtful moment. Let your eyes wander naturally.</span></li>
          </ul>
        </section>

        {/* Section: After */}
        <section id="after" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">After the Session</h2>
          <p className="font-body text-lg leading-relaxed mb-6">
            The session is over — but the experience is not. What you do in the weeks after determines what you actually end up with.
          </p>

          <h3 className="font-headline text-xl mb-4">Ordering Your Products</h3>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            Many boudoir photographers use an in-person or video reveal appointment where you see your images for the first time together and make ordering decisions. This is intentional — the emotional impact of seeing yourself in your images for the first time is significant, and photographers know that decisions made in that moment tend to be ones clients are happy with later.
          </p>
          <p className="font-body text-on-surface-variant leading-relaxed mb-6">
            Come to the reveal appointment having thought through your budget for products. Know roughly what you want — a digital gallery, an album, prints, or some combination. This prevents either overspending in the emotional heat of the moment or under-investing in products you will later wish you had ordered.
          </p>

          <h3 className="font-headline text-xl mb-4">Storing and Protecting Your Digital Files</h3>
          <ul className="space-y-3 font-body text-on-surface-variant mb-8">
            <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>Download your digital gallery immediately upon receipt and back it up in at least two locations: an external hard drive and a cloud service (Google Drive, iCloud, Dropbox).</span></li>
            <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>Do not rely on the photographer&rsquo;s servers as your permanent backup. Most photographers keep files for 30&ndash;90 days after delivery. After that, the files are yours to protect.</span></li>
            <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>If you received a USB drive or physical media, make digital copies immediately. USB drives fail; fires happen. Your images are irreplaceable — treat them that way.</span></li>
            <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>Be intentional about who has access to your images. If they are intimate, store them in a password-protected folder or a separate, dedicated album on your device.</span></li>
          </ul>
        </section>

        {/* Packing List */}
        <section id="packing-list" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">Printable Day-Of Packing List</h2>
          <p className="font-body text-lg leading-relaxed mb-8">
            Pack everything the night before your session using this list.
          </p>

          <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-headline text-base uppercase tracking-widest text-primary mb-4">Wardrobe</h3>
                <ul className="space-y-2 font-body text-sm text-on-surface-variant">
                  {[
                    "3 planned outfits (steamed/wrinkle-free)",
                    "Matching sets where applicable",
                    "Heels or shoes if desired",
                    "Robe or cover-up for between looks",
                    "Any jewelry or accessories",
                    "Backup outfit (just in case)",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary flex-shrink-0">&#9744;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-headline text-base uppercase tracking-widest text-primary mb-4">Beauty</h3>
                <ul className="space-y-2 font-body text-sm text-on-surface-variant">
                  {[
                    "Makeup touch-up kit (if doing own MU)",
                    "Lip color (top-ups during session)",
                    "Hair pins or hair tie",
                    "Travel-size hair spray",
                    "Blotting papers for shine",
                    "Perfume (if desired)",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary flex-shrink-0">&#9744;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-headline text-base uppercase tracking-widest text-primary mb-4">Comfort</h3>
                <ul className="space-y-2 font-body text-sm text-on-surface-variant">
                  {[
                    "Water bottle",
                    "Light snack (nuts, fruit, protein bar)",
                    "Comfortable change of clothes for travel",
                    "Your session contract (for reference)",
                    "Payment method (if balance is due)",
                    "Phone charger",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary flex-shrink-0">&#9744;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-headline text-base uppercase tracking-widest text-primary mb-4">Optional</h3>
                <ul className="space-y-2 font-body text-sm text-on-surface-variant">
                  {[
                    "Sentimental prop (letter, flowers, book)",
                    "Music playlist downloaded offline",
                    "A small gift for yourself to open after",
                    "Extra safety pins or fashion tape",
                    "Strapless or adhesive bra if needed",
                    "Fragrance-free lotion for touch-ups",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary flex-shrink-0">&#9744;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-14">
          <h2 className="font-headline text-3xl mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "How many outfits should I bring to a boudoir session?",
                a: "Three is the standard. It gives you enough variety to tell a visual story without rushing through outfit changes so fast that the session loses its relaxed pace. One classic lingerie look, one more unexpected or personal piece (an oversized shirt, a bodysuit, a silk robe), and one wilder or more editorial option if you want it. You do not have to use all three — your photographer will help you decide on the day.",
              },
              {
                q: "Should I lose weight before my boudoir session?",
                a: "No — and most boudoir photographers would tell you the same. A skilled photographer knows how to light, pose, and frame every body type in ways that feel genuinely beautiful. What matters far more than weight is how you feel in your skin on the day. Confidence, hydration, sleep, and skin prep make a far more visible difference than body size.",
              },
              {
                q: "What should I do about skin breakouts before my session?",
                a: "If you have an unexpected breakout close to your session, do not panic. Most boudoir retouching includes blemish removal. In the meantime, use a targeted spot treatment, avoid picking, and make sure your skin is thoroughly moisturized. If you have recurring acne, mention it to your photographer during the consultation — they will factor it into the retouching plan.",
              },
              {
                q: "Can I request specific images or poses in advance?",
                a: "Absolutely. Many photographers encourage clients to create a Pinterest board or Instagram folder of boudoir images they love and share it before the session. This helps the photographer understand your aesthetic preferences, your comfort level, and the mood you are going for. It does not mean you will recreate specific images exactly, but it is valuable creative direction.",
              },
              {
                q: "How long will I have access to my online gallery after the session?",
                a: "Most photographers keep galleries active for 30&ndash;90 days. Some offer extended access for a fee; others archive and delete after the window closes. Always download your full gallery immediately upon receiving it and back it up in multiple locations. Do not assume you can retrieve it later.",
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
          <h2 className="font-headline text-2xl italic mb-4">Ready to Book Your Session?</h2>
          <p className="font-body text-on-surface-variant leading-relaxed mb-6 max-w-[560px] mx-auto">
            Browse our vetted directory of boudoir photographers across the United States. Every photographer has been reviewed by real clients so you can book with confidence.
          </p>
          <Link
            href="/boudoir-photographers"
            className="inline-block py-3 px-8 editorial-gradient text-on-primary font-label text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Find a Boudoir Photographer Near You
          </Link>
        </div>

      </article>
    </div>
  );
}
