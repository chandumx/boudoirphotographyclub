import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Couples Boudoir Photography — Guide for 2026 | Poses, Pricing & What to Wear",
  description:
    "Couples boudoir photography celebrates intimacy between partners. See 2026 pricing ($500–$3,000+), best poses, what to wear, how to convince a hesitant partner, and how to find the right photographer.",
  keywords: [
    "couples boudoir",
    "couples boudoir photography",
    "couples boudoir session",
    "couples boudoir poses",
    "couples boudoir what to wear",
    "couples boudoir pricing",
    "couples intimate photography",
    "romantic couples photoshoot",
  ],
  alternates: {
    canonical: "https://boudoirphotographyclub.com/couples-boudoir",
  },
};

export default function CouplesBoudoirPage() {
  return (
    <div className="bg-surface text-on-surface">
      <article className="max-w-[800px] mx-auto px-6 sm:px-10 py-16">

        {/* Breadcrumb */}
        <nav className="mb-8 text-sm font-label text-on-surface-variant">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-on-surface">Couples Boudoir Photography</span>
        </nav>

        {/* Hero */}
        <header className="mb-12">
          <p className="font-label text-primary uppercase tracking-widest mb-4">
            2026 Complete Guide
          </p>
          <h1 className="font-headline text-4xl sm:text-5xl leading-tight mb-6">
            Couples Boudoir Photography — Poses, Pricing &amp; What to Wear
          </h1>
          <p className="font-body text-on-surface-variant text-lg leading-relaxed">
            Couples boudoir photography is one of the most intimate and meaningful experiences two people can share — a chance to be truly seen together, in your full humanity, and have that moment preserved beautifully. Whether you are celebrating an anniversary, approaching a wedding, or simply want to reconnect, this guide covers everything you need to know to book a session you will both love.
          </p>
        </header>

        {/* Table of Contents */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 mb-12">
          <h2 className="font-headline text-lg mb-4">In This Guide</h2>
          <ul className="space-y-2 font-body text-primary">
            <li><a href="#what-is" className="hover:underline">What Is Couples Boudoir Photography?</a></li>
            <li><a href="#who-its-for" className="hover:underline">Who Is Couples Boudoir For?</a></li>
            <li><a href="#reasons" className="hover:underline">8 Reasons Couples Book a Boudoir Session</a></li>
            <li><a href="#pricing" className="hover:underline">Couples Boudoir Pricing for 2026</a></li>
            <li><a href="#what-to-wear" className="hover:underline">What to Wear for a Couples Boudoir Session</a></li>
            <li><a href="#poses" className="hover:underline">10 Best Couples Boudoir Poses</a></li>
            <li><a href="#hesitant-partner" className="hover:underline">How to Convince a Hesitant Partner</a></li>
            <li><a href="#questions" className="hover:underline">Questions to Ask Your Photographer</a></li>
            <li><a href="#faq" className="hover:underline">Frequently Asked Questions</a></li>
          </ul>
        </div>

        {/* Section 1: What Is Couples Boudoir */}
        <section id="what-is" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">What Is Couples Boudoir Photography?</h2>
          <p className="font-body text-lg leading-relaxed mb-4">
            Couples boudoir photography is intimate portrait photography featuring two people — partners, spouses, or anyone who shares a meaningful connection. Like solo boudoir, it takes place in a private studio or intimate location (a hotel suite, a bedroom, a carefully chosen outdoor space) and typically involves lingerie, minimal clothing, or artfully suggested nudity. The focus is on capturing the authentic chemistry between two people: the way they look at each other, hold each other, and exist together when they are fully at ease.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            Couples boudoir is not about producing provocative images. It is about preserving connection. The best couples boudoir images are the ones where the photographer disappears into the background and captures something real — a whispered word, a burst of laughter, the way one partner rests their forehead against the other&rsquo;s. Those candid moments of genuine intimacy are what elevate couples boudoir from a photoshoot into a portrait of a relationship.
          </p>
          <p className="font-body text-lg leading-relaxed">
            A professional couples boudoir session typically runs two to four hours and is led by a photographer experienced in working with pairs — directing posing for two people while simultaneously watching for genuine moments to capture. Most sessions include professional hair and makeup for both partners (though some couples choose to skip this), wardrobe guidance, and posing direction throughout. The final gallery typically contains 30 to 80 edited images, with print and album options available.
          </p>
        </section>

        {/* Section 2: Who Is It For */}
        <section id="who-its-for" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">Who Is Couples Boudoir For?</h2>
          <p className="font-body text-lg leading-relaxed mb-6">
            The short answer: anyone in a relationship who wants to celebrate it. Couples boudoir is genuinely inclusive — there is no correct body type, age, gender expression, sexual orientation, or relationship structure for this experience.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { label: "Orientation", desc: "Straight, gay, lesbian, bisexual, queer, and all other orientations are equally at home in couples boudoir. Many photographers specifically note on their websites that they are LGBTQ+-affirming." },
              { label: "Body Types", desc: "Couples boudoir celebrates real bodies. The photographer&rsquo;s job is to find the light and angles that show every couple at their most beautiful — regardless of size, shape, or physical ability." },
              { label: "Ages", desc: "Couples boudoir is popular across a wide age range, from twenties to sixties and beyond. Many photographers find that older couples produce their most emotionally resonant work — decades of shared life are written on two people together." },
              { label: "Relationship Structures", desc: "Married couples, engaged couples, dating couples, long-distance couples reuniting, and even best friends celebrating a relationship milestone all book couples boudoir sessions." },
              { label: "All Body Confidence Levels", desc: "You do not need to feel comfortable in your skin to book a couples boudoir session. The experience itself — being guided by a skilled photographer, supported by a partner, and seen as beautiful — often transforms how people feel about their bodies." },
              { label: "First-Timers Welcome", desc: "The majority of couples boudoir clients have never done anything like this before. Professional photographers understand that and build the session to ease you both in before asking for more vulnerable moments." },
            ].map((item, i) => (
              <div key={i} className="bg-surface-container-lowest rounded-xl p-5">
                <h3 className="font-headline text-base mb-2">{item.label}</h3>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="font-body text-on-surface-variant leading-relaxed">
            When looking for a photographer, seek out someone whose portfolio already features couples who look like you and your partner. Representation in a photographer&rsquo;s existing work is the clearest signal that they will know how to make you feel seen.
          </p>
        </section>

        {/* Section 3: 8 Reasons */}
        <section id="reasons" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">8 Reasons Couples Book a Boudoir Session</h2>
          <p className="font-body text-lg leading-relaxed mb-8">
            People arrive at couples boudoir from many different directions. Here are the eight most common motivations — and why each one produces meaningful results.
          </p>

          <div className="space-y-5">
            {[
              {
                num: "01",
                title: "Anniversary Celebration",
                desc: "Marking a milestone anniversary — five years, ten years, twenty-five — with couples boudoir creates a record of who you are together at this moment. These images become time capsules that grow more meaningful with each passing year.",
              },
              {
                num: "02",
                title: "Engagement or Pre-Wedding",
                desc: "Many engaged couples book a boudoir session as part of their wedding experience — a way to connect and celebrate before the wedding week chaos begins. Pre-wedding couples boudoir also gives both partners the chance to feel confident and comfortable being photographed together before the wedding day.",
              },
              {
                num: "03",
                title: "Reconnection After Distance",
                desc: "Military deployment reunions, long-distance relationship milestones, or simply the reconnection after a difficult season in a relationship — couples boudoir creates a deliberate, present moment of being fully together. Many couples describe the session itself as healing.",
              },
              {
                num: "04",
                title: "Bucket List Experience",
                desc: "For many couples, a professional boudoir session together is simply something they have always wanted to do but never given themselves permission to try. Treating it as a bucket-list adventure — something bold and memorable — is a completely valid reason to book.",
              },
              {
                num: "05",
                title: "Intimacy Renewal",
                desc: "Relationships can fall into routine, and couples boudoir is a powerful way to see each other with fresh eyes. Being in a new environment, being directed by a third party, and seeing the resulting images of yourselves as a couple can reignite attraction and appreciation.",
              },
              {
                num: "06",
                title: "Health Milestones",
                desc: "Surviving cancer together, completing a major weight-loss journey, recovering from an illness or injury — many couples mark these health milestones with a session that documents their bodies and their bond at a moment of hard-won arrival.",
              },
              {
                num: "07",
                title: "Valentine&rsquo;s Day or Birthday Gift",
                desc: "Couples boudoir as a gift — purchased as a surprise or planned together — is increasingly popular for Valentine&rsquo;s Day, milestone birthdays, and other romantic occasions. The experience itself is the gift, and the images are the keepsake.",
              },
              {
                num: "08",
                title: "Simply Because You Want To",
                desc: "You do not need a special occasion. Some couples book because they are happy together and want images that reflect that happiness. That is a complete and sufficient reason.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-5 border-b border-outline-variant/30 pb-5">
                <span className="font-headline text-2xl text-primary/40 shrink-0 w-8">{item.num}</span>
                <div>
                  <h3 className="font-headline text-lg mb-1">{item.title}</h3>
                  <p className="font-body text-on-surface-variant leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Pricing */}
        <section id="pricing" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">Couples Boudoir Pricing for 2026</h2>
          <p className="font-body text-lg leading-relaxed mb-6">
            Couples boudoir is priced higher than solo boudoir because it involves more logistical complexity — two people to prepare, more wardrobe changes to manage, and more variables in directing the session. Here is what to expect in each price range.
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                tier: "Budget-Friendly",
                range: "$500 – $900",
                includes: "2–3 hours, digital gallery of 30–50 images, no hair/makeup included, studio or in-home session",
                notes: "Typically offered by photographers building their couples portfolio. Quality can be excellent at this range — look carefully at their existing couples work.",
              },
              {
                tier: "Mid-Range",
                range: "$900 – $1,800",
                includes: "3–4 hours, professional hair and makeup for both partners, 40–70 edited images, digital delivery with print release",
                notes: "The most common range for established boudoir photographers. Includes a consultation, posing guidance, and typically a print credit or small product package.",
              },
              {
                tier: "Premium",
                range: "$1,800 – $3,000",
                includes: "Full-day experience, professional glam for both, 50–80 images, luxury album or wall art included in package price",
                notes: "Highly experienced photographers with strong couples portfolios and premium studio spaces. Often includes a reveal session where you view the images together for the first time with the photographer.",
              },
              {
                tier: "Luxury / Fine Art",
                range: "$3,000+",
                includes: "Curated experience with custom location scouting, wardrobe consultation, full glam for both, fine art prints, museum album",
                notes: "Fine art boudoir photographers specializing in couples work. Sessions may run 5–6 hours. Products are typically handcrafted and archival. The full investment often includes significant product value.",
              },
            ].map((tier, i) => (
              <div key={i} className="border border-outline-variant rounded-xl p-5">
                <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                  <h3 className="font-headline text-lg">{tier.tier}</h3>
                  <span className="font-label text-primary text-sm uppercase tracking-widest">{tier.range}</span>
                </div>
                <p className="font-body text-sm text-on-surface-variant mb-2"><strong className="text-on-surface">Typically includes:</strong> {tier.includes}</p>
                <p className="font-body text-sm text-on-surface-variant/70 italic">{tier.notes}</p>
              </div>
            ))}
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-5">
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
              <strong className="text-on-surface">Hair and makeup note:</strong> Professional hair and makeup for two people typically adds $200–$500 to the base session price. It is worth it — a skilled hair and makeup artist works with both partners to create looks that are cohesive and photograph beautifully together, and the experience of getting ready together is often one of the most memorable parts of the day.
            </p>
          </div>
        </section>

        {/* Section 5: What to Wear */}
        <section id="what-to-wear" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">What to Wear for a Couples Boudoir Session</h2>
          <p className="font-body text-lg leading-relaxed mb-8">
            Wardrobe is one of the most fun parts of planning a couples boudoir session — and one of the most common sources of anxiety. Here is a practical approach to choosing outfits that look great together and tell the right story.
          </p>

          <h3 className="font-headline text-xl mb-4">The Coordinated vs Contrasting Approach</h3>
          <p className="font-body text-on-surface-variant leading-relaxed mb-6">
            The most visually effective couples boudoir wardrobes coordinate rather than match. Wearing identical colors or identical garments can make images look staged. Instead, choose a color story — a palette of two or three complementary tones — and let each partner interpret it differently. For example: she wears a blush silk slip, he wears a deep burgundy satin robe. The tones relate without competing.
          </p>

          <h3 className="font-headline text-xl mb-4">Classic Wardrobe Ideas by Role</h3>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="font-label text-xs uppercase tracking-widest text-primary mb-3">Partner A (Feminine)</h4>
              <ul className="space-y-2 font-body text-sm text-on-surface-variant">
                <li className="flex gap-2"><span className="text-primary">—</span>Silk or satin slip dress in champagne, blush, or ivory</li>
                <li className="flex gap-2"><span className="text-primary">—</span>Matching bra and brief or thong set in lace or mesh</li>
                <li className="flex gap-2"><span className="text-primary">—</span>Sheer robe or kimono over a bodysuit</li>
                <li className="flex gap-2"><span className="text-primary">—</span>Oversized button-down shirt (borrowed from partner) with nothing underneath</li>
                <li className="flex gap-2"><span className="text-primary">—</span>Corset with high-waist brief or garter belt and stockings</li>
                <li className="flex gap-2"><span className="text-primary">—</span>A simple sheet or draped fabric for fine art looks</li>
              </ul>
            </div>
            <div>
              <h4 className="font-label text-xs uppercase tracking-widest text-primary mb-3">Partner B (Masculine)</h4>
              <ul className="space-y-2 font-body text-sm text-on-surface-variant">
                <li className="flex gap-2"><span className="text-primary">—</span>Well-fitted dark briefs or boxer briefs (avoid patterns)</li>
                <li className="flex gap-2"><span className="text-primary">—</span>Open dress shirt with no undershirt — left loose and casual</li>
                <li className="flex gap-2"><span className="text-primary">—</span>Satin or velvet robe in a jewel tone (deep blue, charcoal, burgundy)</li>
                <li className="flex gap-2"><span className="text-primary">—</span>Shirtless in well-fitted dark trousers</li>
                <li className="flex gap-2"><span className="text-primary">—</span>Matching or coordinating to partner&rsquo;s palette</li>
                <li className="flex gap-2"><span className="text-primary">—</span>Fitted tank and boxers for a relaxed, intimate feel</li>
              </ul>
            </div>
          </div>

          <h3 className="font-headline text-xl mb-4">Wardrobe Practical Tips</h3>
          <ul className="space-y-3 font-body text-on-surface-variant mb-4">
            <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>Bring three to five wardrobe changes total between both of you — not every one will be used, but having options gives the session flexibility.</span></li>
            <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>Check for fit in advance. Lingerie and intimate wear that fits poorly photographs poorly. Everything should be tried on and adjusted before the day.</span></li>
            <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>Avoid waistbands, sock marks, and tight straps for several hours before the session. Skin marks from clothing can take 30–45 minutes to fade.</span></li>
            <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>Send your photographer wardrobe photos in advance — they can give specific feedback on what will and will not work for their shooting style and location.</span></li>
          </ul>
        </section>

        {/* Section 6: 10 Best Poses */}
        <section id="poses" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">10 Best Couples Boudoir Poses</h2>
          <p className="font-body text-lg leading-relaxed mb-8">
            Your photographer will guide you into poses throughout the session, but understanding the most effective ones helps you arrive with context. Here are the ten poses that consistently produce the most powerful couples boudoir images.
          </p>

          <div className="space-y-6">
            {[
              {
                num: "01",
                name: "The Embrace from Behind",
                desc: "One partner stands or sits behind the other, arms wrapped around their waist or chest. The partner in front leans back or tilts their head, eyes closed. This creates an image of comfort, protection, and deep familiarity. Works especially well when shot from the side to capture both faces in profile.",
              },
              {
                num: "02",
                name: "The Forehead Rest",
                desc: "Both partners face each other at close range, foreheads touching, eyes closed. No kissing, no dramatic expression — just the quiet intimacy of being close. This pose photographs beautifully because the focus lands on the space between two faces, which is where the emotion lives.",
              },
              {
                num: "03",
                name: "The Lying Intertwined",
                desc: "Both partners lie in bed or on a surface, bodies intertwined but not necessarily touching faces. One partner may rest their head on the other&rsquo;s chest. Limbs overlapping, skin touching. Photographed from above (overhead angle) or from the side, this pose creates a sense of complete physical ease with each other.",
              },
              {
                num: "04",
                name: "The Whisper",
                desc: "One partner leans in close to the other&rsquo;s ear — whispering something (real or imagined). The listening partner&rsquo;s expression — a smile, a closed eye, a slight tilt of the neck — is the image. The photographer shoots from the side to capture the curve of two heads together and the reaction on the listening face.",
              },
              {
                num: "05",
                name: "The Gaze",
                desc: "Both partners sit or lie facing each other, looking directly into each other&rsquo;s eyes at very close range. The instruction from the photographer is simply: look at each other like no one else is in the room. These images often capture the most raw and genuine emotional connection of the entire session.",
              },
              {
                num: "06",
                name: "The Drape",
                desc: "One partner sits or reclines while the other drapes themselves across or over them — a leg across their partner&rsquo;s lap, an arm draped over a shoulder, a head resting on a chest. The draping partner is at ease; the supporting partner is present and grounding. Asymmetry between the two creates visual interest.",
              },
              {
                num: "07",
                name: "The Kiss (Neck or Shoulder)",
                desc: "One partner presses their lips to the other&rsquo;s neck, shoulder, or collarbone — a tender, non-theatrical moment. The receiving partner&rsquo;s expression (tilted head, closed eyes, slight smile) is where the image lives. Neck kisses photograph especially well in profile or three-quarter view.",
              },
              {
                num: "08",
                name: "The Hands Study",
                desc: "A detail shot: just hands, intertwined or touching. Rings, the difference in skin tone or texture between two pairs of hands, one hand holding another from behind — these images serve as counterpoints to the full-body shots and often become some of the most used images from the session. They also work well as part of an album layout.",
              },
              {
                num: "09",
                name: "The Candid Laugh",
                desc: "The photographer creates a situation — a silly direction, an unexpected instruction, an inside joke — that generates a genuine, unguarded laugh from both partners. Caught at the right moment, a shared laugh produces images that remind you of the actual feeling of being in this relationship, not a posed version of it.",
              },
              {
                num: "10",
                name: "The Back-to-Back",
                desc: "Both partners sit back-to-back on a bed or against a wall, each facing slightly away from the other. This pose creates a quiet visual tension — two separate people who are clearly connected. It works especially well in black and white and is a popular choice for a final-image close to the end of a session.",
              },
            ].map((pose, i) => (
              <div key={i} className="flex gap-5">
                <span className="font-headline text-xl text-primary/40 shrink-0 w-8">{pose.num}</span>
                <div className="border-b border-outline-variant/30 pb-5 flex-1">
                  <h3 className="font-headline text-lg mb-2">{pose.name}</h3>
                  <p className="font-body text-on-surface-variant leading-relaxed">{pose.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Hesitant Partner */}
        <section id="hesitant-partner" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">How to Convince a Hesitant Partner</h2>
          <p className="font-body text-lg leading-relaxed mb-6">
            If you are excited about a couples boudoir session but your partner is not sure — that is normal, and it is workable. Here is a real-talk approach that respects both of your comfort levels.
          </p>

          <h3 className="font-headline text-xl mb-4">Understand the Hesitation First</h3>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            Before making your case, listen to the specific concern. There is a big difference between &ldquo;I feel self-conscious about my body&rdquo; and &ldquo;I think this is weird&rdquo; and &ldquo;I don&rsquo;t want a stranger seeing us in that context.&rdquo; Each of these concerns has a different response.
          </p>
          <ul className="space-y-4 font-body text-on-surface-variant mb-8">
            <li className="flex gap-3">
              <span className="text-primary mt-1 shrink-0">—</span>
              <span><strong className="text-on-surface">Body confidence concerns:</strong> Share that boudoir photographers are skilled at showing people at their most flattering. Look at real results together — not idealized models, but real people in a photographer&rsquo;s portfolio — so your partner can see that the experience is designed to make everyone look and feel good.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1 shrink-0">—</span>
              <span><strong className="text-on-surface">Discomfort with being photographed:</strong> Remind your partner that boudoir photographers direct every pose — no one has to figure out what to do. The photographer&rsquo;s job is to make it easy. Most people say the session was far more comfortable than they expected.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1 shrink-0">—</span>
              <span><strong className="text-on-surface">Privacy concerns:</strong> Ask the photographer about their privacy policy regarding image use. Most reputable boudoir photographers will not share your images without explicit written consent. You can also book a photographer who specifically offers full privacy options with no portfolio use.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1 shrink-0">—</span>
              <span><strong className="text-on-surface">&ldquo;That&rsquo;s not my thing&rdquo;:</strong> This one is harder to argue against, and it is worth respecting. If your partner fundamentally does not want to do this, couples boudoir is not the right choice. But if the hesitation is mostly anxiety rather than a firm preference, a consultation call with the photographer — where your partner can ask questions in a low-pressure setting — often resolves it.</span>
            </li>
          </ul>

          <h3 className="font-headline text-xl mb-4">The Gentle Approach</h3>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            Frame the session as an experience you want to share together rather than something you want your partner to do for you. &ldquo;I think this would be a really meaningful thing for us to do together&rdquo; lands very differently than &ldquo;I want to do this, will you come?&rdquo;
          </p>
          <p className="font-body text-on-surface-variant leading-relaxed">
            Suggest starting with a consultation call with the photographer — no commitment to book. Most couples boudoir photographers are skilled communicators who can address concerns in ways that feel reassuring rather than salesy. Once both partners have spoken to the photographer and seen the studio, hesitation often dissolves.
          </p>
        </section>

        {/* Section 8: Questions to Ask */}
        <section id="questions" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">Questions to Ask Your Photographer</h2>
          <p className="font-body text-lg leading-relaxed mb-6">
            The right photographer for a couples boudoir session is someone both partners feel comfortable with. Before booking, ask these questions to make sure the match is right.
          </p>

          <div className="space-y-4">
            {[
              {
                q: "Have you photographed couples similar to us?",
                why: "Portfolio representation matters. A photographer who has experience with your body types, orientations, and dynamic will be better equipped to direct you effectively.",
              },
              {
                q: "What is your approach to privacy and image use?",
                why: "Understand whether your images could be used in their portfolio, on social media, or in marketing materials — and make sure you are comfortable with the answer before booking.",
              },
              {
                q: "How do you make couples feel at ease during the session?",
                why: "Listen for a specific answer that reflects real experience — not just reassurance. They should describe concrete things they do: giving direction, creating a relaxed environment, providing beverages, building in breaks.",
              },
              {
                q: "What does the session flow look like from start to finish?",
                why: "Understanding the arc of the session — from arrival and getting ready through the shoot and wrap — helps both partners know what to expect and arrive without anxiety.",
              },
              {
                q: "What is your retouching philosophy for couples images?",
                why: "Make sure both partners are comfortable with the expected level of retouching. Some photographers retouch heavily; others barely touch the skin. Know which approach you are getting.",
              },
              {
                q: "What is your process if one of us becomes uncomfortable during the session?",
                why: "This signals whether the photographer has a mature, professional approach to consent and comfort. They should have a clear answer that prioritizes both partners&rsquo; experience.",
              },
              {
                q: "Do you offer a private gallery with no portfolio use option?",
                why: "Some couples want complete privacy — images only for them, never shared publicly. Many photographers offer this, sometimes at an additional fee. Ask upfront.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-surface-container-lowest rounded-xl p-5">
                <h3 className="font-headline text-base mb-2">&ldquo;{item.q}&rdquo;</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed"><strong className="text-on-surface">Why it matters:</strong> {item.why}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 9: FAQ */}
        <section id="faq" className="mb-14">
          <h2 className="font-headline text-3xl mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Do both partners have to be in every image?",
                a: "No. Most couples boudoir sessions include a mix of together shots and individual portraits. This gives both partners images they love from the day, and individual portraits often become some of the most cherished images in the final gallery. Discuss the ratio of couples versus individual images with your photographer in advance.",
              },
              {
                q: "How intimate do the images get?",
                a: "That is entirely up to you. Couples boudoir exists on a spectrum from fully clothed emotional portraits to near-nude fine art imagery. You set the level before the session and can adjust in either direction as you go. A professional photographer will never push you further than you want to go — and will check in throughout the session.",
              },
              {
                q: "What if we feel awkward in front of the camera?",
                a: "Everyone feels awkward at the beginning of a boudoir session. Expect the first 20–30 minutes to feel stiff and self-conscious — and know that your photographer has seen this before and will move through it with you. The images that happen an hour or two into the session, when both partners have relaxed, are almost always the best ones.",
              },
              {
                q: "Can we choose which images go in our gallery?",
                a: "Most photographers present a culled gallery (already reduced from all images taken to the best ones) and invite you to select from that. Some offer full selection sessions; others curate the gallery themselves. Ask your photographer how the selection process works so you know what to expect.",
              },
              {
                q: "Is couples boudoir appropriate as a surprise gift?",
                a: "This depends entirely on your partner. For couples who have discussed the idea and are enthusiastic, surprising a partner with a booking can be a beautiful gesture. For couples where one partner has not expressed interest, surprising them can feel coercive. Use your judgment — and when in doubt, plan it together rather than as a surprise.",
              },
              {
                q: "How far in advance should we book?",
                a: "Popular couples boudoir photographers in major cities often book six to twelve weeks in advance, especially around Valentine&rsquo;s Day, anniversary months, and the spring and fall wedding seasons. If you have a specific date in mind, reach out early. Most photographers hold a date with a retainer deposit.",
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
          <h2 className="font-headline text-2xl italic mb-4">Find Couple-Friendly Boudoir Photographers</h2>
          <p className="font-body text-on-surface-variant leading-relaxed mb-6 max-w-[560px] mx-auto">
            Browse our directory of boudoir photographers who specialize in couples work. Filter by location, style, and speciality to find the right photographer for both of you.
          </p>
          <Link
            href="/boudoir-photographers"
            className="inline-block py-3 px-8 editorial-gradient text-on-primary font-label text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Browse Couple-Friendly Photographers
          </Link>
        </div>

      </article>
    </div>
  );
}
