"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { SignedIn, SignInButton, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import UploadButton from "~/app/_components/UploadButton";

export default function NavBar() {
  return (
    <>
      <SignedOut>
        <div className="justify-items-end">
          <div className="p-4 text-lg">
            <SignInButton />
          </div>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="inset-0 mt-0 flex h-20">
          <div className="flex size-9 flex-grow">
            <div className="w-20">
              <Link href="/gallery">
                <Image
                  src="/starboy.svg"
                  alt="Starboy Logo"
                  width={90}
                  height={90}
                  className="p-4"
                  priority
                ></Image>
              </Link>
            </div>
          </div>
          <div className="flex size-9 flex-none p-1">
            <UploadButton></UploadButton>
          </div>
          <div className="flex size-9 flex-none p-12">
            <UserButton></UserButton>
          </div>
        </div>
      </SignedIn>
    </>
  );
}
