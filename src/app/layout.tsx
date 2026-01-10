import type { Metadata } from "next";
import "./globals.css";
import "@uploadthing/react/styles.css";
import Footer from "~/app/_components/Footer";
import { ThemeProvider } from "~/components/theme-provider";
import { PostHogProvider } from "./_analytics/providers";
import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "~/app/_components/NavBar";
import { Geist, Geist_Mono, Figtree, Paprika } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const paprika = Paprika({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-paprika",
});

export const metadata: Metadata = {
  title: "image Gallery",
  description: "A Personalized Gallery Application Demo",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <PostHogProvider>
        <html lang="en" className={figtree.variable}>
          <body
            className={`${geistSans.variable} ${geistMono.variable} ${paprika.variable} antialiased`}
          >
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <NavBar></NavBar>
              <main>{children}</main>
              <Footer></Footer>
            </ThemeProvider>
          </body>
        </html>
      </PostHogProvider>
    </ClerkProvider>
  );
}
