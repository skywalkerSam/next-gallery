import {
  ClerkProvider,
  // SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import "./globals.css";
import "@uploadthing/react/styles.css";
import MainTitle from "~/ui/MainTitle";

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

// export const metadata: Metadata = {
//   title: "Image Gallery",
//   description: "Image Gallery w/ NEXT.js + vercel.",
// };

export const metadata: Metadata = {
  title: "Image Gallery",
  description: "Image Gallery with Next.js + Vercel by skywalkerSam",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <SignedOut>
            <div className="row-start-3 mb-60 mt-60">
              <MainTitle></MainTitle>
            </div>
            <div className="row-start-3 mb-60 mt-60 flex flex-wrap items-center justify-center gap-3">
              {/* <SignIn routing="hash"></SignIn> */}
              {/* <div className="row-start-3 mb-48 mt-48 flex h-10 flex-wrap items-center justify-center rounded-full border border-solid border-black/[.08] p-3 px-4 text-2xl text-gray-400 transition-colors hover:border-transparent hover:bg-[#f2f2f2] sm:h-16 sm:min-w-44 sm:px-5 dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"> */}
              <div className="flex h-10 items-center justify-center rounded-full border border-solid hover:underline border-black/[.08] px-4 text-xl text-gray-400 transition-colors hover:border-transparent hover:bg-[#f2f2f2] sm:h-16 sm:min-w-36 sm:px-5 dark:border-white/[.145] dark:hover:bg-[#1a1a1a]">
                <SignInButton />
              </div>
            </div>
          </SignedOut>
          <SignedIn>
            <header className="flex justify-between p-3 text-xl font-semibold text-gray-400">
              <h1>ASAI Inc.</h1>
              <UserButton showName></UserButton>
            </header>
            {/* <UserButton /> */}
            {children}
          </SignedIn>
          <footer className="row-start-3 mb-3 mt-9 flex flex-wrap items-center justify-center gap-3">
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
    </ClerkProvider>
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
