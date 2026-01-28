"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import type { Retailer } from "@/data/retailers";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const activeMarkerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [30, 49],
  iconAnchor: [15, 49],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface RetailersSectionProps {
  retailers: Retailer[];
}

function MapController({ 
  center, 
  zoom, 
  isSheetOpen,
  hasActiveSelection
}: { 
  center: [number, number]; 
  zoom: number;
  isSheetOpen: boolean;
  hasActiveSelection: boolean;
}) {
  const map = useMap();
  
  useEffect(() => {
    // Check if we're on mobile (below md breakpoint)
    const isMobile = window.innerWidth < 768;
    
    if (isMobile && isSheetOpen && hasActiveSelection) {
      // On mobile with sheet open, we need to offset the center so pin appears above the sheet
      // Sheet covers 60vh from bottom, visible area is top 40vh
      // Pin would normally be at center (50vh), but needs to be at ~15-20vh from top
      // So we need to offset by about 30-35% of viewport height
      const offsetY = window.innerHeight * 0.30;
      
      // Calculate an adjusted center by converting pixel offset to lat offset
      // At zoom 10, roughly 0.01 lat ≈ 40-50 pixels depending on latitude
      // For Sweden (lat ~60), let's estimate the offset in degrees
      const currentZoom = zoom;
      const metersPerPixel = 156543.03392 * Math.cos(center[0] * Math.PI / 180) / Math.pow(2, currentZoom);
      const metersOffset = offsetY * metersPerPixel;
      const latOffset = metersOffset / 111320; // 111320 meters per degree of latitude
      
      // Subtract from latitude to shift the center point south, which positions the pin north (higher on screen)
      const adjustedCenter: [number, number] = [center[0] - latOffset, center[1]];
      
      map.flyTo(adjustedCenter, zoom, { duration: 0.5 });
    } else {
      map.flyTo(center, zoom, { duration: 0.5 });
    }
  }, [map, center, zoom, isSheetOpen, hasActiveSelection]);
  
  return null;
}

function ZoomControls() {
  const map = useMap();

  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[400] flex items-center gap-2">
      <button
        type="button"
        onClick={() => map.zoomOut()}
        className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all cursor-pointer"
        aria-label="Zooma ut"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => map.zoomIn()}
        className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all cursor-pointer"
        aria-label="Zooma in"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </div>
  );
}

export default function RetailersSection({ retailers }: RetailersSectionProps) {
  const mapboxToken =
    "pk.eyJ1IjoiZWxsaW90YmVyZW50c2VuIiwiYSI6ImNta282Njl5aTAyb3kzZXM4Y254bW04bGQifQ.oIkLAEBXz49wjlChfQahmQ";
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);
  const desktopContentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileContentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileAccordionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const desktopAccordionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const initialCenter: [number, number] = [62.5, 15.5];

  const activeCenter = useMemo(() => {
    if (activeIndex === null) return initialCenter;
    const active = retailers[activeIndex];
    return [active.coordinates.lat, active.coordinates.lng] as [number, number];
  }, [activeIndex, retailers]);

  const handleSelect = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
      setIsSheetOpen(true); // Auto-open sheet on mobile when pin clicked
    }
  };

  // Auto-scroll to selected retailer in the list
  useEffect(() => {
    if (activeIndex === null) return;

    // Small delay to allow sheet animation to complete
    const timeoutId = setTimeout(() => {
      const isMobile = window.innerWidth < 768;
      const ref = isMobile 
        ? mobileAccordionRefs.current[activeIndex]
        : desktopAccordionRefs.current[activeIndex];
      
      if (ref) {
        ref.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 350);

    return () => clearTimeout(timeoutId);
  }, [activeIndex]);

  const toggleSheet = () => {
    setIsSheetOpen(!isSheetOpen);
  };

  const copyAddress = async (address: string) => {
    try {
      await navigator.clipboard.writeText(address);
      setCopiedAddress(address);
      setTimeout(() => setCopiedAddress(null), 2000);
    } catch (err) {
      console.error("Failed to copy address:", err);
    }
  };

  // Accordion content component with separate refs for desktop/mobile
  const AccordionList = ({ variant }: { variant: "desktop" | "mobile" }) => {
    const contentRefs = variant === "desktop" ? desktopContentRefs : mobileContentRefs;
    const accordionRefs = variant === "desktop" ? desktopAccordionRefs : mobileAccordionRefs;
    
    return (
      <div className="space-y-2">
        {retailers.map((retailer, index) => {
          const isActive = index === activeIndex;
          const uniqueKey = `${retailer.name}-${retailer.address}`;
          return (
            <div
              key={uniqueKey}
              ref={(el) => { accordionRefs.current[index] = el; }}
              className={`rounded-xl border overflow-hidden transition-all duration-300 ${
                isActive
                  ? "border-gray-900 bg-gray-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <button
                type="button"
                onClick={() => handleSelect(index)}
                className="w-full text-left px-4 py-3 flex items-center justify-between cursor-pointer"
              >
                <span className="text-sm font-semibold text-gray-900">
                  {retailer.kommun}
                </span>
                <svg
                  className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${
                    isActive ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                ref={(el) => { contentRefs.current[index] = el; }}
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  maxHeight: isActive
                    ? contentRefs.current[index]?.scrollHeight ?? 200
                    : 0,
                }}
              >
                <div className="px-4 pb-4 pt-1 space-y-2 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500">Butik</p>
                    <p className="text-sm font-medium text-gray-900">{retailer.name}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Adress</p>
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-gray-900">{retailer.address}</p>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          copyAddress(retailer.address);
                        }}
                        className="flex-shrink-0 p-1 rounded hover:bg-gray-200 transition-colors cursor-pointer"
                        aria-label="Kopiera adress"
                      >
                        {copiedAddress === retailer.address ? (
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Telefon</p>
                    <a 
                      href={`tel:${retailer.phone}`}
                      className="text-sm text-gray-900 hover:text-red-600 transition-colors"
                    >
                      {retailer.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="relative h-screen w-full">
      <MapContainer
        center={initialCenter}
        zoom={5}
        className="h-full w-full"
        scrollWheelZoom={true}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/512/{z}/{x}/{y}?access_token=${mapboxToken}`}
          tileSize={512}
          zoomOffset={-1}
        />
        <MapController 
          center={activeCenter} 
          zoom={activeIndex !== null ? 10 : 5}
          isSheetOpen={isSheetOpen}
          hasActiveSelection={activeIndex !== null}
        />
        <ZoomControls />
        {retailers.map((retailer, index) => (
          <Marker
            key={`${retailer.name}-${retailer.address}`}
            position={[retailer.coordinates.lat, retailer.coordinates.lng]}
            icon={index === activeIndex ? activeMarkerIcon : markerIcon}
            eventHandlers={{
              click: () => handleSelect(index),
            }}
          />
        ))}
      </MapContainer>

      {/* Desktop Sidebar - hidden on mobile */}
      <aside className="hidden md:flex md:flex-col absolute right-3 top-16 z-[400] w-[320px] max-w-[90vw] max-h-[calc(100vh-5rem)] rounded-2xl border border-gray-200 bg-white/95 shadow-lg backdrop-blur overflow-hidden">
        <div className="p-4 pb-2 flex-shrink-0">
          <p className="text-xs uppercase tracking-widest text-gray-500">Återförsäljare</p>
          <h2 className="text-xl font-semibold text-gray-900">Hitta butik</h2>
        </div>
        <div className="flex-1 overflow-y-auto p-4 pt-2">
          <AccordionList variant="desktop" />
        </div>
      </aside>

      {/* Mobile Bottom Sheet - hidden on desktop */}
      <div className="md:hidden">
        {/* Collapsed bar */}
        <button
          type="button"
          onClick={toggleSheet}
          className={`fixed left-0 right-0 z-[500] bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-pointer ${
            isSheetOpen ? "bottom-[60vh]" : "bottom-0"
          }`}
        >
          <div className="flex flex-col items-center py-3 px-4">
            {/* Handle */}
            <div className="w-10 h-1 bg-gray-300 rounded-full mb-2" />
            <div className="flex items-center justify-between w-full">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500">Återförsäljare</p>
              </div>
              <svg
                className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                  isSheetOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </div>
          </div>
        </button>

        {/* Expanded content */}
        <div
          className={`fixed left-0 right-0 bottom-0 z-[400] bg-white transition-all duration-300 overflow-hidden ${
            isSheetOpen ? "h-[60vh]" : "h-0"
          }`}
        >
          <div className="h-full overflow-y-auto p-4 pt-2">
            <AccordionList variant="mobile" />
          </div>
        </div>

        {/* Backdrop overlay when sheet is open */}
        {isSheetOpen && (
          <div
            className="fixed inset-0 bg-black/20 z-[350]"
            onClick={() => setIsSheetOpen(false)}
          />
        )}
      </div>
    </div>
  );
}
