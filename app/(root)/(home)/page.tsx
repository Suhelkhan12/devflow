import Filter from "@/components/shared/filterComponent/Filter";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HomePageFilters } from "@/constants/filter";
import HomeFilters from "@/components/home/HomeFilters";
import NoQuestions from "@/components/shared/noQuestions/NoQuestions";

const questions = [];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-7 py-3 font-medium !text-light-900">
            Ask a question
          </Button>
        </Link>
      </div>
      <div className="mt-8 flex justify-between gap-5 sm:flex-col ">
        <LocalSearch
          route="/"
          iconPositon="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions here..."
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-14 sm:min-w-[170px]"
          containerClasses="hidden max-lg:flex"
        />
        <HomeFilters />
        <div className="mt-10 flex w-full flex-col">
          {questions.length ? (
            questions.map(
              (question) =>
                // <QuestionCard key={question._id} {...question} />
                "Questioncard"
            )
          ) : (
            <NoQuestions
              title="There's no question to show."
              description="          Be the first to break the silence! 🚀 Ask a Question and kickstart the
            discussion. our query could be the next big thing others learn from.
            Get involved! 💡"
              j
              link="/ask-question"
              linkTitle="Ask a question"
            />
          )}
        </div>
      </div>
    </>
  );
}
