import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AdminHome = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure("/admin-stats");
      return res.data;
    },
  });
  return (
    <div className="px-4 md:px-12">
      <h2 className="py-12 text-2xl md:text-4xl">
        {" "}
        Welcome Back, {user?.displayName}
      </h2>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title">Total</div>
          <div className="stat-value text-primary">{stats.revenue}</div>
          <div className="stat-desc">Revenue</div>
        </div>

        <div className="stat">
          <div className="stat-title">Total</div>
          <div className="stat-value text-secondary">{stats.users}</div>
          <div className="stat-desc">Customers</div>
        </div>

        <div className="stat">
          <div className="stat-title">Total</div>
          <div className="stat-value">{stats.products}</div>
          <div className="stat-desc text-secondary">Products</div>
        </div>
        <div className="stat">
          <div className="stat-title">Total</div>
          <div className="stat-value">{stats.orders}</div>
          <div className="stat-desc text-secondary">Orders</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
