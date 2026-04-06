"use client";

import { use, useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import leadsData from "@/data/leads.json";
import MetricCard from "@/components/admin/MetricCard";
import StatusBadge from "@/components/admin/StatusBadge";

interface PhotographerData {
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
  gallery: string[];
  editToken?: string;
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

  const [photographer, setPhotographer] = useState<PhotographerData | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    bio: "",
    city: "",
    state: "",
    specialties: "",
    style: "",
    tier: "FREE",
  });

  const [headerImage, setHeaderImage] = useState("");
  const [gallery, setGallery] = useState<string[]>([]);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [uploading, setUploading] = useState<string | null>(null);
  const [editLinkCopied, setEditLinkCopied] = useState(false);

  const headerInputRef = useRef<HTMLInputElement>(null);
  const galleryInputRef = useRef<HTMLInputElement>(null);

  const loadPhotographer = useCallback(async () => {
    try {
      const res = await fetch(
        `/api/admin/photographer?slug=${encodeURIComponent(slug)}`
      );
      if (res.status === 404) {
        setNotFound(true);
        setLoading(false);
        return;
      }
      if (res.status === 401) {
        window.location.href = "/admin/login";
        return;
      }
      if (!res.ok) {
        setNotFound(true);
        setLoading(false);
        return;
      }
      const data = await res.json();
      const p = data.photographer as PhotographerData;
      setPhotographer(p);
      setForm({
        name: p.name,
        email: "",
        phone: "",
        website: p.website || "",
        bio: p.bio,
        city: p.city,
        state: p.state,
        specialties: p.specialties.join(", "),
        style: p.specialties[0] || "",
        tier: p.tier || "FREE",
      });
      setHeaderImage(p.imageUrl || "");
      setGallery(p.gallery || []);
    } catch {
      setNotFound(true);
    }
    setLoading(false);
  }, [slug]);

  useEffect(() => {
    loadPhotographer();
  }, [loadPhotographer]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-32">
        <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  if (notFound || !photographer) {
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

  const token = photographer.editToken ?? "";
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

  const uploadImage = async (file: File, purpose: string) => {
    setUploading(purpose);
    const fd = new FormData();
    fd.append("file", file);
    fd.append("slug", slug);
    fd.append("purpose", purpose);

    try {
      const res = await fetch("/api/admin/photographer/upload", {
        method: "POST",
        body: fd,
      });
      if (!res.ok) {
        const data = await res.json();
        setSaveError(data.error || "Upload failed");
        setUploading(null);
        return null;
      }
      const data = await res.json();
      setUploading(null);
      return data.url as string;
    } catch {
      setSaveError("Upload failed. Please try again.");
      setUploading(null);
      return null;
    }
  };

  const handleHeaderUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = await uploadImage(file, "header");
    if (url) setHeaderImage(url);
    e.target.value = "";
  };

  const handleGalleryUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = e.target.files;
    if (!files) return;
    for (const file of Array.from(files)) {
      const url = await uploadImage(file, "gallery");
      if (url) setGallery((prev) => [...prev, url]);
    }
    e.target.value = "";
  };

  const removeGalleryImage = (index: number) => {
    setGallery((prev) => prev.filter((_, i) => i !== index));
  };

  const moveGalleryImage = (index: number, direction: -1 | 1) => {
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= gallery.length) return;
    setGallery((prev) => {
      const copy = [...prev];
      [copy[index], copy[newIndex]] = [copy[newIndex], copy[index]];
      return copy;
    });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSaved(false);
    setSaveError("");

    try {
      const res = await fetch("/api/admin/photographer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug,
          name: form.name,
          bio: form.bio,
          website: form.website,
          specialties: form.specialties,
          style: form.style,
          tier: form.tier,
          imageUrl: headerImage,
          gallery,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        setSaveError(data.error || "Save failed");
      } else {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      }
    } catch {
      setSaveError("Network error. Please try again.");
    }
    setSaving(false);
  };

  const copyEditLink = () => {
    const url = `${window.location.origin}/photographer/${slug}/edit?token=${token}`;
    navigator.clipboard.writeText(url);
    setEditLinkCopied(true);
    setTimeout(() => setEditLinkCopied(false), 2000);
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
              {form.name || photographer.name}
            </h1>
            <StatusBadge status={form.tier.toLowerCase()} />
            {photographer.verified && (
              <span className="inline-flex items-center gap-1 text-green-700 text-xs font-label uppercase tracking-widest">
                <span className="material-symbols-outlined text-sm">
                  verified
                </span>
                Verified
              </span>
            )}
          </div>

          {/* Header Image */}
          <div>
            <label className={labelClass}>Header Image</label>
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden bg-surface-container-low group">
              {headerImage ? (
                <>
                  <Image
                    src={headerImage}
                    alt={photographer.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => headerInputRef.current?.click()}
                      className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-on-surface py-2 px-4 rounded-sm font-label text-xs uppercase tracking-widest shadow-lg hover:bg-gray-50"
                    >
                      {uploading === "header" ? "Uploading..." : "Replace"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setHeaderImage("")}
                      className="opacity-0 group-hover:opacity-100 transition-opacity bg-red-500 text-white py-2 px-4 rounded-sm font-label text-xs uppercase tracking-widest shadow-lg hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => headerInputRef.current?.click()}
                  className="w-full h-full flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-5xl mb-2 opacity-40">
                    add_photo_alternate
                  </span>
                  <span className="font-label text-xs uppercase tracking-widest opacity-60">
                    {uploading === "header"
                      ? "Uploading..."
                      : "Click to upload header image"}
                  </span>
                </button>
              )}
              <input
                ref={headerInputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp,image/avif"
                onChange={handleHeaderUpload}
                className="hidden"
              />
            </div>
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
              <label className={labelClass}>Description / Bio</label>
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
                <label className={labelClass}>Style</label>
                <select
                  name="style"
                  value={form.style}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select a style...</option>
                  <option value="Romantic">Romantic</option>
                  <option value="Fine Art">Fine Art</option>
                  <option value="Glamour">Glamour</option>
                  <option value="Empowerment">Empowerment</option>
                  <option value="Editorial">Editorial</option>
                  <option value="Classic">Classic</option>
                  <option value="Moody">Moody</option>
                  <option value="Sensual">Sensual</option>
                  <option value="Vintage">Vintage</option>
                  <option value="Modern">Modern</option>
                  <option value="Artistic">Artistic</option>
                  <option value="Bridal">Bridal</option>
                  <option value="Couples">Couples</option>
                  <option value="Maternity">Maternity</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Budget</label>
                <select
                  name="tier"
                  value={form.tier}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="FREE">$$ Affordable</option>
                  <option value="PRO">$$$ Mid-Range</option>
                  <option value="FEATURED">$$$$ Premium</option>
                </select>
              </div>
            </div>

            <div>
              <label className={labelClass}>Specialties (comma-separated)</label>
              <input
                type="text"
                name="specialties"
                value={form.specialties}
                onChange={handleChange}
                className={inputClass}
                placeholder="Fine Art, Glamour, Empowerment"
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

            {/* Save button */}
            <div className="flex items-center gap-4 pt-2">
              <button
                type="submit"
                disabled={saving}
                className="editorial-gradient text-on-primary py-3 px-8 rounded-sm font-label text-xs uppercase tracking-widest hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>
              {saved && (
                <span className="text-green-600 text-sm font-label flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    check_circle
                  </span>
                  Changes saved successfully
                </span>
              )}
              {saveError && (
                <span className="text-red-600 text-sm font-label flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    error
                  </span>
                  {saveError}
                </span>
              )}
            </div>
          </form>

          {/* Gallery Management */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <label className={labelClass + " mb-0"}>
                Gallery ({gallery.length} images)
              </label>
              <button
                type="button"
                onClick={() => galleryInputRef.current?.click()}
                disabled={uploading === "gallery"}
                className="inline-flex items-center gap-1 font-label text-xs uppercase tracking-widest text-primary hover:opacity-70 transition-opacity disabled:opacity-50"
              >
                <span className="material-symbols-outlined text-sm">add</span>
                {uploading === "gallery" ? "Uploading..." : "Add Images"}
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {gallery.map((img, idx) => (
                <div
                  key={`${img}-${idx}`}
                  className="relative aspect-[3/4] rounded-sm overflow-hidden bg-surface-container group"
                >
                  <Image
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors">
                    <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      {idx > 0 && (
                        <button
                          type="button"
                          onClick={() => moveGalleryImage(idx, -1)}
                          className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100"
                          title="Move left"
                        >
                          <span className="material-symbols-outlined text-sm">
                            arrow_back
                          </span>
                        </button>
                      )}
                      {idx < gallery.length - 1 && (
                        <button
                          type="button"
                          onClick={() => moveGalleryImage(idx, 1)}
                          className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100"
                          title="Move right"
                        >
                          <span className="material-symbols-outlined text-sm">
                            arrow_forward
                          </span>
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => removeGalleryImage(idx)}
                        className="w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center shadow-md hover:bg-red-600"
                        title="Remove"
                      >
                        <span className="material-symbols-outlined text-sm">
                          close
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() => galleryInputRef.current?.click()}
                disabled={uploading === "gallery"}
                className="aspect-[3/4] border-2 border-dashed border-outline/30 rounded-sm flex flex-col items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-colors disabled:opacity-50"
              >
                <span className="material-symbols-outlined text-2xl mb-1">
                  {uploading === "gallery"
                    ? "hourglass_empty"
                    : "add_photo_alternate"}
                </span>
                <span className="font-label text-[9px] uppercase tracking-widest">
                  {uploading === "gallery" ? "Uploading..." : "Add"}
                </span>
              </button>
            </div>
            <input
              ref={galleryInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp,image/avif"
              multiple
              onChange={handleGalleryUpload}
              className="hidden"
            />
            <p className="text-[10px] text-on-surface-variant mt-3 opacity-60">
              Hover over images to reorder or remove. Remember to click Save
              Changes after editing gallery.
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="lg:col-span-5 space-y-8">
          {/* Magic Edit Link */}
          {token && (
            <div className="bg-primary/5 border border-primary/10 rounded-sm p-6">
              <h2 className="font-label text-[10px] uppercase tracking-widest text-primary mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">link</span>
                Photographer Edit Link
              </h2>
              <p className="text-xs text-on-surface-variant mb-4 leading-relaxed">
                Share this private link with the photographer so they can edit
                their own listing.
              </p>
              <button
                onClick={copyEditLink}
                className="w-full bg-primary text-on-primary py-3 px-4 rounded-sm font-label text-xs uppercase tracking-widest hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">
                  {editLinkCopied ? "check" : "content_copy"}
                </span>
                {editLinkCopied ? "Copied!" : "Copy Edit Link"}
              </button>
            </div>
          )}

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

          {/* Leads */}
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
                  No leads yet
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
              <Link
                href={`/photographer/${slug}`}
                target="_blank"
                className="w-full bg-surface-container-lowest text-on-surface py-3 px-4 rounded-sm font-label text-xs uppercase tracking-widest hover:bg-surface-container transition-colors flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">
                  open_in_new
                </span>
                View Public Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
