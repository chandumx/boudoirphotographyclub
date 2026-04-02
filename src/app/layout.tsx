import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import PublicLayout from "@/components/PublicLayout";

const GA_ID = "G-B848QX8EF4";

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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');

            // Custom events for SEO goal tracking
            // Track photographer profile views
            document.addEventListener('click', function(e) {
              var link = e.target.closest('a[href*="/photographer/"]');
              if (link) {
                gtag('event', 'view_photographer', {
                  photographer_slug: link.href.split('/photographer/')[1],
                  page_location: window.location.pathname
                });
              }
            });

            // Track Get Quote button clicks
            document.addEventListener('click', function(e) {
              var btn = e.target.closest('button');
              if (btn && btn.textContent.trim() === 'Get Quote') {
                gtag('event', 'generate_lead', {
                  event_category: 'engagement',
                  event_label: 'get_quote_click',
                  page_location: window.location.pathname
                });
              }
            });

            // Track external website clicks (photographer websites)
            document.addEventListener('click', function(e) {
              var link = e.target.closest('a[target="_blank"]');
              if (link && link.href && !link.href.includes('boudoirphotographyclub.com')) {
                gtag('event', 'click_external_website', {
                  event_category: 'outbound',
                  event_label: link.href,
                  page_location: window.location.pathname
                });
              }
            });

            // Track city page views for geo insights
            if (window.location.pathname.match(/\\/boudoir-photographer\\/[^/]+\\/[^/]+/)) {
              var parts = window.location.pathname.split('/');
              gtag('event', 'view_city_page', {
                state: parts[2],
                city: parts[3]
              });
            }

            // Track search interactions
            document.addEventListener('submit', function(e) {
              var form = e.target.closest('form');
              if (form) {
                var input = form.querySelector('input[type="text"], input[type="search"]');
                if (input && input.value) {
                  gtag('event', 'search', {
                    search_term: input.value
                  });
                }
              }
            });

            // Track scroll depth on photographer pages
            if (window.location.pathname.startsWith('/photographer/')) {
              var scrollMilestones = [25, 50, 75, 100];
              var triggered = {};
              window.addEventListener('scroll', function() {
                var percent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
                scrollMilestones.forEach(function(m) {
                  if (percent >= m && !triggered[m]) {
                    triggered[m] = true;
                    gtag('event', 'scroll_depth', {
                      percent_scrolled: m,
                      page_location: window.location.pathname
                    });
                  }
                });
              });
            }
          `}
        </Script>
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
