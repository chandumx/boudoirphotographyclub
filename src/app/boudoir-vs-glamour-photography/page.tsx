import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boudoir vs Glamour Photography: Key Differences Explained (2026)",
  description: "What is the difference between boudoir and glamour photography? Compare styles, settings, wardrobe, pricing, and find which type of photoshoot is right for you.",
  keywords: ["boudoir vs glamour photography", "difference between boudoir and glamour", "boudoir photography", "glamour photography"],
};

const comparisons = [
  { aspect: "Setting", boudoir: "Private studio or bedroom setting, intimate atmosphere with soft lighting", glamour: "Professional studio with elaborate lighting setups, sometimes outdoor locations" },
  { aspect: "Wardrobe", boudoir: "Lingerie, bodysuits, robes, or implied nudity. Focus on intimate apparel", glamour: "High fashion outfits, evening gowns, swimwear. Focus on style and sophistication" },
  { aspect: "Mood", boudoir: "Intimate, sensual, vulnerable, empowering. Celebrates personal beauty", glamour: "Polished, confident, magazine-style. Celebrates fashion and allure" },
  { aspect: "Purpose", boudoir: "Personal empowerment, gifts for partners, milestone celebrations, self-love", glamour: "Portfolio building, social media content, personal branding, confidence boost" },
  { aspect: "Editing Style", boudoir: "Soft, warm tones. Natural skin retouching. Romantic or moody aesthetic", glamour: "High contrast, sharp details. Professional retouching. Editorial polish" },
  { aspect: "Pricing", boudoir: "$300 - $2,500+ including hair, makeup, and edited images", glamour: "$200 - $2,000+ depending on complexity and wardrobe changes" },
  { aspect: "Who It Is For", boudoir: "Anyone wanting to celebrate their body. All ages, sizes, and genders welcome", glamour: "Those wanting magazine-quality portraits. Models, professionals, and anyone seeking polished images" },
];

export default function BoudoirVsGlamourPage() {
  return (
    <div className="bg-surface text-on-surface">
      <div className="max-w-[1000px] mx-auto px-6 sm:px-10 py-16">
        <h1 className="font-headline text-4xl md:text-5xl italic text-on-surface mb-4">
          Boudoir vs Glamour Photography
        </h1>
        <p className="text-on-surface-variant text-lg mb-10 max-w-[700px]">
          Both boudoir and glamour photography celebrate beauty and confidence, but
          they differ in style, setting, and purpose. Here is a detailed comparison
          to help you choose the right experience.
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-outline-variant">
                <th className="text-left py-4 px-4 font-label text-xs uppercase tracking-widest text-on-surface-variant">Aspect</th>
                <th className="text-left py-4 px-4 font-label text-xs uppercase tracking-widest text-primary">Boudoir</th>
                <th className="text-left py-4 px-4 font-label text-xs uppercase tracking-widest text-tertiary">Glamour</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, i) => (
                <tr key={i} className="border-b border-outline-variant/30">
                  <td className="py-4 px-4 font-bold text-on-surface align-top">{row.aspect}</td>
                  <td className="py-4 px-4 text-on-surface-variant align-top">{row.boudoir}</td>
                  <td className="py-4 px-4 text-on-surface-variant align-top">{row.glamour}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-surface-container-lowest rounded-sm p-8 mb-10">
          <h2 className="font-headline text-2xl italic text-on-surface mb-4">Which Should You Choose?</h2>
          <p className="text-on-surface-variant leading-relaxed mb-4">
            Choose <strong>boudoir photography</strong> if you want an intimate, empowering experience that celebrates your body exactly as it is. Boudoir is perfect for milestone birthdays, anniversaries, bridal gifts, or simply as an act of self-love.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Choose <strong>glamour photography</strong> if you want polished, magazine-style portraits that showcase fashion and sophistication. Glamour is ideal for professional portfolios, personal branding, or creating stunning social media content.
          </p>
        </div>

        <div className="text-center">
          <h2 className="font-headline text-2xl italic text-on-surface mb-4">Ready to Book Your Session?</h2>
          <div className="flex gap-4 justify-center">
            <Link href="/boudoir-photographers" className="inline-block py-3 px-8 editorial-gradient text-on-primary font-label text-xs uppercase tracking-widest hover:opacity-90 transition-opacity">
              Find Boudoir Photographers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
