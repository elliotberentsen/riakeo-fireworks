"use client";

import { useState } from "react";

interface ProductAccordionProps {
  produktfordelar: string[];
  specifications: {
    shots: number;
    effectHeight: number;
    duration: number;
    caliber: number | string;
    shotType: string;
    nem: number;
  };
  description: string;
}

export default function ProductAccordion({
  produktfordelar,
  specifications,
  description,
}: ProductAccordionProps) {
  const [openSection, setOpenSection] = useState<
    "benefits" | "specs" | "description" | null
  >("benefits");

  const sections = [
    {
      id: "benefits" as const,
      title: "Produktfördelar",
      content: (
        <div className="flex flex-wrap gap-2">
          {produktfordelar.map((fordel) => (
            <span
              key={fordel}
              className="px-4 py-2 bg-gray-100 text-gray-800 text-sm font-medium rounded-full"
            >
              {fordel}
            </span>
          ))}
        </div>
      ),
    },
    {
      id: "specs" as const,
      title: "Specifikationer",
      content: (
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-xl">
            <p className="text-sm text-gray-500 mb-1">Antal skott</p>
            <p className="text-xl font-bold text-gray-900">{specifications.shots}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-xl">
            <p className="text-sm text-gray-500 mb-1">Effekthöjd</p>
            <p className="text-xl font-bold text-gray-900">
              {specifications.effectHeight} m
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-xl">
            <p className="text-sm text-gray-500 mb-1">Brinntid</p>
            <p className="text-xl font-bold text-gray-900">{specifications.duration} sek</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-xl">
            <p className="text-sm text-gray-500 mb-1">Kaliber</p>
            <p className="text-xl font-bold text-gray-900">{specifications.caliber} mm</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-xl">
            <p className="text-sm text-gray-500 mb-1">Typ av skott</p>
            <p className="text-lg font-bold text-gray-900">{specifications.shotType}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-xl">
            <p className="text-sm text-gray-500 mb-1">NEM</p>
            <p className="text-xl font-bold text-gray-900">{specifications.nem} kg</p>
          </div>
        </div>
      ),
    },
    {
      id: "description" as const,
      title: "Beskrivning",
      content: (
        <div className="prose prose-gray max-w-none">
          {description.split("\n\n").map((paragraph, index) => (
            <p key={index} className="text-gray-600 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      {sections.map((section) => {
        const isOpen = openSection === section.id;
        return (
          <div key={section.id} className="border-b border-gray-100 pb-4">
            <button
              type="button"
              onClick={() => setOpenSection(isOpen ? null : section.id)}
              className="w-full flex items-center justify-between text-left"
              aria-expanded={isOpen}
            >
              <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
              <span className="text-gray-500">
                {isOpen ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14" />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 5v14m7-7H5" />
                  </svg>
                )}
              </span>
            </button>
            {isOpen && <div className="mt-4">{section.content}</div>}
          </div>
        );
      })}
    </div>
  );
}
