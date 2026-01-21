import type { Metadata } from "next";
import { Archivo, Archivo_Black } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Riakeo Fireworks | Sveriges Fyrverkerileverantör",
  description: "Professionell fyrverkerileverantör i Sverige. Vi levererar högkvalitativa fyrverkerier till återförsäljare och evenemang.",
  keywords: ["fyrverkerier", "fireworks", "Sverige", "leverantör", "pyroteknik"],
  authors: [{ name: "Riakeo Fireworks" }],
  openGraph: {
    title: "Riakeo Fireworks | Sveriges Fyrverkerileverantör",
    description: "Professionell fyrverkerileverantör i Sverige",
    locale: "sv_SE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={`${archivo.variable} ${archivoBlack.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
