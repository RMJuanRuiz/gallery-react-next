"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { SimpleUploadButton } from "./simple-upload-button";

export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <span>Gallery</span>

      <div className="flex flex-row items-center gap-4">
        <SignedOut>
          <SignInButton></SignInButton>
        </SignedOut>

        <SignedIn>
          <SimpleUploadButton />
          <UserButton></UserButton>
        </SignedIn>
      </div>
    </nav>
  );
}
