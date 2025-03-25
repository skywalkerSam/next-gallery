"use client";

import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import "~/styles/starboy-logo.css";
import type { JSX } from "react";
import UploadButton from "./upload-button";

export default function TopBar(): JSX.Element {
  return (
    <div className="inset-0 mt-0 flex h-20">
      <div className="flex size-9 flex-grow">
        <div className="w-20">
          <Link href="/">
            {/* Starboy Inc. */}
            <Image
              src="/icon.svg"
              alt="Starboy Logo"
              width={90}
              height={90}
              className="starboy-logo p-3"
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
  );
}
