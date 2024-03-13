import Tag from "../tag/Tag";
import Link from "next/link";
import Metric from "./Metric";

interface TagTypes {
  _id: number;
  name: string;
}

interface QuestionCardProps {
  _id: string;
  title: string;
  tags: TagTypes[];
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
    <div className=" card-wrapper light-border-2 rounded-xl border p-6 sm:p-11">
      <div className=" flex flex-col-reverse items-start justify-between gap-5  sm:flex-row">
        <div>
          <span className=" subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {}
          </span>

          <Link href={`/question/${props._id}`}>
            <h3 className=" sm:h2-semibold base-semibold text-dark200_light900 line-clamp-2 flex-1 overflow-hidden ">
              {props.title}
            </h3>
          </Link>
        </div>

        {/* edit controll */}
      </div>
      <div className=" mt-[.875rem] flex flex-wrap gap-2">
        {props.tags.map((tag) => (
          <Tag {...tag} key={tag._id} />
        ))}
      </div>
      <div className=" mt-6 flex w-full flex-wrap justify-between">
        <div>
          <Metric
            imgUrl="/assets/images/Suhel.png"
            alt="user-image"
            title="Suhel"
            textStyles="small-medium text-dark400_light800"
          />
        </div>
        <div className="flex items-center gap-2">
          <Metric
            imgUrl="/assets/icons/like.svg"
            alt="upvotes"
            value={props.upvotes}
            title="Votes"
            textStyles="small-medium text-dark400_light800"
          />
          <Metric
            imgUrl="/assets/icons/message.svg"
            alt="message"
            value={props.answers.length}
            title="Answers"
            textStyles="small-medium text-dark400_light800"
          />
          <Metric
            imgUrl="/assets/icons/eye.svg"
            alt="eye"
            value={props.views}
            title="Views"
            textStyles="small-medium text-dark400_light800"
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
