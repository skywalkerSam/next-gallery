import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@uploadthing/react/styles.css";
import Footer from "~/app/_components/Footer";
import { ThemeProvider } from "~/components/theme-provider";
import { PostHogProvider } from "./_analytics/providers";
import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "~/app/_components/NavBar";

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
        <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
