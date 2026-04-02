import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Boudoir Photography Club",
  description: "Terms of Service for Boudoir Photography Club. Read our terms and conditions for using the directory.",
};

export default function TermsPage() {
  return (
    <div className="bg-surface text-on-surface">
      <div className="max-w-[800px] mx-auto px-6 sm:px-10 py-16">
        <h1 className="font-headline text-4xl md:text-5xl italic text-on-surface mb-4">Terms of Service</h1>
        <p className="text-sm text-on-surface-variant mb-10">Last updated: April 2, 2026</p>

        <div className="prose max-w-none space-y-6 text-on-surface-variant text-sm leading-relaxed">
          <h2 className="font-headline text-xl text-on-surface mt-8 mb-3">1. Acceptance of Terms</h2>
          <p>By accessing and using Boudoir Photography Club (boudoirphotographyclub.com), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.</p>

          <h2 className="font-headline text-xl text-on-surface mt-8 mb-3">2. Description of Service</h2>
          <p>Boudoir Photography Club is a directory service that connects clients with boudoir photographers. We do not provide photography services directly. We facilitate connections between clients and independent photographers listed in our directory.</p>

          <h2 className="font-headline text-xl text-on-surface mt-8 mb-3">3. User Responsibilities</h2>
          <p>Users must be 18 years or older to use this service. You agree to provide accurate information when submitting forms or creating accounts. You are responsible for all activities conducted through your interactions with our platform.</p>

          <h2 className="font-headline text-xl text-on-surface mt-8 mb-3">4. Photographer Listings</h2>
          <p>Photographers listed in our directory are independent professionals. Boudoir Photography Club does not employ, endorse, or guarantee the services of any listed photographer. We encourage users to verify credentials, review portfolios, and communicate directly with photographers before booking.</p>

          <h2 className="font-headline text-xl text-on-surface mt-8 mb-3">5. Intellectual Property</h2>
          <p>All content on this website, including text, graphics, logos, and software, is the property of Boudoir Photography Club or its content suppliers. Photographer images and portfolios remain the property of their respective owners.</p>

          <h2 className="font-headline text-xl text-on-surface mt-8 mb-3">6. Limitation of Liability</h2>
          <p>Boudoir Photography Club is not liable for any disputes, damages, or losses arising from interactions between clients and photographers. Our role is limited to providing a directory platform for discovery and connection.</p>

          <h2 className="font-headline text-xl text-on-surface mt-8 mb-3">7. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance of the updated terms.</p>

          <h2 className="font-headline text-xl text-on-surface mt-8 mb-3">8. Contact</h2>
          <p>For questions about these Terms of Service, contact us at hello@boudoirphotographyclub.com.</p>
        </div>
      </div>
    </div>
  );
}
