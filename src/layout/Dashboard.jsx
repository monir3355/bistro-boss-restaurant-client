import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaBars,
  FaBook,
  FaCalendar,
  FaEmpire,
  FaHome,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">
          <li>
            <NavLink
              to="/dashboard/userHome"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-black"
              }
            >
              <FaHome className="h-6 w-6" />
              <span className="uppercase">User Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/Reservations"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-black"
              }
            >
              <FaCalendar className="h-6 w-6" />
              <span className="uppercase">Reservations</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/payment"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-black"
              }
            >
              <FaWallet className="h-6 w-6" />
              <span className="uppercase">Payment History </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/myCart"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-black"
              }
            >
              <FaShoppingCart className="h-6 w-6" />
              <span className="uppercase">
                My Cart{" "}
                <div className="badge badge-secondary">{cart.length || 0}</div>
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/review"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-black"
              }
            >
              <FaEmpire className="h-6 w-6" />
              <span className="uppercase">Add Review</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/myBooking"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-black"
              }
            >
              <FaBook className="h-6 w-6" />
              <span className="uppercase">My Booking</span>
            </NavLink>
          </li>
          <hr />
          <li>
            <NavLink
              to="/dashboard/home"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-black"
              }
            >
              <FaHome className="h-6 w-6" />
              <span className="uppercase">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-black"
              }
            >
              <FaBars className="h-6 w-6" />
              <span className="uppercase">Menu</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/shop"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-black"
              }
            >
              <FaShoppingCart className="h-6 w-6" />
              <span className="uppercase">Shop</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/contact"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-black"
              }
            >
              <TiContacts className="h-6 w-6" />
              <span className="uppercase">Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
