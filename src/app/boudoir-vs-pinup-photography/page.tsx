import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boudoir vs Pin-Up Photography: Key Differences & Which Is Right for You",
  description:
    "Pin-up photography is playful and retro. Boudoir is intimate and empowering. Compare the two styles, pricing, wardrobe, and how to find the right photographer for each.",
  keywords: [
    "boudoir vs pinup photography",
    "pin-up vs boudoir",
    "boudoir or pinup",
    "pinup photography",
    "boudoir photography",
    "retro pin up shoot",
  ],
  alternates: {
    canonical: "https://boudoirphotographyclub.com/boudoir-vs-pinup-photography",
  },
};

const comparisons = [
  {
    aspect: "Mood",
    boudoir: "Intimate, empowering, sensual — often introspective and emotionally resonant",
    pinup: "Playful, flirtatious, retro — fun and theatrically posed with a wink at the camera",
  },
  {
    aspect: "Setting",
    boudoir: "Intimate bedroom, hotel suite, or private studio with soft, natural-feeling light",
    pinup: "Stylized sets with vintage props — diners, mechanics' garages, pinup-era wallpaper",
  },
  {
    aspect: "Wardrobe",
    boudoir: "Lingerie, bodysuits, robes, implied or partial nudity — focus on personal intimacy",
    pinup: "High-waisted shorts, victory rolls, polka dots, retro swimwear, classic Americana",
  },
  {
    aspect: "Posing",
    boudoir: "Natural, vulnerable, guided toward authentic emotion and flattering angles",
    pinup: "Theatrical, exaggerated, inspired by 1940s–1950s illustration — kicking heels, coy glances",
  },
  {
    aspect: "Editing Style",
    boudoir: "Soft, warm, romantically lit — skin tones are natural and textures preserved",
    pinup: "Vibrant, saturated, sometimes vintage-film filtered — high contrast and punchy color",
  },
  {
    aspect: "Purpose",
    boudoir: "Personal empowerment, partner gifts, milestone celebrations, self-love",
    pinup: "Fun personal project, themed birthday gift, cosplay-inspired portraiture, nostalgia",
  },
  {
    aspect: "Typical Price",
    boudoir: "$300 – $2,500+ including hair, makeup, and editing",
    pinup: "$250 – $1,500+ depending on set complexity and wardrobe",
  },
];

export default function BoudoirVsPinupPage() {
  return (
    <div className="bg-surface text-on-surface">
      <article className="max-w-[800px] mx-auto px-6 sm:px-10 py-16">

        {/* Breadcrumb */}
        <nav className="mb-8 text-sm font-label text-on-surface-variant">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-on-surface">Boudoir vs Pin-Up Photography</span>
        </nav>

        {/* Hero */}
        <header className="mb-12">
          <p className="font-label text-primary uppercase tracking-widest mb-4">
            The Comparison Guide
          </p>
          <h1 className="font-headline text-4xl sm:text-5xl leading-tight mb-6">
            Boudoir vs Pin-Up Photography: Key Differences &amp; Which Is Right for You
          </h1>
          <p className="font-body text-on-surface-variant text-lg leading-relaxed">
            Both boudoir and pin-up photography celebrate femininity and confidence — but they do it in radically different ways. Pin-up brings the glamour and humor of mid-century illustration to life. Boudoir goes deeper, creating images that feel intimate and emotionally true. Understanding the difference helps you book the right experience and arrive with the right expectations.
          </p>
        </header>

        {/* Table of Contents */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 mb-12">
          <h2 className="font-headline text-lg mb-4">In This Guide</h2>
          <ul className="space-y-2 font-body text-primary">
            <li><a href="#comparison-table" className="hover:underline">Side-by-Side Comparison</a></li>
            <li><a href="#what-is-pinup" className="hover:underline">What Pin-Up Photography Is</a></li>
            <li><a href="#what-is-boudoir" className="hover:underline">What Boudoir Photography Is</a></li>
            <li><a href="#when-to-choose" className="hover:underline">When to Choose Each Style</a></li>
            <li><a href="#wardrobe" className="hover:underline">Wardrobe Guide for Each</a></li>
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
                  <th className="text-left py-4 px-4 font-label text-xs uppercase tracking-widest text-tertiary">Pin-Up</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr key={i} className="border-b border-outline-variant/30">
                    <td className="py-4 px-4 font-bold text-on-surface align-top">{row.aspect}</td>
                    <td className="py-4 px-4 text-on-surface-variant align-top">{row.boudoir}</td>
                    <td className="py-4 px-4 text-on-surface-variant align-top">{row.pinup}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* What is Pin-Up */}
        <section id="what-is-pinup" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">What Pin-Up Photography Is</h2>
          <p className="font-body text-lg leading-relaxed mb-4">
            Pin-up photography draws its visual language from the illustrated pin-up art of the 1940s and 1950s — Gil Elvgren, Alberto Vargas, and George Petty are the canonical references. The genre translates those illustrated poses, color palettes, and theatrical scenarios into photographs. Think: a woman in a polka-dot halter top pretending to change a tire with a gleaming smile, or a retro kitchen scene with perfectly coiffed victory rolls.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            The defining quality of pin-up is its playfulness. The poses are often deliberately exaggerated — a skirt caught mid-twirl, a heel kicked up, a coy look over the shoulder. The expression is typically confident and fun, with a theatrical quality that acknowledges the camera rather than ignoring it. Pin-up is performative in the best sense: you are playing a character drawn from a golden era of popular art.
          </p>
          <p className="font-body text-lg leading-relaxed">
            Pin-up sessions tend to require more elaborate set design and prop sourcing than standard boudoir. A photographer who specializes in pin-up will have vintage furniture, retro appliances, classic car access, and a wardrobe of period-appropriate costumes. Hair and makeup are a major part of the experience — authentic victory rolls, red lips, and cat-eye liner take time and skill.
          </p>
        </section>

        {/* What is Boudoir */}
        <section id="what-is-boudoir" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">What Boudoir Photography Is</h2>
          <p className="font-body text-lg leading-relaxed mb-4">
            Boudoir photography is intimate portraiture that celebrates the subject as they are — not as a costumed character in a nostalgic tableau, but as themselves, in an honest and flattering light. The session takes place in a private space: a studio designed to feel like a bedroom, an actual hotel suite, or the client&rsquo;s own home. The atmosphere is quiet and personal.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            Wardrobe in boudoir serves the mood of the individual rather than an era or aesthetic concept. You might wear a silk robe, a bodysuit, a matching lingerie set, or a partner&rsquo;s shirt. Some clients choose implied nudity. The choice reflects who you are, not who a 1950s illustrator imagined you to be.
          </p>
          <p className="font-body text-lg leading-relaxed">
            Boudoir photography is frequently chosen for partner gifts — wedding gifts, anniversary albums, &ldquo;just because&rdquo; presents — and for personal milestone celebrations. It is also increasingly chosen as a form of self-documentation: a record of how you looked and felt during a particular chapter of your life.
          </p>
        </section>

        {/* When to Choose */}
        <section id="when-to-choose" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">When to Choose Each Style</h2>

          <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 mb-6">
            <h3 className="font-headline text-xl mb-4">Choose Boudoir If&hellip;</h3>
            <ul className="space-y-3 font-body text-on-surface-variant">
              <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>You want images that feel deeply personal and emotionally resonant</span></li>
              <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>You are creating a gift for a partner or celebrating a personal milestone</span></li>
              <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>You want to explore sensuality or intimacy in a private, safe environment</span></li>
              <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>You want the images to look and feel like you, not like a character</span></li>
            </ul>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8">
            <h3 className="font-headline text-xl mb-4">Choose Pin-Up If&hellip;</h3>
            <ul className="space-y-3 font-body text-on-surface-variant">
              <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>You love the aesthetic of mid-century Americana and vintage illustration</span></li>
              <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>You want a fun, theatrical experience with costumes, props, and set design</span></li>
              <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>You are comfortable with a more performative, less introspective shoot</span></li>
              <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>You want images that are bold, colorful, and conversation-starting</span></li>
            </ul>
          </div>
        </section>

        {/* Wardrobe */}
        <section id="wardrobe" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">Wardrobe Guide for Each Style</h2>

          <div className="grid gap-5">
            <div className="border border-outline-variant rounded-xl p-5">
              <h3 className="font-headline text-lg mb-2">Boudoir Wardrobe Essentials</h3>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed">Matching lingerie sets, silk or satin robes, bodysuits, oversized button-down shirts, lace teddies, thigh-highs and garter belts. Keep it to two or three outfit changes. Avoid anything with tight waistbands in the hours before your session — marks take 30–45 minutes to fade.</p>
            </div>
            <div className="border border-outline-variant rounded-xl p-5">
              <h3 className="font-headline text-lg mb-2">Pin-Up Wardrobe Essentials</h3>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed">High-waisted shorts or pencil skirts, halter tops and bandeau swimwear, polka dot and gingham prints, sweater girls, denim cutoffs, retro swimsuits, fishnet stockings, and kitten heels. Many pin-up photographers have in-studio costume wardrobes — ask before purchasing your own pieces.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-14">
          <h2 className="font-headline text-3xl mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Can a boudoir session have a pin-up theme?",
                a: "Yes — many photographers blend both styles. You can request a vintage-inspired boudoir shoot that incorporates retro props and hair-and-makeup styling without fully committing to a theatrical pin-up set. Discuss this with your photographer during the consultation.",
              },
              {
                q: "Is pin-up photography only for women?",
                a: "Traditionally, pin-up art depicted women, but modern pin-up photography is inclusive. There is a growing community of non-binary and male pin-up enthusiasts, and many photographers happily work across gender presentations. Look for photographers who explicitly list inclusive pin-up work in their portfolios.",
              },
              {
                q: "Do I need to know vintage hair and makeup for a pin-up session?",
                a: "No — most pin-up photographers either offer hair and makeup services or require you to work with a specific stylists who specializes in the retro look. Authentic victory rolls, red lips, and pencilled brows are a skill set. Don't attempt to DIY this unless you already have the expertise.",
              },
              {
                q: "Which style is better for a wedding gift?",
                a: "Boudoir is the classic choice for bridal gifts because the images feel personal and intimate rather than costumed. That said, if your partner loves vintage Americana, a pin-up-inspired boudoir session could be a uniquely memorable choice.",
              },
              {
                q: "How do I find photographers who specialize in pin-up vs boudoir?",
                a: "Search for 'pin-up photographer' or 'vintage portrait photographer' in your area alongside 'boudoir photographer.' Review their portfolios carefully — a photographer who shoots both styles may lean more heavily toward one. Also check their wardrobe and set inventory, which is a strong signal of their actual specialization.",
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
          <h2 className="font-headline text-2xl italic mb-4">Find the Right Photographer for Your Style</h2>
          <p className="font-body text-on-surface-variant leading-relaxed mb-6 max-w-[560px] mx-auto">
            Browse our directory of boudoir photographers across the United States. View portfolios, compare styles, and find the artist whose work resonates with your vision.
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
