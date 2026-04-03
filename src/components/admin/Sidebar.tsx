"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: "dashboard" },
  { label: "Photographers", href: "/admin/photographers", icon: "photo_camera" },
  { label: "Leads", href: "/admin/leads", icon: "mail" },
  { label: "SEO Pages", href: "/admin/seo", icon: "search" },
  { label: "Content", href: "/admin/content", icon: "article" },
  { label: "Blog", href: "/admin/blog", icon: "edit_note" },
  { label: "Images", href: "/admin/images", icon: "image" },
  { label: "Backlinks", href: "/admin/backlinks", icon: "link" },
  { label: "Analytics", href: "/admin/analytics", icon: "insights" },
];

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/admin") return pathname === "/admin";
    return pathname.startsWith(href);
  };

  const handleLogout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" });
    window.location.href = "/admin/login";
  };

  return (
    <aside className="hidden md:flex flex-col h-screen w-64 fixed left-0 top-0 bg-surface-container-low border-r border-transparent z-40 p-6">
      <div className="mb-8">
        <Link href="/admin" className="font-headline text-lg text-on-surface italic">
          The Atelier
        </Link>
        <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant opacity-60 mt-1">
          Admin Control
        </p>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-sm text-sm font-medium tracking-tight transition-all ${
              isActive(item.href)
                ? "text-primary bg-surface-container-lowest translate-x-1"
                : "text-on-surface opacity-60 hover:bg-surface-container-lowest hover:opacity-100"
            }`}
          >
            <span className="material-symbols-outlined text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="pt-6 border-t border-outline-variant/10 space-y-1">
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-3 text-on-surface opacity-60 hover:opacity-100 text-sm font-medium tracking-tight transition-all"
        >
          <span className="material-symbols-outlined text-lg">open_in_new</span>
          <span>View Site</span>
        </Link>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 text-on-surface opacity-60 hover:opacity-100 text-sm font-medium tracking-tight transition-all text-left"
        >
          <span className="material-symbols-outlined text-lg">logout</span>
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
