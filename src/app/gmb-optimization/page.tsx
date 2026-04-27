import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GMB Optimization for Boudoir Photographers | Kerb Labs",
  description:
    "Show up #1 on Google Maps when clients search 'boudoir photographer near me'. Done-for-you Google Business Profile optimization for boudoir studios. Results in 30 days.",
  alternates: {
    canonical: "https://boudoirphotographyclub.com/gmb-optimization",
  },
};

const WHAT_WE_DO = [
  {
    icon: "verified",
    title: "Profile Claim & Setup",
    body: "We claim, verify, and fully build out your Google Business Profile — categories, service areas, hours, attributes, and description optimized for how clients actually search.",
  },
  {
    icon: "photo_library",
    title: "Photo Optimization",
    body: "Upload 20–40 high-quality images with geo-tagged metadata. Google rewards profiles with rich photo libraries. We organize them by category for maximum impact.",
  },
  {
    icon: "star",
    title: "Review Strategy",
    body: "Set up automated review requests after sessions. We provide templates and a system to get you to 50+ reviews fast — the single biggest ranking factor in the map pack.",
  },
  {
    icon: "post_add",
    title: "Weekly Google Posts",
    body: "Fresh posts signal to Google that your profile is active. We write and schedule weekly posts promoting your work, seasonal offers, and blog content.",
  },
  {
    icon: "edit_note",
    title: "Q&A Seeding",
    body: "Populate your profile with 10–15 common client questions and answers. This improves both rankings and conversion when potential clients land on your profile.",
  },
  {
    icon: "analytics",
    title: "Monthly Reporting",
    body: "Track calls, direction requests, and profile views month over month. See exactly how many clients found you through Google Maps.",
  },
];

const RESULTS = [
  { stat: "30 days", label: "Average time to map pack visibility" },
  { stat: "3×", label: "Average increase in profile views" },
  { stat: "50+", label: "Reviews target in first 90 days" },
  { stat: "#1–3", label: "Map pack position goal for your city" },
];

const PRICING = [
  {
    name: "Setup Only",
    price: "$299",
    period: "one-time",
    best: "Already have a profile, just need it fixed",
    features: [
      "Full profile audit & rebuild",
      "20 photos uploaded & optimized",
      "Category & attribute optimization",
      "10 Q&A seeded",
      "Review request template",
      "1 month of posts",
    ],
    cta: "Get Started",
    href: "mailto:boudoirphotographyclub@gmail.com?subject=GMB%20Setup%20Package%20-%20%24299&body=Hi%2C%20I%27d%20like%20the%20GMB%20Setup%20package%20for%20%24299.%20My%20studio%20name%20is%3A%0AMy%20website%20is%3A%0AMy%20city%20is%3A",
    highlight: false,
  },
  {
    name: "Full Management",
    price: "$199",
    period: "/month",
    best: "Want ongoing growth and more bookings",
    features: [
      "Everything in Setup (month 1)",
      "Weekly Google Posts (4/month)",
      "Review monitoring & responses",
      "Competitor tracking",
      "Monthly analytics report",
      "Direct Slack/WhatsApp access",
      "Listing optimized as algorithm updates",
    ],
    cta: "Start Growing",
    href: "mailto:boudoirphotographyclub@gmail.com?subject=GMB%20Full%20Management%20-%20%24199%2Fmo&body=Hi%2C%20I%27d%20like%20the%20GMB%20Full%20Management%20package%20for%20%24199%2Fmonth.%20My%20studio%20name%20is%3A%0AMy%20website%20is%3A%0AMy%20city%20is%3A",
    highlight: true,
  },
];

export default function GmbOptimizationPage() {
  return (
    <div className="bg-surface text-on-surface">

      {/* Hero */}
      <section className="max-w-[960px] mx-auto px-6 sm:px-10 pt-20 pb-16 text-center">
        <span className="inline-block font-label text-[10px] uppercase tracking-widest text-primary bg-primary/5 border border-primary/20 px-3 py-1 rounded-full mb-6">
          Google Maps Optimization for Boudoir Studios
        </span>
        <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl italic leading-tight mb-6">
          Show Up When Clients Search<br />
          <span className="text-primary">&ldquo;Boudoir Photographer Near Me&rdquo;</span>
        </h1>
        <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl mx-auto mb-4">
          The top 3 Google Maps results get <strong>70% of all clicks</strong> for local searches.
          If your studio isn&apos;t there, those clients are booking someone else.
        </p>
        <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          We run <strong>Boudoir Photography Club</strong> — one of the fastest-growing boudoir directories on Google,
          with 28,000+ monthly impressions across 50+ cities. We know exactly how Google ranks boudoir
          photographers locally, and we apply that knowledge directly to your Google Business Profile.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:boudoirphotographyclub@gmail.com?subject=GMB%20Optimization%20Interest&body=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20GMB%20optimization%20for%20my%20boudoir%20studio.%0A%0AMy%20studio%20name%3A%0AMy%20website%3A%0AMy%20city%3A"
            className="editorial-gradient text-on-primary px-8 py-4 rounded-sm font-label text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Get a Free Profile Audit
          </a>
          <a
            href="#pricing"
            className="border border-outline-variant text-on-surface px-8 py-4 rounded-sm font-label text-sm uppercase tracking-wider hover:bg-surface-container-low transition-colors"
          >
            See Pricing
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-surface-container-low border-y border-outline-variant/20 py-12">
        <div className="max-w-[960px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {RESULTS.map((s) => (
              <div key={s.label}>
                <p className="font-headline text-3xl italic text-primary mb-1">{s.stat}</p>
                <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why this matters */}
      <section className="max-w-[960px] mx-auto px-6 sm:px-10 py-20">
        <h2 className="font-headline text-3xl italic text-center mb-4">Why GMB Is Your #1 Growth Lever</h2>
        <p className="text-on-surface-variant text-center mb-12 max-w-2xl mx-auto">
          Your website might take 6–12 months to rank on Google. Your Google Business Profile
          can put you in front of local clients <strong>within 30 days</strong>.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHAT_WE_DO.map((item) => (
            <div key={item.title} className="bg-surface-container-lowest p-7 rounded-lg">
              <span className="material-symbols-outlined text-primary text-2xl mb-4 block">{item.icon}</span>
              <h3 className="font-headline text-lg italic mb-2">{item.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social proof — what we built */}
      <section className="bg-primary/5 border-y border-primary/10 py-16">
        <div className="max-w-[720px] mx-auto px-6 sm:px-10 text-center">
          <p className="font-label text-[10px] uppercase tracking-widest text-primary mb-6">Why Trust Us</p>
          <h2 className="font-headline text-3xl italic mb-6">
            We Built a 3,900-Page Boudoir SEO Machine From Scratch
          </h2>
          <p className="text-on-surface-variant leading-relaxed mb-6">
            Boudoir Photography Club went from zero to 28,000 monthly Google impressions in 90 days.
            We&apos;ve indexed 3,900+ pages, rank in the top 10 for dozens of local boudoir searches,
            and we understand the Google algorithm for this niche better than anyone.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            We apply those exact same techniques — locally — to your Google Business Profile.
          </p>
          <div className="mt-8">
            <Link
              href="/blog"
              className="font-label text-xs uppercase tracking-widest text-primary border-b border-primary pb-1 hover:opacity-70 transition-opacity"
            >
              Read our boudoir photography blog →
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-[720px] mx-auto px-6 sm:px-10 py-20">
        <h2 className="font-headline text-3xl italic text-center mb-4">Pricing</h2>
        <p className="text-on-surface-variant text-center mb-12">
          No long-term contracts. Cancel anytime. Results guaranteed or we work for free until you see them.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PRICING.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-lg border ${
                plan.highlight
                  ? "border-primary bg-primary/5 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                  : "border-outline-variant/30 bg-surface-container-lowest"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 font-label text-[9px] uppercase tracking-widest text-on-primary bg-primary px-3 py-1 rounded-full">
                  Recommended
                </span>
              )}
              <p className="font-label text-[10px] uppercase tracking-widest text-outline mb-1">{plan.name}</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="font-headline text-4xl italic">{plan.price}</span>
                <span className="text-on-surface-variant text-sm mb-1">{plan.period}</span>
              </div>
              <p className="text-xs text-on-surface-variant mb-6 italic">{plan.best}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5 flex-shrink-0" style={{fontVariationSettings:"'FILL' 1"}}>check_circle</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={plan.href}
                className={`block w-full text-center py-3 rounded-sm font-label text-xs uppercase tracking-widest transition-all ${
                  plan.highlight
                    ? "editorial-gradient text-on-primary hover:opacity-90"
                    : "border border-outline-variant text-on-surface hover:bg-surface-container-low"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-on-surface-variant mt-8">
          Not sure which plan? Email us — we&apos;ll do a <strong>free audit</strong> of your current profile first.
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-surface-container-low border-t border-outline-variant/20 py-16">
        <div className="max-w-[720px] mx-auto px-6 sm:px-10">
          <h2 className="font-headline text-3xl italic text-center mb-10">Questions</h2>
          <div className="space-y-5">
            {[
              { q: "I already have a Google Business Profile. Can you still help?", a: "Yes — most profiles we audit are missing 60–80% of what Google rewards. Incomplete categories, no posts, few photos, no Q&A, wrong service area settings. We fix all of it." },
              { q: "How long until I see results?", a: "Most clients see movement in their map pack rankings within 2–4 weeks of setup. Full results (top 3 position) typically take 4–8 weeks depending on how competitive your city is." },
              { q: "Do I need to do anything?", a: "Minimal. We need access to your Google Business Profile and 10–20 of your best portfolio photos. After that, we handle everything." },
              { q: "What if it doesn't work?", a: "We work for free until you see results. We've never had to — but the guarantee removes all your risk." },
              { q: "Do you work with other types of photographers?", a: "We specialize exclusively in boudoir photographers. That specialization means we know your keywords, your competition, and exactly what makes a boudoir profile convert." },
            ].map((item) => (
              <div key={item.q} className="bg-surface rounded-lg p-6">
                <h3 className="font-headline text-lg italic mb-2">{item.q}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-[720px] mx-auto px-6 sm:px-10 py-20 text-center">
        <h2 className="font-headline text-3xl italic mb-4">Start with a free profile audit</h2>
        <p className="text-on-surface-variant mb-8">
          Send us your studio name and city. We&apos;ll review your Google Business Profile and tell you
          exactly what&apos;s costing you rankings — no charge, no obligation.
        </p>
        <a
          href="mailto:boudoirphotographyclub@gmail.com?subject=Free%20GMB%20Audit%20Request&body=Hi%2C%20I%27d%20like%20a%20free%20GMB%20audit%20for%20my%20boudoir%20studio.%0A%0AStudio%20name%3A%0AWebsite%3A%0ACity%2C%20State%3A%0ACurrent%20Google%20Business%20Profile%20URL%20(if%20any)%3A"
          className="inline-block editorial-gradient text-on-primary px-10 py-4 rounded-sm font-label text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
        >
          Request My Free Audit
        </a>
        <p className="text-xs text-on-surface-variant mt-4 opacity-60">
          boudoirphotographyclub@gmail.com · Usually responds within 4 hours
        </p>
      </section>
    </div>
  );
}
