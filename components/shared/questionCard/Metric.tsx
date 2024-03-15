import Image from "next/image";
import Link from "next/link";

interface MetricProps {
  imgUrl: string;
  alt: string;
  value?: string | number;
  title: string;
  href?: string;
  textStyles?: string;
  isAuthor?: boolean;
}

const MetricContent = (props: MetricProps) => {
  return (
    <>
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
        <span className=" font-semibold">{props.value}</span>{" "}
        <span className="hidden sm:block">{props.title}</span>
      </p>
    </>
  );
};

const Metric = (props: MetricProps) => {
  if (props.href) {
    return (
      <Link href={props.href} className="flex gap-1">
        <MetricContent {...props} />
      </Link>
    );
  }
  return (
    <div className="flex-center flex-wrap gap-1">
      <MetricContent {...props} />
    </div>
  );
};

export default Metric;
