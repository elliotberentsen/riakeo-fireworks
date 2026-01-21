import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import ProductAccordion from "@/components/ProductAccordion";
import { products, getProductBySlug } from "@/data/products";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  
  if (!product) {
    return { title: "Produkt hittades inte" };
  }

  return {
    title: `${product.name} | Riakeo Fireworks`,
    description: product.description.slice(0, 160),
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Extract YouTube video ID
  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([^"&?\/\s]{11})/);
    return match ? match[1] : null;
  };

  const videoId = product.videoUrl ? getYouTubeId(product.videoUrl) : null;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="h-12" />

      {/* Breadcrumb */}
      <section className="py-4 border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-2.5 sm:px-4 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Hem
            </Link>
            <span>/</span>
            <Link href="/sortiment" className="hover:text-gray-900 transition-colors">
              Sortiment
            </Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-2.5 sm:px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Image & Video */}
            <div className="space-y-6">
              {/* Main Image */}
              <div className="aspect-square rounded-2xl relative overflow-hidden p-6">
                <Image
                  src={product.images.main}
                  alt={product.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* YouTube Video */}
              {videoId && (
                <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={`${product.name} video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              )}
            </div>

            {/* Right Column - Product Info */}
            <div className="space-y-10 lg:space-y-12">
              {/* Product Name */}
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  {product.name}
                </h1>
                <p className="text-2xl font-semibold text-gray-900">
                  {product.priceSek} SEK
                </p>
              </div>

              <ProductAccordion
                produktfordelar={product.produktfordelar}
                specifications={product.specifications}
                description={product.description}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
