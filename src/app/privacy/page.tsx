import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Boudoir Photography Club",
  description: "Privacy Policy for Boudoir Photography Club. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-surface text-on-surface">
      <div className="max-w-[800px] mx-auto px-6 sm:px-10 py-16">
        <h1 className="font-headline text-4xl md:text-5xl italic text-on-surface mb-4">Privacy Policy</h1>
        <p className="text-sm text-on-surface-variant mb-10">Last updated: April 2, 2026</p>

        <div className="prose max-w-none space-y-6 text-on-surface-variant text-sm leading-relaxed">
          <h2 className="font-headline text-xl text-on-surface mt-8 mb-3">1. Information We Collect</h2>
          <p>We collect information you provide directly, such as your name, email address, phone number, and message content when you submit a contact form or request a quote from a photographer. We also collect usage data through cookies and analytics tools including pages visited, time spent, and interactions.</p>

          <h2 className="font-headline text-xl text-on-surface mt-8 mb-3">2. How We Use Your Information</h2>
          <p>We use collected information to connect you with photographers, improve our directory, analyze site usage, send relevant communications, and ensure the security of our platform. We do not sell your personal information to third parties.</p>

          <h2 className="font-headline text-xl text-on-surface mt-8 mb-3">3. Information Sharing</h2>
          <p>When you request a quote or contact a photographer, your contact information is shared with that specific photographer to facilitate your inquiry. We may share anonymized usage data with analytics partners to improve our services.</p>

          <h2 className="font-headline text-xl text-on-surface mt-8 mb-3">4. Cookies and Tracking</h2>
          <p>We use Google Analytics (GA4) to understand how visitors interact with our site. This includes cookies that track page views, session duration, and user interactions. You can opt out of Google Analytics by installing the Google Analytics opt-out browser add-on.</p>

          <h2 className="font-headline text-xl text-on-surface mt-8 mb-3">5. Data Security</h2>
          <p>We implement industry-standard security measures to protect your information, including HTTPS encryption, secure data storage, and access controls. However, no method of transmission over the internet is 100% secure.</p>

          <h2 className="font-headline text-xl text-on-surface mt-8 mb-3">6. Your Rights</h2>
          <p>You have the right to access, update, or delete your personal information. You may opt out of marketing communications at any time. To exercise these rights, contact us at hello@boudoirphotographyclub.com.</p>

          <h2 className="font-headline text-xl text-on-surface mt-8 mb-3">7. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at hello@boudoirphotographyclub.com.</p>
        </div>
      </div>
    </div>
  );
}
