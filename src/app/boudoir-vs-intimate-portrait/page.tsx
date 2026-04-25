import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boudoir vs Intimate Portrait Photography: Which Is Right for You?",
  description:
    "Boudoir and intimate portrait photography both celebrate beauty, but serve different purposes. Compare wardrobe, setting, purpose, and pricing to choose the right experience.",
  keywords: [
    "boudoir vs intimate portrait photography",
    "intimate portrait vs boudoir",
    "intimate portrait photography",
    "boudoir photography",
    "intimate portraiture",
  ],
  alternates: {
    canonical: "https://boudoirphotographyclub.com/boudoir-vs-intimate-portrait",
  },
};

const comparisons = [
  {
    aspect: "Wardrobe",
    boudoir: "Lingerie, bodysuits, implied nudity — wardrobe that evokes intimacy and personal expression",
    intimate: "Casual, personal clothing — what you wear at home, what feels authentically you",
  },
  {
    aspect: "Setting",
    boudoir: "Studio designed to feel like a private bedroom, hotel suite, or intimate home space",
    intimate: "Any meaningful location — a favourite chair, a window seat, a garden, a studio",
  },
  {
    aspect: "Purpose",
    boudoir: "Empowerment, sensuality, partner gifts, milestone documentation",
    intimate: "Authentic self-documentation, emotional depth, connection, artistic portraiture",
  },
  {
    aspect: "Sensuality Level",
    boudoir: "Inherently sensual — celebrates the body in a way that is intentionally evocative",
    intimate: "Varies widely — can be completely non-sexual, focused on emotion and presence",
  },
  {
    aspect: "Editing",
    boudoir: "Warm, flattering, soft — skin retouching is part of the process",
    intimate: "Natural, honest, often minimal retouching — preserves authenticity",
  },
  {
    aspect: "Who It Is For",
    boudoir: "Anyone seeking a sensual, celebratory experience — all bodies and genders welcome",
    intimate: "Anyone wanting authentic, emotionally resonant portraits without the sensual focus",
  },
  {
    aspect: "Typical Price",
    boudoir: "$300 – $2,500+ including hair, makeup, and editing",
    intimate: "$250 – $1,500+ depending on session length and deliverables",
  },
];

export default function BoudoirVsIntimatePortraitPage() {
  return (
    <div className="bg-surface text-on-surface">
      <article className="max-w-[800px] mx-auto px-6 sm:px-10 py-16">

        {/* Breadcrumb */}
        <nav className="mb-8 text-sm font-label text-on-surface-variant">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-on-surface">Boudoir vs Intimate Portrait Photography</span>
        </nav>

        {/* Hero */}
        <header className="mb-12">
          <p className="font-label text-primary uppercase tracking-widest mb-4">
            The Comparison Guide
          </p>
          <h1 className="font-headline text-4xl sm:text-5xl leading-tight mb-6">
            Boudoir vs Intimate Portrait Photography: Which Is Right for You?
          </h1>
          <p className="font-body text-on-surface-variant text-lg leading-relaxed">
            Both boudoir and intimate portrait photography create images that feel personal, close, and meaningful. But they approach that intimacy from different angles. Boudoir leans into sensuality and empowerment — the celebration of the body. Intimate portraits lean into emotional truth and authentic presence — the celebration of the person. Here is how to tell them apart and choose the right experience.
          </p>
        </header>

        {/* Table of Contents */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 mb-12">
          <h2 className="font-headline text-lg mb-4">In This Guide</h2>
          <ul className="space-y-2 font-body text-primary">
            <li><a href="#comparison-table" className="hover:underline">Side-by-Side Comparison</a></li>
            <li><a href="#boudoir-explained" className="hover:underline">Understanding Boudoir Photography</a></li>
            <li><a href="#intimate-portrait-explained" className="hover:underline">Understanding Intimate Portrait Photography</a></li>
            <li><a href="#overlap" className="hover:underline">Where the Styles Overlap</a></li>
            <li><a href="#when-to-choose" className="hover:underline">When to Choose Each</a></li>
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
                  <th className="text-left py-4 px-4 font-label text-xs uppercase tracking-widest text-tertiary">Intimate Portrait</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr key={i} className="border-b border-outline-variant/30">
                    <td className="py-4 px-4 font-bold text-on-surface align-top">{row.aspect}</td>
                    <td className="py-4 px-4 text-on-surface-variant align-top">{row.boudoir}</td>
                    <td className="py-4 px-4 text-on-surface-variant align-top">{row.intimate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Boudoir Explained */}
        <section id="boudoir-explained" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">Understanding Boudoir Photography</h2>
          <p className="font-body text-lg leading-relaxed mb-4">
            Boudoir photography is built around the body and its relationship to sensuality, beauty, and self-expression. The French word &ldquo;boudoir&rdquo; refers to a woman&rsquo;s private dressing room — a space of personal intimacy — and that ethos permeates the genre. Sessions take place in intimate, private settings: a bedroom, a hotel suite, a studio designed to evoke those spaces.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            The wardrobe leans toward lingerie, robes, bodysuits, and clothing that celebrates the body. Hair and makeup are typically professional. The photographer guides posing toward angles that are both flattering and emotionally expressive.
          </p>
          <p className="font-body text-lg leading-relaxed">
            Common reasons for booking boudoir: bridal gifts, anniversary presents, birthday milestones, post-partum body celebrations, recovery from illness, divorce self-reclamation, and simple self-love. The images are meant to be kept, treasured, and sometimes shared with a specific person.
          </p>
        </section>

        {/* Intimate Portrait Explained */}
        <section id="intimate-portrait-explained" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">Understanding Intimate Portrait Photography</h2>
          <p className="font-body text-lg leading-relaxed mb-4">
            Intimate portrait photography is a broader category that encompasses any portraiture that prioritizes emotional closeness and authentic presence over glamour or sensuality. An intimate portrait might be shot in your kitchen in the morning light, in your studio with your tools around you, or in a field that holds personal meaning — anywhere that reveals something true about who you are.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            Wardrobe is typically casual and personal — the clothes you actually wear, the things that feel like you. There is often no hair and makeup styling. The photographer creates the intimacy not through lingerie or sensual posing, but through patience, trust, and the ability to capture people in unguarded moments.
          </p>
          <p className="font-body text-lg leading-relaxed">
            Intimate portraits are often booked by people who want images that document who they are without the theatrical element that boudoir brings. Photographers known for this style include documentary portrait artists, lifestyle photographers, and fine art portraitists who prioritize emotional truth over flattering aesthetics.
          </p>
        </section>

        {/* Overlap */}
        <section id="overlap" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">Where the Styles Overlap</h2>
          <p className="font-body text-lg leading-relaxed mb-4">
            The line between boudoir and intimate portrait blurs considerably in the hands of fine art photographers. A boudoir session that prioritizes emotional authenticity and minimal retouching over flattering poses can feel very much like intimate portraiture. An intimate portrait session that captures vulnerability, the body, and a personal space can feel very much like boudoir.
          </p>
          <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 mb-6">
            <p className="font-body text-on-surface-variant leading-relaxed">
              <strong className="text-on-surface">The key question to ask yourself:</strong> Is the sensual element of the image important to me? If yes, boudoir is the right category. If you want images that reveal your interior life rather than your body&rsquo;s sensuality, intimate portraiture is the more accurate frame.
            </p>
          </div>
          <p className="font-body text-lg leading-relaxed">
            Many photographers work across both categories. Read their artist statement, their portfolio descriptions, and their about pages. A photographer who describes their work in terms of emotional truth and authentic presence rather than beauty and empowerment is likely operating in the intimate portrait space even if their portfolio includes sensual imagery.
          </p>
        </section>

        {/* When to Choose */}
        <section id="when-to-choose" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">When to Choose Each</h2>
          <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 mb-6">
            <h3 className="font-headline text-xl mb-4">Choose Boudoir If&hellip;</h3>
            <ul className="space-y-3 font-body text-on-surface-variant">
              <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>The sensual celebration of your body is part of what you want from the experience</span></li>
              <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>You are creating a partner gift or bridal present</span></li>
              <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>You want the full experience — hair, makeup, wardrobe guidance, and flattering lighting</span></li>
              <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>You want a milestone celebration of your body at a particular moment in time</span></li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8">
            <h3 className="font-headline text-xl mb-4">Choose Intimate Portrait Photography If&hellip;</h3>
            <ul className="space-y-3 font-body text-on-surface-variant">
              <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>You want images that feel emotionally true rather than glamorized or styled</span></li>
              <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>You are not interested in lingerie or sensual posing as part of the session</span></li>
              <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>You want to be documented in your actual environment with minimal artifice</span></li>
              <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>You want portraits that could hang in a gallery as well as in your home</span></li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-14">
          <h2 className="font-headline text-3xl mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Is intimate portrait photography the same as boudoir?",
                a: "Not exactly — though they share significant overlap. Boudoir specifically celebrates the body through sensual, empowering imagery and typically involves lingerie and intimate styling. Intimate portrait photography is a broader category that emphasizes emotional truth and authentic presence, and may have no sensual element at all.",
              },
              {
                q: "Can I have a boudoir-style shoot without any lingerie?",
                a: "Yes. Many boudoir photographers offer sessions in casual or fully clothed options — oversized sweaters, jeans and a bra, or a silk robe loosely worn. The spirit of boudoir is intimacy and empowerment, not any specific wardrobe requirement. Discuss your preferences during the consultation.",
              },
              {
                q: "How do I find a photographer who does intimate portraits without the sensual element?",
                a: "Look for portrait photographers who describe their work using words like 'documentary,' 'authentic,' 'lifestyle,' or 'fine art portrait' rather than 'empowering,' 'sensual,' or 'boudoir.' Review their portfolio to confirm that their intimate work matches the emotional register you are looking for.",
              },
              {
                q: "Are intimate portrait sessions less expensive than boudoir?",
                a: "Not necessarily. While boudoir sessions often include hair and makeup (which adds to the cost), fine art intimate portrait sessions by established photographers can be equally or more expensive due to the artistic expertise involved. Budget ranges vary widely across both genres.",
              },
              {
                q: "Which style is more appropriate if I have body image concerns?",
                a: "Both styles can be transformative for people with body image struggles, but for different reasons. Boudoir directly confronts and celebrates the body, which many clients find profoundly healing. Intimate portraiture shifts the focus away from the body and toward the person, which can feel safer for people who are not ready for the vulnerability of body-focused work. Either can be powerful — it depends on what you are ready for.",
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
          <h2 className="font-headline text-2xl italic mb-4">Find Your Perfect Photographer</h2>
          <p className="font-body text-on-surface-variant leading-relaxed mb-6 max-w-[560px] mx-auto">
            Browse our curated directory of boudoir photographers to find an artist whose style, setting, and approach match what you are looking for.
          </p>
          <Link
            href="/boudoir-photographers"
            className="inline-block py-3 px-8 editorial-gradient text-on-primary font-label text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Browse Photographer Directory
          </Link>
        </div>

      </article>
    </div>
  );
}
