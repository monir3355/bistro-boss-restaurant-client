import React, { useEffect, useState } from "react";
import TitleSection from "../../share/TitleSection";
import MenusItem from "../../share/menusItems/MenusItem";

const OurMenu = () => {
  const [menus, setMenus] = useState([]);
  // console.log(menus);
  useEffect(() => {
    fetch("/menus.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const popularItems = data.filter((item) => item.category === "popular");
        setMenus(popularItems);
      });
  }, []);
  return (
    <section className="mb-12">
      <TitleSection
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></TitleSection>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {menus.map((menu) => (
          <MenusItem key={menu._id} menu={menu}></MenusItem>
        ))}
      </div>
    </section>
  );
};

export default OurMenu;
