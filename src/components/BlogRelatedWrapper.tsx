"use client";
import { usePathname } from "next/navigation";
import RelatedArticles from "./RelatedArticles";

export default function BlogRelatedWrapper() {
  const pathname = usePathname();
  // Only show on individual article pages, not on /blog index
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length < 2 || segments[0] !== "blog") return null;
  const slug = segments[1];
  return <RelatedArticles currentSlug={slug} />;
}
