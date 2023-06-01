import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const [cart] = useCart();
  const { logOut, user } = useAuth();
  // console.log(user.displayName);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/shop/salad">Our Shop</Link>
      </li>
      <li>
        <Link to="/secrat">Secrat</Link>
      </li>
      <li>
        <Link to="/signUp">Sign Up</Link>
      </li>
      <li>
        <label className="btn btn-ghost btn-circle">
          <Link to="/dashboard/myCart">
            <div className="indicator">
              <FaShoppingCart className="h-5 w-5" />
              <span className="badge badge-sm indicator-item">
                {cart?.length || 0}
              </span>
            </div>
          </Link>
        </label>
      </li>
    </>
  );
  return (
    <div className="navbar bg-black bg-opacity-50 fixed z-10 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black bg-opacity-75 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Bistro Boss
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <ul className="flex gap-4">
          {user ? (
            <>
              <li>
                <label className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
              </li>
              <li>
                <button onClick={handleLogOut} className="btn">
                  <Link to="/login">Log Out</Link>
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link className="btn" to="/login">
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
