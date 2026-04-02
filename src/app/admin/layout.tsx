import Sidebar from "@/components/admin/Sidebar";

export const metadata = {
  title: "Admin Dashboard | Boudoir Photography Club",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-surface">
      <Sidebar />
      <main className="flex-1 md:ml-64 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">
          {children}
        </div>
      </main>
    </div>
  );
}
