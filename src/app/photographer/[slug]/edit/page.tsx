"use client";

import { use, useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface PhotographerData {
  name: string;
  slug: string;
  city: string;
  state: string;
  website: string;
  imageUrl: string;
  bio: string;
  specialties: string[];
  rating: number;
  reviewCount: number;
  verified: boolean;
  tier: string;
  gallery: string[];
}

export default function PhotographerEditPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";

  const [photographer, setPhotographer] = useState<PhotographerData | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [uploading, setUploading] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    bio: "",
    website: "",
    specialties: "",
    style: "",
    tier: "FREE",
  });
  const [headerImage, setHeaderImage] = useState("");
  const [gallery, setGallery] = useState<string[]>([]);

  const headerInputRef = useRef<HTMLInputElement>(null);
  const galleryInputRef = useRef<HTMLInputElement>(null);

  const loadData = useCallback(async () => {
    try {
      const res = await fetch(
        `/api/photographer/edit?slug=${encodeURIComponent(slug)}&token=${encodeURIComponent(token)}`
      );
      if (!res.ok) {
        setError(
          res.status === 403
            ? "Invalid or expired edit link. Please contact us for a new one."
            : "Failed to load photographer data."
        );
        setLoading(false);
        return;
      }
      const data = await res.json();
      const p = data.photographer as PhotographerData;
      setPhotographer(p);
      setForm({
        name: p.name,
        bio: p.bio,
        website: p.website || "",
        specialties: p.specialties.join(", "),
        style: p.specialties[0] || "",
        tier: p.tier || "FREE",
      });
      setHeaderImage(p.imageUrl || "");
      setGallery(p.gallery || []);
    } catch {
      setError("Network error. Please try again.");
    }
    setLoading(false);
  }, [slug, token]);

  useEffect(() => {
    if (token) loadData();
    else {
      setError("No edit token provided. Please use the link sent to you.");
      setLoading(false);
    }
  }, [token, loadData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const uploadImage = async (file: File, purpose: string) => {
    setUploading(purpose);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("slug", slug);
    formData.append("token", token);
    formData.append("purpose", purpose);

    try {
      const res = await fetch("/api/photographer/upload", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        const data = await res.json();
        alert(data.error || "Upload failed");
        setUploading(null);
        return null;
      }
      const data = await res.json();
      setUploading(null);
      return data.url as string;
    } catch {
      alert("Upload failed. Please try again.");
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

    try {
      const res = await fetch("/api/photographer/edit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug,
          token,
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
        alert(data.error || "Save failed");
      } else {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      }
    } catch {
      alert("Network error. Please try again.");
    }
    setSaving(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4" />
          <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
            Loading your profile...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <span className="material-symbols-outlined text-5xl text-error mb-4 block">
            lock
          </span>
          <h1 className="font-headline text-2xl italic text-on-surface mb-3">
            Access Denied
          </h1>
          <p className="text-sm text-on-surface-variant mb-6">{error}</p>
          <Link
            href="/boudoir-photographers"
            className="font-label text-xs uppercase tracking-widest text-primary hover:underline"
          >
            Browse Photographers
          </Link>
        </div>
      </div>
    );
  }

  if (!photographer) return null;

  const inputClass =
    "w-full bg-white border border-outline/20 rounded-lg px-4 py-3 text-sm text-on-surface focus:ring-2 focus:ring-primary/30 focus:border-primary focus:outline-none transition-all";
  const labelClass =
    "block font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-2";

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      {/* Top Bar */}
      <div className="bg-white border-b border-outline/10 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href={`/photographer/${slug}`}
              className="font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-sm">
                arrow_back
              </span>
              View Profile
            </Link>
          </div>
          <div className="flex items-center gap-3">
            {saved && (
              <span className="text-green-600 text-xs font-label flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">
                  check_circle
                </span>
                Saved
              </span>
            )}
            <button
              onClick={handleSave}
              disabled={saving}
              className="editorial-gradient text-on-primary py-2.5 px-6 rounded-lg font-label text-xs uppercase tracking-widest hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="mb-10">
          <h1 className="font-headline text-3xl italic text-on-surface mb-1">
            Edit Your Profile
          </h1>
          <p className="text-sm text-on-surface-variant">
            Update your listing on Boudoir Photography Club. Changes appear
            after the next site build.
          </p>
        </div>

        <form onSubmit={handleSave} className="space-y-10">
          {/* Header Image */}
          <section className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="font-headline text-xl italic text-on-surface mb-1">
              Header Image
            </h2>
            <p className="text-xs text-on-surface-variant mb-5">
              This is the main banner image visitors see. A horizontal/landscape
              image works best.
            </p>

            {headerImage ? (
              <div className="relative w-full h-[250px] sm:h-[300px] rounded-lg overflow-hidden mb-4 group">
                <Image
                  src={headerImage}
                  alt="Header preview"
                  fill
                  className="object-cover"
                  sizes="(max-width: 896px) 100vw, 896px"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => headerInputRef.current?.click()}
                    className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-on-surface py-2 px-4 rounded-lg font-label text-xs uppercase tracking-widest shadow-lg"
                  >
                    {uploading === "header" ? "Uploading..." : "Replace Image"}
                  </button>
                </div>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => headerInputRef.current?.click()}
                className="w-full h-[200px] border-2 border-dashed border-outline/30 rounded-lg flex flex-col items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-3xl mb-2">
                  add_photo_alternate
                </span>
                <span className="font-label text-xs uppercase tracking-widest">
                  {uploading === "header"
                    ? "Uploading..."
                    : "Upload Header Image"}
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
          </section>

          {/* Basic Info */}
          <section className="bg-white rounded-xl p-6 shadow-sm space-y-5">
            <h2 className="font-headline text-xl italic text-on-surface mb-1">
              Basic Information
            </h2>

            <div>
              <label className={labelClass}>Studio / Business Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>About / Bio</label>
              <textarea
                name="bio"
                value={form.bio}
                onChange={handleChange}
                rows={4}
                className={inputClass + " resize-none"}
                placeholder="Tell clients about your style, experience, and what makes your sessions special..."
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
              <label className={labelClass}>Website</label>
              <input
                type="url"
                name="website"
                value={form.website}
                onChange={handleChange}
                className={inputClass}
                placeholder="https://yourwebsite.com"
              />
            </div>

            <div>
              <label className={labelClass}>
                Specialties{" "}
                <span className="normal-case tracking-normal text-on-surface-variant">
                  (comma-separated)
                </span>
              </label>
              <input
                type="text"
                name="specialties"
                value={form.specialties}
                onChange={handleChange}
                className={inputClass}
                placeholder="Romantic, Fine Art, Bridal Boudoir"
              />
            </div>
          </section>

          {/* Gallery */}
          <section className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <h2 className="font-headline text-xl italic text-on-surface">
                Portfolio Gallery
              </h2>
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                {gallery.length} images
              </span>
            </div>
            <p className="text-xs text-on-surface-variant mb-5">
              Drag to reorder. Vertical/portrait images work best. Max 10MB per
              image.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-5">
              {gallery.map((img, idx) => (
                <div
                  key={idx}
                  className="relative aspect-[3/4] rounded-lg overflow-hidden group bg-surface-container-low"
                >
                  <Image
                    src={img}
                    alt={`Gallery image ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors">
                    <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      {idx > 0 && (
                        <button
                          type="button"
                          onClick={() => moveGalleryImage(idx, -1)}
                          className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100"
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
                      >
                        <span className="material-symbols-outlined text-sm">
                          close
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Add more button */}
              <button
                type="button"
                onClick={() => galleryInputRef.current?.click()}
                disabled={uploading === "gallery"}
                className="aspect-[3/4] border-2 border-dashed border-outline/30 rounded-lg flex flex-col items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-colors disabled:opacity-50"
              >
                <span className="material-symbols-outlined text-2xl mb-1">
                  {uploading === "gallery" ? "hourglass_empty" : "add"}
                </span>
                <span className="font-label text-[9px] uppercase tracking-widest">
                  {uploading === "gallery" ? "Uploading..." : "Add Image"}
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
          </section>

          {/* Info box */}
          <div className="bg-primary/5 border border-primary/10 rounded-xl p-5 flex gap-4">
            <span className="material-symbols-outlined text-primary text-xl flex-shrink-0 mt-0.5">
              info
            </span>
            <div className="text-sm text-on-surface-variant leading-relaxed">
              <p className="font-medium text-on-surface mb-1">
                Need to change something else?
              </p>
              <p>
                Location, budget tier, and rating are managed by our team.
                Contact us at{" "}
                <a
                  href="mailto:hello@boudoirphotographyclub.com"
                  className="text-primary underline"
                >
                  hello@boudoirphotographyclub.com
                </a>{" "}
                for changes to those fields.
              </p>
            </div>
          </div>

          {/* Bottom save */}
          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={saving}
              className="editorial-gradient text-on-primary py-3 px-8 rounded-lg font-label text-xs uppercase tracking-widest hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save All Changes"}
            </button>
            {saved && (
              <span className="text-green-600 text-sm font-label flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">
                  check_circle
                </span>
                All changes saved successfully
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
