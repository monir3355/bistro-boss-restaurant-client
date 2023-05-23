import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Menu from "../pages/menu/menu/Menu";
import Shop from "../pages/shop/shop/Shop";

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
    ],
  },
]);

export default router;
