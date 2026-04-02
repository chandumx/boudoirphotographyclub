"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar({ className = "" }: { className?: string }) {
  const [location, setLocation] = useState("");
  const [style, setStyle] = useState("all");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      const slug = location
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");
      router.push(`/boudoir-photographer/${slug}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="bg-surface-container-lowest p-2 rounded-lg shadow-sm border border-outline-variant/20 flex flex-col md:flex-row gap-2">
        <div className="flex-1 px-4 py-3 flex flex-col">
          <label className="font-label text-[10px] uppercase tracking-widest opacity-60 mb-1">
            Location
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="bg-transparent border-none p-0 focus:ring-0 text-sm font-medium text-on-surface placeholder:text-on-surface-variant/50"
            placeholder="Los Angeles, California"
          />
        </div>
        <div className="flex-1 px-4 py-3 border-t md:border-t-0 md:border-l border-outline-variant/10 flex flex-col">
          <label className="font-label text-[10px] uppercase tracking-widest opacity-60 mb-1">
            Style
          </label>
          <select
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            className="bg-transparent border-none p-0 focus:ring-0 text-sm font-medium text-on-surface"
          >
            <option value="all">All Styles</option>
            <option value="fine-art">Fine Art</option>
            <option value="dark-moody">Dark &amp; Moody</option>
            <option value="bridal">Bridal</option>
            <option value="luxury">Luxury</option>
            <option value="romantic">Romantic</option>
          </select>
        </div>
        <div className="flex-1 px-4 py-3 border-t md:border-t-0 md:border-l border-outline-variant/10 flex flex-col">
          <label className="font-label text-[10px] uppercase tracking-widest opacity-60 mb-1">
            Budget
          </label>
          <select className="bg-transparent border-none p-0 focus:ring-0 text-sm font-medium text-on-surface">
            <option>Any Budget</option>
            <option>$$ - Affordable</option>
            <option>$$$ - Premium</option>
            <option>$$$$ - Luxury</option>
          </select>
        </div>
        <button
          type="submit"
          className="editorial-gradient text-on-primary px-8 py-4 rounded-sm font-label text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
        >
          Find Photographers
        </button>
      </div>
    </form>
  );
}
