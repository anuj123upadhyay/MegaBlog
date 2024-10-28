import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from "../componenets/index";
import { ShellIcon } from "lucide-react";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import ForgotPasswordModal from "../componenets/ForgotPasswordModal";
import { Account } from 'appwrite';

// Initialize Appwrite account for OAuth and normal login
const account = new Account(authService);

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);

  const login = async (data) => {
    setError("");
    setLoading(true);
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    setIsForgotPasswordOpen(true);
  };

  // Custom function for specific OAuth providers
  const login_with_ = async (provider) => {
    try {
      await account.createOAuth2Session(
        provider,
        `${window.location.origin}/`, // Dynamic redirect after success
        `${window.location.origin}/error` // Redirect on error
      );
    } catch (error) {
      console.error(`Failed to log in with ${provider}:`, error);
      alert(`Login with ${provider} failed. Please try again.`);
    }
  };

  return (
    <>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-first lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </aside>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <h1 className="mt-6 text-2xl font-bold text-gray-900 flex gap-2 sm:text-3xl md:text-4xl">
                Welcome to
                <a href="/" className="text-gray-700 underline">
                  MegaBlog
                </a>
                <ShellIcon size={40} />
              </h1>

              <p className="mt-4 text-sm text-gray-500 sm:mt-2">
                Don't have an account?
                <a href="/signup" className="text-gray-700 underline">
                  Sign Up
                </a>
                .
              </p>

              {error && (
                <p className="text-red-600 mt-8 text-center">{error}</p>
              )}

              <form
                onSubmit={handleSubmit(login)}
                className="mt-8 grid grid-cols-6 gap-6 border border-gray-300 p-6 rounded-lg"
              >
                {/* Email Input */}
                <div className="col-span-6">
                  <label htmlFor="Email" className="block text-sm font-bold text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="Email"
                    placeholder="Enter your email"
                    name="email"
                    className="mt-1 w-full p-2 border rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    {...register("email", {
                      required: true,
                      validate: {
                        matchPattern: (value) =>
                          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be valid",
                      },
                    })}
                  />
                </div>

                {/* Password Input */}
                <div className="col-span-6">
                  <label htmlFor="Password" className="block text-sm font-bold text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    id="Password"
                    name="password"
                    placeholder="Enter your password"
                    className="mt-1 w-full border p-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    {...register("password", { required: true })}
                  />
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <Button type="submit" className="w-full rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500" disabled={loading}>
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <svg
                          className="animate-spin h-5 w-5 mr-2 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          ></path>
                        </svg>
                        Signing in...
                      </div>
                    ) : (
                      "Sign in"
                    )}
                  </Button>

                  <button
                    onClick={handleForgotPassword}
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  >
                    Forgot Password
                  </button>
                </div>

                {/* OAuth Sign In Options */}
                <div className="col-span-6">
                  <div className="w-full">
                    <p className="mt-1 text-center text-sm text-gray-500">
                      Or Sign In using
                    </p>
                    <div className="mt-3 flex justify-around">
                      <Button
                        className="p-2 outline-none border-none rounded bg-slate-200"
                        onClick={() => login_with_("google")}
                        title="SignIn with google"
                      >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="google" className="w-[25px]" />
                      </Button>
                      <Button
                        className="p-2 outline-none border-none rounded bg-slate-200"
                        onClick={() => login_with_("facebook")}
                        title="SignIn with facebook"
                      >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg" alt="facebook" className="w-[25px]" />
                      </Button>
                      <Button
                        className="p-2 outline-none border-none rounded bg-slate-200"
                        onClick={() => login_with_("linkedin")}
                        title="SignIn with linkedin"
                      >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="linkedin" className="w-[25px]" />
                      </Button>
                      <Button
                        className="p-2 outline-none border-none rounded bg-slate-200"
                        onClick={() => login_with_("github")}
                        title="SignIn with github"
                      >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" alt="github" className="w-[25px]" />
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>

      {/* Forgot Password Modal */}
      {isForgotPasswordOpen && (
        <ForgotPasswordModal isOpen={isForgotPasswordOpen} setIsOpen={setIsForgotPasswordOpen} />
      )}
    </>
  );
}
