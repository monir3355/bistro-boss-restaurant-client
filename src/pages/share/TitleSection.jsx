import React from "react";

const TitleSection = ({ subHeading, heading }) => {
  return (
    <div className="text-center mb-8">
      <h6 className="text-yellow-500 text-xl">{subHeading}</h6>
      <div className="divider w-80 mx-auto"></div>
      <h3 className="text-3xl md:text-4xl font-semibold">{heading}</h3>
      <div className="divider w-80 mx-auto"></div>
    </div>
  );
};

export default TitleSection;
