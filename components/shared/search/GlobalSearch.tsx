import { Input } from "@/components/ui/input";
import Image from "next/image";

const GlobalSearch = () => {
  return (
    <div className="background-light800_darkgradient relative w-full max-w-[37.5rem]  overflow-hidden rounded-xl max-lg:hidden">
      <div className=" relative flex  grow items-center gap-1  pl-4">
        <Image
          src="/assets/icons/search.svg"
          alt="search"
          width={24}
          height={24}
          className=" cursor-pointer"
        />
        <Input
          type="text"
          placeholder="Search"
          className="paragraph-regular no-focus placeholder     text-dark500_light500 background-light800_darkgradient h-14 border-none shadow-none outline-none "
        />
      </div>
    </div>
  );
};

export default GlobalSearch;
