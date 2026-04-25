import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fine Art Boudoir Photography — What It Is, How to Find a Photographer & What to Expect",
  description:
    "Fine art boudoir is the most elevated form of intimate portraiture. Learn what makes it different, how to find a fine art boudoir photographer, typical pricing ($800–$5K), and how to prepare.",
  keywords: [
    "fine art boudoir",
    "fine art boudoir photography",
    "fine art boudoir photographer",
    "fine art intimate photography",
    "artistic boudoir photography",
    "fine art nude photography",
    "luxury boudoir photography",
    "editorial boudoir photography",
  ],
  alternates: {
    canonical: "https://boudoirphotographyclub.com/fine-art-boudoir",
  },
};

export default function FineArtBoudoirPage() {
  return (
    <div className="bg-surface text-on-surface">
      <article className="max-w-[800px] mx-auto px-6 sm:px-10 py-16">

        {/* Breadcrumb */}
        <nav className="mb-8 text-sm font-label text-on-surface-variant">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-on-surface">Fine Art Boudoir Photography</span>
        </nav>

        {/* Hero */}
        <header className="mb-12">
          <p className="font-label text-primary uppercase tracking-widest mb-4">
            The Elevated Guide
          </p>
          <h1 className="font-headline text-4xl sm:text-5xl leading-tight mb-6">
            Fine Art Boudoir Photography — What It Is, How to Find a Photographer &amp; What to Expect
          </h1>
          <p className="font-body text-on-surface-variant text-lg leading-relaxed">
            Fine art boudoir is the most elevated form of intimate portraiture — where lighting, composition, and intention combine to create images that belong on gallery walls as much as in a keepsake album. This guide explains everything: what sets it apart, how to find the right photographer, what it costs, and how to prepare for the most meaningful session of your life.
          </p>
        </header>

        {/* Table of Contents */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 mb-12">
          <h2 className="font-headline text-lg mb-4">In This Guide</h2>
          <ul className="space-y-2 font-body text-primary">
            <li><a href="#what-is" className="hover:underline">What Is Fine Art Boudoir Photography?</a></li>
            <li><a href="#hallmarks" className="hover:underline">The 7 Hallmarks of Fine Art Boudoir</a></li>
            <li><a href="#comparison" className="hover:underline">Fine Art vs Classic Boudoir vs Glamour</a></li>
            <li><a href="#find-photographer" className="hover:underline">How to Find a Fine Art Boudoir Photographer</a></li>
            <li><a href="#cost" className="hover:underline">What Does Fine Art Boudoir Cost?</a></li>
            <li><a href="#prepare" className="hover:underline">How to Prepare for a Fine Art Session</a></li>
            <li><a href="#products" className="hover:underline">Fine Art Boudoir Products</a></li>
            <li><a href="#faq" className="hover:underline">Frequently Asked Questions</a></li>
          </ul>
        </div>

        {/* Section 1: What Is Fine Art Boudoir */}
        <section id="what-is" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">What Is Fine Art Boudoir Photography?</h2>
          <p className="font-body text-lg leading-relaxed mb-4">
            Fine art boudoir photography is intimate portraiture elevated to the level of artistic expression. Where standard boudoir focuses on creating beautiful, flattering images of the subject, fine art boudoir treats each frame as a deliberate artistic statement — carefully constructed with cinema-quality lighting, studied compositional principles, and a restrained editing philosophy that preserves the authenticity of the moment.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            The term &ldquo;fine art&rdquo; carries weight. It signals that the photographer approaches their craft the way a painter or sculptor would: with a point of view, a consistent visual language, and an intention that goes beyond simply making the subject look attractive. A fine art boudoir photographer is as concerned with shadow and negative space as they are with the subject&rsquo;s best angle. The result is images that feel timeless rather than of-the-moment — work that could hang in a gallery or a MoMA permanent collection alongside Helmut Newton or Sally Mann.
          </p>
          <p className="font-body text-lg leading-relaxed mb-4">
            Fine art boudoir differs from standard boudoir in several important ways. It is slower and more deliberate. Sessions typically run longer — three to six hours is common — and produce fewer final images, because every frame is considered rather than churned out. The emphasis is on quality over quantity. Many fine art boudoir photographers limit themselves to a small number of clients per year to maintain the integrity of their work.
          </p>
          <p className="font-body text-lg leading-relaxed">
            Subjects often describe a fine art boudoir experience as transformative rather than simply fun. The stillness and intentionality of the process — being truly seen and documented with care — creates an emotional depth that photographic quick-shoot formats cannot replicate. You leave not just with beautiful photographs but with a different understanding of yourself.
          </p>
        </section>

        {/* Section 2: 7 Hallmarks */}
        <section id="hallmarks" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">The 7 Hallmarks of Fine Art Boudoir</h2>
          <p className="font-body text-lg leading-relaxed mb-8">
            Not every photographer who uses the term &ldquo;fine art&rdquo; in their marketing is actually operating at this level. Here are the seven defining characteristics that separate genuine fine art boudoir from standard boudoir with a more expensive price tag.
          </p>

          <div className="space-y-8">
            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-headline text-xl mb-2">1. Painterly, Intentional Lighting</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Fine art boudoir photographers obsess over light. They study the way Rembrandt illuminated faces, how Caravaggio used shadow to create drama, how natural window light sculpts the body differently at 7 a.m. than at 4 p.m. Sessions are often built entirely around a single light source — a window, a bare bulb, or a carefully placed monolight — because complexity in lighting can undermine the simplicity that fine art demands. The light tells the story.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-headline text-xl mb-2">2. Deliberate Compositional Structure</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Every fine art boudoir image is composed with the same care a landscape painter applies to a canvas. Negative space is used purposefully. The subject may occupy one third of the frame, with the remaining two thirds given to shadow or texture, creating a visual tension that draws the eye. The rule of thirds, golden ratio, and leading lines are tools, not rules — the photographer knows when to break them and why.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-headline text-xl mb-2">3. Posing as Visual Language</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                In fine art boudoir, posing is not about finding the subject&rsquo;s &ldquo;good side.&rdquo; The photographer is looking for gestures that feel authentic — the curl of a hand, the way the head tilts when someone is lost in thought, the length of the spine when someone is genuinely relaxed. Poses are developed organically over the course of a long session, never forced from a posing template. The subject&rsquo;s personality shapes the images as much as the photographer&rsquo;s vision.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-headline text-xl mb-2">4. Film-Inspired or Tonal Editing</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Fine art boudoir editing is restrained and tonal rather than heavy and digital. Many photographers shoot on film or apply analog-inspired processing in post. Skin retouching is minimal — fine art celebrates texture, the realness of a birthmark, the curve of a scar. Color grading is consistent across a body of work, giving the photographer&rsquo;s portfolio a distinctive, recognizable aesthetic rather than the chameleon feel of photographers who switch styles with every shoot.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-headline text-xl mb-2">5. Limited Retouching Philosophy</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Where commercial and glamour boudoir often applies heavy skin smoothing and body reshaping, fine art boudoir does not. The philosophy is that the subject&rsquo;s body is already art. Retouching removes the evidence of real life — the stretch marks, the texture, the imperfections that make a person&rsquo;s body theirs. Fine art retouching corrects distractions (a stray hair across the face, a clothing wrinkle) while preserving the subject&rsquo;s authentic appearance.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-headline text-xl mb-2">6. Gallery-Print Worthy Output</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Fine art boudoir images are shot and edited with large-format printing in mind. Files are captured at the highest possible resolution on full-frame or medium-format cameras. The photographer considers how the image will look at 30&times;40 inches on a wall before they press the shutter. This orientation toward physical, lasting output shapes every decision in the process — from location scouting to wardrobe selection to the final edit.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-headline text-xl mb-2">7. A Distinct, Consistent Visual Voice</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Browse a fine art boudoir photographer&rsquo;s portfolio and you should immediately recognize their work — not because every image looks the same, but because every image carries the same perspective. The tones, the relationship to light, the emotional register all reflect a coherent artistic vision. This is the difference between a photographer and an artist: the artist has something to say, and their body of work says it consistently.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Comparison Table */}
        <section id="comparison" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">Fine Art Boudoir vs Classic Boudoir vs Glamour</h2>
          <p className="font-body text-lg leading-relaxed mb-8">
            Choosing the right style starts with understanding how these three genres differ in approach, output, and experience.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm mb-6">
              <thead>
                <tr className="border-b border-outline-variant">
                  <th className="text-left py-4 px-3 font-label text-xs uppercase tracking-widest text-on-surface-variant">Aspect</th>
                  <th className="text-left py-4 px-3 font-label text-xs uppercase tracking-widest text-primary">Fine Art Boudoir</th>
                  <th className="text-left py-4 px-3 font-label text-xs uppercase tracking-widest text-on-surface-variant">Classic Boudoir</th>
                  <th className="text-left py-4 px-3 font-label text-xs uppercase tracking-widest text-tertiary">Glamour</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    aspect: "Primary Goal",
                    fine: "Artistic expression + emotional truth",
                    classic: "Beautiful, flattering portraits",
                    glamour: "Polished, magazine-style imagery",
                  },
                  {
                    aspect: "Lighting",
                    fine: "Painterly, often single-source or natural",
                    classic: "Soft, flattering, multi-light setups",
                    glamour: "High-key or dramatic studio lighting",
                  },
                  {
                    aspect: "Posing",
                    fine: "Organic, developed over long sessions",
                    classic: "Guided from a repertoire of flattering poses",
                    glamour: "Editorial, fashion-model direction",
                  },
                  {
                    aspect: "Retouching",
                    fine: "Minimal — skin texture preserved",
                    classic: "Moderate — smoothing, some body edits",
                    glamour: "Heavy — editorial perfection standard",
                  },
                  {
                    aspect: "Session Length",
                    fine: "3–6 hours typical",
                    classic: "2–4 hours typical",
                    glamour: "1–3 hours typical",
                  },
                  {
                    aspect: "Images Delivered",
                    fine: "15–40 curated images",
                    classic: "30–80 images",
                    glamour: "30–100 images",
                  },
                  {
                    aspect: "Typical Price",
                    fine: "$800–$5,000+",
                    classic: "$400–$2,500",
                    glamour: "$200–$1,500",
                  },
                  {
                    aspect: "Best For",
                    fine: "Art collectors, milestone moments, gallery prints",
                    classic: "Self-love, partner gifts, personal milestones",
                    glamour: "Social media, portfolio, fashion-forward clients",
                  },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-outline-variant/30">
                    <td className="py-4 px-3 font-bold text-on-surface align-top">{row.aspect}</td>
                    <td className="py-4 px-3 text-on-surface-variant align-top">{row.fine}</td>
                    <td className="py-4 px-3 text-on-surface-variant align-top">{row.classic}</td>
                    <td className="py-4 px-3 text-on-surface-variant align-top">{row.glamour}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-body text-on-surface-variant leading-relaxed">
            The right choice depends on your intention. If you want the most flattering and fun experience with a generous gallery, classic boudoir is excellent. If you want images that could stop a conversation in your living room — work that will still feel significant in 30 years — fine art boudoir is worth the investment.
          </p>
        </section>

        {/* Section 4: Find a Photographer */}
        <section id="find-photographer" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">How to Find a Fine Art Boudoir Photographer</h2>
          <p className="font-body text-lg leading-relaxed mb-6">
            Finding a true fine art boudoir photographer requires more discernment than booking a standard boudoir shoot. Here is what to look for and what to ask.
          </p>

          <h3 className="font-headline text-xl mb-4">What to Look for in a Portfolio</h3>
          <ul className="space-y-3 font-body text-on-surface-variant mb-8">
            <li className="flex gap-3"><span className="text-primary mt-1">—</span><span><strong className="text-on-surface">Consistency of vision.</strong> Every image in their portfolio should feel like it was made by the same person, not like a style sampler. Look for a recognizable tonal palette, a consistent relationship to light, and a recurring emotional register.</span></li>
            <li className="flex gap-3"><span className="text-primary mt-1">—</span><span><strong className="text-on-surface">Real skin, real bodies.</strong> Fine art photographers do not erase the evidence of real life. If every body in their portfolio looks digitally altered into the same texture, move on.</span></li>
            <li className="flex gap-3"><span className="text-primary mt-1">—</span><span><strong className="text-on-surface">Compositional intentionality.</strong> Zoom out and look at the whole frame, not just the subject. Is the negative space deliberate? Are the lines leading somewhere? Does the image hold your attention even when you are not focused on the person in it?</span></li>
            <li className="flex gap-3"><span className="text-primary mt-1">—</span><span><strong className="text-on-surface">Print-quality evidence.</strong> Check whether they show finished wall art, museum albums, or gallery prints on their website. Photographers who think in terms of physical output make different choices at every stage of the process.</span></li>
            <li className="flex gap-3"><span className="text-primary mt-1">—</span><span><strong className="text-on-surface">A point of view in their writing.</strong> Read their about page and blog posts. Does this photographer think deeply about their work? Can they articulate their aesthetic philosophy? A fine art photographer should have opinions about light and composition, not just about hair and makeup.</span></li>
          </ul>

          <h3 className="font-headline text-xl mb-4">Questions to Ask Before Booking</h3>
          <ul className="space-y-3 font-body text-on-surface-variant mb-6">
            <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>&ldquo;Can you describe your retouching philosophy and what I can expect my skin to look like in the final images?&rdquo;</span></li>
            <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>&ldquo;How long does a typical session run, and how many final images does that typically yield?&rdquo;</span></li>
            <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>&ldquo;What format do you shoot — digital or film — and why?&rdquo;</span></li>
            <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>&ldquo;Do you have a pre-session consultation, and how do you approach getting to know a new subject before shooting?&rdquo;</span></li>
            <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>&ldquo;What print and wall art products do you offer, and what sizes do you recommend for a primary living space?&rdquo;</span></li>
            <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>&ldquo;How do you approach sessions with subjects who are uncomfortable being photographed or who have never done anything like this before?&rdquo;</span></li>
          </ul>

          <div className="bg-surface-container-lowest rounded-2xl p-6">
            <p className="font-body text-on-surface-variant leading-relaxed">
              Ready to browse? Our directory lists fine art boudoir photographers across the United States, with portfolio galleries so you can compare artistic styles before reaching out.{" "}
              <Link href="/boudoir-photographers" className="text-primary hover:underline font-bold">
                Browse the photographer directory →
              </Link>
            </p>
          </div>
        </section>

        {/* Section 5: Cost */}
        <section id="cost" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">What Does Fine Art Boudoir Cost?</h2>
          <p className="font-body text-lg leading-relaxed mb-6">
            Fine art boudoir is among the most expensive genres of portrait photography, and for good reason. You are not paying for a snapshot — you are commissioning a body of work from an artist who has spent years developing their craft, investing in professional-grade equipment, and building the knowledge required to translate your essence into images that last generations.
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                tier: "Entry-Level Fine Art Boudoir",
                range: "$800 – $1,500",
                desc: "Emerging fine art photographers with a developing but distinct portfolio. Typically includes 2–3 hour sessions, 20–30 final images, and digital delivery. May not include hair and makeup.",
              },
              {
                tier: "Mid-Range Fine Art Boudoir",
                range: "$1,500 – $3,000",
                desc: "Established photographers with a clear artistic vision, professional studio or location access, and the expertise to work with a wide range of subjects. Usually includes professional hair and makeup, a pre-session consultation, 25–40 final images, and a print credit.",
              },
              {
                tier: "Premium Fine Art Boudoir",
                range: "$3,000 – $5,000+",
                desc: "Nationally or internationally recognized fine art photographers with gallery exhibition history and a waiting list. Sessions run 4–6 hours and are highly curated. Products typically include museum-quality albums, large-format wall art, or custom folio boxes. The full investment often includes print products.",
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

          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            It is also worth understanding what drives the price. Fine art photographers typically shoot fewer sessions per month than commercial boudoir photographers — sometimes as few as four to six per month — which means their pricing must reflect the full overhead of running a studio on a smaller volume. Medium-format camera systems (Fujifilm GFX, Hasselblad, Phase One) commonly used in fine art work cost $5,000–$50,000+. Film processing and scanning adds cost. Custom museum albums from premium bookmakers can cost the photographer $400–$800 to produce.
          </p>
          <p className="font-body text-on-surface-variant leading-relaxed">
            When you invest in a fine art boudoir session, you are investing in work that you will own and treasure for decades. Compared to the cost of original artwork by a working photographer, fine art boudoir is an extraordinary value.
          </p>
        </section>

        {/* Section 6: Prepare */}
        <section id="prepare" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">How to Prepare for a Fine Art Session</h2>
          <p className="font-body text-lg leading-relaxed mb-8">
            A fine art boudoir session asks more of you than a standard shoot — and gives more back. Here is how to arrive ready to create something extraordinary.
          </p>

          <h3 className="font-headline text-xl mb-4">Wardrobe</h3>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            Fine art boudoir wardrobe is typically simpler than classic boudoir. Think: a silk slip, a cashmere oversized sweater, a single sheet of fabric, or nothing at all with strategic positioning. Elaborate lingerie sets with heavy embellishment can actually compete with the image rather than support it. Bring two or three options and discuss with your photographer before the shoot — they will have a clear sense of what serves their visual language.
          </p>
          <p className="font-body text-on-surface-variant leading-relaxed mb-8">
            Avoid tight waistbands, socks with elastic, or anything that leaves marks on the skin in the hours before your session. Marks can take 30–45 minutes to fade.
          </p>

          <h3 className="font-headline text-xl mb-4">Mindset</h3>
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            Fine art boudoir sessions work best when you arrive with openness rather than expectation. You do not need to be a model. You do not need to know how to pose. The photographer will guide you — and the most extraordinary fine art images often emerge from moments of stillness, distraction, or genuine emotion rather than executed poses.
          </p>
          <p className="font-body text-on-surface-variant leading-relaxed mb-8">
            Consider doing a pre-session consultation (most fine art photographers require one) where you discuss your vision, your relationship to being photographed, and any concerns. This conversation builds the trust that makes the images possible.
          </p>

          <h3 className="font-headline text-xl mb-4">Day-Of Tips</h3>
          <ul className="space-y-3 font-body text-on-surface-variant">
            <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>Arrive well-rested. Fine art sessions are long, and fatigue shows in images in ways that are impossible to retouch out.</span></li>
            <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>Eat a real meal before the session. Low blood sugar affects posture, mood, and presence in photographs.</span></li>
            <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>Bring music that makes you feel powerful, sensual, and at home in your body — most photographers will play your playlist during the shoot.</span></li>
            <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>Give yourself time after the session. Fine art boudoir is emotionally intense and often deeply moving. You may want to sit quietly with the experience rather than rushing back to your day.</span></li>
            <li className="flex gap-3"><span className="text-primary mt-1">—</span><span>Trust the photographer&rsquo;s direction — especially when it feels unfamiliar or uncomfortable. The images that feel the most awkward to create are often the most powerful to receive.</span></li>
          </ul>
        </section>

        {/* Section 7: Products */}
        <section id="products" className="mb-14">
          <h2 className="font-headline text-3xl mb-6">Fine Art Boudoir Products</h2>
          <p className="font-body text-lg leading-relaxed mb-8">
            One of the defining characteristics of fine art boudoir is the emphasis on physical, lasting products. A digital gallery on a hard drive does not do justice to images made at this level. Here are the product categories that fine art boudoir photographers typically offer.
          </p>

          <div className="grid gap-5">
            {[
              {
                name: "Gallery Prints",
                desc: "Large-format fine art prints on archival paper (Hahnemühle, Canson, Ilford) or metal. Typically available in sizes from 11×14 to 40×60 and beyond. Museum-standard archival inks guarantee 100+ years of fade resistance. Most fine art photographers work with professional print labs like WHCC, Richard Photo Lab, or Bay Photo.",
              },
              {
                name: "Museum-Quality Albums",
                desc: "Handcrafted albums from artisan bookmakers (Graphistudio, Queensberry, Leather Craftsmen) featuring lay-flat binding, archival paper, and custom covers in leather, linen, or acrylic. A fine art boudoir album is an heirloom — something your children or grandchildren will discover and treasure.",
              },
              {
                name: "Folio Boxes",
                desc: "A curated collection of loose fine art prints housed in a handmade clamshell box. Folio boxes are the analog equivalent of a digital gallery — a tactile, intimate way to hold and revisit your images. They are popular in fine art boudoir because they preserve the feeling of discovering each image individually.",
              },
              {
                name: "Wall Art Installations",
                desc: "Many fine art boudoir photographers offer design consultations to help clients plan a wall gallery — a curated arrangement of multiple prints that functions as a cohesive installation in the home. This service takes the images out of a drawer and into daily life, where they belong.",
              },
              {
                name: "Canvas and Fine Art Paper Wraps",
                desc: "Gallery-wrapped canvas or paper prints stretched over hardwood frames. These are ready to hang without additional framing and work especially well in modern, minimalist interiors where they create an immediate focal point.",
              },
            ].map((product, i) => (
              <div key={i} className="bg-surface-container-lowest rounded-xl p-5">
                <h3 className="font-headline text-lg mb-2">{product.name}</h3>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed">{product.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section id="faq" className="mb-14">
          <h2 className="font-headline text-3xl mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Do I need modeling experience for a fine art boudoir session?",
                a: "Not at all. Fine art boudoir photographers are skilled at working with subjects who have never been in front of a professional camera. In many cases, photographers prefer working with non-models because the resulting images have an authenticity that posed, practiced subjects cannot replicate. The pre-session consultation and the patience of a long session give you the time to relax into yourself.",
              },
              {
                q: "Is fine art boudoir the same as artistic nude photography?",
                a: "There is overlap, but they are not the same thing. Fine art boudoir typically retains the intimate, personal character of traditional boudoir — the images are made for the subject, not for a public audience. Artistic nude photography may be more publicly exhibited and less focused on the subject&rsquo;s personal experience. Fine art boudoir can include implied or full nudity, but nudity is not its defining feature — the artistic intention is.",
              },
              {
                q: "How is fine art boudoir edited differently from standard boudoir?",
                a: "The key difference is restraint. Fine art boudoir editing preserves skin texture, body contours, and the natural evidence of the subject&rsquo;s real body. Liquify tools are rarely used. Heavy frequency separation retouching that creates a plastic-looking skin surface is avoided entirely. The goal is to enhance the light and tonal quality of the image while leaving the subject recognizably, authentically themselves.",
              },
              {
                q: "What body types is fine art boudoir for?",
                a: "All of them. Fine art boudoir&rsquo;s commitment to minimal retouching and authentic representation makes it especially powerful for clients who have struggled with body image, because the photographer&rsquo;s role is to show the subject as they are — and help them see the beauty in that reality. Fine art boudoir photographers work with subjects of all ages, sizes, genders, and physical abilities.",
              },
              {
                q: "Can I get fine art boudoir images without nudity?",
                a: "Absolutely. Many of the most powerful fine art boudoir images contain no nudity at all. A woman in a silk robe with her back to the camera, lit by a single window — that can be as artistically striking as any nude. Discuss your comfort level with your photographer during the consultation; they will design the session around your boundaries without compromising the artistic integrity of the work.",
              },
              {
                q: "How long does it take to receive the finished images?",
                a: "Fine art boudoir turnaround is typically longer than standard boudoir because the editing process is more considered. Expect four to twelve weeks for digital delivery. Print products take additional time based on the lab and product type. Many fine art photographers schedule a viewing session — either in-person or via video call — where you see the images for the first time together, which is itself part of the experience.",
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
          <h2 className="font-headline text-2xl italic mb-4">Find Your Fine Art Boudoir Photographer</h2>
          <p className="font-body text-on-surface-variant leading-relaxed mb-6 max-w-[560px] mx-auto">
            Browse our curated directory of boudoir photographers across the United States. Filter by style, location, and speciality to find an artist whose vision resonates with yours.
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
