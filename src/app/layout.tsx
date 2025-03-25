import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@uploadthing/react/styles.css";
import MainTitle from "~/components/ui/main-title";
import TopBar from "~/components/ui/top-bar";
import Footer from "~/components/ui/footer";
import StarboyLogo from "~/components/ui/starboy-logo";
import UserSignInButton from "~/components/ui/clerk-sign-in";
import { Toaster } from "~/components/ui/sonner";
import { ThemeProvider } from "~/components/theme-provider";
import { PostHogProvider } from "./_analytics/providers";

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
  description: "Image Gallery with Next.js + Vercel by skywalkerSam",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

// Styles
const centeredDiv = "flex min-h-screen flex-row items-center justify-center";
const centeredDivTitleStyle =
  "flex flex-row min-h-screen justify-center items-center m-24";
const layoutStyle = "grid h-screen grid-rows-[auto,1fr]";

export default function RootLayout({
  children,
  modal,
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
              <SignedOut>
                <UserSignInButton></UserSignInButton>
                <div className={centeredDiv}>
                  <div className="w-48 md:w-60">
                    <StarboyLogo></StarboyLogo>
                  </div>
                </div>
                <div className={centeredDivTitleStyle}>
                  <MainTitle></MainTitle>
                </div>
              </SignedOut>
              <SignedIn>
                {/* Layout definition */}
                <div className={layoutStyle}>
                  <TopBar></TopBar>
                  {/* <UserButton /> */}
                  <main className="overflow-y-auto">{children}</main>
                </div>
                {modal}
                <div id="modal-root"></div>
                {/* Sonner */}
                <Toaster
                  position="bottom-right"
                  expand={true}
                  closeButton
                  richColors
                ></Toaster>
              </SignedIn>
              <Footer></Footer>
            </ThemeProvider>
          </body>
        </html>
      </PostHogProvider>
    </ClerkProvider>
  );
}
