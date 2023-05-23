import React from "react";

const MenuItem = ({ item }) => {
  const { category, image, name, price, recipe } = item;
  // console.log(item);
  return (
    <div className="flex gap-4">
      <img style={{ borderRadius: "0 200px 200px 200px" }} src={image} alt="" />
      <div className="space-y-3">
        <div className="flex justify-between">
          <h4 className="text-lg font-semibold">{name}------------</h4>
          <p className="text-yellow-600">${price}</p>
        </div>
        <p>{recipe}</p>
      </div>
    </div>
  );
};

export default MenuItem;
