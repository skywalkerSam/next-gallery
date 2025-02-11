import { SignInButton } from "@clerk/nextjs";

export default function UserSignInButton() {
    return(
        <div className="flex justify-end p-3 text-xl hover:underline hover:text-blue-400">
            <SignInButton>
                <button>Sign Up</button>
            </SignInButton>
        </div>
    )
}