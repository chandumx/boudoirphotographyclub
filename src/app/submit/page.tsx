"use client";

import { useState } from "react";

const specialtyOptions = [
  "Classic Boudoir",
  "Bridal Boudoir",
  "Couples Boudoir",
  "Maternity Boudoir",
  "Luxury Boudoir",
  "Fine Art Boudoir",
  "Glamour",
  "Pin-Up",
  "Plus Size Boudoir",
  "Outdoor Boudoir",
  "Dark & Moody",
  "Editorial",
];

export default function SubmitPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    city: "",
    state: "",
    bio: "",
    specialties: [] as string[],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      alert("Something went wrong. Please try again.");
    }
  };

  const toggleSpecialty = (specialty: string) => {
    setFormData((prev) => ({
      ...prev,
      specialties: prev.specialties.includes(specialty)
        ? prev.specialties.filter((s) => s !== specialty)
        : [...prev.specialties, specialty],
    }));
  };

  if (submitted) {
    return (
      <div className="bg-surface text-on-surface min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <span className="material-symbols-outlined text-6xl text-green-600 mb-6 block">check_circle</span>
          <h1 className="font-headline text-4xl italic text-on-surface mb-4">You&apos;re In!</h1>
          <p className="text-on-surface-variant leading-relaxed mb-2">
            Your studio has been submitted successfully.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            We&apos;ll review your listing and have it live within 24-48 hours. You&apos;ll receive an email confirmation.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface text-on-surface">
      <div className="max-w-[600px] mx-auto px-6 sm:px-10 py-16">
        <div className="text-center mb-10">
          <h1 className="font-headline text-4xl md:text-5xl italic text-on-surface mb-3">
            List Your Studio
          </h1>
          <p className="text-on-surface-variant">
            Join 667+ photographers in our free directory. Get discovered by clients searching for boudoir photographers in your city.
          </p>
          <div className="inline-flex items-center gap-2 mt-4 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
            <span className="material-symbols-outlined text-sm">verified</span>
            100% Free — No credit card required
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-label text-[10px] uppercase tracking-widest text-outline mb-2">Studio / Business Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-sm px-4 py-3 text-sm text-on-surface focus:ring-1 focus:ring-primary focus:outline-none"
              placeholder="e.g. Luxe Boudoir Studio"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-label text-[10px] uppercase tracking-widest text-outline mb-2">Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-sm px-4 py-3 text-sm text-on-surface focus:ring-1 focus:ring-primary focus:outline-none"
                placeholder="you@studio.com"
              />
            </div>
            <div>
              <label className="block font-label text-[10px] uppercase tracking-widest text-outline mb-2">Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-sm px-4 py-3 text-sm text-on-surface focus:ring-1 focus:ring-primary focus:outline-none"
                placeholder="(555) 000-0000"
              />
            </div>
          </div>

          <div>
            <label className="block font-label text-[10px] uppercase tracking-widest text-outline mb-2">Website</label>
            <input
              type="url"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-sm px-4 py-3 text-sm text-on-surface focus:ring-1 focus:ring-primary focus:outline-none"
              placeholder="https://yourstudio.com"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-label text-[10px] uppercase tracking-widest text-outline mb-2">City *</label>
              <input
                type="text"
                required
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-sm px-4 py-3 text-sm text-on-surface focus:ring-1 focus:ring-primary focus:outline-none"
                placeholder="Los Angeles"
              />
            </div>
            <div>
              <label className="block font-label text-[10px] uppercase tracking-widest text-outline mb-2">State *</label>
              <input
                type="text"
                required
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-sm px-4 py-3 text-sm text-on-surface focus:ring-1 focus:ring-primary focus:outline-none"
                placeholder="CA"
                maxLength={2}
              />
            </div>
          </div>

          <div>
            <label className="block font-label text-[10px] uppercase tracking-widest text-outline mb-2">About Your Studio</label>
            <textarea
              rows={4}
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-sm px-4 py-3 text-sm text-on-surface focus:ring-1 focus:ring-primary focus:outline-none resize-none"
              placeholder="Tell clients about your experience, style, and what makes your studio unique..."
            />
          </div>

          <div>
            <label className="block font-label text-[10px] uppercase tracking-widest text-outline mb-3">Specialties</label>
            <div className="flex flex-wrap gap-2">
              {specialtyOptions.map((specialty) => (
                <button
                  key={specialty}
                  type="button"
                  onClick={() => toggleSpecialty(specialty)}
                  className={`px-3 py-1.5 rounded-full text-xs transition-all ${
                    formData.specialties.includes(specialty)
                      ? "bg-primary text-on-primary"
                      : "bg-surface-container-lowest border border-outline-variant/30 text-on-surface-variant hover:border-primary hover:text-primary"
                  }`}
                >
                  {formData.specialties.includes(specialty) && (
                    <span className="material-symbols-outlined text-xs mr-1 align-middle">check</span>
                  )}
                  {specialty}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full editorial-gradient text-on-primary py-4 rounded-sm font-label text-xs uppercase tracking-widest hover:opacity-90 transition-opacity mt-4"
          >
            Submit My Studio — Free
          </button>

          <p className="text-xs text-on-surface-variant text-center opacity-60">
            Your listing will be reviewed and published within 24-48 hours.
            No payment required. No hidden fees.
          </p>
        </form>
      </div>
    </div>
  );
}
