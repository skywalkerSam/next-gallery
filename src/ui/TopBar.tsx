import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import ImageUploadButton from "./ImageUploadButton";

export default function TopBar() {
  return (
    <div>
      <header className="flex justify-between p-3 text-xl font-semibold text-gray-400">
        {/* <h1>Starboy Inc.</h1> */}
        <Link href="/" className="hover:text-sky-400 hover:underline">
          {/* Starboy Inc. */}
          <Image
            src="/starboy-logo.png"
            alt="App Logo"
            width={69}
            height={69}
          ></Image>
        </Link>
        {/* uploadthing image uploads */}
        <ImageUploadButton></ImageUploadButton>
        <UserButton showName></UserButton>
      </header>
    </div>
  );
}
