import type { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    type: "article",
    images: [{ url: "/hero-boudoir.png", width: 1200, height: 630, alt: "Boudoir Photography Club Blog" }],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
