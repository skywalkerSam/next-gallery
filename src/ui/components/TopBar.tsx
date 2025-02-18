import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import ImageUploadButton from "../gallery/ImageUploadButton";
import "~/styles/StarboyLogo.css";

const topBarStyle =
  "flex justify-between p-3 text-xl font-semibold text-gray-400";

export default function TopBar(): JSX.Element {
  return (
    <header className={topBarStyle}>
      {/* <h1>Starboy Inc.</h1> */}
      {/* <Link href="/" className="hover:text-blue-400 hover:underline"> */}
      <Link href="/">
        {/* Starboy Inc. */}
        <Image
          src="/starboy-logo.png"
          alt="App Logo"
          width={90}
          height={60}
          className="starboy-logo p-3"
          priority
        ></Image>
      </Link>
      {/* uploadthing image uploads */}
      <ImageUploadButton></ImageUploadButton>
      <UserButton showName></UserButton>
    </header>
  );
}
