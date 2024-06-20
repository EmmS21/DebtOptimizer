import React from 'react';

interface ContentProps {
  title: string;
  description: string;
}

const Content: React.FC<ContentProps> = ({ title, description }) => (
  <section className="box-border flex relative flex-col shrink-0 justify-center pl-5 text-white max-w-[50%] max-sm:items-center max-sm:max-w-[300px]">
    <h2 className="box-border relative shrink-0 mb-2.5 h-auto font-semibold text-left text-white">
      {title}
    </h2>
    <p className="box-border relative shrink-0 mt-0 h-auto text-xs text-left text-white max-sm:text-center">
      {description}
    </p>
  </section>
);

const ExplainerText: React.FC = () => {
  const contentData: ContentProps = {
    title: "Pay back your debt optimally with the help of AI",
    description: "GetStocked uses AI to help you figure out how to pay back debt optimally, balancing debt payment with investing in high performing stocks giving you the potential to grow your wealth while paying back your debt"
  };

  return (
    <main className="box-border flex relative flex-row shrink-0 gap-10 justify-center self-center mt-20 w-full max-w-[1008px] max-sm:flex max-sm:flex-col max-sm:items-center">
      <Content {...contentData} />
    </main>
  );
};

export default ExplainerText;