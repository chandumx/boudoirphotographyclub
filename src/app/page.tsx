import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import JsonLd from "@/components/JsonLd";
import { generateWebsiteSchema, generateFAQSchema } from "@/lib/seo";
import {
  heroImage,
  styleImages,
  testimonialAvatars,
  blogImages,
} from "@/data/images";

const homeFAQs = [
  { question: "What is boudoir photography?", answer: "Boudoir photography is a style of intimate portraiture that celebrates confidence, beauty, and self-expression. Sessions typically take place in a private studio with professional lighting, and many photographers include hair, makeup, and wardrobe guidance." },
  { question: "How much does a boudoir photoshoot cost?", answer: "Boudoir photography sessions typically range from $300 to $2,500 or more, depending on the photographer, location, and package. Most include professional hair and makeup, 1-2 hours of shooting, and a selection of professionally edited images." },
  { question: "How do I find a boudoir photographer near me?", answer: "Use our directory at BoudoirPhotographyClub.com to browse 667+ verified boudoir photographers across 626 cities in all 50 US states. Filter by location, view portfolios, read reviews, and request free quotes directly from photographers." },
  { question: "What should I wear to a boudoir session?", answer: "Popular wardrobe choices include lingerie, bodysuits, oversized sweaters, a partner's dress shirt, or robes. Many photographers provide a client closet with options in various sizes and offer wardrobe consultations before your session." },
];

const directoryRatingSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Boudoir Photography Club",
  url: "https://boudoirphotographyclub.com",
  applicationCategory: "Photography Directory",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 4.9,
    bestRating: 5,
    worstRating: 1,
    ratingCount: 667,
  },
};

const featuredCities = [
  { name: "Los Angeles", state: "California", stateSlug: "california", slug: "los-angeles" },
  { name: "New York City", state: "New York", stateSlug: "new-york", slug: "new-york-city" },
  { name: "Miami", state: "Florida", stateSlug: "florida", slug: "miami" },
  { name: "Chicago", state: "Illinois", stateSlug: "illinois", slug: "chicago" },
  { name: "Dallas", state: "Texas", stateSlug: "texas", slug: "dallas" },
  { name: "Atlanta", state: "Georgia", stateSlug: "georgia", slug: "atlanta" },
  { name: "Las Vegas", state: "Nevada", stateSlug: "nevada", slug: "las-vegas" },
  { name: "Houston", state: "Texas", stateSlug: "texas", slug: "houston" },
  { name: "Nashville", state: "Tennessee", stateSlug: "tennessee", slug: "nashville" },
  { name: "Denver", state: "Colorado", stateSlug: "colorado", slug: "denver" },
  { name: "San Diego", state: "California", stateSlug: "california", slug: "san-diego" },
  { name: "Phoenix", state: "Arizona", stateSlug: "arizona", slug: "phoenix" },
];

const styles = [
  { name: "Romantic", slug: "romantic" },
  { name: "Luxury", slug: "luxury" },
  { name: "Bridal", slug: "bridal" },
  { name: "Dark & Moody", slug: "dark-moody" },
  { name: "Fine Art", slug: "fine-art" },
  { name: "Glamour", slug: "glamour" },
];

const testimonials = [
  {
    quote:
      "I was nervous at first, but my photographer made me feel like a queen. The images captured a side of me I didn't know existed.",
    name: "Sarah Jenkins",
    label: "Verified Client",
  },
  {
    quote:
      "The process of finding a photographer was so easy. The directory curated exactly the fine-art style I was looking for.",
    name: "Elisa Thorne",
    label: "Verified Client",
  },
  {
    quote:
      "A truly professional and empowering experience. I recommend this directory to every woman I know.",
    name: "Marta Velez",
    label: "Verified Client",
  },
];

const blogPosts = [
  {
    category: "Preparation",
    title: "Preparing for your boudoir session",
    description:
      "Tips on skin care, hydration, and mindset to feel your absolute best on the day of your shoot.",
  },
  {
    category: "Styling",
    title: "What to wear: The ultimate guide",
    description:
      "Exploring textures, colors, and cuts that flatter every body type and aesthetic vision.",
  },
  {
    category: "Advice",
    title: "How to choose your artist",
    description:
      "Questions to ask and what to look for in a portfolio to ensure a comfortable experience.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={generateWebsiteSchema()} />
      <JsonLd data={generateFAQSchema(homeFAQs)} />
      <JsonLd data={directoryRatingSchema} />

      {/* Hero Section */}
      <section className="relative px-8 py-20 overflow-hidden max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 z-10">
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl leading-none mb-6 -tracking-wider">
              Find the Perfect <br />
              <span className="italic text-primary">Boudoir</span> <br />
              Photographer
            </h1>
            <p className="text-on-surface-variant max-w-xl mb-12 leading-relaxed text-lg">
              Discover talented photographers who celebrate confidence and
              beauty. A curated collection of artists specializing in the fine
              art of the female form.
            </p>
            <SearchBar className="max-w-4xl" />
            <div className="mt-8 flex gap-6">
              <Link
                href="/submit"
                className="font-label text-xs uppercase tracking-widest text-primary border-b border-primary/30 pb-1 hover:border-primary transition-colors"
              >
                Join as Photographer
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src={heroImage}
                alt="Elegant boudoir portrait photography"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-surface-container-low p-6 rounded-lg hidden md:block max-w-[200px] shadow-sm">
              <p className="font-headline italic text-lg leading-tight mb-2">
                &ldquo;Beauty begins the moment you decide to be yourself.&rdquo;
              </p>
              <span className="font-label text-[10px] uppercase tracking-tighter opacity-50">
                &mdash; Coco Chanel
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Style */}
      <section className="py-24 px-8 max-w-[1440px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl mb-4 italic">
            Discover Your Style
          </h2>
          <p className="text-on-surface-variant max-w-lg mx-auto">
            From soft romanticism to bold luxury, find the aesthetic that speaks
            to your soul.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {styles.map((style) => (
            <Link
              key={style.slug}
              href="/boudoir-photographers"
              className="relative aspect-[4/5] rounded-lg overflow-hidden group"
            >
              <img
                src={styleImages[style.slug]}
                alt={`${style.name} boudoir photography style`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-end p-4">
                <span className="text-white font-label text-[10px] uppercase tracking-[0.2em]">
                  {style.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Locations */}
      <section className="bg-surface-container py-24 px-8 overflow-hidden">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-headline text-4xl mb-8">
              Studios Across <br />
              the Nation
            </h2>
            <p className="text-on-surface-variant mb-12 max-w-md">
              Our directory connects you with premium artists in every major
              city across the United States, ensuring you find the right talent
              wherever you are.
            </p>
            <div className="grid grid-cols-2 gap-y-4 gap-x-12">
              {featuredCities.slice(0, 6).map((city) => (
                <Link
                  key={city.slug}
                  href={`/boudoir-photographer/${city.stateSlug}/${city.slug}`}
                  className="flex items-center gap-3 group"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  <span className="font-label text-xs uppercase tracking-widest group-hover:text-primary transition-colors">
                    {city.name}
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/boudoir-photographers"
                className="font-label text-xs uppercase tracking-widest text-primary underline underline-offset-8"
              >
                Explore All States
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {featuredCities.slice(6, 12).map((city) => (
              <Link
                key={city.slug}
                href={`/boudoir-photographer/${city.stateSlug}/${city.slug}`}
                className="bg-surface-container-lowest p-6 rounded-sm hover:shadow-sm transition-shadow group"
              >
                <span className="font-headline text-lg text-on-surface group-hover:text-primary transition-colors block mb-1">
                  {city.name}
                </span>
                <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant opacity-60">
                  {city.state}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-8 max-w-[1440px] mx-auto text-center">
        <span className="font-label text-[10px] uppercase tracking-[0.3em] opacity-40 mb-4 block">
          Experiences
        </span>
        <h2 className="font-headline text-4xl mb-16 italic">
          Words from the Muse
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className="p-8 border-l border-outline-variant/10 text-left"
            >
              <p className="font-headline text-lg mb-6 leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-container overflow-hidden">
                  <img
                    src={testimonialAvatars[idx]}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-label text-xs font-bold uppercase tracking-widest">
                    {t.name}
                  </p>
                  <p className="text-[10px] opacity-50 uppercase tracking-tighter">
                    {t.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog / Journal Section */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="font-headline text-4xl">The Atelier Journal</h2>
            <span className="font-label text-xs uppercase tracking-widest text-primary underline underline-offset-8">
              Read All Guides
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <article key={post.title} className="group cursor-pointer">
                <div className="aspect-video overflow-hidden rounded-lg mb-6">
                  <img
                    src={blogImages[idx]}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="font-label text-[10px] uppercase tracking-widest text-primary mb-2 block">
                  {post.category}
                </span>
                <h3 className="font-headline text-2xl mb-4 leading-tight group-hover:italic transition-all">
                  {post.title}
                </h3>
                <p className="text-on-surface-variant text-sm line-clamp-2">
                  {post.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-8 text-center max-w-4xl mx-auto">
        <h2 className="font-headline text-4xl md:text-5xl mb-8 leading-tight">
          Are You a Photographer? <br />
          Join Our Curated Directory.
        </h2>
        <p className="text-on-surface-variant mb-12 text-lg">
          Connect with clients who appreciate fine art boudoir and grow your
          studio&apos;s digital presence.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/submit"
            className="editorial-gradient text-on-primary px-10 py-5 rounded-sm font-label text-xs uppercase tracking-[0.2em] w-full sm:w-auto text-center"
          >
            Join as Photographer
          </Link>
          <Link
            href="/boudoir-photographers"
            className="border border-primary/20 px-10 py-5 rounded-sm font-label text-xs uppercase tracking-[0.2em] text-primary hover:bg-surface-container transition-colors w-full sm:w-auto text-center"
          >
            Browse Directory
          </Link>
        </div>
      </section>
    </>
  );
}
