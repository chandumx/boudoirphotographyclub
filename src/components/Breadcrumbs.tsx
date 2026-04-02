import Link from "next/link";
import JsonLd from "./JsonLd";
import { generateBreadcrumbSchema } from "@/lib/seo";

interface BreadcrumbItem {
  name: string;
  url: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ name: "Home", url: "/" }, ...items];

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(allItems)} />
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex flex-wrap items-center gap-1">
          {allItems.map((item, index) => (
            <li key={item.url} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-outline-variant text-xs">/</span>
              )}
              {index === allItems.length - 1 ? (
                <span className="font-label text-[10px] uppercase tracking-widest text-primary">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant opacity-60 hover:opacity-100 transition-opacity"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
