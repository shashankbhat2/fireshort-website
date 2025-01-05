import React from "react";
import { Link } from "./link";

type Props = {
  price: number;
  isMonthly: boolean;
  popular: boolean;
  variant: string;
  limits: string[];

  features: string[];
};

const PricingCard = ({
  price,
  variant,
  limits,
  features,
  popular,
  isMonthly,
}: Props) => {
  return (
    <div
      className={`relative flex lg:min-w-[350px] min-h-[500px] flex-col overflow-hidden cursor-pointer justify-start items-start gap-5 shadow-sm border p-4 rounded-md ${
        popular
          ? "animated-gradient border-fireshort_primary border-2"
          : "border"
      } text-slate-500 bg-white md:hover-translate`}
    >
      {popular && (
        <div className="text-sm absolute top-0 left-0 w-full border-fireshort_primary border-b font-bold   bg-red-100 text-fireshort_primary p-2">
          Best Option
        </div>
      )}

      <div className="flex flex-col font-bold gap-4">
        <h1 className="text-4xl text-black">
          ${price}/{isMonthly ? "m" : "life time"}
        </h1>
        <p className="text-md text-muted-foreground font-medium">{variant}</p>
      </div>
      <div className="flex flex-col gap-2">
        {limits.map((feature, i) => (
          <p key={i} className="text-lg font-medium">
            {feature}
          </p>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {features.map((feature, i) => (
          <p key={i} className="text-lg font-medium">
            {feature}
          </p>
        ))}
      </div>
      <Link
        href="https://app.fireshort.in/pricing"
        className=" w-full bg-fireshort_primary uppercase tracking-wider text-white font-bold py-2 px-4 rounded-md hover:bg-primary-dark"
      >
        Get Plan
      </Link>
    </div>
  );
};

export default PricingCard;
