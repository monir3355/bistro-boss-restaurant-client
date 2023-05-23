import React from "react";
import Slider from "../Slider";
import Category from "../category/Category";
import BistroBoss from "../BistroBoss";
import PopularMenu from "../popularMenu/PopularMenu";
import FeaturedItem from "../FeaturedItem";
import Testimonials from "../testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Slider />
      <div className="container mx-auto">
        <Category />
        <BistroBoss />
        <PopularMenu />
        <FeaturedItem />
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
