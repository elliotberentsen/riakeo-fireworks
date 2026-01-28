import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Riakeo Fireworks",
    short_name: "Riakeo",
    description:
      "Sveriges ledande fyrverkerileverantör. Köp högkvalitativa fyrverkerier för nyår och evenemang.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/logo-riakeo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo-riakeo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
