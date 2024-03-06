import Image from "next/image";
import Link from "next/link";
import Tag from "../tag/Tag";
const RightSidebar = () => {
  // dummy questions
  const hotQuestions = [
    {
      _id: 1,
      title:
        "Would it be appropriate to point out an error in another paper during a referee report?",
    },
    {
      _id: 2,
      title: "How can an airconditioning machine exist?",
    },
    {
      _id: 3,
      title: "Interrogated every time crossing UK Border as citizen",
    },
    {
      _id: 4,
      title: "Low digit addition generator",
    },
    {
      _id: 5,
      title: "What is an example of 3 numbers that do not make up a vector?",
    },
  ];

  const popularTags = [
    {
      _id: 1,
      name: "Javascript",
      totalQuestions: 34,
    },
    {
      _id: 2,
      name: "Typescript",
      totalQuestions: 50,
    },
    {
      _id: 3,
      name: "Reactjs",
      totalQuestions: 44,
    },
    {
      _id: 4,
      name: "Nextjs",
      totalQuestions: 64,
    },
    {
      _id: 5,
      name: "Nodejs",
      totalQuestions: 100,
    },
    {
      _id: 6,
      name: "Tailwind",
      totalQuestions: 11,
    },
    {
      _id: 7,
      name: "Mongodb",
      totalQuestions: 45,
    },
  ];
  return (
    <section className=" background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[330px] flex-col justify-between overflow-y-auto border-l p-6 pt-32 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div className="flex h-full flex-col justify-between gap-16">
        <div>
          <h3 className="h3-bold text-dark200_light900">Top questions</h3>
          <div className="mt-7 flex w-full flex-col gap-[30px]">
            {hotQuestions.map((question) => {
              return (
                <Link
                  className="group flex w-full items-start justify-between gap-6 "
                  key={question._id}
                  href={`/question/${question._id}`}
                >
                  <p className=" body-medium text-dark500_light700">
                    {question.title}
                  </p>
                  <Image
                    className=" transition group-hover:translate-x-1"
                    src="/assets/icons/chevron-right.svg"
                    alt="left-arrow image"
                    width={20}
                    height={20}
                  />
                </Link>
              );
            })}
          </div>
        </div>
        <div>
          <h3 className="h3-bold text-dark200_light900">Top questions</h3>
          <div className="mt-7 flex w-full flex-col gap-4">
            {popularTags.map((tag) => (
              <Tag key={tag._id} {...tag} showCount />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
