"use client";

import { useState } from "react";
import Link from "next/link";

export default function NewBlogPostPage() {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    category: "Preparation",
    content: "",
    metaTitle: "",
    metaDescription: "",
    status: "draft",
  });

  const handleTitleChange = (title: string) => {
    setForm({
      ...form,
      title,
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, ""),
    });
  };

  return (
    <div>
      <Link
        href="/admin/blog"
        className="font-label text-[10px] uppercase tracking-widest text-primary hover:opacity-70 transition-opacity mb-6 inline-block"
      >
        &larr; Back to Blog
      </Link>

      <h1 className="font-headline text-3xl italic text-on-surface mb-2">
        New Blog Post
      </h1>
      <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant opacity-60 mb-10">
        Create SEO-Optimized Content
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-6">
          <div>
            <label className="block font-label text-[10px] uppercase tracking-widest text-outline mb-2">
              Title *
            </label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              className="w-full bg-surface-container-lowest border-none rounded-sm px-4 py-3 text-lg font-headline focus:ring-1 focus:ring-primary focus:outline-none"
              placeholder="Enter post title..."
            />
          </div>

          <div>
            <label className="block font-label text-[10px] uppercase tracking-widest text-outline mb-2">
              Slug
            </label>
            <div className="flex items-center gap-2">
              <span className="text-xs text-on-surface-variant opacity-60">/blog/</span>
              <input
                type="text"
                value={form.slug}
                onChange={(e) => setForm({ ...form, slug: e.target.value })}
                className="flex-1 bg-surface-container-lowest border-none rounded-sm px-4 py-3 text-sm focus:ring-1 focus:ring-primary focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block font-label text-[10px] uppercase tracking-widest text-outline mb-2">
              Content *
            </label>
            <textarea
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              rows={16}
              className="w-full bg-surface-container-lowest border-none rounded-sm px-4 py-3 text-sm focus:ring-1 focus:ring-primary focus:outline-none leading-relaxed"
              placeholder="Write your blog post content..."
            />
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="bg-surface-container-low p-6 rounded-lg">
            <h3 className="font-label text-[10px] uppercase tracking-widest text-outline mb-4">
              Publish Settings
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block font-label text-[10px] uppercase tracking-widest text-outline mb-2">
                  Status
                </label>
                <select
                  value={form.status}
                  onChange={(e) => setForm({ ...form, status: e.target.value })}
                  className="w-full bg-surface-container-lowest border-none rounded-sm px-4 py-3 text-sm focus:ring-0"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
              <div>
                <label className="block font-label text-[10px] uppercase tracking-widest text-outline mb-2">
                  Category
                </label>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full bg-surface-container-lowest border-none rounded-sm px-4 py-3 text-sm focus:ring-0"
                >
                  <option>Preparation</option>
                  <option>Styling</option>
                  <option>Advice</option>
                  <option>Inspiration</option>
                  <option>Industry</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-low p-6 rounded-lg">
            <h3 className="font-label text-[10px] uppercase tracking-widest text-outline mb-4">
              SEO Settings
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block font-label text-[10px] uppercase tracking-widest text-outline mb-2">
                  Meta Title
                </label>
                <input
                  type="text"
                  value={form.metaTitle}
                  onChange={(e) => setForm({ ...form, metaTitle: e.target.value })}
                  className="w-full bg-surface-container-lowest border-none rounded-sm px-4 py-3 text-sm focus:ring-1 focus:ring-primary focus:outline-none"
                  placeholder="SEO title (50-60 chars)"
                />
                <p className="text-[9px] text-on-surface-variant opacity-40 mt-1">
                  {form.metaTitle.length}/60 characters
                </p>
              </div>
              <div>
                <label className="block font-label text-[10px] uppercase tracking-widest text-outline mb-2">
                  Meta Description
                </label>
                <textarea
                  value={form.metaDescription}
                  onChange={(e) => setForm({ ...form, metaDescription: e.target.value })}
                  rows={3}
                  className="w-full bg-surface-container-lowest border-none rounded-sm px-4 py-3 text-sm focus:ring-1 focus:ring-primary focus:outline-none"
                  placeholder="SEO description (150-160 chars)"
                />
                <p className="text-[9px] text-on-surface-variant opacity-40 mt-1">
                  {form.metaDescription.length}/160 characters
                </p>
              </div>
            </div>
          </div>

          <button className="w-full editorial-gradient text-on-primary font-label text-xs uppercase tracking-widest py-4 rounded-sm hover:opacity-90 transition-opacity">
            Publish Post
          </button>
          <button className="w-full border border-outline-variant text-on-surface font-label text-xs uppercase tracking-widest py-3 rounded-sm hover:bg-surface-container-low transition-colors">
            Save as Draft
          </button>
        </div>
      </div>
    </div>
  );
}
