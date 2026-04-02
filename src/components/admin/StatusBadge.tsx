const statusStyles: Record<string, string> = {
  active: "bg-green-100 text-green-800",
  pending: "bg-yellow-100 text-yellow-800",
  suspended: "bg-red-100 text-red-800",
  new: "bg-blue-100 text-blue-800",
  contacted: "bg-purple-100 text-purple-800",
  converted: "bg-green-100 text-green-800",
  closed: "bg-gray-100 text-gray-800",
  featured: "bg-primary text-on-primary",
  pro: "bg-tertiary text-on-tertiary",
  free: "bg-surface-container-high text-on-surface-variant",
  healthy: "bg-green-100 text-green-800",
  warning: "bg-yellow-100 text-yellow-800",
  critical: "bg-red-100 text-red-800",
};

export default function StatusBadge({ status }: { status: string }) {
  const style = statusStyles[status.toLowerCase()] || "bg-surface-container-high text-on-surface-variant";
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tighter ${style}`}>
      {status}
    </span>
  );
}
