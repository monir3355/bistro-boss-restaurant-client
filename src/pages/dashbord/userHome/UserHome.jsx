import React from "react";
import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div className="px-4 md:px-12">
      <h2 className="py-12 text-2xl md:text-4xl"> Welcome Back, {user?.displayName}</h2>
    </div>
  );
};

export default UserHome;
