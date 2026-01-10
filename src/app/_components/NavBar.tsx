"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { SignedIn, SignInButton, SignedOut } from "@clerk/nextjs";
import UploadButton from "~/app/_components/UploadButton";

export default function NavBar() {
  return (
    <>
      <SignedOut>
        <div className="justify-items-end">
          <div className="hover:text-primary p-4 text-lg">
            <SignInButton />
          </div>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="inset-0 mt-0 flex h-20">
          <div className="flex size-9 grow">
            <div className="w-20">
              <Link href="/gallery">
                <div className={"p-4"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.2"
                    stroke="currentColor"
                    className="size-12 cursor-pointer hover:text-sky-500 focus:text-sky-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
          <div className="mr-8 flex size-9 flex-none">
            <UploadButton></UploadButton>
          </div>
          <div className="mt-5 mr-4 flex size-9 flex-none">
            <UserButton></UserButton>
          </div>
        </div>
      </SignedIn>
    </>
  );
}
