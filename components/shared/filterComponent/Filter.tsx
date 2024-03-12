import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterProps {
  otherClasses?: string;
  filters: {
    name: string;
    value: string;
  }[];
  containerClasses?: string;
}

const Filter = ({ otherClasses, containerClasses, filters }: FilterProps) => {
  return (
    <div className={`relative ${containerClasses}`}>
      <Select>
        <SelectTrigger
          className={`body-regular light-border background-light800_dark300 text-dark500_light700 border px-5 py-2.5 ${otherClasses}`}
        >
          <div className="line-clamp-1 flex-1 text-left">
            <SelectValue placeholder="Filters" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className=" z-40 bg-white">
            {filters.map((filter) => (
              <SelectItem key={filter.value} value={filter.value}>
                {filter.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filter;
