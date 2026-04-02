import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Boudoir Photography Club | Our Mission",
  description:
    "Learn about Boudoir Photography Club, the premier directory connecting clients with professional boudoir photographers across all 50 US states. Our mission is to celebrate confidence and beauty.",
};

export default function AboutPage() {
  return (
    <div className="bg-surface text-on-surface">
      <div className="max-w-[800px] mx-auto px-6 sm:px-10 py-16">
        <h1 className="font-headline text-4xl md:text-5xl italic text-on-surface mb-8">
          About Boudoir Photography Club
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-on-surface-variant">
          <p>
            Boudoir Photography Club is the premier online directory connecting
            individuals with professional boudoir photographers across all 50 US
            states. We believe every person deserves to feel confident, beautiful,
            and empowered, and a professional boudoir session is one of the most
            transformative ways to celebrate yourself.
          </p>

          <h2 className="font-headline text-2xl italic text-on-surface mt-10 mb-4">
            Our Mission
          </h2>
          <p>
            Our mission is simple: make it easy for anyone to find a trusted,
            professional boudoir photographer in their area. We carefully curate
            our directory to feature photographers who prioritize client comfort,
            artistic excellence, and empowering experiences.
          </p>

          <h2 className="font-headline text-2xl italic text-on-surface mt-10 mb-4">
            What We Offer
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>A curated directory of 667+ verified boudoir photographers</li>
            <li>Coverage across 626 cities in all 50 states plus DC</li>
            <li>Detailed photographer profiles with portfolios and reviews</li>
            <li>Free quote requests directly to photographers</li>
            <li>Educational resources about boudoir photography</li>
          </ul>

          <h2 className="font-headline text-2xl italic text-on-surface mt-10 mb-4">
            For Photographers
          </h2>
          <p>
            Are you a boudoir photographer looking to grow your business? Join our
            directory to connect with clients actively searching for boudoir
            photography services in your area. We offer free, pro, and featured
            listing tiers to match your needs.
          </p>

          <div className="mt-10 flex gap-4">
            <Link
              href="/boudoir-photographers"
              className="inline-block py-3 px-8 editorial-gradient text-on-primary font-label text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              Browse Photographers
            </Link>
            <Link
              href="/submit"
              className="inline-block py-3 px-8 border border-outline-variant text-on-surface font-label text-xs uppercase tracking-widest hover:bg-primary hover:text-on-primary hover:border-primary transition-all"
            >
              List Your Studio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
