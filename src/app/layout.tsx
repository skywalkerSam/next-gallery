import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Image Gallery",
  description: "Image Gallery w/ NEXT.js + vercel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
          <div>
            <small className="text-gray-500">Built with</small>
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="https://nextjs.org/icons/next.svg"
                alt="Next.js logo"
                width={180}
                height={38}
                priority
              />
            </a>
            <br />
            <small className="text-gray-500">
              &copy; Copyright 12024,{" "}
              <a
                href="https://github.com/skywalkerSam/"
                className="text-cyan-500"
                target="_blank"
              >
                @skywalkerSam
              </a>
            </small>
          </div>
        </footer>
      </body>
    </html>
  );
}

// <footer className="row-start-3 mb-9 mt-36 flex flex-wrap items-center justify-center">
//   <div>
//     <small className="text-gray-500">Built with</small>
//     <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
//       <Image
//         //   className="dark:invert"
//         src="https://nextjs.org/icons/next.svg"
//         alt="Next.js logo"
//         width={180}
//         height={38}
//         priority
//       />
//     </a>
//     <br />
//     <small className="text-gray-500">
//       &copy; Copyright 12024,{" "}
//       <a
//         href="https://github.com/skywalkerSam/"
//         className="text-cyan-500"
//         target="_blank"
//       >
//         @skywalkerSam
//       </a>
//     </small>
//     {/* <small className="mr-6 text-gray-500">
//             &copy; Copyright 12024, ASAI Inc.
//           </small> */}
//   </div>
// </footer>
