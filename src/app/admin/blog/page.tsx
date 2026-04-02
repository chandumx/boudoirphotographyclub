"use client";

import Link from "next/link";
import Image from "next/image";
import blogData from "@/data/blog.json";

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-headline text-on-surface">
            Blog Management
          </h1>
          <p className="font-label text-[11px] uppercase tracking-widest text-on-surface-variant opacity-50 mt-1">
            {blogData.length} posts
          </p>
        </div>
        <Link
          href="/admin/blog/new"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-primary/80 text-on-primary rounded-sm text-xs font-label uppercase tracking-widest hover:opacity-90 transition-opacity"
        >
          <span className="material-symbols-outlined text-sm">add</span>
          New Post
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {blogData.map((post) => (
          <article
            key={post.id}
            className="bg-surface-container-lowest rounded-sm ring-1 ring-outline-variant/10 overflow-hidden hover:ring-primary/30 transition-all"
          >
            <div className="aspect-video relative bg-surface-container-high">
              {post.imageUrl && (
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tighter bg-primary-container/20 text-primary">
                  {post.category}
                </span>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tighter ${
                  post.status === "published"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}>
                  {post.status}
                </span>
              </div>
              <h2 className="font-headline text-lg text-on-surface mb-2 line-clamp-2">
                {post.title}
              </h2>
              <p className="text-sm text-on-surface-variant opacity-70 mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant opacity-50">
                  {formatDate(post.createdAt)}
                </p>
                <div className="flex items-center gap-1">
                  <button className="p-1.5 text-on-surface-variant hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-sm">
                      edit
                    </span>
                  </button>
                  <button className="p-1.5 text-on-surface-variant hover:text-red-600 transition-colors">
                    <span className="material-symbols-outlined text-sm">
                      delete
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
