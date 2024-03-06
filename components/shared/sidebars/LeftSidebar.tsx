"use client";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SignedOut } from "@clerk/nextjs";

const LeftSidebar = () => {
  const path = usePathname();
  return (
    <section className=" background-light900_dark200 light-border sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-32 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-col gap-4">
          {sidebarLinks.map((link) => {
            const isActive =
              path === link.route ||
              (path.includes(link.route) && link.route.length > 1);
            return (
              <div key={link.route}>
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
                  <p
                    className={`${
                      isActive ? "base-bold" : "base-medium"
                    } max-lg:hidden`}
                  >
                    {link.label}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
        <SignedOut>
          <div className="flex flex-col gap-3">
            <div>
              <Link href="/sign-in">
                <Button className=" small-medium btn-secondary min-h-[42px] w-full rounded-lg px-4 py-3 shadow-none">
                  <Image
                    src="/assets/icons/account.svg"
                    alt="Login-icon"
                    width={20}
                    height={20}
                    className="invert-colors lg:hidden"
                  />
                  <span className=" primary-text-gradient max-lg:hidden">
                    Login
                  </span>
                </Button>
              </Link>
            </div>

            <div>
              <Link href="/sign-up">
                <Button className=" small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[42px] w-full rounded-lg px-4 py-3 shadow-none">
                  <Image
                    src="/assets/icons/sign-up.svg"
                    alt="signup-icon"
                    width={20}
                    height={20}
                    className="invert-colors lg:hidden "
                  />
                  <span className="max-lg:hidden">Signup</span>
                </Button>
              </Link>
            </div>
          </div>
        </SignedOut>
      </div>
    </section>
  );
};

export default LeftSidebar;
