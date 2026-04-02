"use client";

import { useState } from "react";
import JsonLd from "./JsonLd";
import { generateFAQSchema } from "@/lib/seo";

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQSection({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mt-16">
      <JsonLd data={generateFAQSchema(faqs)} />
      <h2 className="font-headline text-3xl italic mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-1">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-outline-variant/20"
          >
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full px-0 py-6 text-left flex justify-between items-center hover:text-primary transition-colors"
            >
              <span className="font-headline text-lg pr-8">
                {faq.question}
              </span>
              <span
                className={`material-symbols-outlined text-on-surface-variant flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                expand_more
              </span>
            </button>
            {openIndex === index && (
              <div className="pb-6 text-on-surface-variant leading-relaxed text-sm max-w-3xl">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
