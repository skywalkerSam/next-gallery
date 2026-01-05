import type {MetadataRoute} from "next";

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
        categories: ["photography", "gallery", "art"],
        shortcuts: [
            {
                name: "Gallery Home",
                short_name: "Home",
                description: "image Gallery Home",
                url: "/gallery",
                icons: [{src: "/web-app-manifest-192x192.png", sizes: "192x192"}],
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
