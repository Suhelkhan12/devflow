import Image from "next/image";

interface MetricProps {
  imgUrl: string;
  alt: string;
  value?: string | number;
  title: string;
  href?: string;
  textStyles?: string;
  isAuthor?: boolean;
}

const Metric = (props: MetricProps) => {
  return (
    <div className="flex-center flex-wrap gap-1">
      <div className=" relative size-4">
        <Image
          src={props.imgUrl}
          alt={props.alt}
          fill
          className={` object-contain ${props.href ? "rounded-full" : ""}`}
        />
      </div>
      <p className={`${props.textStyles} flex items-center gap-1`}>
        {" "}
        <span className=" font-semibold">{props.value}</span> {props.title}
      </p>
    </div>
  );
};

export default Metric;
