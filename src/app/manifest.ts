import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Next Gallery",
    short_name: "Gallery",
    description: "A cloud-based gallery application built with NEXT.js",
    start_url: "/",
    display: "standalone",
    // background_color: "#000000",
    // theme_color: "#000000",
    background_color: "#121212", // Softer black for background
    theme_color: "#1e1e1e",
    orientation: "portrait",
    scope: "/",
    categories: ["photography", "gallery", "art"],
    shortcuts: [
      {
        name: "View Gallery",
        short_name: "Gallery",
        description: "View your gallery items",
        url: "/gallery",
        icons: [{ src: "/web-app-manifest-192x192.png", sizes: "192x192" }],
      },
    ],
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
