"use client";

import { SignInButton } from "@clerk/nextjs";

const signInButtonStyle =
  "flex justify-end p-4 text-lg md:text-xl tracking-tighter";
const signInButtonHoverStyle =
  "p-2 rounded-md hover:text-blue-400 focus:text-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:ring-offset-1 active:text-slate-600";
const textStyle =
  "mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text font-semibold text-transparent";

export default function UserSignInButton() {
  return (
    <div className={signInButtonStyle}>
      <div className={textStyle}>
      <SignInButton>
        <button
          aria-label="Sign in to your account"
          className={signInButtonHoverStyle}
        >
          Sign In
        </button>
        {/* <button>Sign Up</button> */}
      </SignInButton>
      </div>
    </div>
  );
}
