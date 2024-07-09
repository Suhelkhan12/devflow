import { Space_Grotesk } from "next/font/google";

import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Theme from "./Theme";
import MobileNav from "./MobileNav";
import GlobalSearch from "../search/GlobalSearch";
import { cn } from "@/lib/utils";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  preload: true,
});

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 light-border-2 fixed z-50 w-full gap-5 border-b p-4 shadow-light-300  dark:shadow-none sm:p-6 ">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/images/site-logo.svg"
          alt="Devflow"
          width={24}
          height={24}
        />
        <p
          className={cn(
            "h2-bold text-dark-100 dark:text-light-900 max-sm:hidden",
            spaceGrotesk.className
          )}
        >
          Dev <span className="text-primary-500">Flow</span>
        </p>
      </Link>
      <GlobalSearch />

      <div className="flex-between gap-5">
        <Theme />
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#ff7000",
              },
            }}
          />
        </SignedIn>
        {/* 
        here mobile navigation will come */}
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;

/**
 * DOCUMENTATION
 * 1) Clerk provide us with a SignedIn component which will only show user profile option only if the user is signed in if user is not signed in then it will not show the user profile button
 *
 *
 */
