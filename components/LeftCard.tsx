/* eslint-disable @next/next/no-img-element */
import React from "react";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => {
  return (
    <article className="box-border flex overflow-hidden relative flex-col shrink-0 pb-5 rounded-lg border border-black border-solid">
      <header className="box-border flex relative flex-col shrink-0 bg-slate-900">
        <img
          loading="lazy"
          src={imageSrc}
          alt=""
          className="box-border object-cover overflow-hidden shrink-0 w-full h-40"
        />
      </header>
      <h2 className="box-border relative shrink-0 px-2.5 mt-2.5 mb-2.5 h-auto font-semibold text-center text-white">
        {title}
      </h2>
      <p className="box-border relative shrink-0 px-2.5 mt-0 h-auto text-xs text-center text-white max-sm:text-center">
        {description}
      </p>
    </article>
  );
};

const LeftCard: React.FC = () => {
  return (
    <Card
      imageSrc="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F5a4c2bdfff2049c09a9b7dbcc036a263"
      title="Comparing Interest Savings with Stock Returns"
      description="The AI Agent calculates how much you would save in terms of interests for each debt and compares this with how much you could make from investing in top performing stocks, recommending an optimal payment plan"
    />
  );
};

export default LeftCard;