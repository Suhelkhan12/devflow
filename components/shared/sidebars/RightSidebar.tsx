import Image from "next/image";
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
  return (
    <section className=" background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[330px] flex-col justify-between overflow-y-auto border-l p-6 pt-32 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div className="flex h-full flex-col justify-between">
        <div>
          <h3 className="h3-bold text-dark200_light900">Top questions</h3>
          <div className="mt-7 flex w-full flex-col gap-[30px]">
            {hotQuestions.map((question) => {
              return (
                <div className="flex w-full justify-between" key={question._id}>
                  <p className="">{question.title}</p>
                  <Image
                    src="/assets/icons/arrow-right.svg"
                    alt="left-arrow image"
                    width={20}
                    height={20}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div>Tags</div>
      </div>
    </section>
  );
};

export default RightSidebar;
