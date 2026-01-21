import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import { products } from "@/data/products";

export const metadata = {
  title: "Batterier | Riakeo Fireworks",
  description: "Utforska vårt sortiment av batterier.",
};

export default function BatterierPage() {
  const batterier = products.filter(
    (product) =>
      product.category === "batteri" ||
      product.subcategoryLabel?.toLowerCase() === "batterier"
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="h-12" />

      <section className="pt-4 pb-0 sm:pt-4">
        <div className="max-w-[1440px] mx-auto px-2.5 sm:px-4 lg:px-8">
          <div className="mb-4 text-xs sm:text-sm text-gray-500">
            <span>Hem</span>
            <span className="mx-2">/</span>
            <span>Sortiment</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Batterier</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 md:pt-8 pt-2 mb-3">
              Batterier
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
            Riakeos bombtårtor är designade för att leverera en kraftfull och välkomponerad fyrverkerishow med en enda tändning. Varje bombtårta skjuter upp flera skott i en perfekt synkroniserad sekvens för en spektakulär upplevelse.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-6 pb-16">
        <div className="max-w-[1440px] mx-auto px-2.5 sm:px-4 lg:px-8 space-y-6">
          <div className="flex flex-row flex-wrap items-center justify-between gap-3 border-y border-gray-100 py-3">
            <p className="text-sm text-gray-600">
              {batterier.length} produkter
            </p>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <label htmlFor="batterier-sort" className="text-sm text-gray-600">
                Sortera
              </label>
              <select
                id="batterier-sort"
                className="h-10 border-b border-gray-300 bg-transparent px-1 text-sm text-gray-900 focus:outline-none focus:border-gray-900"
                defaultValue="popular"
              >
                <option value="popular">Populärast</option>
                <option value="price-asc">Pris: Lågt till högt</option>
                <option value="price-desc">Pris: Högt till lågt</option>
                <option value="name-asc">Namn: A-Ö</option>
                <option value="name-desc">Namn: Ö-A</option>
              </select>
            </div>
          </div>
          {batterier.length === 0 ? (
            <p className="text-gray-500">
              Inga produkter hittades i denna kategori.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {batterier.map((product) => (
                <Link
                  key={product.slug}
                  href={`/produkt/${product.slug}`}
                  className="group block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-gray-300 transition-all duration-300"
                >
                  <div className="flex items-stretch sm:block">
                    <div className="w-32 h-32 flex-shrink-0 sm:w-auto sm:h-auto sm:aspect-square sm:bg-gray-100 relative overflow-hidden bg-transparent">
                      <Image
                        src={product.images.main}
                        alt={product.name}
                        fill
                        className="object-contain p-4 sm:p-6 group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-3 sm:p-6 flex-1 flex flex-col">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-2 sm:mb-3">
                        <h3 className="text-base sm:text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors leading-tight">
                          {product.name}
                        </h3>
                        <span className="text-base sm:text-lg font-semibold text-gray-900 whitespace-nowrap">
                          {product.priceSek} SEK
                        </span>
                      </div>

                      <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-gray-500">
                        <span>{product.specifications.shots} skott</span>
                        <span>•</span>
                        <span>{product.specifications.effectHeight}m höjd</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
