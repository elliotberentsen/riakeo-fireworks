"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/sortiment/batterier", label: "Batterier" },
    { href: "/sortiment/compounds", label: "Compounds" },
    { href: "/aterforsaljare", label: "Återförsäljare" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-black text-white">
        <div className="max-w-[1440px] mx-auto px-2.5 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-12 md:h-12 lg:h-12">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-riakeo.png"
              alt="Riakeo Fireworks"
              width={130}
              height={38}
              priority
              className="h-10 md:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-m font-semibold tracking-wide text-white transition-all duration-200 hover:text-gray-200 hover:-translate-y-0.5"
              >
                <span className="relative">
                  {link.label}
                  <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full" />
                </span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        </div>
      </div>

      {/* Mobile Fullscreen Navigation */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-white transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-2"
        }`}
      >
        <div className="flex items-center justify-between h-12 px-2.5 border-b border-gray-100">
          <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
            <Image
              src="/logo-riakeo.png"
              alt="Riakeo Fireworks"
              width={130}
              height={38}
              priority
              className="h-7 w-auto"
            />
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 text-gray-800"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="h-[calc(100vh-48px)] flex flex-col items-start justify-start gap-6 px-2.5 pt-10 text-lg font-medium uppercase tracking-wide text-gray-900">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="transition-colors hover:text-red-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
