"use client";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const LeftSidebar = () => {
  const path = usePathname();
  return (
    <section className=" background-light900_dark200 light-border sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-32 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex h-full flex-col gap-4 pt-8">
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
                <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                  {link.label}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LeftSidebar;
