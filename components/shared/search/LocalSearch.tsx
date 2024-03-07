"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

interface CustomInputProps {
  route: string;
  iconPositon: string;
  otherClasses?: string;
  imgSrc: string;
  placeholder: string;
}

const LocalSearch = ({
  route,
  iconPositon,
  otherClasses,
  imgSrc,
  placeholder,
}: CustomInputProps) => {
  return (
    <div
      className={`background-light800_darkgradient flex min-h-14 grow  gap-4 overflow-hidden rounded-xl pl-4 ${otherClasses}`}
    >
      {iconPositon === "left" && (
        <Image
          src={imgSrc}
          alt="search-image"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
      <Input
        type="text"
        placeholder={placeholder}
        className=" paragraph-regular no-focus placeholder  background-light800_darkgradient text-dark500_light500 min-h-14 border-none shadow-none outline-none"
        onChange={() => {}}
      />
    </div>
  );
};

export default LocalSearch;
