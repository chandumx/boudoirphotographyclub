import type { Metadata } from "next";
import Link from "next/link";
import statesData from "@/data/states.json";

export const metadata: Metadata = {
  title: "Boudoir Photographer Near Me | Find Local Studios | Boudoir Photography Club",
  description: "Find a boudoir photographer near you. Browse 667+ professional boudoir photographers across 626 cities in all 50 US states. View portfolios, read reviews, and book your session today.",
  keywords: ["boudoir photographer near me", "boudoir photography near me", "boudoir studio near me", "local boudoir photographer"],
};

export default function NearMePage() {
  return (
    <div className="bg-surface text-on-surface">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 py-16">
        <h1 className="font-headline text-4xl md:text-5xl italic text-on-surface mb-4">
          Find a Boudoir Photographer Near You
        </h1>
        <p className="text-on-surface-variant text-lg mb-10 max-w-[700px]">
          Discover professional boudoir photographers in your area. Our directory
          covers all 50 US states with 667+ verified photographers ready to create
          your empowering boudoir experience.
        </p>

        <h2 className="font-headline text-2xl italic text-on-surface mb-6">
          Browse by State
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-16">
          {statesData.map((state) => (
            <Link
              key={state.abbreviation}
              href={`/boudoir-photographer/${state.slug}`}
              className="bg-surface-container-lowest rounded-sm px-4 py-3 text-sm text-on-surface hover:bg-primary hover:text-on-primary transition-all text-center"
            >
              {state.name}
            </Link>
          ))}
        </div>

        <div className="bg-surface-container-lowest rounded-sm p-8 mb-12">
          <h2 className="font-headline text-2xl italic text-on-surface mb-4">
            How to Choose a Boudoir Photographer Near You
          </h2>
          <div className="space-y-4 text-sm text-on-surface-variant leading-relaxed">
            <p>Finding the right boudoir photographer in your area starts with understanding what you want from your session. Consider the style you prefer, whether that is romantic and soft, bold and editorial, or dark and moody. Look at photographer portfolios to see if their work resonates with your vision.</p>
            <p>Check reviews from previous clients to understand the photographer experience. The best boudoir photographers make their clients feel comfortable, confident, and beautiful throughout the entire process. Look for photographers who offer professional hair and makeup, wardrobe guidance, and a private studio setting.</p>
            <p>Most boudoir sessions range from $300 to $2,500 depending on the photographer, location, and package included. Many offer payment plans and various package options to fit different budgets. Do not hesitate to request quotes from multiple photographers to compare pricing and offerings.</p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="font-headline text-2xl italic text-on-surface mb-4">
            Ready to Book Your Session?
          </h2>
          <Link href="/boudoir-photographers" className="inline-block py-3 px-8 editorial-gradient text-on-primary font-label text-xs uppercase tracking-widest hover:opacity-90 transition-opacity">
            Browse All Photographers
          </Link>
        </div>
      </div>
    </div>
  );
}
