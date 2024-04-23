import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <span>Gallery</span>

      <div>
        <SignedOut>
          <SignInButton></SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton></UserButton>
        </SignedIn>
      </div>
    </nav>
  );
}
