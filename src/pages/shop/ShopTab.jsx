import React from "react";
import FoodCard from "../../components/FoodCard";

const ShopTab = ({ items }) => {
  // TODO pagination
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-16">
      {items.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default ShopTab;
