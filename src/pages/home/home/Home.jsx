import React from "react";
import Slider from "../Slider";
import Category from "../category/Category";
import BistroBoss from "../BistroBoss";
import OurMenu from "../ourMenu/OurMenu";
import FeaturedItem from "../FeaturedItem";
import Testimonials from "../testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Slider />
      <div className="container mx-auto">
        <Category />
        <BistroBoss />
        <OurMenu />
        <FeaturedItem />
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
