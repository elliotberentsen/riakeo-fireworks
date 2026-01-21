"use client";

import { useMemo, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
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

interface RetailersSectionProps {
  retailers: Retailer[];
}

export default function RetailersSection({ retailers }: RetailersSectionProps) {
  const mapboxToken =
    "pk.eyJ1IjoiZWxsaW90YmVyZW50c2VuIiwiYSI6ImNta282Njl5aTAyb3kzZXM4Y254bW04bGQifQ.oIkLAEBXz49wjlChfQahmQ";
  const [activeIndex, setActiveIndex] = useState(0);

  const center = useMemo(() => {
    const active = retailers[activeIndex];
    return [active.coordinates.lat, active.coordinates.lng] as [number, number];
  }, [activeIndex, retailers]);

  return (
    <div className="relative h-screen w-full">
      <MapContainer
        center={center}
        zoom={6}
        className="h-full w-full"
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url={`https://api.mapbox.com/styles/v1/mapbox/dark-v11/tiles/512/{z}/{x}/{y}?access_token=${mapboxToken}`}
          tileSize={512}
          zoomOffset={-1}
        />
        {retailers.map((retailer, index) => (
          <Marker
            key={retailer.name}
            position={[retailer.coordinates.lat, retailer.coordinates.lng]}
            icon={markerIcon}
            eventHandlers={{
              click: () => setActiveIndex(index),
            }}
          >
            <Popup>
              <div className="text-sm">
                <div className="font-semibold">{retailer.name}</div>
                <div className="text-gray-600">{retailer.address}</div>
                <div className="text-gray-600">{retailer.phone}</div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <aside className="absolute right-3 top-16 z-[400] w-[320px] max-w-[90vw] rounded-2xl border border-gray-200 bg-white/95 p-4 shadow-lg backdrop-blur">
        <div className="mb-4">
          <p className="text-xs uppercase tracking-widest text-gray-500">Återförsäljare</p>
          <h2 className="text-xl font-semibold text-gray-900">Hitta butik</h2>
        </div>
        <div className="space-y-3">
          {retailers.map((retailer, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={retailer.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left rounded-xl border px-3 py-3 transition-all ${
                  isActive
                    ? "border-gray-900 bg-gray-50"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      {retailer.name}
                    </div>
                    <div className="text-xs text-gray-600">{retailer.address}</div>
                  </div>
                  <div className="text-xs font-medium text-gray-900 whitespace-nowrap">
                    {retailer.phone}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </aside>
    </div>
  );
}
