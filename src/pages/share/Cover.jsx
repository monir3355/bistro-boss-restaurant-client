import React from "react";
import { Parallax, Background } from "react-parallax";

const Cover = ({ img, title, desc, buttonTitle }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero min-h-[500px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content backdrop-brightness-50 md:px-36 md:py-14">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">{desc}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;