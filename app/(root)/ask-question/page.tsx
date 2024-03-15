import QuestionForm from "@/components/forms/QuestionForm";

const AskQuestion = () => {
  return (
    <div>
      <h1 className=" h1-bold text-dark100_light900">Ask a public quesiton</h1>
      <div className="mt-9">
        <QuestionForm />
      </div>
    </div>
  );
};

export default AskQuestion;
