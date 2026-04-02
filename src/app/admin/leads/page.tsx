"use client";

import { useState, useMemo } from "react";
import leadsData from "@/data/leads.json";
import DataTable from "@/components/admin/DataTable";
import StatusBadge from "@/components/admin/StatusBadge";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  photographer: string;
  photographerSlug: string;
  message: string;
  status: string;
  createdAt: string;
}

const STATUS_OPTIONS = ["All", "New", "Contacted", "Converted", "Closed"];
const SORT_OPTIONS = [
  { label: "Newest First", value: "newest" },
  { label: "Oldest First", value: "oldest" },
];

export default function LeadsPage() {
  const leads = leadsData as Lead[];

  const [statusFilter, setStatusFilter] = useState("All");
  const [cityFilter, setCityFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");

  const uniqueCities = useMemo(() => {
    const cities = new Set(leads.map((l) => l.city));
    return ["All", ...Array.from(cities).sort()];
  }, [leads]);

  const filteredLeads = useMemo(() => {
    let result = [...leads];

    if (statusFilter !== "All") {
      result = result.filter(
        (l) => l.status.toLowerCase() === statusFilter.toLowerCase()
      );
    }

    if (cityFilter !== "All") {
      result = result.filter((l) => l.city === cityFilter);
    }

    result.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

    return result;
  }, [leads, statusFilter, cityFilter, sortOrder]);

  const selectClass =
    "bg-surface-container-lowest border-none rounded-sm px-4 py-2.5 text-sm text-on-surface focus:ring-1 focus:ring-primary focus:outline-none";

  const columns = [
    {
      key: "name",
      label: "Name",
      sortable: true,
      render: (value: unknown) => (
        <span className="font-medium text-on-surface">{String(value)}</span>
      ),
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "city",
      label: "City",
      sortable: true,
    },
    {
      key: "photographer",
      label: "Photographer",
    },
    {
      key: "status",
      label: "Status",
      render: (value: unknown) => <StatusBadge status={String(value)} />,
    },
    {
      key: "createdAt",
      label: "Date",
      sortable: true,
      render: (value: unknown) => {
        const date = new Date(String(value));
        return (
          <span className="text-on-surface-variant">
            {date.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        );
      },
    },
    {
      key: "id",
      label: "Actions",
      render: (_value: unknown, row: Record<string, unknown>) => {
        const currentStatus = String(row.status);
        const nextStatus =
          currentStatus === "new"
            ? "contacted"
            : currentStatus === "contacted"
              ? "converted"
              : currentStatus === "converted"
                ? "closed"
                : "new";
        return (
          <button
            onClick={(e) => {
              e.stopPropagation();
              alert(
                `Status updated: ${currentStatus} -> ${nextStatus} (demo only)`
              );
            }}
            className="inline-flex items-center gap-1 text-primary hover:text-primary/80 text-xs font-label uppercase tracking-widest transition-colors"
          >
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
            {nextStatus}
          </button>
        );
      },
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-headline text-4xl italic text-on-surface mb-2">
          Lead Management
        </h1>
        <p className="text-sm text-on-surface-variant">
          {filteredLeads.length} of {leads.length} leads
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <div>
          <label className="block font-label text-[10px] uppercase tracking-widest text-outline mb-1.5">
            Status
          </label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className={selectClass}
          >
            {STATUS_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-label text-[10px] uppercase tracking-widest text-outline mb-1.5">
            City
          </label>
          <select
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
            className={selectClass}
          >
            {uniqueCities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-label text-[10px] uppercase tracking-widest text-outline mb-1.5">
            Sort
          </label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className={selectClass}
          >
            {SORT_OPTIONS.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Data table */}
      <DataTable
        columns={columns}
        data={filteredLeads as unknown as Record<string, unknown>[]}
        searchKey="name"
        searchPlaceholder="Search leads by name..."
        pageSize={15}
      />
    </div>
  );
}
