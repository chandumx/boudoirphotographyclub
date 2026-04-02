export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://boudoirphotographyclub.com${item.url}`,
    })),
  };
}

export function generateLocalBusinessSchema(photographer: {
  name: string;
  description?: string;
  city: string;
  state: string;
  rating?: number;
  reviewCount?: number;
  website?: string;
  phone?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://boudoirphotographyclub.com/photographer/${photographer.name
      .toLowerCase()
      .replace(/\s+/g, "-")}`,
    name: photographer.name,
    description:
      photographer.description ||
      `Professional boudoir photographer in ${photographer.city}, ${photographer.state}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: photographer.city,
      addressRegion: photographer.state,
      addressCountry: "US",
    },
    priceRange: "$$-$$$$",
    ...(photographer.rating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: photographer.rating,
        bestRating: 5,
        worstRating: 1,
        reviewCount: photographer.reviewCount || 0,
      },
    }),
    ...(photographer.website && { url: photographer.website }),
    ...(photographer.phone && { telephone: photographer.phone }),
    areaServed: {
      "@type": "City",
      name: photographer.city,
      containedInPlace: {
        "@type": "State",
        name: photographer.state,
      },
    },
  };
}

export function generateCollectionPageSchema(city: string, state: string, count: number) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Boudoir Photographers in ${city}, ${state}`,
    description: `Browse ${count} professional boudoir photographers in ${city}, ${state}. Compare portfolios, read reviews, and book your session.`,
    url: `https://boudoirphotographyclub.com/boudoir-photographer/${state.toLowerCase().replace(/\s+/g, "-")}/${city.toLowerCase().replace(/\s+/g, "-")}`,
    numberOfItems: count,
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Boudoir Photography Club",
    url: "https://boudoirphotographyclub.com",
    description:
      "Find the best boudoir photographers near you. Browse portfolios, read reviews, and book your session.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://boudoirphotographyclub.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
}
