import Link from "next/link";

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-surface shadow-[0_20px_40px_rgba(26,28,26,0.04)]">
      <div className="flex justify-between items-center w-full px-8 py-6 max-w-[1440px] mx-auto">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-2xl font-headline italic text-on-surface">
            Boudoir Photography Club
          </Link>
          <div className="hidden lg:flex space-x-6">
            <Link
              href="/boudoir-photographers"
              className="font-headline uppercase tracking-widest text-xs text-primary border-b border-primary pb-1 hover:opacity-100 transition-opacity duration-300"
            >
              Find Talent
            </Link>
            <Link
              href="/#how-it-works"
              className="font-headline uppercase tracking-widest text-xs text-on-surface opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              How it Works
            </Link>
            <Link
              href="/submit"
              className="font-headline uppercase tracking-widest text-xs text-on-surface opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              Pricing
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <Link
            href="/submit"
            className="hidden md:block editorial-gradient text-on-primary px-5 py-2.5 rounded-sm font-label text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            List Your Studio
          </Link>
          <div className="flex items-center space-x-4">
            <span className="material-symbols-outlined text-on-surface opacity-70 cursor-pointer hover:opacity-100 transition-opacity">
              favorite
            </span>
            <span className="material-symbols-outlined text-on-surface opacity-70 cursor-pointer hover:opacity-100 transition-opacity">
              account_circle
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
