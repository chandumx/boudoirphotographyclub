"use client";

import { useState, useEffect, useCallback } from "react";
import outreachData from "@/data/backlink-outreach.json";
import sentData from "@/data/outreach-sent.json";

interface OutreachRecord {
  id: string;
  photographerName: string;
  email: string;
  website: string;
  city: string;
  state: string;
  listingUrl: string;
  emailStatus: string;
  backlinkStatus: string;
  followUpStatus: string;
  emailSentAt: string | null;
}

interface SentRecord {
  website: string;
  name: string;
  email: string | null;
  city?: string;
  state?: string;
  listingUrl?: string;
  status: string;
  date: string;
  error?: string;
}

const statusColors: Record<string, string> = {
  pending: "bg-gray-100 text-gray-700",
  sent: "bg-green-100 text-green-700",
  no_email_found: "bg-yellow-100 text-yellow-700",
  failed: "bg-red-100 text-red-700",
  opened: "bg-indigo-100 text-indigo-700",
  replied: "bg-emerald-100 text-emerald-700",
  backlink_found: "bg-purple-100 text-purple-700",
  not_checked: "bg-gray-100 text-gray-600",
  not_found: "bg-yellow-100 text-yellow-700",
  found: "bg-green-100 text-green-700",
};

export default function BacklinksPage() {
  const [filter, setFilter] = useState("all");
  const [verifying, setVerifying] = useState<string | null>(null);
  const [verifyResults, setVerifyResults] = useState<Record<string, string>>({});

  const sent = (sentData as SentRecord[]).filter(r => r.status === "sent");
  const noEmail = (sentData as SentRecord[]).filter(r => r.status === "no_email_found");
  const failed = (sentData as SentRecord[]).filter(r => r.status === "failed");
  const totalOutreach = (outreachData as unknown as OutreachRecord[]).length;

  const stats = {
    totalPhotographers: totalOutreach,
    emailsSent: sent.length,
    noEmailFound: noEmail.length,
    failed: failed.length,
    backlinksFound: Object.values(verifyResults).filter(v => v === "found").length,
    remaining: totalOutreach - (sentData as SentRecord[]).length,
  };

  const filtered = filter === "all" ? sent
    : filter === "sent" ? sent
    : filter === "no_email" ? noEmail
    : filter === "failed" ? failed
    : sent;

  const verifyBacklink = async (website: string) => {
    setVerifying(website);
    try {
      const res = await fetch("/api/backlinks/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ website }),
      });
      const data = await res.json();
      setVerifyResults(prev => ({ ...prev, [website]: data.found ? "found" : "not_found" }));
    } catch {
      setVerifyResults(prev => ({ ...prev, [website]: "error" }));
    }
    setVerifying(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-headline text-on-surface">Backlink Outreach</h1>
          <p className="font-label text-[11px] uppercase tracking-widest text-on-surface-variant opacity-50 mt-1">
            {stats.emailsSent} emails sent · {stats.remaining} remaining · {stats.backlinksFound} backlinks found
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-on-surface-variant">Run daily:</p>
          <code className="text-xs bg-surface-container-lowest px-2 py-1 rounded text-primary">node scripts/send-outreach.js</code>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {[
          { label: "Total Photographers", value: stats.totalPhotographers, icon: "group", color: "text-on-surface" },
          { label: "Emails Sent", value: stats.emailsSent, icon: "send", color: "text-green-600" },
          { label: "No Email Found", value: stats.noEmailFound, icon: "warning", color: "text-yellow-600" },
          { label: "Failed", value: stats.failed, icon: "error", color: "text-red-600" },
          { label: "Backlinks Found", value: stats.backlinksFound, icon: "link", color: "text-purple-600" },
          { label: "Remaining", value: stats.remaining, icon: "schedule", color: "text-blue-600" },
        ].map((s) => (
          <div key={s.label} className="bg-surface-container-lowest rounded-sm p-4">
            <span className={`material-symbols-outlined text-2xl ${s.color}`}>{s.icon}</span>
            <p className="text-2xl font-bold text-on-surface mt-1">{s.value}</p>
            <p className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {[
          { key: "all", label: `All Sent (${sent.length})` },
          { key: "sent", label: `Sent (${sent.length})` },
          { key: "no_email", label: `No Email (${noEmail.length})` },
          { key: "failed", label: `Failed (${failed.length})` },
        ].map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-3 py-1.5 rounded-full text-xs font-label uppercase tracking-widest transition-all ${
              filter === f.key ? "bg-primary text-on-primary" : "bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-surface-container-lowest rounded-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-outline-variant/10">
              <th className="text-left py-3 px-4 font-label text-[9px] uppercase tracking-widest text-on-surface-variant">#</th>
              <th className="text-left py-3 px-4 font-label text-[9px] uppercase tracking-widest text-on-surface-variant">Photographer</th>
              <th className="text-left py-3 px-4 font-label text-[9px] uppercase tracking-widest text-on-surface-variant">Email</th>
              <th className="text-left py-3 px-4 font-label text-[9px] uppercase tracking-widest text-on-surface-variant">Location</th>
              <th className="text-left py-3 px-4 font-label text-[9px] uppercase tracking-widest text-on-surface-variant">Status</th>
              <th className="text-left py-3 px-4 font-label text-[9px] uppercase tracking-widest text-on-surface-variant">Backlink</th>
              <th className="text-left py-3 px-4 font-label text-[9px] uppercase tracking-widest text-on-surface-variant">Date</th>
              <th className="text-left py-3 px-4 font-label text-[9px] uppercase tracking-widest text-on-surface-variant">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r, i) => (
              <tr key={r.website + i} className="border-b border-outline-variant/5 hover:bg-surface-container-low/50">
                <td className="py-3 px-4 text-on-surface-variant">{i + 1}</td>
                <td className="py-3 px-4">
                  <p className="font-medium text-on-surface">{r.name}</p>
                  <a href={r.website} target="_blank" rel="noopener noreferrer" className="text-[10px] text-primary hover:underline truncate block max-w-[200px]">
                    {r.website.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                  </a>
                </td>
                <td className="py-3 px-4 text-on-surface">
                  {r.email ? (
                    <span className="text-sm">{r.email}</span>
                  ) : (
                    <span className="text-on-surface-variant opacity-40">—</span>
                  )}
                </td>
                <td className="py-3 px-4 text-on-surface-variant text-xs">
                  {r.city ? `${r.city}, ${r.state}` : "—"}
                </td>
                <td className="py-3 px-4">
                  <span className={`inline-block px-2 py-0.5 rounded-full text-[9px] font-bold uppercase ${statusColors[r.status] || "bg-gray-100 text-gray-700"}`}>
                    {r.status === "sent" ? "✓ Sent" : r.status.replace(/_/g, " ")}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span className={`inline-block px-2 py-0.5 rounded-full text-[9px] font-bold uppercase ${
                    verifyResults[r.website] === "found" ? "bg-green-100 text-green-700" :
                    verifyResults[r.website] === "not_found" ? "bg-yellow-100 text-yellow-700" :
                    "bg-gray-100 text-gray-600"
                  }`}>
                    {verifyResults[r.website] === "found" ? "✓ Found" :
                     verifyResults[r.website] === "not_found" ? "Not Found" :
                     "Not Checked"}
                  </span>
                </td>
                <td className="py-3 px-4 text-xs text-on-surface-variant">
                  {r.date ? new Date(r.date).toLocaleDateString() : "—"}
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-1">
                    <button
                      onClick={() => verifyBacklink(r.website)}
                      disabled={verifying === r.website}
                      className="p-1.5 text-on-surface-variant hover:text-green-600 transition-colors disabled:opacity-30"
                      title="Check for backlink"
                    >
                      <span className="material-symbols-outlined text-sm">{verifying === r.website ? "sync" : "link"}</span>
                    </button>
                    {r.listingUrl && (
                      <a href={r.listingUrl} target="_blank" rel="noopener noreferrer" className="p-1.5 text-on-surface-variant hover:text-primary transition-colors" title="View listing">
                        <span className="material-symbols-outlined text-sm">visibility</span>
                      </a>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
