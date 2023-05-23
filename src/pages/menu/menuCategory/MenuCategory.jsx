import React from "react";
import MenuItem from "../../share/menusItems/MenuItem";
import Cover from "../../share/Cover";

const MenuCategory = ({ img, title, desc, items, buttonTitle }) => {
  return (
    <div className="mb-16">
      {title && <Cover img={img} title={title} desc={desc}></Cover>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline">{buttonTitle}</button>
      </div>
    </div>
  );
};

export default MenuCategory;
