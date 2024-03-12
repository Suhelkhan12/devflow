import { Badge } from "@/components/ui/badge";

interface Tag {
  _id: string;
  name: string;
}

interface QuestionCardProps {
  _id: string;
  title: string;
  tags: Tag[];
  author: {
    _id: string;
    name: string;
    picture: string;
  };
  upvotes: number;
  views: number;
  answers: Array<object>;
  createdAt: Date;
}

const QuestionCard = (props: QuestionCardProps) => {
  return (
    <div className=" card-wrapper light-border-2 rounded-xl border px-9 py-11">
      <div className=" max-w-[618px] ">
        <h2 className=" h2-semibold">{props.title}</h2>
        <div className=" mt-[.875rem] flex flex-1 gap-2">
          {props.tags.map((tag) => (
            <Badge
              key={tag._id}
              className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase"
            >
              {tag.name}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
