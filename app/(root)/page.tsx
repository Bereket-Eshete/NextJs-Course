import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import ModeToggel from "@/components/ModeToggel";
export default function Home() {
  console.log("Hello, Next.js!");
  return (
    <>
      <div>
        <SignedOut>
          <SignUpButton mode="modal">
            <Button className="mr-4">Sign Up</Button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
        <ModeToggel />
      </div>
    </>
  );
}
