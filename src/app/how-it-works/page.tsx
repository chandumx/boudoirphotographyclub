import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works | Find a Boudoir Photographer | Boudoir Photography Club",
  description: "Learn how Boudoir Photography Club works. Browse photographers, view portfolios, request quotes, and book your empowering boudoir photography session in 3 simple steps.",
};

const steps = [
  { icon: "search", title: "Browse & Discover", description: "Search our directory of 667+ professional boudoir photographers across 626 cities. Filter by location, style, and specialty to find your perfect match. Every photographer is verified for quality and professionalism." },
  { icon: "photo_library", title: "View Portfolios & Reviews", description: "Explore photographer portfolios, read client reviews, and compare styles. From romantic and elegant to bold and editorial, find the aesthetic that speaks to you. Check ratings, specialties, and experience levels." },
  { icon: "calendar_month", title: "Request a Quote & Book", description: "Contact your chosen photographer directly through our platform. Request a free quote, discuss your vision, and book your session. Most photographers include professional hair, makeup, and wardrobe guidance." },
];

const faqs = [
  { q: "How much does a boudoir session cost?", a: "Boudoir photography sessions typically range from $300 to $2,500+ depending on the photographer, location, and package. Most include professional hair and makeup, 1-2 hours of shooting, and a selection of edited images." },
  { q: "What should I wear to a boudoir shoot?", a: "Most photographers provide wardrobe guidance. Popular choices include lingerie, bodysuits, oversized sweaters, a partner's dress shirt, or even just a sheet. Many photographers have a client closet with options in various sizes." },
  { q: "Do I need modeling experience?", a: "Absolutely not! Professional boudoir photographers are experts at posing and directing. They will guide you through every pose and expression to ensure you look and feel your best." },
  { q: "Is the listing free for photographers?", a: "Yes! We offer a free tier for all photographers. Pro and Featured tiers are available for enhanced visibility, priority placement, and additional profile features." },
];

export default function HowItWorksPage() {
  return (
    <div className="bg-surface text-on-surface">
      <div className="max-w-[1000px] mx-auto px-6 sm:px-10 py-16">
        <div className="text-center mb-16">
          <h1 className="font-headline text-4xl md:text-5xl italic text-on-surface mb-4">
            How It Works
          </h1>
          <p className="text-on-surface-variant text-lg max-w-[600px] mx-auto">
            Finding your perfect boudoir photographer is simple. Three steps to an empowering experience you will treasure forever.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, i) => (
            <div key={i} className="text-center bg-surface-container-lowest rounded-sm p-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-container/30 flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl text-primary">{step.icon}</span>
              </div>
              <div className="font-label text-[10px] uppercase tracking-widest text-primary mb-2">Step {i + 1}</div>
              <h2 className="font-headline text-xl italic text-on-surface mb-3">{step.title}</h2>
              <p className="text-sm text-on-surface-variant leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="font-headline text-3xl italic text-on-surface text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-surface-container-lowest rounded-sm p-6">
                <h3 className="font-headline text-lg text-on-surface mb-2">{faq.q}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-surface-container-lowest rounded-sm p-12">
          <h2 className="font-headline text-2xl italic text-on-surface mb-4">Ready to Find Your Photographer?</h2>
          <p className="text-on-surface-variant mb-6">Browse our curated directory of professional boudoir photographers near you.</p>
          <Link href="/boudoir-photographers" className="inline-block py-3 px-8 editorial-gradient text-on-primary font-label text-xs uppercase tracking-widest hover:opacity-90 transition-opacity">
            Browse Photographers
          </Link>
        </div>
      </div>
    </div>
  );
}
