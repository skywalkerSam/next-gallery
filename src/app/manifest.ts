import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "image Gallery",
    short_name: "Gallery",
    description: "A Personalized Gallery Application Demo",
    start_url: "/",
    display: "standalone",
    // theme_color: "#000000",
    // theme_color: "#bae6fd",
    // theme_color: "#1e1e1e",
    theme_color: "#121212", // Softer black
    background_color: "#000000",
    orientation: "portrait",
    scope: "/",
    categories: ["photography", "gallery", "images"],
    shortcuts: [
      {
        name: "Gallery Home",
        short_name: "Home",
        description: "image Gallery Home",
        url: "/gallery",
        icons: [{ src: "/gallery.svg" }],
      },
    ],
    icons: [
      {
        src: "/gallery.svg",
        sizes: "192x192",
        type: "svg",
        purpose: "maskable",
      },
      {
        src: "/gallery.svg",
        sizes: "512x512",
        type: "svg",
        purpose: "maskable",
      },
      {
        src: "/gallery.svg",
        sizes: "192x192",
        type: "svg",
        purpose: "any",
      },
      {
        src: "/gallery.svg",
        sizes: "512x512",
        type: "svg",
        purpose: "any",
      },
    ],
  };
}
