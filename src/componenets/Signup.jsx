import React from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../store/authSlice";
import { useForm } from "react-hook-form";

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Create Account At <h2 className="text-blue-500 ml-2">MegaBlog</h2>
        </h2>

        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(create)} className="space-y-4">
          {/* Username Field */}
          <div>
            <label
              htmlFor="text"
              {...register("name", {
                required: true,
              })}
              className="text-sm float-left mb-2 mt-7 font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm`}
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="text-sm float-left mb-2 font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm`}
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block float-left mb-2 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: true,
              })}
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm`}
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 text-white bg-gray-800 rounded-md hover:bg-black"
            >
              Create Account
            </button>
          </div>
        </form>

        <p className="mt-3 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
