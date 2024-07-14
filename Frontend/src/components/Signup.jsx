import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Signup() {
  // const [serverError, setServerError] = useState("");
  // const [serverSuccess, setServerSuccess] = useState("");

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = async (data) => {
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:4001/user/signup",
  //       data
  //     );
  //     setServerSuccess("Account created successfully!");
  //     setServerError("");
  //   } catch (error) {
  //     setServerError(error.response?.data?.message || "An error occurred");
  //     setServerSuccess("");
  //   }
  // };
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      username: data.username,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div className="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-100 py-6 sm:py-12">
      <div className="absolute top-3 left-3">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="ml-2">Back</span>
        </button>
      </div>
      <div className="relative py-3 sm:w-96 mx-auto text-center">
        <span className="text-2xl font-light">Sign up for an account</span>
        <div className="mt-4 bg-white shadow-md rounded-lg text-left">
          <div className="h-2 bg-blue-400 rounded-t-md"></div>
          <div className="px-8 py-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* {serverError && (
                <p className="text-sm text-red-500">{serverError}</p>
              )} */}
              {/* {serverSuccess && (
                <p className="text-sm text-green-500">{serverSuccess}</p>
              )} */}
              <div>
                <label className="block font-semibold">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
                  {...register("username", { required: true })}
                />
                {errors.username && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <label className="block mt-3 font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <label className="block mt-3 font-semibold">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex justify-between items-baseline">
                <button
                  type="submit"
                  className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
                >
                  Sign Up
                </button>
              </div>
              <div className="text-center mt-4">
                <span className="text-sm">
                  Have an account?{" "}
                  <Link to={"/"} className="text-blue-500 hover:underline">
                    Login
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
