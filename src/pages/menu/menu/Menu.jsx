import React from "react";
import { Helmet } from "react-helmet-async";
import bannerImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import TitleSection from "../../share/TitleSection";
import MenuCategory from "../menuCategory/MenuCategory";
import Cover from "../../share/Cover";

const Menu = () => {
  const [menus] = useMenu();
  const offered = menus.filter((item) => item.category === "offered");
  const soups = menus.filter((item) => item.category === "soup");
  const salads = menus.filter((item) => item.category === "salad");
  const desserts = menus.filter((item) => item.category === "dessert");
  const pizzas = menus.filter((item) => item.category === "pizza");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* Home Banner */}
      <Cover
        img={bannerImg}
        title={"Our Menu"}
        desc={"Lorem Ipsum has been the industry’s standard dummy"}
      ></Cover>
      <div className="container mx-auto">
        {/* TODAY'S OFFER */}
        <div className="mt-16">
          <TitleSection
            subHeading={"---Don't miss---"}
            heading={"TODAY'S OFFER"}
          ></TitleSection>
        </div>
        {/* offered */}
        <MenuCategory items={offered} buttonTitle={"Order Now"}></MenuCategory>
        {/* desserts */}
        <MenuCategory
          items={desserts}
          img={dessertImg}
          title={"desserts"}
          desc={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></MenuCategory>
        {/* PIZZA */}
        <MenuCategory
          items={pizzas}
          img={pizzaImg}
          title={"pizza"}
          desc={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></MenuCategory>
        {/* SALADS */}
        <MenuCategory
          items={salads}
          img={saladImg}
          title={"salad"}
          desc={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></MenuCategory>
        {/* Soups */}
        <MenuCategory
          items={soups}
          img={soupImg}
          title={"soups"}
          desc={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></MenuCategory>
      </div>
    </div>
  );
};

export default Menu;
