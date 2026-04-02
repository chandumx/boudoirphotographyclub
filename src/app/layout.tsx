import type { Metadata } from "next";
import "./globals.css";
import PublicLayout from "@/components/PublicLayout";

export const metadata: Metadata = {
  title: {
    default: "Boudoir Directory | Find Boudoir Photographers Near You",
    template: "%s | Boudoir Directory",
  },
  description:
    "Discover talented photographers who celebrate confidence and beauty. A curated collection of artists specializing in the fine art of the female form.",
  keywords: [
    "boudoir photographer",
    "boudoir photography",
    "boudoir photographer near me",
    "best boudoir photographer",
    "bridal boudoir",
    "luxury boudoir photography",
    "fine art boudoir",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Boudoir Directory",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400&family=Manrope:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-on-surface font-body min-h-screen flex flex-col antialiased">
        <PublicLayout>{children}</PublicLayout>
      </body>
    </html>
  );
}
