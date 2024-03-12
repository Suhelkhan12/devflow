import Filter from "@/components/shared/filterComponent/Filter";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HomePageFilters } from "@/constants/filter";
import HomeFilters from "@/components/home/HomeFilters";
import NoQuestions from "@/components/shared/noQuestions/NoQuestions";
import QuestionCard from "@/components/shared/questionCard/QuestionCard";
const questions = [
  {
    _id: "1",
    title: "How do I debug JavaScript code effectively?",
    tags: [
      { _id: "1", name: "JavaScript" },
      { _id: "2", name: "Debugging" },
      { _id: "3", name: "Development" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      picture: "/assets/images/Suhel.png",
    },
    upvotes: 15,
    views: 110,
    answers: [],
    createdAt: new Date("2023-02-18T12:30:00.000Z"),
  },
  {
    _id: "2",
    title: "What are the latest trends in front-end frameworks?",
    tags: [
      { _id: "4", name: "Frontend" },
      { _id: "5", name: "Frameworks" },
      { _id: "6", name: "Web Development" },
    ],
    author: {
      _id: "2",
      name: "Jane Smith",
      picture: "/assets/images/Suhel.png",
    },
    upvotes: 20,
    views: 130,
    answers: [],
    createdAt: new Date("2024-03-04T09:15:00.000Z"),
  },
  {
    _id: "3",
    title: "How can I improve my code review process?",
    tags: [
      { _id: "7", name: "Code Review" },
      { _id: "8", name: "Development" },
      { _id: "9", name: "Best Practices" },
    ],
    author: {
      _id: "3",
      name: "Michael Johnson",
      picture: "/assets/images/Suhel.png",
    },
    upvotes: 12,
    views: 90,
    answers: [],
    createdAt: new Date("2023-10-22T15:45:00.000Z"),
  },
];

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
        <div className="mt-10 flex w-full flex-col gap-6">
          {questions.length ? (
            questions.map((question) => (
              <QuestionCard key={question._id} {...question} />
            ))
          ) : (
            <NoQuestions
              title="There's no question to show."
              description="          Be the first to break the silence! 🚀 Ask a Question and kickstart the
            discussion. our query could be the next big thing others learn from.
            Get involved! 💡"
              link="/ask-question"
              linkTitle="Ask a question"
            />
          )}
        </div>
      </div>
    </>
  );
}
