import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Image Gallery",
  description: "Next Gallery with Next.js + Create T3 App by @skywalkerSam",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold">
      {" "}
      {/* border-b */}
      <div></div>
      <div>Sign In</div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex flex-col gap-4 bg-black text-gray-400">
        <TopNav />
        {children}
      </body>
    </html>
  );
}
