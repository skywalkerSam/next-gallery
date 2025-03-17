import type { MetadataRoute } from "next";

/**
 * Generate a sitemap for the application.
 * Valid changeFrequency values: always | hourly | daily | weekly | monthly | yearly | never
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ?? "https://next-gallery-blues.vercel.app";
  return [
    {
      // url: "https://next-gallery-blues.vercel.app/",
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      // url: "https://next-gallery-blues.vercel.app/gallery",
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      // url: "https://next-gallery-blues.vercel.app/gallery/exGallery",
      url: `${baseUrl}/gallery/exGallery`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.3,
    },
  ];
}
