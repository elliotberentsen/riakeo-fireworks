import type { Metadata } from "next";
import { Archivo, Archivo_Black } from "next/font/google";
import "./globals.css";
import { OrganizationJsonLd, WebsiteJsonLd } from "@/components/JsonLd";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
});

const baseUrl = "https://riakeo.se";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Riakeo Fireworks | Sveriges Fyrverkerileverantör",
    template: "%s | Riakeo Fireworks",
  },
  description:
    "Professionell fyrverkerileverantör i Sverige. Köp högkvalitativa fyrverkerier som batterier, compounds och raketer för nyår och evenemang.",
  keywords: [
    "fyrverkerier",
    "fireworks",
    "köpa fyrverkerier",
    "nyårsfyrverkerier",
    "batterier fyrverkerier",
    "compounds",
    "Sverige",
    "fyrverkerileverantör",
    "pyroteknik",
    "Riakeo",
  ],
  authors: [{ name: "Riakeo Fireworks" }],
  creator: "Riakeo Fireworks",
  publisher: "Riakeo Fireworks",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: baseUrl,
    siteName: "Riakeo Fireworks",
    title: "Riakeo Fireworks | Sveriges Fyrverkerileverantör",
    description:
      "Professionell fyrverkerileverantör i Sverige. Köp högkvalitativa fyrverkerier för nyår och evenemang.",
    images: [
      {
        url: "/logo-riakeo.png",
        width: 400,
        height: 120,
        alt: "Riakeo Fireworks Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Riakeo Fireworks | Sveriges Fyrverkerileverantör",
    description:
      "Professionell fyrverkerileverantör i Sverige. Köp högkvalitativa fyrverkerier.",
    images: ["/logo-riakeo.png"],
  },
  alternates: {
    canonical: baseUrl,
  },
  category: "shopping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <head>
        <OrganizationJsonLd />
        <WebsiteJsonLd />
      </head>
      <body className={`${archivo.variable} ${archivoBlack.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
