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
        <p className="text-sm text-on-surface-variant mb-10">Last updated: April 10, 2026</p>

        <div className="prose max-w-none space-y-6 text-on-surface-variant text-sm leading-relaxed">
          <h2 className="font-headline text-xl text-on-surface mt-8 mb-3">1. Information We Collect</h2>
          <p>We collect information you provide directly, such as your name, email address, phone number, and message content when you submit a contact form or request a quote from a photographer. We also collect usage data through cookies and analytics tools including pages visited, time spent, and interactions.</p>

          <h2 className="font-headline text-xl text-on-surface mt-8 mb-3">2. How We Use Your Information</h2>
          <p>We use collected information to connect you with photographers, improve our directory, analyze site usage, send relevant communications, and ensure the security of our platform. We do not sell your personal information to third parties.</p>

          <h2 className="font-headline text-xl text-on-surface mt-8 mb-3">3. Information Sharing</h2>
          <p>When you request a quote or contact a photographer, your contact information is shared with that specific photographer to facilitate your inquiry. We may share anonymized usage data with analytics partners to improve our services.</p>

          <h2 className="font-headline text-xl text-on-surface mt-8 mb-3">4. Cookies and Tracking</h2>
          <p>We use Google Analytics (GA4) to understand how visitors interact with our site. This includes cookies that track page views, session duration, and user interactions. You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary underline" target="_blank" rel="noopener noreferrer">Google Analytics opt-out browser add-on</a>.</p>

          <h2 className="font-headline text-xl text-on-surface mt-8 mb-3">5. Advertising and Third-Party Cookies</h2>
          <p>We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to serve ads based on your prior visits to this website or other websites. Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet.</p>
          <p>You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-primary underline" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>. Alternatively, you can opt out of third-party vendor cookies for personalized advertising by visiting <a href="https://www.aboutads.info/choices/" className="text-primary underline" target="_blank" rel="noopener noreferrer">www.aboutads.info/choices</a>.</p>
          <p>Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this website or other websites. You can review how Google manages data in its ads products at <a href="https://policies.google.com/technologies/partner-sites" className="text-primary underline" target="_blank" rel="noopener noreferrer">Google&apos;s Partner Sites Policy</a>.</p>

          <h2 className="font-headline text-xl text-on-surface mt-8 mb-3">6. Data Security</h2>
          <p>We implement industry-standard security measures to protect your information, including HTTPS encryption, secure data storage, and access controls. However, no method of transmission over the internet is 100% secure.</p>

          <h2 className="font-headline text-xl text-on-surface mt-8 mb-3">7. Your Rights</h2>
          <p>You have the right to access, update, or delete your personal information. You may opt out of marketing communications at any time. To exercise these rights, contact us at hello@boudoirphotographyclub.com.</p>

          <h2 className="font-headline text-xl text-on-surface mt-8 mb-3">8. California Privacy Rights (CCPA)</h2>
          <p>If you are a California resident, you have the right to request disclosure of the categories and specific pieces of personal information we have collected about you. You also have the right to request deletion of your personal information and to opt out of the sale of your personal information. We do not sell personal information. To exercise your rights, contact us at hello@boudoirphotographyclub.com.</p>

          <h2 className="font-headline text-xl text-on-surface mt-8 mb-3">9. International Users (GDPR)</h2>
          <p>If you are located in the European Economic Area (EEA), you have additional rights under the General Data Protection Regulation (GDPR). These include the right to access, rectify, erase, restrict processing, data portability, and the right to object to processing. We process data based on your consent, which you can withdraw at any time by clearing your cookies or contacting us. Our legal basis for processing is consent (for cookies and advertising) and legitimate interest (for operating our directory service).</p>

          <h2 className="font-headline text-xl text-on-surface mt-8 mb-3">10. Children&apos;s Privacy</h2>
          <p>Our website and services are intended for users who are 18 years of age or older. We do not knowingly collect personal information from anyone under the age of 18. If we become aware that a child under 18 has provided us with personal information, we will take steps to delete such information.</p>

          <h2 className="font-headline text-xl text-on-surface mt-8 mb-3">11. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on this page with a revised &quot;Last updated&quot; date. Your continued use of our website after any changes constitutes acceptance of the updated policy.</p>

          <h2 className="font-headline text-xl text-on-surface mt-8 mb-3">12. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at hello@boudoirphotographyclub.com.</p>
        </div>
      </div>
    </div>
  );
}
