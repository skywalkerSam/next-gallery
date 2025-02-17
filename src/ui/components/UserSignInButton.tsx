import { SignInButton } from "@clerk/nextjs";

export default function UserSignInButton() {
    return(
        <div className="flex justify-end p-3 text-xl text-blue-400 hover:underline hover:text-slate-500 focus:text-slate-500">
            <SignInButton>
                <button>Sign Up</button>
            </SignInButton>
        </div>
    )
}