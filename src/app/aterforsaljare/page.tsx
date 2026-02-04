import Header from "@/components/Header";
import RetailersMapClient from "@/components/RetailersMapClient";
import { LocalBusinessJsonLd } from "@/components/JsonLd";
import { retailers } from "@/data/retailers";
import Image from "next/image";

export const metadata = {
  title: "Hitta Återförsäljare",
  description:
    "Hitta din närmaste Riakeo-återförsäljare i Sverige. Vi har butiker över hela landet som säljer våra högkvalitativa fyrverkerier.",
  openGraph: {
    title: "Hitta Återförsäljare | Riakeo Fireworks",
    description:
      "Hitta din närmaste återförsäljare av Riakeo fyrverkerier i Sverige.",
  },
  alternates: {
    canonical: "/aterforsaljare",
  },
};

// Page will be revealed on December 20, 2026
const REVEAL_DATE = new Date("2026-12-20T00:00:00");

function ComingSoonPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/banners-heros/retailers-riakeo.webp"
        alt="Riakeo Fireworks"
        fill
        priority
        className="object-cover"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Header */}
      <div className="relative z-20">
        <Header />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
          Återförsäljare
        </h1>
        <p className="max-w-xl text-lg text-white/80 md:text-xl">
          Denna sida öppnar den 20 december
        </p>
      </div>
    </div>
  );
}

export default function AterforsaljarePage() {
  const now = new Date();
  const isBeforeReveal = now < REVEAL_DATE;

  if (isBeforeReveal) {
    return <ComingSoonPage />;
  }

  return (
    <div className="min-h-screen bg-white">
      <LocalBusinessJsonLd />
      <Header />
      <div className="h-12" />
      <RetailersMapClient retailers={retailers} />
    </div>
  );
}
