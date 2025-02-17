import { SignInButton } from "@clerk/nextjs";

export default function UserSignInButton() {
  return (
    <div className="flex justify-end p-3 text-lg font-semibold text-blue-400 hover:text-slate-500 hover:underline focus:text-slate-500">
      <SignInButton>
        <button aria-label="Sign in to your account">Sign In</button>
        {/* <button>Sign Up</button> */}
      </SignInButton>
    </div>
  );
}
