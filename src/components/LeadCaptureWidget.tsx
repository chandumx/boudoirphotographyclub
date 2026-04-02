"use client";

import { useState } from "react";

interface LeadCaptureWidgetProps {
  photographerName: string;
  photographerSlug: string;
  website?: string | null;
  phone?: string | null;
  email?: string | null;
  city: string;
  state: string;
}

export default function LeadCaptureWidget({
  photographerName,
  photographerSlug,
  website,
  phone,
  email,
  city,
  state,
}: LeadCaptureWidgetProps) {
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          photographerSlug,
          photographerName,
          city,
          state,
        }),
      });
      setUnlocked(true);
    } catch {
      alert("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  if (unlocked) {
    return (
      <div className="bg-surface-container-low p-8 rounded-lg shadow-[0_20px_40px_rgba(26,28,26,0.02)]">
        <div className="flex items-center gap-2 mb-6">
          <span className="material-symbols-outlined text-green-600">check_circle</span>
          <h3 className="font-headline text-xl italic text-on-surface">Contact Details Unlocked</h3>
        </div>

        <div className="space-y-4 mb-6">
          {website && (
            <div className="flex items-center gap-3 p-3 bg-surface-container-lowest rounded-sm">
              <span className="material-symbols-outlined text-primary text-lg">language</span>
              <div>
                <p className="font-label text-[9px] uppercase tracking-widest text-outline">Website</p>
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline break-all"
                >
                  {website.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                </a>
              </div>
            </div>
          )}
          {phone && (
            <div className="flex items-center gap-3 p-3 bg-surface-container-lowest rounded-sm">
              <span className="material-symbols-outlined text-primary text-lg">call</span>
              <div>
                <p className="font-label text-[9px] uppercase tracking-widest text-outline">Phone</p>
                <a href={`tel:${phone}`} className="text-sm text-on-surface hover:text-primary">{phone}</a>
              </div>
            </div>
          )}
          {email && (
            <div className="flex items-center gap-3 p-3 bg-surface-container-lowest rounded-sm">
              <span className="material-symbols-outlined text-primary text-lg">mail</span>
              <div>
                <p className="font-label text-[9px] uppercase tracking-widest text-outline">Email</p>
                <a href={`mailto:${email}`} className="text-sm text-on-surface hover:text-primary">{email}</a>
              </div>
            </div>
          )}
          {!website && !phone && !email && (
            <p className="text-sm text-on-surface-variant">Contact details not available. Search for this photographer online.</p>
          )}
        </div>

        <a
          href={website || `https://www.google.com/search?q=${encodeURIComponent(photographerName + " " + city + " " + state)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full editorial-gradient text-on-primary font-label text-xs uppercase tracking-widest py-4 rounded-sm hover:opacity-90 transition-opacity text-center"
        >
          Visit Website
        </a>
      </div>
    );
  }

  return (
    <div className="bg-surface-container-low p-8 rounded-lg shadow-[0_20px_40px_rgba(26,28,26,0.02)]">
      <h3 className="font-headline text-2xl italic mb-2">
        Get in Touch
      </h3>
      <p className="text-sm text-on-surface-variant mb-6">
        Enter your details to unlock {photographerName}&apos;s contact information and website.
      </p>

      {/* Blurred preview */}
      <div className="relative mb-6">
        <div className="space-y-3 blur-sm select-none pointer-events-none">
          <div className="flex items-center gap-3 p-3 bg-surface-container-lowest rounded-sm">
            <span className="material-symbols-outlined text-primary/40 text-lg">language</span>
            <div>
              <p className="font-label text-[9px] uppercase tracking-widest text-outline">Website</p>
              <p className="text-sm text-on-surface">www.photographer-website.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-surface-container-lowest rounded-sm">
            <span className="material-symbols-outlined text-primary/40 text-lg">call</span>
            <div>
              <p className="font-label text-[9px] uppercase tracking-widest text-outline">Phone</p>
              <p className="text-sm text-on-surface">(555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-surface-container-lowest rounded-sm">
            <span className="material-symbols-outlined text-primary/40 text-lg">mail</span>
            <div>
              <p className="font-label text-[9px] uppercase tracking-widest text-outline">Email</p>
              <p className="text-sm text-on-surface">contact@photographer.com</p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="material-symbols-outlined text-4xl text-primary/60">lock</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          required
          placeholder="Your Name *"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-sm px-4 py-3 text-sm text-on-surface focus:ring-1 focus:ring-primary focus:outline-none"
        />
        <input
          type="email"
          required
          placeholder="Your Email *"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-sm px-4 py-3 text-sm text-on-surface focus:ring-1 focus:ring-primary focus:outline-none"
        />
        <input
          type="tel"
          required
          placeholder="Your Phone Number *"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-sm px-4 py-3 text-sm text-on-surface focus:ring-1 focus:ring-primary focus:outline-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full editorial-gradient text-on-primary font-label text-xs uppercase tracking-widest py-4 rounded-sm hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {loading ? "Unlocking..." : "Unlock Contact Details"}
        </button>
        <p className="text-[10px] text-on-surface-variant text-center opacity-60">
          Free and instant. No spam.
        </p>
      </form>
    </div>
  );
}
