import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface TagProps {
  _id: number;
  name: string;
  totalQuestions?: number;
  showCount?: boolean;
}

const Tag = ({ _id, showCount, name, totalQuestions }: TagProps) => {
  return (
    <Link href={`/tag/${_id}`} className=" flex items-center justify-between">
      <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
        {name}
      </Badge>

      {showCount && (
        <p className="body-medium text-dark500_light700">{totalQuestions}</p>
      )}
    </Link>
  );
};

export default Tag;
