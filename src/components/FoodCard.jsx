import React from "react";

const FoodCard = ({ item }) => {
  const { category, image, name, price, recipe } = item;
  return (
    <div className="card bg-base-100 shadow-xl relative">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <p className="absolute top-8 right-8 bg-slate-600 text-white px-2 py-1 rounded-lg">
        ${price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn btn-outline border-0 border-b-4 bg-gray-100 border-orange-400">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
