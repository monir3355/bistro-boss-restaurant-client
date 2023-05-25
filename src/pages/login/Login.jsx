import React, { useContext, useEffect, useState } from "react";
import loginBgImg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication2.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";
  // captcha
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleValidCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  // handle Login
  const handleLogin = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    const form = event.target;
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
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("Login Successfully");
        navigate(from, { replace: true });
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
            <h1 className="text-3xl font-semibold text-center">Login now!</h1>
            <form onSubmit={handleLogin} action="">
              <div className="card-body">
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
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                {/* captcha */}
                <div className="form-control">
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    onBlur={handleValidCaptcha}
                    type="text"
                    name="captcha"
                    placeholder="Type the above captcha"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn bg-[#D1A054] border-0 hover:bg-[#dfab5c]"
                    type="submit"
                    value="Login"
                    disabled={disabled}
                  />
                </div>
              </div>
            </form>
            <p className="text-center">
              New here? Create a New{" "}
              <Link
                to="/signUp"
                className="hover:underline cursor-pointer text-blue-600"
              >
                Account
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

export default Login;
