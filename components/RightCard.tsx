/* eslint-disable @next/next/no-img-element */
import React from "react";

interface CardProps {
  href: string;
  imageSrc: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ href, imageSrc, title, description }) => (
 <article className="box-border flex overflow-hidden relative flex-col shrink-0 justify-between pb-5 rounded-lg border border-black border-solid cursor-pointer pointer-events-auto">
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-black no-underline">
      <header className="box-border flex relative flex-col shrink-0 justify-center items-center px-2.5 pt-2.5 pb-9 bg-zinc-900">
        <img loading="lazy" src={imageSrc} alt="" className="box-border object-cover overflow-hidden shrink-0 w-full h-30" />
      </header>
      <h2 className="box-border relative shrink-0 px-2.5 mt-2.5 mb-2.5 h-auto font-semibold text-center text-white">
        {title}
      </h2>
      <p className="box-border relative shrink-0 px-2.5 mt-0 h-auto text-xs text-center max-sm:text-center text-white">
        {description}
      </p>
    </a>
  </article>
);

const RightCard: React.FC = () => (
  <Card
    href="https://www.builder.io/c/blueprints"
    imageSrc="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F74cceb58eae948e4b1edcc930a7c23b9?format=webp&width=2000"
    title="Grow a stock portfolio"
    description="The AI Agent helps identifies high performing stocks, maximizing potential returns"
  />
);

export default RightCard;