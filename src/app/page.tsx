import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductSlider from "@/components/ProductSlider";
import RetailersBanner from "@/components/RetailersBanner";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Riakeo Fireworks | Sveriges Fyrverkerileverantör",
  description:
    "Köp fyrverkerier från Riakeo - Sveriges ledande fyrverkerileverantör. Batterier, compounds och professionella fyrverkerier för nyår, bröllop och evenemang.",
  openGraph: {
    title: "Riakeo Fireworks | Sveriges Fyrverkerileverantör",
    description:
      "Sveriges ledande fyrverkerileverantör. Köp högkvalitativa fyrverkerier för nyår och evenemang.",
    url: "https://riakeo.se",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProductSlider />
        <RetailersBanner />
      </main>
      <Footer />
    </div>
  );
}
