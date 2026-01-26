"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { products } from "@/data/products";

export default function ProductSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

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
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-6 md:mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              Utforska vårt sortiment
            </h2>
            <p className="mt-2 md:mt-3 text-gray-600 text-base md:text-lg">
              Upptäck våra mest populära fyrverkerier
            </p>
          </div>

          {/* Navigation Arrows - Desktop */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-11 h-11 rounded-full border border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center group"
              aria-label="Scrolla vänster"
            >
              <svg
                className="w-5 h-5 text-gray-400 group-hover:text-gray-700 transition-colors"
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
              className="w-11 h-11 rounded-full border border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center group"
              aria-label="Scrolla höger"
            >
              <svg
                className="w-5 h-5 text-gray-400 group-hover:text-gray-700 transition-colors"
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
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/produkt/${product.slug}`}
              className="group flex-shrink-0 w-[260px] md:w-[300px] snap-start"
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
                <div className="p-4 md:p-5">
                  {/* Product Name & Price */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors leading-tight">
                      {product.name}
                    </h3>
                    <span className="text-base md:text-lg font-semibold text-gray-900 whitespace-nowrap">
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

        {/* View All Link */}
        <div className="mt-8 md:mt-10 text-center">
          <Link
            href="/sortiment"
            className="inline-flex items-center gap-2 text-gray-900 hover:text-red-600 font-medium transition-colors"
          >
            Se hela sortimentet
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
