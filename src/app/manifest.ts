import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Next Gallery",
    short_name: "Gallery",
    description: "A cloud-based gallery application built with NEXT.js",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#c4c4c4",
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
    ],
  };
}
