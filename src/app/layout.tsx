import type {Metadata} from "next";
// import localFont from "next/font/local";
import "./globals.css";
import "@uploadthing/react/styles.css";
import Footer from "@/src/app/_components/Footer";
import {ThemeProvider} from "@/src/components/theme-provider";
import {PostHogProvider} from "./_analytics/providers";
import {ClerkProvider} from "@clerk/nextjs";
import NavBar from "@/src/app/_components/NavBar";
import {Geist, Geist_Mono, Figtree} from "next/font/google";
// import { Google_Sans_Flex } from "next/font/google";


const figtree = Figtree({subsets: ['latin'], variable: '--font-sans'});

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
//
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// const googleSansFlex = Google_Sans_Flex({
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
    title: "image Gallery",
    description: "A Personalized Gallery Application Demo",
    icons: [{rel: "icon", url: "/favicon.ico"}],
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
                    className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                    // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                    // className={`${googleSansFlex.className} antialiased`}
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
