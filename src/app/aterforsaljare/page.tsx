import Header from "@/components/Header";
import RetailersMapClient from "@/components/RetailersMapClient";
import { LocalBusinessJsonLd } from "@/components/JsonLd";
import { retailers } from "@/data/retailers";

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

export default function AterforsaljarePage() {
  return (
    <div className="min-h-screen bg-white">
      <LocalBusinessJsonLd />
      <Header />
      <div className="h-12" />
      <RetailersMapClient retailers={retailers} />
    </div>
  );
}
