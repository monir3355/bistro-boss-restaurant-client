import React from "react";
import { Helmet } from "react-helmet-async";
import TitleSection from "../share/TitleSection";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();
  // console.log(cart);
  const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="px-20">
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <div className="my-12">
        <TitleSection
          subHeading={"My Cart"}
          heading={"WANNA ADD MORE?"}
        ></TitleSection>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between gap-6">
        <h2 className="text-3xl">Total orders: {cart.length}</h2>
        <h2 className="text-3xl">Total price: ${totalPrice}</h2>
        <button className="btn bg-[#D1A054] border-0 hover:bg-[#dfab5c]">
          Pay
        </button>
      </div>
      <div className="overflow-x-auto w-full my-12">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((item, count) => (
              <tr key={item._id}>
                <th>
                  <label>{count + 1}</label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <p>{item.name}</p>
                </td>
                <td>{item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost btn-xs"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
