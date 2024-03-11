import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const NoQuestions = () => {
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
        <h2 className=" h2-bold text-dark200_light900">
          There&apos;s no question to show.
        </h2>
        <p className="body-regular text-dark500_light700 text-center">
          Be the first to break the silence! 🚀 Ask a Question and kickstart the
          discussion. our query could be the next big thing others learn from.
          Get involved! 💡
        </p>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-7 py-3 font-medium !text-light-900">
            Ask a question
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NoQuestions;
