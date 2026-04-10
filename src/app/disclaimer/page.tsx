import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | Boudoir Photography Club",
  description: "Disclaimer for Boudoir Photography Club. Understand the limitations and scope of our directory service.",
};

export default function DisclaimerPage() {
  return (
    <div className="bg-surface text-on-surface">
      <div className="max-w-[800px] mx-auto px-6 sm:px-10 py-16">
        <h1 className="font-headline text-4xl md:text-5xl italic text-on-surface mb-4">Disclaimer</h1>
        <p className="text-sm text-on-surface-variant mb-10">Last updated: April 10, 2026</p>

        <div className="prose max-w-none space-y-6 text-on-surface-variant text-sm leading-relaxed">
          <h2 className="font-headline text-xl text-on-surface mt-8 mb-3">1. Directory Service</h2>
          <p>Boudoir Photography Club is an online directory and informational platform. We connect clients with independent boudoir photographers but do not provide photography services ourselves. All photographers listed on our platform are independent professionals and are not employees, agents, or representatives of Boudoir Photography Club.</p>

          <h2 className="font-headline text-xl text-on-surface mt-8 mb-3">2. No Endorsement</h2>
          <p>Listing a photographer on our directory does not constitute an endorsement, recommendation, or guarantee of their services, quality of work, or business practices. We encourage all users to independently verify photographer credentials, review portfolios, and conduct their own due diligence before booking any services.</p>

          <h2 className="font-headline text-xl text-on-surface mt-8 mb-3">3. Content Accuracy</h2>
          <p>While we strive to keep our directory information accurate and up to date, we make no warranties or representations about the completeness, accuracy, reliability, or availability of any information on this website. Photographer details including pricing, availability, specialties, and contact information are provided by the photographers themselves and may change without notice.</p>

          <h2 className="font-headline text-xl text-on-surface mt-8 mb-3">4. Image Content</h2>
          <p>All photography images displayed on this website are the property of their respective photographers and studios. Images are displayed with the permission or for the purpose of representing the photographer&apos;s portfolio in our directory. All images on this platform are curated to maintain professional standards. Boudoir Photography Club is a professional photography directory focused on artistic expression, empowerment, and confidence.</p>

          <h2 className="font-headline text-xl text-on-surface mt-8 mb-3">5. Age Requirement</h2>
          <p>This website and its services are intended for users who are 18 years of age or older. By using this website, you confirm that you are at least 18 years old. If you are under 18, please do not use this website.</p>

          <h2 className="font-headline text-xl text-on-surface mt-8 mb-3">6. External Links</h2>
          <p>Our website may contain links to external websites operated by photographers or third parties. We have no control over the content and practices of these external sites and accept no responsibility for them. The inclusion of any link does not imply our endorsement of the external site.</p>

          <h2 className="font-headline text-xl text-on-surface mt-8 mb-3">7. Advertising</h2>
          <p>This website displays advertisements provided by third-party advertising networks, including Google AdSense. These advertisements are clearly distinguishable from our editorial content. The presence of advertisements does not constitute an endorsement of the advertised products or services by Boudoir Photography Club.</p>

          <h2 className="font-headline text-xl text-on-surface mt-8 mb-3">8. Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, Boudoir Photography Club shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of or inability to use our website or services, any transactions between you and photographers found through our directory, or any content posted on this website.</p>

          <h2 className="font-headline text-xl text-on-surface mt-8 mb-3">9. Contact</h2>
          <p>If you have questions about this Disclaimer, please contact us at hello@boudoirphotographyclub.com.</p>
        </div>
      </div>
    </div>
  );
}
