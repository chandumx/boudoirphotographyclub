import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boudoir vs Lingerie Photography: What's the Difference? (2026)",
  description:
    "Boudoir photography and lingerie photography overlap but are not the same. Learn the key differences in purpose, styling, retouching, and how to choose the right experience for you.",
  keywords: [
    "boudoir vs lingerie photography",
    "difference between boudoir and lingerie photography",
    "boudoir photography",
    "lingerie photography",
    "boudoir or lingerie shoot",
  ],
  alternates: {
    canonical: "https://boudoirphotographyclub.com/boudoir-vs-lingerie-photography",
  },
};

const comparisons = [
  {
    aspect: "Setting",
    boudoir: "Intimate studio, bedroom, or hotel suite — spaces that feel personal and private",
    lingerie: "Studio backdrop, fashion set, or commercial location — spaces that feel styled and deliberate",
  },
  {
    aspect: "Wardrobe",
    boudoir: "Lingerie, robes, bodysuits, implied nudity, or fully clothed — wardrobe serves the mood, not the brand",
    lingerie: "Specific lingerie pieces, often coordinated sets — wardrobe is the subject as much as the person",
  },
  {
    aspect: "Purpose",
    boudoir: "Personal empowerment, milestone celebration, partner gift, self-love documentation",
    lingerie: "Brand campaigns, e-commerce product photography, modeling portfolios, editorial use",
  },
  {
    aspect: "Editing Style",
    boudoir: "Soft, warm, romantic or moody — retouching enhances natural beauty without erasing it",
    lingerie: "Clean, sharp, commercial — retouching is more consistent and polished for product use",
  },
  {
    aspect: "Posing",
    boudoir: "Guided toward emotion and authentic expression — natural, organic, vulnerable",
    lingerie: "Directed toward the product — poses showcase garments at their best angles",
  },
  {
    aspect: "Who It Is For",
    boudoir: "Anyone seeking a personal, intimate experience — all ages, sizes, and genders",
    lingerie: "Models, brand ambassadors, and individuals promoting or selling a specific product",
  },
  {
    aspect: "Typical Pricing",
    boudoir: "$300 – $2,500+ including hair, makeup, and edited images",
    lingerie: "$150 – $1,500+ depending on usage rights and deliverable count",
  },
];

export default function BoudoirVsLingeriePage() {
  return (
    <div className="bg-surface text-on-surface">
      <article className="max-w-[800px] mx-auto px-6 sm:px-10 py-16">

        {/* Breadcrumb */}
        <nav className="mb-8 text-sm font-label text-on-surface-variant">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-on-surface">Boudoir vs Lingerie Photography</span>
        </nav>

        {/* Hero */}
        <header className="mb-12">
          <p className="font-label text-primary uppercase tracking-widest mb-4">
            The Comparison Guide
          </p>
          <h1 className="font-headline text-4xl sm:text-5xl leading-tight mb-6">
            Boudoir vs Lingerie Photography: What&rsquo;s the Difference?
          </h1>
          <p className="font-body text-on-surface-variant text-lg leading-relaxed">
            Boudoir photography and lingerie photography share a wardrobe overlap that confuses a lot of people searching for the right type of shoot. They are not the same thing. One is a deeply personal experience rooted in empowerment and self-expression. The other is commercial image-making where the garment is the star. Here is everything you need to know to choose the experience that fits what you actually want.
          </p>
        </header>

        {/* Table of Contents */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 mb-12">
          <h2 className="font-headline text-lg mb-4">In This Guide</h2>
          <ul className="space-y-2 font-body text-primary">
            <li><a href="#comparison-table" className="hover:underline">Side-by-Side Comparison</a></li>
            <li><a href="#what-is-boudoir" className="hover:underline">What Boudoir Photography Actually Is</a></li>
            <li><a href="#what-is-lingerie" className="hover:underline">What Lingerie Photography Actually Is</a></li>
            <li><a href="#when-to-choose" className="hover:underline">When to Choose Boudoir vs Lingerie</a></li>
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
                  <th className="text-left py-4 px-4 font-label text-xs uppercase tracking-widest text-tertiary">Lingerie</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr key={i} className="border-b border-outline-variant/30">
                    <td className="py-4 px-4 font-bold text-on-surface align-top">{row.aspect}</td>
                    <td className="py-4 px-4 text-on-surface-variant align-top">{row.boudoir}</td>
                    <td className="py-4 px-4 text-on-surface-variant align-top">{row.lingerie}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* What is Boudoir */}
        <section id="what-is-boudoir" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">What Boudoir Photography Actually Is</h2>
          <p className="font-body text-lg leading-relaxed mb-4">
            The word &ldquo;boudoir&rdquo; is French for a woman&rsquo;s private dressing room — a space of personal intimacy. Modern boudoir photography carries that spirit forward. The session is designed around you: your personality, your body, your milestone, your gift, your act of self-love. The clothing you wear — lingerie, a robe, a partner&rsquo;s shirt, or nothing at all — is a prop in service of that story.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            A skilled boudoir photographer does not start the session by handing you a product to model. They start with a consultation to understand who you are and what you want to feel in these images. The shoot unfolds around that intention, and the wardrobe choices amplify it.
          </p>
          <p className="font-body text-lg leading-relaxed">
            Boudoir is open to all genders, all body types, and all orientations. It celebrates bodies that have lived — postpartum bodies, bodies that have survived illness, bodies that have changed with age. The images belong entirely to you. You decide what to share, if anything at all.
          </p>
        </section>

        {/* What is Lingerie */}
        <section id="what-is-lingerie" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">What Lingerie Photography Actually Is</h2>
          <p className="font-body text-lg leading-relaxed mb-4">
            Lingerie photography is a commercial genre where the garment is the primary subject. The photographer&rsquo;s job is to make a specific product look appealing — to showcase its fabric, cut, and fit in a way that motivates a purchase or represents a brand&rsquo;s aesthetic identity.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            That doesn&rsquo;t mean it&rsquo;s cold or impersonal — great lingerie photography is also evocative and beautiful. But the creative decisions are driven by the product&rsquo;s needs. How does this bralette look from a three-quarter angle? Does this waistband photograph well in warm or cool light? Is the fabric&rsquo;s texture reading clearly at this distance?
          </p>
          <p className="font-body text-lg leading-relaxed">
            Lingerie photography is typically commissioned by brands or designers, or shot for a model&rsquo;s portfolio to demonstrate their ability to work in this commercial category. When individuals book lingerie-style shoots for personal use, they are almost always actually booking boudoir — they simply use &ldquo;lingerie shoot&rdquo; as the search term.
          </p>
        </section>

        {/* When to Choose */}
        <section id="when-to-choose" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">When to Choose Boudoir vs Lingerie Photography</h2>

          <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 mb-6">
            <h3 className="font-headline text-xl mb-4">Choose Boudoir Photography If&hellip;</h3>
            <ul className="space-y-3 font-body text-on-surface-variant">
              <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>You want a personal, empowering experience that celebrates your body and identity</span></li>
              <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>You are creating a gift for a partner (anniversary, bridal, just because)</span></li>
              <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>You are marking a milestone: a birthday, a body transformation, a divorce, a health journey</span></li>
              <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>You want images that capture how you feel, not just how you look in a specific outfit</span></li>
              <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>You want hair and makeup, wardrobe guidance, and a photographer who leads the whole experience</span></li>
            </ul>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8">
            <h3 className="font-headline text-xl mb-4">Choose Lingerie Photography If&hellip;</h3>
            <ul className="space-y-3 font-body text-on-surface-variant">
              <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>You are a designer or brand owner needing product imagery for e-commerce or marketing</span></li>
              <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>You are a model building a portfolio in the commercial lingerie category</span></li>
              <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>The deliverables will be licensed for advertising, publication, or commercial use</span></li>
              <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>The focus is on showcasing a specific garment or collection, not a personal story</span></li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-14">
          <h2 className="font-headline text-3xl mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Can you wear lingerie in a boudoir shoot?",
                a: "Absolutely — lingerie is one of the most popular wardrobe choices for boudoir photography. The difference is that in boudoir, the lingerie serves your story rather than being the story itself. Your photographer will help you choose pieces that flatter your body and match the mood you want to create.",
              },
              {
                q: "Is a lingerie shoot the same as a boudoir shoot?",
                a: "In casual usage, many people say 'lingerie shoot' when they mean boudoir. Technically, lingerie photography is commercial image-making for a product or brand, while boudoir is personal intimate portraiture. If you are booking a session for yourself — not for a brand — you are almost certainly booking a boudoir session.",
              },
              {
                q: "Do I have to be a certain size to do a boudoir session?",
                a: "No. Boudoir photography is for all body types. In fact, many clients say the experience was most meaningful precisely because they came in with body insecurities and left with images that changed how they see themselves. A skilled boudoir photographer knows how to light and pose every body beautifully.",
              },
              {
                q: "What should I wear to a boudoir session?",
                a: "Most boudoir photographers recommend bringing two to four outfit options: at least one set of matching lingerie, a robe or oversized shirt, and something that feels authentically 'you' — whether that's a bodysuit, a vintage slip, or a cozy sweater. Many studios offer wardrobe consultations or styling closets.",
              },
              {
                q: "How much retouching is standard in boudoir vs lingerie photography?",
                a: "Boudoir retouching tends to be natural — the goal is to look like the best version of yourself, not a digitally altered version. Commercial lingerie retouching is often more extensive to meet brand standards. If you have strong preferences about retouching, discuss them with your photographer before booking.",
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
          <h2 className="font-headline text-2xl italic mb-4">Ready to Book Your Boudoir Session?</h2>
          <p className="font-body text-on-surface-variant leading-relaxed mb-6 max-w-[560px] mx-auto">
            Browse our directory of boudoir photographers across the United States. Filter by location and style to find the right photographer for your experience.
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
