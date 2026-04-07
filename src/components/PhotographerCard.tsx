import Link from "next/link";
import Image from "next/image";
import { getPhotographerImage } from "@/data/images";

interface PhotographerCardProps {
  name: string;
  slug: string;
  imageUrl?: string | null;
  thumbnailUrl?: string | null;
  specialties: string[];
  rating: number;
  reviewCount: number;
  tier: "FREE" | "PRO" | "FEATURED";
  bio?: string | null;
  cityName: string;
  stateAbbreviation: string;
  verified: boolean;
}

export default function PhotographerCard({
  name,
  slug,
  imageUrl,
  thumbnailUrl,
  specialties,
  rating,
  reviewCount,
  tier,
  bio,
  cityName,
  stateAbbreviation,
  verified,
}: PhotographerCardProps) {
  return (
    <div className="bg-surface-container-lowest rounded-sm p-6 md:p-8 flex flex-col md:flex-row gap-6 group hover:shadow-[0_20px_40px_rgba(26,28,26,0.04)] transition-shadow">
      {/* Image / Avatar */}
      <div className="w-full md:w-40 h-48 md:h-40 rounded-sm flex-shrink-0 relative overflow-hidden">
        <Image
          src={thumbnailUrl || imageUrl || getPhotographerImage(specialties, slug)}
          alt={`${name} - Boudoir Photographer in ${cityName}`}
          fill
          sizes="(max-width: 768px) 100vw, 160px"
          loading="lazy"
          className="object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        {tier === "FEATURED" && (
          <span className="absolute top-2 left-2 bg-primary text-on-primary px-2 py-0.5 font-label text-[8px] uppercase tracking-widest rounded-full">
            Featured
          </span>
        )}
        {tier === "PRO" && (
          <span className="absolute top-2 left-2 bg-tertiary text-on-tertiary px-2 py-0.5 font-label text-[8px] uppercase tracking-widest rounded-full">
            Pro
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-headline text-xl text-on-surface">
                {name}
              </h3>
              {verified && (
                <span
                  className="material-symbols-outlined text-primary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
              )}
            </div>
            <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mt-1">
              {cityName}, {stateAbbreviation}
            </p>
          </div>

          {/* Rating */}
          {rating > 0 && (
            <div className="flex items-center gap-1 flex-shrink-0">
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-sm"
                    style={{
                      fontVariationSettings: `'FILL' ${i < Math.round(rating) ? 1 : 0}`,
                    }}
                  >
                    star
                  </span>
                ))}
              </div>
              <span className="text-xs font-bold text-on-surface ml-1">
                {rating.toFixed(1)}
              </span>
              <span className="text-[10px] text-outline">
                ({reviewCount})
              </span>
            </div>
          )}
        </div>

        {/* Specialties */}
        {specialties.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {specialties.map((specialty) => (
              <span
                key={specialty}
                className="font-label text-[10px] uppercase tracking-wider text-primary bg-primary-container/30 px-2.5 py-1 rounded-sm"
              >
                {specialty}
              </span>
            ))}
          </div>
        )}

        {/* Bio */}
        {bio && (
          <p className="text-sm text-on-surface-variant leading-relaxed line-clamp-2 mb-4">
            {bio}
          </p>
        )}

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link
            href={`/photographer/${slug}`}
            className="inline-block py-2.5 px-6 border border-outline-variant text-on-surface font-label text-[10px] uppercase tracking-widest hover:bg-primary hover:text-on-primary hover:border-primary transition-all"
          >
            View Portfolio
          </Link>
          <button className="font-label text-[10px] uppercase tracking-widest text-primary hover:text-primary/70 transition-colors">
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
}
