"use client";

import { useState, useEffect, useCallback } from "react";

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
  followUpSentAt: string | null;
  backlinkCheckedAt: string | null;
  notes: string;
}

const statusColors: Record<string, string> = {
  pending: "bg-gray-100 text-gray-700",
  sent: "bg-blue-100 text-blue-700",
  opened: "bg-indigo-100 text-indigo-700",
  replied: "bg-green-100 text-green-700",
  bounced: "bg-red-100 text-red-700",
  not_checked: "bg-gray-100 text-gray-700",
  not_found: "bg-yellow-100 text-yellow-700",
  found: "bg-green-100 text-green-700",
  verified: "bg-emerald-100 text-emerald-700",
  not_needed: "bg-gray-100 text-gray-600",
  scheduled: "bg-blue-100 text-blue-700",
};

export default function BacklinksPage() {
  const [records, setRecords] = useState<OutreachRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [showEmailModal, setShowEmailModal] = useState<OutreachRecord | null>(null);
  const [emailTemplate, setEmailTemplate] = useState({ subject: "", body: "" });
  const [verifying, setVerifying] = useState<string | null>(null);

  const fetchRecords = useCallback(async () => {
    const res = await fetch("/api/backlinks");
    const data = await res.json();
    setRecords(Array.isArray(data) ? data : []);
    setLoading(false);
  }, []);

  useEffect(() => { fetchRecords(); }, [fetchRecords]);

  const generateList = async () => {
    setLoading(true);
    await fetch("/api/backlinks?action=generate");
    await fetchRecords();
  };

  const openEmailModal = async (record: OutreachRecord) => {
    const res = await fetch(
      `/api/backlinks?action=email-template&name=${encodeURIComponent(record.photographerName)}&city=${encodeURIComponent(record.city)}&listingUrl=${encodeURIComponent(record.listingUrl)}`
    );
    const template = await res.json();
    setEmailTemplate(template);
    setShowEmailModal(record);
  };

  const markAsSent = async (record: OutreachRecord) => {
    await fetch("/api/backlinks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: record.id,
        emailStatus: "sent",
        emailSentAt: new Date().toISOString(),
        followUpStatus: "scheduled",
      }),
    });
    setShowEmailModal(null);
    fetchRecords();
  };

  const markFollowUpSent = async (record: OutreachRecord) => {
    await fetch("/api/backlinks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: record.id,
        followUpStatus: "sent",
        followUpSentAt: new Date().toISOString(),
      }),
    });
    fetchRecords();
  };

  const verifyBacklink = async (record: OutreachRecord) => {
    setVerifying(record.id);
    await fetch("/api/backlinks/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: record.id, website: record.website }),
    });
    setVerifying(null);
    fetchRecords();
  };

  const updateEmail = async (record: OutreachRecord, email: string) => {
    await fetch("/api/backlinks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: record.id, email }),
    });
    fetchRecords();
  };

  const filtered = records.filter((r) => {
    if (filter === "all") return true;
    if (filter === "pending") return r.emailStatus === "pending";
    if (filter === "sent") return r.emailStatus === "sent";
    if (filter === "replied") return r.emailStatus === "replied";
    if (filter === "backlink_found") return r.backlinkStatus === "found" || r.backlinkStatus === "verified";
    if (filter === "needs_followup") return r.emailStatus === "sent" && r.followUpStatus === "scheduled";
    return true;
  });

  const stats = {
    total: records.length,
    pending: records.filter(r => r.emailStatus === "pending").length,
    sent: records.filter(r => r.emailStatus === "sent").length,
    replied: records.filter(r => r.emailStatus === "replied").length,
    backlinksFound: records.filter(r => r.backlinkStatus === "found" || r.backlinkStatus === "verified").length,
    needsFollowUp: records.filter(r => r.emailStatus === "sent" && r.followUpStatus === "scheduled").length,
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-headline text-on-surface">Backlink Outreach</h1>
          <p className="font-label text-[11px] uppercase tracking-widest text-on-surface-variant opacity-50 mt-1">
            {stats.total} photographers · {stats.backlinksFound} backlinks acquired
          </p>
        </div>
        <button
          onClick={generateList}
          className="inline-flex items-center gap-2 px-5 py-2.5 editorial-gradient text-on-primary rounded-sm text-xs font-label uppercase tracking-widest hover:opacity-90"
        >
          <span className="material-symbols-outlined text-sm">sync</span>
          Generate Outreach List
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {[
          { label: "Total", value: stats.total, icon: "group", color: "text-on-surface" },
          { label: "Pending", value: stats.pending, icon: "schedule", color: "text-gray-600" },
          { label: "Sent", value: stats.sent, icon: "send", color: "text-blue-600" },
          { label: "Replied", value: stats.replied, icon: "reply", color: "text-green-600" },
          { label: "Backlinks", value: stats.backlinksFound, icon: "link", color: "text-emerald-600" },
          { label: "Follow-up", value: stats.needsFollowUp, icon: "notification_important", color: "text-amber-600" },
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
          { key: "all", label: "All" },
          { key: "pending", label: "Pending" },
          { key: "sent", label: "Sent" },
          { key: "replied", label: "Replied" },
          { key: "backlink_found", label: "Backlinks Found" },
          { key: "needs_followup", label: "Needs Follow-up" },
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
      {loading ? (
        <div className="text-center py-12 text-on-surface-variant">Loading...</div>
      ) : (
        <div className="bg-surface-container-lowest rounded-sm overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-outline-variant/10">
                <th className="text-left py-3 px-4 font-label text-[9px] uppercase tracking-widest text-on-surface-variant">Photographer</th>
                <th className="text-left py-3 px-4 font-label text-[9px] uppercase tracking-widest text-on-surface-variant">Location</th>
                <th className="text-left py-3 px-4 font-label text-[9px] uppercase tracking-widest text-on-surface-variant">Email</th>
                <th className="text-left py-3 px-4 font-label text-[9px] uppercase tracking-widest text-on-surface-variant">Email Status</th>
                <th className="text-left py-3 px-4 font-label text-[9px] uppercase tracking-widest text-on-surface-variant">Backlink</th>
                <th className="text-left py-3 px-4 font-label text-[9px] uppercase tracking-widest text-on-surface-variant">Follow-up</th>
                <th className="text-left py-3 px-4 font-label text-[9px] uppercase tracking-widest text-on-surface-variant">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.slice(0, 50).map((r) => (
                <tr key={r.id} className="border-b border-outline-variant/5 hover:bg-surface-container-low/50">
                  <td className="py-3 px-4">
                    <p className="font-medium text-on-surface">{r.photographerName}</p>
                    <a href={r.website} target="_blank" rel="noopener noreferrer" className="text-[10px] text-primary hover:underline truncate block max-w-[200px]">
                      {r.website.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                    </a>
                  </td>
                  <td className="py-3 px-4 text-on-surface-variant">{r.city}, {r.state}</td>
                  <td className="py-3 px-4">
                    <input
                      type="email"
                      defaultValue={r.email}
                      placeholder="Add email..."
                      onBlur={(e) => {
                        if (e.target.value !== r.email) updateEmail(r, e.target.value);
                      }}
                      className="w-full bg-transparent border-b border-outline-variant/20 text-sm py-1 focus:border-primary focus:outline-none max-w-[180px]"
                    />
                  </td>
                  <td className="py-3 px-4">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-[9px] font-bold uppercase ${statusColors[r.emailStatus] || "bg-gray-100"}`}>
                      {r.emailStatus.replace("_", " ")}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-[9px] font-bold uppercase ${statusColors[r.backlinkStatus] || "bg-gray-100"}`}>
                      {r.backlinkStatus === "found" ? "✓ Found" : r.backlinkStatus.replace("_", " ")}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-[9px] font-bold uppercase ${statusColors[r.followUpStatus] || "bg-gray-100"}`}>
                      {r.followUpStatus.replace("_", " ")}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-1">
                      <button
                        onClick={() => openEmailModal(r)}
                        className="p-1.5 text-on-surface-variant hover:text-primary transition-colors"
                        title="Send outreach email"
                      >
                        <span className="material-symbols-outlined text-sm">mail</span>
                      </button>
                      <button
                        onClick={() => verifyBacklink(r)}
                        disabled={verifying === r.id}
                        className="p-1.5 text-on-surface-variant hover:text-green-600 transition-colors disabled:opacity-30"
                        title="Verify backlink"
                      >
                        <span className="material-symbols-outlined text-sm">
                          {verifying === r.id ? "sync" : "link"}
                        </span>
                      </button>
                      {r.emailStatus === "sent" && r.followUpStatus === "scheduled" && (
                        <button
                          onClick={() => markFollowUpSent(r)}
                          className="p-1.5 text-on-surface-variant hover:text-amber-600 transition-colors"
                          title="Mark follow-up sent"
                        >
                          <span className="material-symbols-outlined text-sm">forward_to_inbox</span>
                        </button>
                      )}
                      <a
                        href={r.listingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-on-surface-variant hover:text-primary transition-colors"
                        title="View listing"
                      >
                        <span className="material-symbols-outlined text-sm">visibility</span>
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length > 50 && (
            <p className="text-center py-3 text-xs text-on-surface-variant">Showing 50 of {filtered.length} records</p>
          )}
        </div>
      )}

      {/* Email Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-surface rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-headline text-xl text-on-surface">
                Email to {showEmailModal.photographerName}
              </h2>
              <button onClick={() => setShowEmailModal(null)} className="text-on-surface-variant hover:text-on-surface">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block font-label text-[10px] uppercase tracking-widest text-outline mb-1">To</label>
                <p className="text-sm text-on-surface">{showEmailModal.email || "No email set - add email first"}</p>
              </div>
              <div>
                <label className="block font-label text-[10px] uppercase tracking-widest text-outline mb-1">Subject</label>
                <p className="text-sm text-on-surface font-medium">{emailTemplate.subject}</p>
              </div>
              <div>
                <label className="block font-label text-[10px] uppercase tracking-widest text-outline mb-1">Body</label>
                <pre className="text-sm text-on-surface whitespace-pre-wrap bg-surface-container-lowest p-4 rounded-sm leading-relaxed">
                  {emailTemplate.body}
                </pre>
              </div>

              <div className="flex gap-3 pt-4">
                {showEmailModal.email && (
                  <a
                    href={`mailto:${showEmailModal.email}?subject=${encodeURIComponent(emailTemplate.subject)}&body=${encodeURIComponent(emailTemplate.body)}`}
                    onClick={() => markAsSent(showEmailModal)}
                    className="inline-flex items-center gap-2 px-6 py-3 editorial-gradient text-on-primary rounded-sm text-xs font-label uppercase tracking-widest hover:opacity-90"
                  >
                    <span className="material-symbols-outlined text-sm">send</span>
                    Open in Gmail & Mark Sent
                  </a>
                )}
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(emailTemplate.body);
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-surface-container-low text-on-surface rounded-sm text-xs font-label uppercase tracking-widest hover:bg-surface-container"
                >
                  <span className="material-symbols-outlined text-sm">content_copy</span>
                  Copy Body
                </button>
                <button
                  onClick={() => setShowEmailModal(null)}
                  className="px-6 py-3 text-on-surface-variant text-xs font-label uppercase tracking-widest hover:text-on-surface"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
