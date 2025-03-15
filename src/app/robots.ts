import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://next-gallery-blues.vercel.app/sitemap.xml",
  };
}

// rules: [
//     {
//       userAgent: 'Googlebot',
//       allow: ['/'],
//       disallow: '/private/',
//     },
//     {
//       userAgent: ['Applebot', 'Bingbot'],
//       disallow: ['/'],
//     },
//   ],
