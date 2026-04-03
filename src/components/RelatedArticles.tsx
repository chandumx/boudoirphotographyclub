import Link from "next/link";
import blogData from "@/data/blog.json";

export default function RelatedArticles({ currentSlug }: { currentSlug: string }) {
  const others = blogData.filter(b => b.slug !== currentSlug).slice(0, 3);
  return (
    <div className="mt-16 pt-12 border-t border-outline-variant/20">
      <h2 className="font-headline text-2xl italic text-on-surface mb-6">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {others.map(a => (
          <Link key={a.slug} href={`/blog/${a.slug}`} className="bg-surface-container-lowest rounded-sm p-4 hover:shadow-md transition-shadow">
            <span className="font-label text-[9px] uppercase tracking-widest text-primary">{a.category}</span>
            <h3 className="font-headline text-sm text-on-surface mt-1 line-clamp-2">{a.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
