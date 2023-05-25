import React, { useContext, useEffect, useRef, useState } from "react";
import loginBgImg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication2.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const { createUser, UpdateUser, setPUpdate } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        setSuccess("Successfully account create");
        UpdateUser(data.name, data.photo)
          .then(() => {
            console.log("Profile Updated");
            setPUpdate(new Date().getTime());
            navigate("/");
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
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
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
            <form onSubmit={handleSubmit(onSubmit)} action="">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-600">
                      <small>Name is required</small>
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    {...register("photo", { required: true })}
                    type="url"
                    name="photo"
                    placeholder="Your Photo URL"
                    className="input input-bordered"
                  />
                  {errors.photo && (
                    <span className="text-red-600">
                      <small>Photo URL is required</small>
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-600">
                      <small>Email is required</small>
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 15,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password?.type === "required" && (
                    <span className="text-red-600">
                      <small>Password is required</small>
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-red-600">
                      <small>Please Enter 6 or More Password</small>
                    </span>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <span className="text-red-600">
                      <small>Please Enter 15 or less Password</small>
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span className="text-red-600">
                      <small>
                        Please Enter one uppercase, one lowercase, one number &
                        special character{" "}
                      </small>
                    </span>
                  )}
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
    </>
  );
};

export default SignUp;
