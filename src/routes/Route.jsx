import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Menu from "../pages/menu/menu/Menu";
import Shop from "../pages/shop/shop/Shop";
import Login from "../pages/login/Login";
import SignUp from "../pages/register/SignUp";
import Secrat from "../pages/Secrat";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import MyCart from "../pages/dashbord/MyCart";
import AllUsers from "../pages/dashbord/allUsers/AllUsers";
import AddItem from "../pages/dashbord/addItem/AddItem";
import AdminPrivateRoute from "./AdminPrivateRoute";
import ManageItems from "../pages/dashbord/manageItems/ManageItems";
import Payment from "../pages/dashbord/payment/Payment";
import AdminHome from "../pages/dashbord/adminHome/AdminHome";
import UserHome from "../pages/dashbord/userHome/UserHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      // {
      //   path: "/shop",
      //   element: <Shop />,
      // },
      {
        path: "/shop/:category",
        element: <Shop />,
      },
      {
        path: "/secrat",
        element: (
          <PrivateRoute>
            <Secrat />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      // Home routes
      { path: "userHome", element: <UserHome /> },
      { path: "myCart", element: <MyCart /> },
      { path: "payment", element: <Payment /> },
      // Admin routes
      {
        path: "adminHome",
        element: (
          <AdminPrivateRoute>
            <AdminHome />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "allUsers",
        element: (
          <AdminPrivateRoute>
            <AllUsers />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "addItem",
        element: (
          <AdminPrivateRoute>
            <AddItem />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "manageItem",
        element: (
          <AdminPrivateRoute>
            <ManageItems />
          </AdminPrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
