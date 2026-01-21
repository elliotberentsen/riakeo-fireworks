import Header from "@/components/Header";
import RetailersMapClient from "@/components/RetailersMapClient";
import { retailers } from "@/data/retailers";

export const metadata = {
  title: "Återförsäljare | Riakeo Fireworks",
  description: "Hitta en återförsäljare i Sverige.",
};

export default function AterforsaljarePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="h-12" />
      <RetailersMapClient retailers={retailers} />
    </div>
  );
}
