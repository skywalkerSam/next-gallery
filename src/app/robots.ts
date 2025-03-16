import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        // allow: "/",
        // disallow: "/private/",
        disallow: "/",
      },
    ],
    // sitemap: "https://next-gallery-blues.vercel.app/sitemap.xml",
    sitemap: "/sitemap.xml",
  };
}
