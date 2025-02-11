import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function TopBar() {
  return (
    <div>
      <header className="flex justify-between p-3 text-xl font-semibold text-gray-400">
        {/* <h1>Starboy Inc.</h1> */}
        <Link href="/" className="hover:text-sky-400 hover:underline">
          Starboy Inc.
        </Link>
        <UserButton showName></UserButton>
      </header>
    </div>
  );
}
