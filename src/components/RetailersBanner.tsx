import Image from "next/image";
import Link from "next/link";

export default function RetailersBanner() {
  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 pb-12 md:pb-20">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Desktop Image */}
          <div className="hidden md:block relative aspect-[21/9] w-full">
            <Image
              src="/images/banners-heros/retailers-riakeo.webp"
              alt="Hitta butik nära dig"
              fill
              className="object-cover"
            />
          </div>

          {/* Mobile Image */}
          <div className="md:hidden relative aspect-[4/5] w-full">
            <Image
              src="/images/banners-heros/retailers-riakeo-mobile.webp"
              alt="Hitta butik nära dig"
              fill
              className="object-cover"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Content - Centered on mobile, bottom positioned on desktop */}
          <div className="absolute inset-0 flex flex-col items-center justify-center md:items-start md:justify-end md:p-8">
            {/* Title */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center md:text-left mb-4 md:mb-0">
              Hitta butik nära dig
            </h2>

            {/* CTA Button - Only this is a link */}
            <Link
              href="/aterforsaljare"
              className="group inline-flex items-center gap-2 bg-white text-gray-900 text-sm font-medium px-5 py-3 rounded-full hover:bg-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 md:absolute md:bottom-8 md:right-8"
            >
              Se återförsäljare
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
