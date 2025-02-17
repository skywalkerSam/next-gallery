import { SignInButton } from "@clerk/nextjs";

export default function UserSignInButton() {
  return (
    <div className="flex justify-end p-3 text-lg font-semibold text-blue-400 hover:text-slate-500 hover:underline focus:text-slate-500">
      <SignInButton>
        <button>Sign Up</button>
      </SignInButton>
    </div>
  );
}
