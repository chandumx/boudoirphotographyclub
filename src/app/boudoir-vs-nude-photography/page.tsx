import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boudoir vs Nude Photography: Key Differences Explained (2026)",
  description:
    "Boudoir photography can include nudity but is not the same as nude photography. Learn the difference in purpose, approach, settings, and how to communicate your comfort level to photographers.",
  keywords: [
    "boudoir vs nude photography",
    "difference boudoir and nude",
    "tasteful nude photography vs boudoir",
    "boudoir nudity",
    "artistic nude photography",
    "nude portrait photography",
  ],
  alternates: {
    canonical: "https://boudoirphotographyclub.com/boudoir-vs-nude-photography",
  },
};

const comparisons = [
  {
    aspect: "Primary Focus",
    boudoir: "The subject's experience, empowerment, and personal story — nudity is optional and serves the narrative",
    nude: "The body itself as artistic subject — nudity is the central artistic element",
  },
  {
    aspect: "Intended Audience",
    boudoir: "The subject themselves, or a chosen partner — images are private and personal",
    nude: "Can range from entirely private to publicly exhibited fine art — audience varies by photographer",
  },
  {
    aspect: "Setting",
    boudoir: "Private, intimate spaces — studios, bedrooms, hotel suites — that feel personal and safe",
    nude: "Fine art studios, natural landscapes, architecture — settings chosen for aesthetic impact",
  },
  {
    aspect: "Posing Approach",
    boudoir: "Flattering, empowering — directed toward how the subject feels in their body",
    nude: "Compositionally driven — poses chosen for form, shape, and artistic statement",
  },
  {
    aspect: "Retouching",
    boudoir: "Ranges from minimal to moderate — flattering but still authentic to the subject",
    nude: "Often minimal in fine art — skin texture, form, and natural marks are part of the artistic work",
  },
  {
    aspect: "Comfort Setting",
    boudoir: "Built around the subject's comfort level — nudity is never required and can be implied",
    nude: "Nudity is the premise — though boundaries and specifics are always discussed in advance",
  },
  {
    aspect: "Typical Price",
    boudoir: "$300 – $2,500+ depending on session length and products",
    nude: "$400 – $5,000+ for fine art work — varies significantly by photographer reputation",
  },
];

export default function BoudoirVsNudePage() {
  return (
    <div className="bg-surface text-on-surface">
      <article className="max-w-[800px] mx-auto px-6 sm:px-10 py-16">

        {/* Breadcrumb */}
        <nav className="mb-8 text-sm font-label text-on-surface-variant">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-on-surface">Boudoir vs Nude Photography</span>
        </nav>

        {/* Hero */}
        <header className="mb-12">
          <p className="font-label text-primary uppercase tracking-widest mb-4">
            The Comparison Guide
          </p>
          <h1 className="font-headline text-4xl sm:text-5xl leading-tight mb-6">
            Boudoir vs Nude Photography: Key Differences Explained
          </h1>
          <p className="font-body text-on-surface-variant text-lg leading-relaxed">
            One of the most common questions in intimate photography: can boudoir include nudity, and if so, what separates it from nude photography? The answer lies not in the amount of clothing worn, but in the purpose, intention, and relationship between photographer and subject. This guide explains the distinction clearly and practically.
          </p>
        </header>

        {/* Table of Contents */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 mb-12">
          <h2 className="font-headline text-lg mb-4">In This Guide</h2>
          <ul className="space-y-2 font-body text-primary">
            <li><a href="#comparison-table" className="hover:underline">Side-by-Side Comparison</a></li>
            <li><a href="#the-key-distinction" className="hover:underline">The Key Distinction: Purpose vs. Subject</a></li>
            <li><a href="#nudity-in-boudoir" className="hover:underline">Nudity in Boudoir: What to Expect</a></li>
            <li><a href="#artistic-nude" className="hover:underline">Artistic Nude Photography: What It Is</a></li>
            <li><a href="#comfort-level" className="hover:underline">How to Communicate Your Comfort Level</a></li>
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
                  <th className="text-left py-4 px-4 font-label text-xs uppercase tracking-widest text-tertiary">Nude Photography</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr key={i} className="border-b border-outline-variant/30">
                    <td className="py-4 px-4 font-bold text-on-surface align-top">{row.aspect}</td>
                    <td className="py-4 px-4 text-on-surface-variant align-top">{row.boudoir}</td>
                    <td className="py-4 px-4 text-on-surface-variant align-top">{row.nude}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Key Distinction */}
        <section id="the-key-distinction" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">The Key Distinction: Purpose vs. Subject</h2>
          <p className="font-body text-lg leading-relaxed mb-4">
            The simplest way to understand the difference: in boudoir photography, the subject&rsquo;s personal story and experience are the primary creative subject. In nude photography, the body itself — its form, shape, texture, and relationship to light — is the primary artistic subject.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            A boudoir session can include full nudity and still be a boudoir session, because the creative intent is centered on the individual&rsquo;s experience — their empowerment, their milestone, their gift to a partner. The nudity serves that story. An artistic nude session uses the body as compositional material in the same way a landscape photographer uses a mountain — it is the subject of the work, studied for its visual properties.
          </p>
          <p className="font-body text-lg leading-relaxed">
            This distinction matters practically. A boudoir photographer is trained to make you feel seen and comfortable as a whole person, and will design the session around your emotional experience. An artistic nude photographer may approach the session more as a formal artistic collaboration, where your body&rsquo;s shapes and contours are the creative focus. Neither is better — they serve different needs and different people.
          </p>
        </section>

        {/* Nudity in Boudoir */}
        <section id="nudity-in-boudoir" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">Nudity in Boudoir: What to Expect</h2>
          <p className="font-body text-lg leading-relaxed mb-4">
            Boudoir photography has a wide spectrum. On one end: fully clothed or lingerie-only sessions where no skin beyond what a swimsuit reveals is shown. On the other: full artistic nudity where images celebrate the body completely. Most sessions fall somewhere in the middle — implied nudity, partial nudity, or selectively revealing compositions.
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                label: "Implied Nudity",
                desc: "The subject appears to be without clothing, but strategic positioning, sheets, shadows, or cropping prevent any explicit exposure. Many of the most powerful boudoir images use implied nudity to create an effect more sensual than explicit nudity would achieve.",
              },
              {
                label: "Partial Nudity",
                desc: "Topless imagery with lower coverage maintained, or lower nudity with the chest covered. This is common in boudoir sessions and is often more comfortable for first-time clients who want to push their boundaries without a full leap.",
              },
              {
                label: "Full Nudity",
                desc: "Some boudoir clients choose complete nudity as an act of radical self-acceptance or artistic statement. When executed with the same compositional care as fine art nude work, these images can be among the most powerful a boudoir photographer creates.",
              },
            ].map((item, i) => (
              <div key={i} className="border border-outline-variant rounded-xl p-5">
                <h3 className="font-headline text-lg mb-2">{item.label}</h3>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="font-body text-on-surface-variant leading-relaxed">
            Professional boudoir photographers never pressure clients toward more exposure than they are comfortable with. If a photographer makes you feel that nudity is expected or required, that is a red flag. Your session should always be designed around your comfort level.
          </p>
        </section>

        {/* Artistic Nude */}
        <section id="artistic-nude" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">Artistic Nude Photography: What It Is</h2>
          <p className="font-body text-lg leading-relaxed mb-4">
            Artistic nude photography has a long, serious history in fine art — from Edward Weston&rsquo;s formal studies of the body to Helmut Newton&rsquo;s charged, powerful fashion-adjacent work. It is a genre in which skilled photographers use the unclothed human form as their primary creative subject.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            The approach tends to be more formal and compositionally deliberate than boudoir. The photographer is studying the body&rsquo;s geometry — the relationship of curves to shadow, the way muscle and skin create texture, how the body interacts with a given environment. The subject&rsquo;s personality and story are important but secondary to the visual form.
          </p>
          <p className="font-body text-lg leading-relaxed">
            Fine art nude photography is often intended for exhibition or public display, though many photographers also take private commissions. If you are interested in nude photography as an artistic collaboration — rather than a personal empowerment session — look for photographers who exhibit their work, publish in art photography contexts, and describe their practice in artistic terms.
          </p>
        </section>

        {/* Comfort Level */}
        <section id="comfort-level" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">How to Communicate Your Comfort Level</h2>
          <p className="font-body text-lg leading-relaxed mb-6">
            Whether you are booking a boudoir session or an artistic nude session, clear communication before the shoot prevents discomfort on both sides. Here is how to have that conversation professionally and effectively.
          </p>

          <div className="space-y-3 font-body text-on-surface-variant mb-8">
            <div className="flex gap-3">
              <span className="text-primary mt-1">—</span>
              <span><strong className="text-on-surface">State your boundaries clearly in the pre-session consultation.</strong> &ldquo;I am comfortable with topless imagery but would like to keep my lower half covered&rdquo; is a complete, professional statement that any experienced photographer will respect without requiring justification.</span>
            </div>
            <div className="flex gap-3">
              <span className="text-primary mt-1">—</span>
              <span><strong className="text-on-surface">Ask how the session is structured.</strong> Understanding the sequence of wardrobe changes helps you feel in control. You can always start more covered and move toward less during the session — the reverse is harder.</span>
            </div>
            <div className="flex gap-3">
              <span className="text-primary mt-1">—</span>
              <span><strong className="text-on-surface">Confirm who will be present.</strong> Professional boudoir and nude photographers typically work one-on-one or with a same-gender second shooter. Ask in advance if you have preferences.</span>
            </div>
            <div className="flex gap-3">
              <span className="text-primary mt-1">—</span>
              <span><strong className="text-on-surface">Understand image usage rights.</strong> Boudoir images are typically fully private — owned by you, shown only to whom you choose. If a photographer wants to use images for their portfolio, that is a separate conversation requiring your explicit consent in writing.</span>
            </div>
            <div className="flex gap-3">
              <span className="text-primary mt-1">—</span>
              <span><strong className="text-on-surface">Reserve the right to change your mind.</strong> During the session, you can always pull back. A professional photographer will not make you feel guilty for keeping more coverage than you initially planned. The best sessions are the ones where you go as far as feels right — no further.</span>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-14">
          <h2 className="font-headline text-3xl mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Does boudoir photography require nudity?",
                a: "No. Nudity is never required in boudoir photography. Many of the most powerful and beloved boudoir images involve no nudity at all — a person in a silk robe, a bodysuit, or an oversized shirt can be just as intimate and empowering as a nude image. Your comfort level always sets the parameters.",
              },
              {
                q: "Is artistic nude photography the same as explicit or erotic photography?",
                a: "No. Artistic nude photography is a serious fine art genre distinct from explicit or erotic content. Fine art nude work is exhibited in galleries, published in art books, and exists in the permanent collections of major museums. The intent is aesthetic and artistic, not prurient. Reputable photographers in this space are careful to distinguish their work from explicit content.",
              },
              {
                q: "Will boudoir photographers share my images publicly?",
                a: "Only with your explicit written consent. Reputable photographers require a model release before using any images for their portfolio, website, or marketing. You should receive a clear explanation of image usage rights before you sign anything. If a photographer cannot clearly explain what they will and will not do with your images, that is a red flag.",
              },
              {
                q: "How do I find a photographer who specializes in artistic nude work?",
                a: "Look for photographers with exhibition history, fine art photography credentials, or publications in respected photography contexts. Their artist statement should describe a clear aesthetic philosophy. Search terms like 'fine art nude photographer' and 'artistic body photography' yield more relevant results than 'nude photography' alone.",
              },
              {
                q: "Can a boudoir session include artistic nude elements?",
                a: "Yes — particularly in fine art boudoir, where the photographer brings the compositional sensibility of artistic nude work to a session that is still fundamentally centered on the subject's personal experience. This is often the richest ground: the emotional intentionality of boudoir combined with the artistic rigor of fine art nude photography.",
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
          <h2 className="font-headline text-2xl italic mb-4">Find a Boudoir Photographer You Trust</h2>
          <p className="font-body text-on-surface-variant leading-relaxed mb-6 max-w-[560px] mx-auto">
            Browse our curated directory of professional boudoir photographers. Review portfolios, read about each photographer&rsquo;s approach, and find someone whose style and values feel right for you.
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
