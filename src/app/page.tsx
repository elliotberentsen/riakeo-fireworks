import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductSlider from "@/components/ProductSlider";
import RetailersBanner from "@/components/RetailersBanner";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProductSlider />
        <RetailersBanner />
      </main>
    </div>
  );
}
