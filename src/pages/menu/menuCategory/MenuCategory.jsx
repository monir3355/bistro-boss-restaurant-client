import React from "react";
import MenuItem from "../../share/menusItems/MenuItem";
import Cover from "../../share/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ img, title, desc, items }) => {
  return (
    <div className="mb-16">
      {title && <Cover img={img} title={title} desc={desc}></Cover>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <Link to={`/shop/${title}`}>
          <button className="btn btn-outline">Order Now</button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
