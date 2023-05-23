import React, { useEffect, useState } from "react";
import TitleSection from "../../share/TitleSection";
import MenusItem from "../../share/menusItems/MenusItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menus] = useMenu();
  const popularItem = menus.filter((item) => item.category === "popular");
  return (
    <section className="mb-12">
      <TitleSection
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></TitleSection>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {popularItem?.map((menu) => (
          <MenusItem key={menu._id} menu={menu}></MenusItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
