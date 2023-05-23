import React from "react";
import TitleSection from "../share/TitleSection";
import featured from "../../assets/home/featured.jpg";
import { Link } from "react-router-dom";

const FeaturedItem = () => {
  return (
    <section
      style={{ backgroundImage: `url(${featured}) ` }}
      className="justify-center bg-no-repeat bg-cover bg-center rounded-lg my-12 text-white bg-fixed"
    >
      <div className="backdrop-brightness-50 p-12 rounded-lg">
        <TitleSection
          subHeading={"---Check it out---"}
          heading={"Featured"}
        ></TitleSection>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="md:w-1/2">
            <img className="w-full rounded-lg" src={featured} alt="" />
          </div>
          <div className="md:w-1/2 space-y-3">
            <p>March 20, 2023</p>
            <h5 className="text-lg">WHERE CAN I GET SOME?</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn btn-outline border-0 border-b-4 text-white hover:bg-white hover:text-black hover:border-white">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItem;
