"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { products, type ProductCategory } from "@/data/products";

interface SimilarProductsProps {
  currentSlug: string;
  category: ProductCategory;
}

export default function SimilarProducts({ currentSlug, category }: SimilarProductsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Filter products by same category, excluding the current product
  const similarProducts = products.filter(
    (product) => product.category === category && product.slug !== currentSlug
  );

  // Don't render if no similar products
  if (similarProducts.length === 0) {
    return null;
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 md:py-16 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Liknande produkter
          </h2>

          {/* Navigation Arrows - Desktop */}
          {similarProducts.length > 3 && (
            <div className="hidden md:flex gap-3">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full border border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center group"
                aria-label="Scrolla vänster"
              >
                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-gray-700 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full border border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center group"
                aria-label="Scrolla höger"
              >
                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-gray-700 transition-colors"
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
              </button>
            </div>
          )}
        </div>

        {/* Product Slider */}
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {similarProducts.map((product) => (
            <Link
              key={product.slug}
              href={`/produkt/${product.slug}`}
              className="group flex-shrink-0 w-[260px] md:w-[280px] snap-start"
            >
              {/* Product Card */}
              <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300">
                {/* Image Container */}
                <div className="relative aspect-square bg-gray-100 overflow-hidden">
                  <Image
                    src={product.images.main}
                    alt={product.name}
                    fill
                    className="object-contain p-4 md:p-6 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4">
                  {/* Product Name & Price */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-base font-semibold text-gray-900 group-hover:text-red-600 transition-colors leading-tight">
                      {product.name}
                    </h3>
                    <span className="text-base font-semibold text-gray-900 whitespace-nowrap">
                      {product.priceSek.toLocaleString("sv-SE")} kr
                    </span>
                  </div>

                  {/* Specs Row */}
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <span>{product.specifications.shots} skott</span>
                    <span>•</span>
                    <span>{product.specifications.effectHeight}m höjd</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
