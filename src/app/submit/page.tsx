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
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <div className="bg-surface-container-low rounded-lg p-10">
          <span className="material-symbols-outlined text-5xl text-primary mb-4 block">check_circle</span>
          <h1 className="font-headline text-5xl italic text-on-surface mb-4">Submission Received</h1>
          <p className="text-on-surface-variant leading-[1.8]">We&apos;ll review your listing and get back to you within 24-48 hours.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="font-headline text-5xl italic text-on-surface mb-4">
          List Your Studio
        </h1>
        <p className="text-on-surface-variant leading-[1.8] max-w-xl mx-auto">
          Join the premier directory for boudoir photographers. Get discovered by
          clients in your area.
        </p>
      </div>

      {/* Pricing Tiers */}
      <div className="grid md:grid-cols-3 gap-6 mb-20">
        {[
          {
            name: "Essentials",
            price: "$0",
            features: ["Basic listing", "Name & contact info", "City page placement"],
          },
          {
            name: "Pro",
            price: "$29/mo",
            features: ["Enhanced profile", "Portfolio display", "Priority placement", "Specialty tags"],
            popular: true,
          },
          {
            name: "Featured",
            price: "$79/mo",
            features: ["Top of results", "Featured badge", "State page feature", "Lead alerts", "Analytics"],
          },
        ].map((tier) => (
          <div
            key={tier.name}
            className={`relative p-10 rounded-lg ${
              tier.popular ? "border border-primary/10 bg-surface-container-low" : "bg-surface-container-low"
            }`}
          >
            {tier.popular && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-4 py-1 font-label text-[9px] uppercase tracking-widest rounded-full whitespace-nowrap">
                Most Desired
              </span>
            )}
            <h3 className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-3">{tier.name}</h3>
            <p className="text-3xl font-headline text-on-surface mb-6">{tier.price}</p>
            <ul className="space-y-3">
              {tier.features.map((f) => (
                <li key={f} className="text-sm text-on-surface-variant flex items-center gap-3">
                  <span className="material-symbols-outlined text-xs text-primary">check</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">
        <h2 className="font-headline text-3xl italic text-on-surface mb-8">Your Information</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block font-label text-[10px] uppercase tracking-widest text-outline mb-2">Business / Studio Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-surface-container-lowest border-none rounded-sm px-4 py-3 text-sm text-on-surface focus:ring-1 focus:ring-primary focus:outline-none"
            />
          </div>
          <div>
            <label className="block font-label text-[10px] uppercase tracking-widest text-outline mb-2">Email *</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-surface-container-lowest border-none rounded-sm px-4 py-3 text-sm text-on-surface focus:ring-1 focus:ring-primary focus:outline-none"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block font-label text-[10px] uppercase tracking-widest text-outline mb-2">Phone</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-surface-container-lowest border-none rounded-sm px-4 py-3 text-sm text-on-surface focus:ring-1 focus:ring-primary focus:outline-none"
            />
          </div>
          <div>
            <label className="block font-label text-[10px] uppercase tracking-widest text-outline mb-2">Website</label>
            <input
              type="url"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className="w-full bg-surface-container-lowest border-none rounded-sm px-4 py-3 text-sm text-on-surface focus:ring-1 focus:ring-primary focus:outline-none"
              placeholder="https://"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block font-label text-[10px] uppercase tracking-widest text-outline mb-2">City *</label>
            <input
              type="text"
              required
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full bg-surface-container-lowest border-none rounded-sm px-4 py-3 text-sm text-on-surface focus:ring-1 focus:ring-primary focus:outline-none"
            />
          </div>
          <div>
            <label className="block font-label text-[10px] uppercase tracking-widest text-outline mb-2">State *</label>
            <input
              type="text"
              required
              value={formData.state}
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              className="w-full bg-surface-container-lowest border-none rounded-sm px-4 py-3 text-sm text-on-surface focus:ring-1 focus:ring-primary focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block font-label text-[10px] uppercase tracking-widest text-outline mb-2">About Your Business</label>
          <textarea
            rows={4}
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            className="w-full bg-surface-container-lowest border-none rounded-sm px-4 py-3 text-sm text-on-surface focus:ring-1 focus:ring-primary focus:outline-none"
            placeholder="Tell potential clients about your experience, style, and what makes your studio unique..."
          />
        </div>

        <div>
          <label className="block font-label text-[10px] uppercase tracking-widest text-outline mb-4">Specialties</label>
          <div className="flex flex-wrap gap-2">
            {specialtyOptions.map((specialty) => (
              <button
                key={specialty}
                type="button"
                onClick={() => toggleSpecialty(specialty)}
                className={`px-4 py-2 rounded-sm text-sm transition-colors ${
                  formData.specialties.includes(specialty)
                    ? "bg-primary text-on-primary"
                    : "bg-surface-container-low text-on-surface-variant hover:opacity-80"
                }`}
              >
                {specialty}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full editorial-gradient text-on-primary py-4 rounded-sm font-label text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
        >
          Submit Your Listing
        </button>
        <p className="text-xs text-on-surface-variant text-center">
          Start with a free listing. Upgrade anytime.
        </p>
      </form>
    </div>
  );
}
