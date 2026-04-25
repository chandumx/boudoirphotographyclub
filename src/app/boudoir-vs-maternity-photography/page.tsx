import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boudoir vs Maternity Photography: Can You Do Both? (2026 Guide)",
  description:
    "Maternity boudoir combines both styles. Learn how they differ, whether you can combine them, the best trimester to shoot, and what to look for in a photographer for each.",
  keywords: [
    "boudoir vs maternity photography",
    "maternity boudoir vs maternity photography",
    "pregnancy boudoir",
    "maternity boudoir",
    "boudoir while pregnant",
    "maternity portrait photography",
  ],
  alternates: {
    canonical: "https://boudoirphotographyclub.com/boudoir-vs-maternity-photography",
  },
};

const comparisons = [
  {
    aspect: "Primary Subject",
    boudoir: "The individual — their body, sensuality, empowerment, and personal story",
    maternity: "The pregnancy — the growing belly, the anticipation, the transition into parenthood",
  },
  {
    aspect: "Wardrobe",
    boudoir: "Lingerie, robes, bodysuits, implied nudity — intimate and personal",
    maternity: "Flowing dresses, wraps, form-fitting gowns — clothing that celebrates the belly",
  },
  {
    aspect: "Setting",
    boudoir: "Private, intimate spaces — studio, bedroom, hotel suite",
    maternity: "Studio, outdoor natural settings, or meaningful home environments",
  },
  {
    aspect: "Mood",
    boudoir: "Sensual, empowering, vulnerable, celebratory of the body",
    maternity: "Tender, anticipatory, warm, family-oriented",
  },
  {
    aspect: "Who Is Featured",
    boudoir: "The individual — solo sessions or occasionally with a partner",
    maternity: "The pregnant person, often with a partner and/or existing children",
  },
  {
    aspect: "Best Timing",
    boudoir: "Any time — but many pregnant clients choose second trimester when energy peaks",
    maternity: "28–34 weeks — belly is prominent but discomfort is still manageable",
  },
  {
    aspect: "Typical Price",
    boudoir: "$300 – $2,500+ including hair, makeup, and editing",
    maternity: "$200 – $1,500+ depending on session length and products",
  },
];

export default function BoudoirVsMaternityPage() {
  return (
    <div className="bg-surface text-on-surface">
      <article className="max-w-[800px] mx-auto px-6 sm:px-10 py-16">

        {/* Breadcrumb */}
        <nav className="mb-8 text-sm font-label text-on-surface-variant">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-on-surface">Boudoir vs Maternity Photography</span>
        </nav>

        {/* Hero */}
        <header className="mb-12">
          <p className="font-label text-primary uppercase tracking-widest mb-4">
            The Comparison Guide
          </p>
          <h1 className="font-headline text-4xl sm:text-5xl leading-tight mb-6">
            Boudoir vs Maternity Photography: Can You Do Both?
          </h1>
          <p className="font-body text-on-surface-variant text-lg leading-relaxed">
            Pregnancy is one of the most dramatic transformations a body can go through — and it is an experience many people want documented beautifully. Both boudoir and maternity photography can capture this chapter, but they frame it very differently. And for many clients, the most powerful choice is to combine them. Here is how to understand each style and decide what is right for you.
          </p>
        </header>

        {/* Table of Contents */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 mb-12">
          <h2 className="font-headline text-lg mb-4">In This Guide</h2>
          <ul className="space-y-2 font-body text-primary">
            <li><a href="#comparison-table" className="hover:underline">Side-by-Side Comparison</a></li>
            <li><a href="#maternity-photography" className="hover:underline">What Maternity Photography Is</a></li>
            <li><a href="#pregnancy-boudoir" className="hover:underline">What Maternity Boudoir Is</a></li>
            <li><a href="#best-trimester" className="hover:underline">The Best Trimester to Shoot</a></li>
            <li><a href="#combining" className="hover:underline">How to Combine Both Styles</a></li>
            <li><a href="#what-to-look-for" className="hover:underline">What to Look for in a Photographer</a></li>
            <li><a href="#faq" className="hover:underline">Frequently Asked Questions</a></li>
          </ul>
        </div>

        {/* Comparison Table */}
        <section id="comparison-table" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">Side-by-Side Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-outline-variant">
                  <th className="text-left py-4 px-4 font-label text-xs uppercase tracking-widest text-on-surface-variant">Aspect</th>
                  <th className="text-left py-4 px-4 font-label text-xs uppercase tracking-widest text-primary">Boudoir</th>
                  <th className="text-left py-4 px-4 font-label text-xs uppercase tracking-widest text-tertiary">Maternity</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr key={i} className="border-b border-outline-variant/30">
                    <td className="py-4 px-4 font-bold text-on-surface align-top">{row.aspect}</td>
                    <td className="py-4 px-4 text-on-surface-variant align-top">{row.boudoir}</td>
                    <td className="py-4 px-4 text-on-surface-variant align-top">{row.maternity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Maternity Photography */}
        <section id="maternity-photography" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">What Maternity Photography Is</h2>
          <p className="font-body text-lg leading-relaxed mb-4">
            Traditional maternity photography celebrates the pregnancy as a family milestone. The belly is the star, and the images are designed to be shared — with family, on social media, as nursery art. Sessions often include a partner and existing children. The mood is warm, tender, and anticipatory.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            Wardrobe choices in maternity photography run from flowing dresses and wraps that celebrate the belly&rsquo;s shape, to more casual home-life images that capture the genuine texture of late pregnancy. Outdoor sessions — golden hour in a field, forest light through trees — are popular because natural settings frame the body generously.
          </p>
          <p className="font-body text-lg leading-relaxed">
            Maternity photography is typically less intimate than boudoir — the images are made to be shown, not kept private. The editing tends toward the warm, bright, and timeless. The goal is images that will make you smile in twenty years, not images that make your pulse quicken.
          </p>
        </section>

        {/* Pregnancy Boudoir */}
        <section id="pregnancy-boudoir" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">What Maternity Boudoir Is</h2>
          <p className="font-body text-lg leading-relaxed mb-4">
            Maternity boudoir — also called pregnancy boudoir — brings the sensual, empowering energy of boudoir photography to the pregnant body. Where traditional maternity photography celebrates the pregnancy, maternity boudoir celebrates the person who is pregnant: their power, their transformation, their ownership of an extraordinary physical experience.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            Sessions are intimate and private — typically solo, though partner inclusion is possible. Wardrobe leans toward lingerie, silk robes, wrap fabrics, or artfully implied nudity that shows the full shape of the belly. The mood is sensual and celebratory rather than tender and family-oriented.
          </p>
          <p className="font-body text-lg leading-relaxed">
            Many clients find maternity boudoir particularly powerful because pregnancy is one of the few moments when the body&rsquo;s transformation is undeniable and unmistakable. The belly cannot be hidden — and boudoir celebrates rather than conceals. For clients who have struggled with body image throughout their lives, being photographed in this state of radical physical transformation can be profoundly healing.
          </p>
        </section>

        {/* Best Trimester */}
        <section id="best-trimester" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">The Best Trimester to Shoot</h2>

          <div className="space-y-4 mb-6">
            {[
              {
                trimester: "First Trimester (Weeks 1–13)",
                verdict: "Not recommended for most",
                desc: "The belly is not yet visible, fatigue and nausea are often at their worst, and the risk of miscarriage is highest. Most photographers recommend waiting unless there is a specific artistic reason for a first-trimester session.",
              },
              {
                trimester: "Second Trimester (Weeks 14–27)",
                verdict: "Good for earlier boudoir sessions",
                desc: "Energy typically returns, morning sickness fades, and the belly begins to show. Weeks 20–24 are a sweet spot for clients who want a session before the belly becomes very large or movement becomes restricted. This is also when many clients feel most like themselves.",
              },
              {
                trimester: "Third Trimester (Weeks 28–36)",
                verdict: "Ideal for most maternity and maternity boudoir sessions",
                desc: "The belly is at its most visually dramatic — full, round, and undeniable. Weeks 28–34 are the photographer's and doctor's typical recommendation. After week 34–36, comfort may decline significantly, and some photographers have policies about shooting in the final weeks.",
              },
            ].map((item, i) => (
              <div key={i} className="border border-outline-variant rounded-xl p-5">
                <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                  <h3 className="font-headline text-lg">{item.trimester}</h3>
                  <span className="font-label text-primary text-sm uppercase tracking-widest">{item.verdict}</span>
                </div>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="font-body text-on-surface-variant leading-relaxed">
            Always consult your OB or midwife before booking. Some pregnancies have specific restrictions on activity, positioning, or exertion that your photographer will need to know about.
          </p>
        </section>

        {/* Combining */}
        <section id="combining" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">How to Combine Both Styles</h2>
          <p className="font-body text-lg leading-relaxed mb-6">
            Many clients choose to combine both approaches within a single extended session. This works best when you book a photographer who is experienced in both genres — not all maternity photographers do boudoir work, and not all boudoir photographers are experienced with the physical considerations of pregnancy.
          </p>

          <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 mb-6">
            <h3 className="font-headline text-xl mb-4">A Sample Combined Session Flow</h3>
            <ul className="space-y-3 font-body text-on-surface-variant">
              <li className="flex gap-3"><span className="text-primary mt-1">1.</span><span><strong className="text-on-surface">Opening (boudoir):</strong> Intimate, private images in lingerie or a silk robe — sensual, empowering, body-centered</span></li>
              <li className="flex gap-3"><span className="text-primary mt-1">2.</span><span><strong className="text-on-surface">Middle (transitional):</strong> Artistic belly images — draped fabric, implied nudity, or partial coverage that bridges both styles</span></li>
              <li className="flex gap-3"><span className="text-primary mt-1">3.</span><span><strong className="text-on-surface">Closing (maternity):</strong> Warmer, lighter images that could be shared — a flowing gown, natural light, hands cradling the belly</span></li>
            </ul>
          </div>

          <p className="font-body text-on-surface-variant leading-relaxed">
            The combination gives you two complete sets of images serving different purposes: the intimate, private boudoir images for yourself (and perhaps a partner), and the warmer maternity images to share, frame, and use as nursery art.
          </p>
        </section>

        {/* What to Look For */}
        <section id="what-to-look-for" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">What to Look for in a Photographer</h2>

          <div className="space-y-3 font-body text-on-surface-variant">
            <div className="flex gap-3">
              <span className="text-primary mt-1">—</span>
              <span><strong className="text-on-surface">Experience with pregnant bodies specifically.</strong> Posing considerations during pregnancy are different — certain positions are uncomfortable or medically inadvisable. Ask whether they have shot maternity boudoir before and request examples.</span>
            </div>
            <div className="flex gap-3">
              <span className="text-primary mt-1">—</span>
              <span><strong className="text-on-surface">A consultation before the session.</strong> Your comfort, physical limitations, and aesthetic preferences need to be established in advance. A photographer who does not offer a pre-session consultation for maternity work is a concern.</span>
            </div>
            <div className="flex gap-3">
              <span className="text-primary mt-1">—</span>
              <span><strong className="text-on-surface">Flexible session structure.</strong> Pregnancy is unpredictable. Your energy levels, comfort, and mobility on the day of the shoot may differ from your expectations. Find a photographer who can adapt the session as needed.</span>
            </div>
            <div className="flex gap-3">
              <span className="text-primary mt-1">—</span>
              <span><strong className="text-on-surface">A welcoming approach to all body types.</strong> Pregnant bodies are diverse — look for photographers whose portfolio includes a range of body types in maternity and boudoir work.</span>
            </div>
            <div className="flex gap-3">
              <span className="text-primary mt-1">—</span>
              <span><strong className="text-on-surface">Clear image rights policy.</strong> Maternity images are personal and often very private. Confirm in writing what the photographer will and will not do with your images.</span>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-14">
          <h2 className="font-headline text-3xl mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Is it safe to do boudoir photography while pregnant?",
                a: "For most healthy pregnancies, yes — with appropriate modifications. Avoid positions that require lying flat on your back for extended periods after the first trimester. Stay well-hydrated and take breaks as needed. Always inform your photographer of any pregnancy-specific restrictions your provider has given you.",
              },
              {
                q: "What week of pregnancy is best for maternity boudoir?",
                a: "Most photographers and clients find weeks 28–34 to be the sweet spot — the belly is full and prominent, energy is typically higher than in the final weeks, and you have enough time before delivery that scheduling is flexible. Book your session around week 24 to secure your preferred timing.",
              },
              {
                q: "Can I include my partner in a maternity boudoir session?",
                a: "Yes — partner-inclusive maternity boudoir sessions are increasingly popular and can be beautiful. They shift the mood somewhat toward the maternity end of the spectrum, but skilled photographers create images that maintain the intimate quality of boudoir while documenting the couple's connection.",
              },
              {
                q: "What should I wear to a maternity boudoir session?",
                a: "Options include: stretchy or wrap-style lingerie that accommodates the belly, silk robes or loose fabric that drapes beautifully, form-fitting bodysuits with belly cutouts, or artistic uses of fabric wrap alone. Many clients also do implied-nudity images that showcase the belly in full. Bring two to three options and let your photographer help you choose.",
              },
              {
                q: "How soon after giving birth can I do a boudoir session?",
                a: "Most healthcare providers recommend waiting at least six to eight weeks postpartum, and longer if you had a cesarean or complications. Many clients choose postpartum boudoir as a way to celebrate their changed body and mark their transition into a new chapter. The timing is deeply personal — book when you feel ready, not by any external timeline.",
              },
              {
                q: "Do maternity boudoir images look different from regular boudoir?",
                a: "Yes — in the most beautiful way. The pregnant belly creates natural compositional interest that changes the visual dynamic of every image. Shadows fall differently, shapes are rounder and more dramatic, and the emotional register is layered in a way that non-maternity boudoir cannot replicate. Many clients who have done both styles say the maternity session produced their most powerful images.",
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
          <h2 className="font-headline text-2xl italic mb-4">Find a Maternity Boudoir Photographer</h2>
          <p className="font-body text-on-surface-variant leading-relaxed mb-6 max-w-[560px] mx-auto">
            Browse our directory of boudoir photographers — many of whom specialize in maternity and pregnancy boudoir work. Review portfolios, compare styles, and book with confidence.
          </p>
          <Link
            href="/boudoir-photographers"
            className="inline-block py-3 px-8 editorial-gradient text-on-primary font-label text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Find Boudoir Photographers
          </Link>
        </div>

      </article>
    </div>
  );
}
