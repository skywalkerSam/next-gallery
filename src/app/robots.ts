import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // disallow: "/",
        disallow: ["/gallery/", "/dashboard/", "/api/", "/admin/", "/private/"],
      },
    ],
    sitemap: "https://next-gallery-blues.vercel.app/sitemap.xml",
    // sitemap: "/sitemap.xml",
  };
}
