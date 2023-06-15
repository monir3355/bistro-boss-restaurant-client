import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const useMenu = () => {
  // const [menus, setMenus] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   fetch("https://bistro-boss-restaurant-server-five.vercel.app/menus")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenus(data);
  //       setLoading(false);
  //     });
  // }, []);
  const {
    data: menus = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["menus"],
    queryFn: async () => {
      const res = await fetch(
        "https://bistro-boss-restaurant-server-five.vercel.app/menus"
      );
      return res.json();
    },
  });
  return [menus, loading, refetch];
};
export default useMenu;
