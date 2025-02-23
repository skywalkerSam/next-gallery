import Link from "next/link";
// import ImageUploadButton from "~/ui/ImageUploadButton";
import MainTitle from "~/components/ui/main-title";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Gallery - Home",
  description:
    "Welcome to Next Gallery - A modern image gallery built with Next.js",
};

const pageStyle =
  "grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20";
const mainStyle = "row-start-2 flex flex-col items-center gap-3 sm:items-start";
const visitImageGalleryStyle =
  "inline-flex items-center rounded-md text-xl text-blue-400 hover:text-slate-600 focus:outline-none focus:ring-0 focus:ring-blue-400 focus:ring-offset-2 active:text-slate-600 tracking-tight";

export default function Home() {
  return (
    <div className={pageStyle}>
      <main className={mainStyle}>
        <MainTitle></MainTitle>
        <div className="p-3">
          <Link
            href={"/gallery"}
            className={visitImageGalleryStyle}
            aria-label="Navigate to image gallery"
          >
            {/* Visit Image Gallery → */}
            <span className="hover:underline">Visit Image Gallery</span>
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </Link>
        </div>
        {/* uploadthing image uploads */}
        {/* <ImageUploadButton></ImageUploadButton> */}
      </main>
    </div>
  );
}
