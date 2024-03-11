import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface NoQuestionsProps {
  title: string;
  description: string;
  link: string;
  linkTitle: string;
}

const NoQuestions = ({
  title,
  description,
  link,
  linkTitle,
}: NoQuestionsProps) => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="relative mb-7 h-[12.5rem] w-[15rem]">
        <Image
          src="/assets/icons/noquestion.png"
          alt="No-questions-image"
          fill
          className=" block dark:hidden"
        />
        <Image
          src="/assets/icons/dark-noquestion.png"
          alt="No-questions-image"
          fill
          className="hidden dark:block"
        />
      </div>
      <div className="flex w-96 flex-col items-center gap-[.875rem] ">
        <h2 className=" h2-bold text-dark200_light900">{title}</h2>
        <p className="body-regular text-dark500_light700 text-center">
          {description}
        </p>
        <Link href={link} className="flex justify-end max-sm:w-full">
          <Button className=" paragraph-medium min-h-[46px] rounded-lg bg-primary-500 p-4 text-light-900 dark:text-light-900">
            {linkTitle}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NoQuestions;
