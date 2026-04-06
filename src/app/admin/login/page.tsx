"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      window.location.href = "/admin";
      return;
    } else {
      setError("Invalid password");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-12">
          <h1 className="font-headline text-3xl italic text-on-surface mb-2">
            The Atelier
          </h1>
          <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
            Admin Dashboard
          </p>
        </div>
        <form onSubmit={handleSubmit} className="bg-surface-container-low p-8 rounded-lg">
          <div className="mb-6">
            <label className="block font-label text-[10px] uppercase tracking-widest text-outline mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-surface-container-lowest border-none rounded-sm px-4 py-3 text-sm text-on-surface focus:ring-1 focus:ring-primary focus:outline-none"
              placeholder="Enter admin password"
              autoFocus
            />
          </div>
          {error && (
            <p className="text-error text-xs mb-4">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full editorial-gradient text-on-primary font-label text-xs uppercase tracking-widest py-4 rounded-sm hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
