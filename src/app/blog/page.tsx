import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import blogData from "@/data/blog.json";

export const metadata: Metadata = {
  title: "Boudoir Photography Blog | Tips, Guides & Inspiration",
  description:
    "Expert boudoir photography guides, tips, outfit ideas, poses, pricing, and city-specific recommendations. Everything you need to plan your perfect boudoir session.",
  keywords: [
    "boudoir photography blog",
    "boudoir tips",
    "boudoir poses",
    "boudoir outfit ideas",
    "boudoir photography guide",
  ],
};

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogIndexPage() {
  const guides = blogData.filter(
    (p) => !p.slug.startsWith("best-boudoir-photographer-")
  );
  const cityGuides = blogData.filter((p) =>
    p.slug.startsWith("best-boudoir-photographer-")
  );

  return (
    <div className="bg-surface text-on-surface">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 py-16">
        <div className="text-center mb-16">
          <h1 className="font-headline text-4xl md:text-5xl italic text-on-surface mb-4">
            The Boudoir Blog
          </h1>
          <p className="text-on-surface-variant text-lg max-w-[600px] mx-auto">
            Expert guides, tips, and inspiration to help you plan the perfect
            boudoir photography experience.
          </p>
        </div>

        {/* Featured / Latest */}
        {guides[0] && (
          <Link
            href={`/blog/${guides[0].slug}`}
            className="block mb-16 group"
          >
            <div className="grid md:grid-cols-2 gap-8 bg-surface-container-lowest rounded-lg overflow-hidden">
              <div className="aspect-video md:aspect-auto relative">
                <Image
                  src={guides[0].imageUrl}
                  alt={guides[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="font-label text-[10px] uppercase tracking-widest text-primary mb-3">
                  {guides[0].category}
                </span>
                <h2 className="font-headline text-2xl md:text-3xl italic text-on-surface mb-3 group-hover:text-primary transition-colors">
                  {guides[0].title}
                </h2>
                <p className="text-on-surface-variant mb-4">
                  {guides[0].excerpt}
                </p>
                <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant opacity-50">
                  {formatDate(guides[0].createdAt)}
                </p>
              </div>
            </div>
          </Link>
        )}

        {/* Guides & Articles */}
        <h2 className="font-headline text-2xl italic text-on-surface mb-8">
          Guides & Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {guides.slice(1).map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="bg-surface-container-lowest rounded-sm overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video relative">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="font-label text-[9px] uppercase tracking-widest text-primary">
                  {post.category}
                </span>
                <h3 className="font-headline text-lg text-on-surface mt-2 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-on-surface-variant opacity-70 line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* City Guides */}
        {cityGuides.length > 0 && (
          <>
            <h2 className="font-headline text-2xl italic text-on-surface mb-8">
              City Guides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cityGuides.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-4 bg-surface-container-lowest rounded-sm p-4 hover:bg-primary-container/10 transition-colors group"
                >
                  <div className="w-16 h-16 rounded-sm relative flex-shrink-0 overflow-hidden">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-headline text-sm text-on-surface group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant opacity-50 mt-1">
                      City Guide
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
