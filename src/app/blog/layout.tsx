import type { Metadata } from "next";
import BlogRelatedWrapper from "@/components/BlogRelatedWrapper";

export const metadata: Metadata = {
  openGraph: {
    type: "article",
    images: [{ url: "/hero-boudoir.png", width: 1200, height: 630, alt: "Boudoir Photography Club Blog" }],
  },
  authors: [{ name: "Boudoir Photography Club", url: "https://boudoirphotographyclub.com" }],
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <div className="max-w-[800px] mx-auto px-6 sm:px-10 pb-16">
        <BlogRelatedWrapper />
      </div>
    </>
  );
}
