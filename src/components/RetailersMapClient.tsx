"use client";

import dynamic from "next/dynamic";
import type { Retailer } from "@/data/retailers";

const RetailersSection = dynamic(() => import("@/components/RetailersSection"), {
  ssr: false,
});

interface RetailersMapClientProps {
  retailers: Retailer[];
}

export default function RetailersMapClient({ retailers }: RetailersMapClientProps) {
  return <RetailersSection retailers={retailers} />;
}
