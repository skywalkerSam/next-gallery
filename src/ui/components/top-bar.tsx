import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
// import ImageUploadButton from "../gallery/default-upload-button";
import "~/styles/starboy-logo.css";
import type { JSX } from "react";
import UploadButton from "./upload-button";

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
      {/* <ImageUploadButton></ImageUploadButton> */}
      <UploadButton></UploadButton>
      {/* <UserButton showName></UserButton> */}
      {/* <UserButton appearance={{elements: {avatarImage: {}}}}></UserButton> */}
      <UserButton></UserButton>
    </header>
  );
}
