import type { Metadata } from "next";
import "./globals.css";
import PublicLayout from "@/components/PublicLayout";

const GA_ID = "G-P3QPT99D9M";

export const metadata: Metadata = {
  metadataBase: new URL("https://boudoirphotographyclub.com"),
  alternates: {
    canonical: "./",
    languages: {
      "en-US": "./",
    },
  },
  title: {
    default: "Boudoir Photography Club | Find Boudoir Photographers Near You",
    template: "%s | Boudoir Photography Club",
  },
  description:
    "Find the best boudoir photographers near you on BoudoirPhotographyClub.com. Browse portfolios, read reviews, and book your empowering boudoir photography session today.",
  keywords: [
    "boudoir photographer",
    "boudoir photography",
    "boudoir photographer near me",
    "best boudoir photographer",
    "bridal boudoir",
    "luxury boudoir photography",
    "fine art boudoir",
    "boudoir photography club",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Boudoir Photography Club",
    images: [
      {
        url: "/hero-boudoir.png",
        width: 1200,
        height: 630,
        alt: "Boudoir Photography Club - Find Boudoir Photographers Near You",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boudoir Photography Club | Find Boudoir Photographers Near You",
    description: "Find the best boudoir photographers near you. Browse portfolios, read reviews, and book your session.",
    images: ["/hero-boudoir.png"],
  },
  verification: {
    google: "JWcKAL0x-StvlImnw2pl9LZ5SOq5NwcLPXRlXCJxygI",
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
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            wait_for_update: 500
          });
        `}} />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}} />
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
