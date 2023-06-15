import React from "react";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";

const FoodCard = ({ item }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { category, image, name, price, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  // console.log(user);
  const handleAddToCart = (item) => {
    // console.log(item);
    if (user && user?.email) {
      const cartItem = {
        menuItemId: _id,
        image,
        name,
        price,
        email: user.email,
      };
      fetch("https://bistro-boss-restaurant-server-five.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              title: "Successfully added!",
              text: "Food item added on cart",
              icon: "success",
              confirmButtonText: "Cool",
            });
          }
        });
    } else {
      Swal.fire({
        title: "If you want add To Cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Please Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card card-compact bg-base-100 shadow-xl relative">
      <figure className="px-10 pt-10 h-64 w-full">
        <img src={image} alt="Shoes" className="rounded-xl h-64 w-full" />
      </figure>
      <p className="absolute top-12 right-16 bg-slate-600 text-white px-2 py-1 rounded-lg">
        ${price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline border-0 border-b-4 bg-gray-100 border-orange-400"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
