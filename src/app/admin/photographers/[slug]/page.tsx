"use client";

import { use, useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import photographersData from "@/data/photographers.json";
import leadsData from "@/data/leads.json";
import MetricCard from "@/components/admin/MetricCard";
import StatusBadge from "@/components/admin/StatusBadge";

interface Photographer {
  name: string;
  slug: string;
  city: string;
  state: string;
  website?: string;
  imageUrl: string | null;
  bio: string;
  specialties: string[];
  rating: number;
  reviewCount: number;
  verified: boolean;
  tier: string;
  gallery?: string[];
}

function seededRandom(seed: string, min: number, max: number) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  const normalized = (Math.abs(hash) % 1000) / 1000;
  return Math.floor(normalized * (max - min + 1)) + min;
}

export default function PhotographerDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const photographer = useMemo(
    () => (photographersData as Photographer[]).find((p) => p.slug === slug),
    [slug]
  );

  const [form, setForm] = useState(() => ({
    name: photographer?.name ?? "",
    email: "",
    phone: "",
    website: photographer?.website ?? "",
    bio: photographer?.bio ?? "",
    city: photographer?.city ?? "",
    state: photographer?.state ?? "",
    specialties: photographer?.specialties?.join(", ") ?? "",
    tier: photographer?.tier ?? "FREE",
  }));

  const [saved, setSaved] = useState(false);

  if (!photographer) {
    return (
      <div className="flex flex-col items-center justify-center py-32">
        <span className="material-symbols-outlined text-5xl text-outline mb-4">
          person_off
        </span>
        <h1 className="font-headline text-2xl italic text-on-surface mb-2">
          Not Found
        </h1>
        <p className="text-sm text-on-surface-variant mb-6">
          No photographer matching &ldquo;{slug}&rdquo; was found.
        </p>
        <Link
          href="/admin/photographers"
          className="font-label text-xs uppercase tracking-widest text-primary hover:underline"
        >
          &larr; Back to Photographers
        </Link>
      </div>
    );
  }

  const photographerLeads = leadsData.filter(
    (l) => l.photographerSlug === slug
  );
  const profileViews = seededRandom(slug + "views", 200, 800);
  const leadsGenerated = photographerLeads.length;
  const conversionRate =
    profileViews > 0
      ? ((leadsGenerated / profileViews) * 100).toFixed(1)
      : "0";

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const inputClass =
    "w-full bg-surface-container-lowest border-none rounded-sm px-4 py-3 text-sm text-on-surface focus:ring-1 focus:ring-primary focus:outline-none";
  const labelClass =
    "block font-label text-[10px] uppercase tracking-widest text-outline mb-2";

  return (
    <div>
      {/* Back link */}
      <Link
        href="/admin/photographers"
        className="inline-flex items-center gap-1 font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors mb-8"
      >
        <span className="material-symbols-outlined text-sm">arrow_back</span>
        Back to Photographers
      </Link>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Left column */}
        <div className="lg:col-span-7 space-y-8">
          {/* Header */}
          <div className="flex items-center gap-4 flex-wrap">
            <h1 className="font-headline text-4xl italic text-on-surface">
              {photographer.name}
            </h1>
            <StatusBadge status={photographer.tier.toLowerCase()} />
            {photographer.verified && (
              <span className="inline-flex items-center gap-1 text-green-700 text-xs font-label uppercase tracking-widest">
                <span className="material-symbols-outlined text-sm">
                  verified
                </span>
                Verified
              </span>
            )}
          </div>

          {/* Image preview */}
          <div className="relative w-full h-[300px] rounded-lg overflow-hidden bg-surface-container-low">
            {photographer.imageUrl ? (
              <Image
                src={photographer.imageUrl}
                alt={photographer.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-on-surface-variant opacity-40">
                <span className="material-symbols-outlined text-5xl mb-2">image</span>
                <span className="font-label text-xs uppercase tracking-widest">No image uploaded</span>
              </div>
            )}
          </div>

          {/* Edit form */}
          <form onSubmit={handleSave} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="photographer@email.com"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="(555) 000-0000"
                />
              </div>
              <div>
                <label className={labelClass}>Website</label>
                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>Bio</label>
              <textarea
                name="bio"
                value={form.bio}
                onChange={handleChange}
                rows={4}
                className={inputClass + " resize-none"}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>City</label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>State</label>
                <input
                  type="text"
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>Specialties</label>
              <input
                type="text"
                name="specialties"
                value={form.specialties}
                onChange={handleChange}
                className={inputClass}
                placeholder="Fine Art, Glamour, Empowerment"
              />
            </div>

            <div>
              <label className={labelClass}>Tier</label>
              <select
                name="tier"
                value={form.tier}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="FREE">FREE</option>
                <option value="PRO">PRO</option>
                <option value="FEATURED">FEATURED</option>
              </select>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <button
                type="submit"
                className="editorial-gradient text-on-primary py-3 px-8 rounded-sm font-label text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
              >
                Save Changes
              </button>
              {saved && (
                <span className="text-green-600 text-sm font-label">
                  Changes saved successfully
                </span>
              )}
            </div>
          </form>
        </div>

        {/* Right column */}
        <div className="lg:col-span-5 space-y-8">
          {/* Analytics */}
          <div className="bg-surface-container-low rounded-sm p-6">
            <h2 className="font-label text-[10px] uppercase tracking-widest text-outline mb-5">
              Analytics
            </h2>
            <div className="grid gap-3">
              <MetricCard
                icon="visibility"
                label="Profile Views"
                value={profileViews.toLocaleString()}
                trend="+12%"
                trendUp
              />
              <MetricCard
                icon="group"
                label="Leads Generated"
                value={leadsGenerated}
                trend="+8%"
                trendUp
              />
              <MetricCard
                icon="percent"
                label="Conversion Rate"
                value={`${conversionRate}%`}
              />
            </div>
          </div>

          {/* Leads for this Photographer */}
          <div className="bg-surface-container-low rounded-sm p-6">
            <div className="flex justify-between items-center mb-5">
              <h2 className="font-label text-[10px] uppercase tracking-widest text-outline">
                Leads ({photographerLeads.length})
              </h2>
              <Link
                href="/admin/leads"
                className="font-label text-[10px] uppercase tracking-widest text-primary hover:opacity-70 transition-opacity"
              >
                View All
              </Link>
            </div>
            {photographerLeads.length > 0 ? (
              <div className="space-y-2">
                {photographerLeads.map((lead) => (
                  <Link
                    key={lead.id}
                    href="/admin/leads"
                    className="flex items-center justify-between p-3 bg-surface-container-lowest rounded-sm hover:bg-surface-container transition-colors group"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-on-surface group-hover:text-primary transition-colors truncate">
                        {lead.name}
                      </p>
                      <p className="text-[10px] text-on-surface-variant truncate">
                        {lead.email}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0 ml-3">
                      <StatusBadge status={lead.status} />
                      <span className="material-symbols-outlined text-sm text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">
                        arrow_forward
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <span className="material-symbols-outlined text-3xl text-on-surface-variant opacity-20 mb-2 block">
                  mail
                </span>
                <p className="text-xs text-on-surface-variant opacity-60">
                  No leads yet for this photographer
                </p>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="bg-surface-container-low rounded-sm p-6">
            <h2 className="font-label text-[10px] uppercase tracking-widest text-outline mb-5">
              Actions
            </h2>
            <div className="space-y-3">
              <button className="w-full bg-green-600 text-white py-3 px-4 rounded-sm font-label text-xs uppercase tracking-widest hover:bg-green-700 transition-colors">
                <span className="inline-flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">
                    check_circle
                  </span>
                  Approve
                </span>
              </button>
              <button className="w-full bg-surface-container-lowest text-on-surface py-3 px-4 rounded-sm font-label text-xs uppercase tracking-widest hover:bg-surface-container transition-colors">
                <span className="inline-flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">
                    pause_circle
                  </span>
                  Suspend
                </span>
              </button>
              <button className="w-full text-error py-3 px-4 rounded-sm font-label text-xs uppercase tracking-widest hover:bg-red-50 transition-colors">
                <span className="inline-flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">
                    delete
                  </span>
                  Delete Photographer
                </span>
              </button>
            </div>
          </div>

          {/* Gallery preview */}
          {photographer.gallery && photographer.gallery.length > 0 && (
            <div className="bg-surface-container-low rounded-sm p-6">
              <h2 className="font-label text-[10px] uppercase tracking-widest text-outline mb-5">
                Gallery ({photographer.gallery.length})
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {photographer.gallery.map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-[3/4] rounded-sm overflow-hidden bg-surface-container"
                  >
                    <Image
                      src={img}
                      alt={`${photographer.name} gallery ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 20vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
