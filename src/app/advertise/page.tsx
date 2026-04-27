import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Advertise & Get Featured | Boudoir Photography Club",
  description:
    "Get your boudoir studio in front of thousands of clients actively searching for photographers. Featured listings, priority placement, and lead delivery starting at $49/month.",
  alternates: {
    canonical: "https://boudoirphotographyclub.com/advertise",
  },
};

const PLANS = [
  {
    name: "Basic",
    price: "Free",
    period: "",
    description: "Get listed and discoverable",
    cta: "Get Listed Free",
    ctaHref: "/submit",
    ctaStyle: "border border-outline-variant text-on-surface hover:bg-surface-container-low",
    features: [
      "Profile page with bio, photos & contact form",
      "Listed in city and state search results",
      "Standard placement in search rankings",
      "Lead capture form (clients submit to contact you)",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "Stand out in your city",
    cta: "Upgrade to Pro",
    ctaHref: "mailto:boudoirphotographyclub@gmail.com?subject=Pro%20Listing%20Upgrade&body=Hi%2C%20I%27d%20like%20to%20upgrade%20to%20a%20Pro%20listing%20for%20%2449%2Fmonth.%20My%20profile%20URL%20is%3A",
    ctaStyle: "bg-on-surface text-surface hover:opacity-90",
    features: [
      "Everything in Basic",
      "PRO badge on your profile",
      "Priority placement above free listings",
      "Leads delivered to your email instantly",
      "Website link prominently displayed",
      "Featured in city newsletter (when launched)",
    ],
    highlight: false,
  },
  {
    name: "Featured",
    price: "$99",
    period: "/month",
    description: "Dominate your market",
    cta: "Get Featured Now",
    ctaHref: "mailto:boudoirphotographyclub@gmail.com?subject=Featured%20Listing%20Upgrade&body=Hi%2C%20I%27d%20like%20to%20upgrade%20to%20a%20Featured%20listing%20for%20%2499%2Fmonth.%20My%20profile%20URL%20is%3A",
    ctaStyle: "editorial-gradient text-on-primary hover:opacity-90",
    features: [
      "Everything in Pro",
      "FEATURED badge — top of every city page",
      "Highlighted card design (stands out visually)",
      "Included in blog posts for your city",
      "Social media shoutout once per month",
      "Analytics: see how many people viewed your profile",
      "Only 3 Featured slots per city — exclusive",
    ],
    highlight: true,
  },
];

const STATS = [
  { value: "28K+", label: "Monthly impressions" },
  { value: "3,900+", label: "Pages indexed on Google" },
  { value: "320+", label: "Clicks last 3 months" },
  { value: "Growing", label: "Traffic trending up daily" },
];

export default function AdvertisePage() {
  return (
    <div className="bg-surface text-on-surface">
      {/* Hero */}
      <section className="max-w-[960px] mx-auto px-6 sm:px-10 pt-20 pb-16 text-center">
        <span className="inline-block font-label text-[10px] uppercase tracking-widest text-primary bg-primary/5 border border-primary/20 px-3 py-1 rounded-full mb-6">
          For Photographers & Studios
        </span>
        <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl italic leading-tight mb-6">
          Put Your Studio in Front of<br />
          <span className="text-primary">Clients Who Are Ready to Book</span>
        </h1>
        <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Boudoir Photography Club is one of the fastest-growing boudoir directories on Google.
          We connect people actively searching for boudoir photographers with studios like yours —
          in their city, in their style, ready to book.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:boudoirphotographyclub@gmail.com?subject=Featured%20Listing%20Interest"
            className="editorial-gradient text-on-primary px-8 py-4 rounded-sm font-label text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Get Featured — $99/mo
          </a>
          <Link
            href="/submit"
            className="border border-outline-variant text-on-surface px-8 py-4 rounded-sm font-label text-sm uppercase tracking-wider hover:bg-surface-container-low transition-colors"
          >
            List Free First
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-surface-container-low border-y border-outline-variant/20 py-12">
        <div className="max-w-[960px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-headline text-3xl italic text-primary mb-1">{s.value}</p>
                <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why advertise */}
      <section className="max-w-[960px] mx-auto px-6 sm:px-10 py-20">
        <h2 className="font-headline text-3xl italic text-center mb-12">Why Boudoir Photography Club?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            {
              icon: "search",
              title: "High-Intent Traffic",
              body: "Every visitor arrives from Google searches like "boudoir photographer near me" or "best boudoir photographer in [city]." These are people with credit cards ready — not casual browsers.",
            },
            {
              icon: "trending_up",
              title: "Rapidly Growing",
              body: "Impressions grew from zero to 28,000/month in 90 days. We're adding city pages, blog content, and backlinks every week. The earlier you're listed, the more authority you accumulate.",
            },
            {
              icon: "lock_open",
              title: "Lead Gate = Qualified Leads",
              body: "Clients must submit their name, email, and phone to see your contact details. Every lead you receive has actively asked to connect with your studio — no tire-kickers.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-surface-container-lowest p-8 rounded-lg">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 block">{item.icon}</span>
              <h3 className="font-headline text-xl italic mb-3">{item.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-[960px] mx-auto px-6 sm:px-10 pb-20">
        <h2 className="font-headline text-3xl italic text-center mb-4">Simple, Transparent Pricing</h2>
        <p className="text-on-surface-variant text-center mb-12 max-w-lg mx-auto">
          Start free. Upgrade when you want more visibility. Cancel anytime — no contracts.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {PLANS.map((plan) => (
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
                  Most Popular
                </span>
              )}
              <p className="font-label text-[10px] uppercase tracking-widest text-outline mb-3">{plan.name}</p>
              <div className="flex items-end gap-1 mb-2">
                <span className="font-headline text-4xl italic">{plan.price}</span>
                <span className="text-on-surface-variant text-sm mb-1">{plan.period}</span>
              </div>
              <p className="text-sm text-on-surface-variant mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-on-surface">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5 flex-shrink-0" style={{fontVariationSettings:"'FILL' 1"}}>check_circle</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={plan.ctaHref}
                className={`block w-full text-center py-3 rounded-sm font-label text-xs uppercase tracking-widest transition-all ${plan.ctaStyle}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface-container-low border-t border-outline-variant/20 py-20">
        <div className="max-w-[720px] mx-auto px-6 sm:px-10">
          <h2 className="font-headline text-3xl italic text-center mb-12">Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "How does payment work?",
                a: "Email us at boudoirphotographyclub@gmail.com to get started. We'll send you a PayPal invoice monthly. Cancel anytime with 7 days notice.",
              },
              {
                q: "How quickly will I start getting leads?",
                a: "Most photographers see their first lead within 2–4 weeks of upgrading, depending on how competitive their city is. Featured listings in major markets (NYC, LA, Chicago) can see results in days.",
              },
              {
                q: "What if I'm already listed for free?",
                a: "Great — email us with your profile URL and we'll upgrade your existing listing to Pro or Featured instantly.",
              },
              {
                q: "Is there a contract or minimum commitment?",
                a: "No contract, no minimum. Pay month to month. Cancel by emailing us 7 days before your renewal date.",
              },
              {
                q: "Can I be Featured in multiple cities?",
                a: "Yes — each city is priced separately. Contact us for a multi-city discount.",
              },
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
        <h2 className="font-headline text-3xl italic mb-4">Ready to get more clients?</h2>
        <p className="text-on-surface-variant mb-8">
          Email us your profile URL and the plan you want. We&apos;ll have you upgraded within 24 hours.
        </p>
        <a
          href="mailto:boudoirphotographyclub@gmail.com?subject=Upgrade%20My%20Listing&body=Hi%2C%20I%27d%20like%20to%20upgrade%20my%20listing.%20My%20profile%20URL%20is%3A%20%0A%0APlan%20I%20want%3A%20Featured%20(%2499%2Fmo)%20%2F%20Pro%20(%2449%2Fmo)"
          className="inline-block editorial-gradient text-on-primary px-10 py-4 rounded-sm font-label text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
        >
          Email Us to Get Featured
        </a>
        <p className="text-xs text-on-surface-variant mt-4 opacity-60">
          boudoirphotographyclub@gmail.com · Usually responds within 4 hours
        </p>
      </section>
    </div>
  );
}
