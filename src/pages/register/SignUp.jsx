import React, { useContext, useEffect, useRef, useState } from "react";
import loginBgImg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication2.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const { createUser, UpdateUser, setPUpdate } = useContext(AuthContext);
  // handle SignUp
  const handleSignUp = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    if (!/(?=.*[A-Z])/.test(password)) {
      setError("at least one uppercase");
      return;
    } else if (!/(?=.*[!#$%&? "])/.test(password)) {
      setError("at least one special key");
      return;
    } else if (password.length < 6) {
      setError("please input 6 or more letter");
      return;
    }
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("Successfully account create");
        UpdateUser(name)
          .then(() => {
            console.log("Profile Updated");
            setPUpdate(new Date().getTime());
          })
          .catch((error) => {
            setError(error.message);
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div
      style={{ backgroundImage: `url(${loginBgImg})` }}
      className="hero min-h-screen bg-base-200"
    >
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center md:w-1/2">
          <img src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm md:w-1/2">
          <h1 className="text-3xl font-semibold text-center">SignUp now!</h1>
          <form onSubmit={handleSignUp} action="">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-[#D1A054] border-0 hover:bg-[#dfab5c]"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </div>
          </form>
          <p className="text-center">
            Already registered?{" "}
            <Link
              to="/login"
              className="hover:underline cursor-pointer text-blue-600"
            >
              Go to login
            </Link>
          </p>
          <p className="text-green-500">{success}</p>
          <p className="text-red-500">{error}</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
