"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          alt="hamburger icon"
          width={36}
          height={36}
          className="invert-colors md:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 border-none "
      >
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/images/site-logo.svg"
            alt="Devflow"
            width={24}
            height={24}
          />
          <p className="h2-bold text-dark100_light900 ">
            Dev <span className="text-primary-500">Flow</span>
          </p>
        </Link>
        <div className=" flex h-[90%]  flex-col justify-between">
          <SheetClose asChild>
            <Navcontent />
          </SheetClose>

          <SignedOut>
            <div className="flex flex-col gap-3">
              <SheetClose asChild>
                <Link href="/sign-in">
                  <Button className=" small-medium btn-secondary min-h-[42px] w-full rounded-lg px-4 py-3 shadow-none">
                    <span className=" primary-text-gradient">Login</span>
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/sign-up">
                  <Button className=" small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[42px] w-full rounded-lg px-4 py-3 shadow-none">
                    Signup
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SignedOut>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

function Navcontent() {
  const path = usePathname();

  return (
    <section className="flex h-full flex-col gap-4 pt-8">
      {sidebarLinks.map((link) => {
        const isActive =
          path === link.route ||
          (path.includes(link.route) && link.route.length > 1);
        return (
          <SheetClose asChild key={link.route}>
            <Link
              href={link.route}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900"
              } flex items-center justify-start gap-4 bg-transparent p-2`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                {link.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
}
