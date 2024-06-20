import React from "react";

interface LogoProps {
  src: string;
  sizes: string;
  maxWidth: string;
}

const Logo: React.FC<LogoProps> = ({ src, sizes, maxWidth }) => (
  <img
    loading="lazy"
    sizes={sizes}
    src={src}
    alt=""
    className={`box-border object-contain overflow-hidden shrink-0 w-full aspect-square ${maxWidth} min-h-[20px] min-w-[20px]`}
  />
);

const GetStockedHeader: React.FC = () => {
  return (
    <header className="box-border flex relative flex-col shrink-0 items-center px-5">
      <nav className="box-border flex relative flex-row shrink-0 gap-7 justify-center">
        <Logo
          src="https://cdn.builder.io/api/v1/image/assets%2Fb040c704458a4dd5882fc7a298a10b02%2F843a29cf856f44dfaa5e5095d58e96ba"
          sizes="(max-width: 638px) 8vw, (max-width: 998px) 6vw, 4vw"
          maxWidth="max-w-[50px]"
        />
        <span className="box-border relative shrink-0 self-center w-auto h-auto text-3xl font-light text-black">
          +
        </span>
        <Logo
          src="https://cdn.builder.io/api/v1/image/assets%2Fb040c704458a4dd5882fc7a298a10b02%2F54e0d0048f4b44e495e56a2ad336415a"
          sizes="(max-width: 638px) 7vw, (max-width: 998px) 4vw, 3vw"
          maxWidth="max-w-[39px]"
        />
      </nav>
      <h1 className="box-border relative shrink-0 mt-5 w-full h-auto text-3xl font-semibold text-center text-white max-w-[500px]">
          GetStocked
      </h1>
    </header>
  );
};

export default GetStockedHeader;