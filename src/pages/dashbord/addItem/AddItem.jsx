import React from "react";

import { useForm } from "react-hook-form";
import TitleSection from "../../share/TitleSection";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_token = import.meta.env.VITE_img_api;
const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const imgURL = imgData.data.display_url;
          const { name, recipe, price, category } = data;
          const newItem = {
            name,
            recipe,
            price: parseInt(price),
            category,
            image: imgURL,
          };
          axiosSecure.post("/menus", newItem).then((data) => {
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                title: "Success!",
                text: "You have successfully added Item",
                icon: "success",
                confirmButtonText: "Cool",
              });
            }
          });
        }
      });
  };
  return (
    <div>
      <div className="py-10">
        <TitleSection
          subHeading={"--Whats New?--"}
          heading={"Add an Item"}
        ></TitleSection>
      </div>

      <div className="md:w-4/6 bg-gray-300 p-6 md:p-12 mx-auto rounded-lg mb-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            {/* Row 1 */}
            <div className="space-y-2">
              <div>
                <label htmlFor="RecipeName">Recipe name</label>
              </div>
              <input
                type="text"
                name="RecipeName"
                className="w-full py-2 rounded-md pl-4"
                placeholder="Recipe name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-600">
                  <small>Recipe Name is required</small>
                </span>
              )}
            </div>
            {/* Row 2 */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="space-y-2 md:w-1/2">
                <div>
                  <label htmlFor="category">Category</label>
                </div>
                <select
                  defaultValue="Select Item"
                  {...register("category", { required: true })}
                  className="w-full py-2 rounded-md pl-4"
                >
                  <option disabled>Select Item</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="salad">Salad</option>
                  <option value="dessert">Dessert</option>
                  <option value="drinks">Drinks</option>
                </select>
              </div>
              <div className="space-y-2 md:w-1/2">
                <div>
                  <label htmlFor="Price">Price</label>
                </div>
                <input
                  type="text"
                  name="Price"
                  className="w-full py-2 rounded-md pl-4"
                  placeholder="Price"
                  {...register("price", { required: true })}
                />
                {errors.price && (
                  <span className="text-red-600">
                    <small>Price is required</small>
                  </span>
                )}
              </div>
            </div>
            {/* Row 3 */}
            <div className="space-y-2">
              <div>
                <label htmlFor="RecipeName">Recipe Details</label>
              </div>
              <textarea
                type="text"
                name="RecipeDetails"
                id=""
                cols="30"
                rows="10"
                className="w-full rounded-md pl-4 pt-4"
                placeholder="Recipe Details"
                {...register("recipe", { required: true })}
              ></textarea>
              {errors.recipe && (
                <span className="text-red-600">
                  <small>Recipe Details is required</small>
                </span>
              )}
            </div>
            {/* Row4 */}
            <div className="space-y-2">
              <div>
                <label htmlFor="image">Your Image</label>
              </div>
              <input
                type="file"
                name="image"
                className="w-full py-2 rounded-md pl-4"
                placeholder="image"
                {...register("image", { required: true })}
              />
              {errors.RecipeName && (
                <span className="text-red-600">
                  <small>Recipe Name is required</small>
                </span>
              )}
            </div>
            {/* Button */}
            <div>
              <input
                value="Add Item"
                type="submit"
                className="btn bg-[#D1A054] border-0 hover:bg-[#dfab5c] w-full rounded-md"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
