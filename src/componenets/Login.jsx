// import React from 'react';
// import { useForm } from 'react-hook-form';

// const Login = () => {

//   const onSubmit = (data) => {
//     console.log("Form Data:", data);
//     // Handle form submission logic (e.g., API request)
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-center text-gray-900">Wellcome back to <h2 className="text-blue-500">MegaBlog</h2></h2>

// <form className="space-y-4">
//   {/* Email Field */}
//   <div>
//     <label htmlFor="email" className="text-sm float-left mb-2 mt-3 font-medium text-gray-700">Email</label>
//     <input
//       type="email"
//       id="email"
//       className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm`}
//     />

//   </div>

//   {/* Password Field */}
//   <div>
//     <label htmlFor="password" className="block float-left mb-2 text-sm font-medium text-gray-700">Password</label>
//     <input
//       type="password"
//       id="password"
//       className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm`}
//     />
//   </div>

//   {/* Submit Button */}
//   <div>
//     <button
//       type="submit"
//       className="w-full py-2 text-white bg-gray-800 rounded-md hover:bg-black"
//     >
//       Login
//     </button>
//   </div>
// </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="flex justify-center mt-6 text-center text-2xl font-bold leading-tight">
          Wellcome back to <h2 className="text-blue-500 ml-2">MegaBlog</h2>
        </h2>
        
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(login)} className="space-y-4">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="text-sm float-left mb-2 mt-7 font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
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
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm`}
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 text-white bg-gray-800 rounded-md hover:bg-black"
            >
              Login
            </button>
          </div>
        </form>
        <p className="mt-3 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
