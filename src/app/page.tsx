/**
 * @todo PWA components temporarily disabled until push notification service is fully configured—will be enabled in a future PR.
 */
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Gallery - Home",
  description:
    "Welcome to Next Gallery - A modern image gallery built with Next.js",
};

// Styles
const centeredDiv = "flex flex-wrap min-h-screen flex-row items-center justify-center";
const visitImageGalleryStyle =
  "p-2 rounded-md items-center text-xl md:text-2xl lg:text-3xl hover:text-blue-400 focus:outline-none focus:ring-0 focus:ring-blue-400 focus:ring-offset-2 active:text-slate-600";
const textStyle =
  "mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text font-semibold text-transparent tracking-tighter";

export default function Home() {
  return (
    <div className={centeredDiv}>
      <div className={textStyle}>
        <Link
          href={"/gallery"}
          className={visitImageGalleryStyle}
          aria-label="Navigate to image gallery"
        >
          <span>Gallery</span>
          <span aria-hidden="true" className="ml-2">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
