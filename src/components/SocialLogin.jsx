import React from "react";
import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { githubProvider, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        const currentUSer = result.user;
        console.log(currentUSer);
        const savedUser = {
          name: currentUSer.displayName,
          email: currentUSer.email,
        };
        fetch("https://bistro-boss-restaurant-server-five.vercel.app/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(savedUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div>
      <div className="divider">Or</div>
      <button
        onClick={handleGoogle}
        className="btn bg-[#D1A054] border-0 hover:bg-[#dfab5c] w-full"
      >
        <FaGoogle className="w-8 h-8" />{" "}
        <span className="ml-4">Login with Google</span>
      </button>
      <button className="btn bg-[#D1A054] border-0 hover:bg-[#dfab5c] mt-6 w-full">
        <FaGithub className="w-8 h-8" />{" "}
        <span className="ml-4">Login with GitHub</span>
      </button>
    </div>
  );
};

export default SocialLogin;
