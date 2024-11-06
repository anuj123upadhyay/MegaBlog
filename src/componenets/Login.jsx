import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ForgotPasswordModal from "./ForgotPasswordModal.jsx";
import { setLoadingAuth, unSetLoadingAuth } from "../store/loadingSlice.js";
import LoadingSpinner from "./LoadingSpinner";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);

  // Retrieve loading state from Redux store
  const loadingAuth = useSelector((state) => state.loading.loading);

  // Log loading state whenever it changes
  useEffect(() => {
    console.log(`loading state is ${loadingAuth}`);
  }, [loadingAuth]);

  const login = async (data) => {
    setError("");
    dispatch(setLoadingAuth()); // Start loading
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authLogin(userData));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    } finally {
      dispatch(unSetLoadingAuth()); // End loading
    }
  };

  const handleForgotPassword = () => {
    setIsForgotPasswordOpen(true);
  };

  return (
    <div className="relative w-full h-full">
      {/* Full-page loading overlay */}
      {loadingAuth && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex items-center justify-center">
          <LoadingSpinner />
        </div>
      )}

      <div className="flex items-center justify-center w-full">
        <div
          className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
        >
          <div className="mb-2 flex justify-center">
            <span className="inline-block w-full max-w-[100px]">
              <Logo width="100%" />
            </span>
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-base text-black/60">
            Don&apos;t have an account?&nbsp;
            <Link
              to="/signup"
              className="font-medium text-primary transition-all duration-200 hover:underline"
            >
              Sign Up
            </Link>
          </p>
          {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
          <form onSubmit={handleSubmit(login)} className="mt-8">
            <div className="space-y-5">
              <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                  required: true,
                  validate: {
                    matchPattern: (value) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                      "Email address must be a valid address",
                  },
                })}
              />
              <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", { required: true })}
              />
              <Button
                type="submit"
                className="w-full flex items-center justify-center"
                disabled={loadingAuth} // Disable the button during loadingAuth
              >
                {loadingAuth ? (
                  <div className="flex items-center justify-center">
                    <LoadingSpinner className="h-5 w-5 mr-2" />
                    Signing in...
                  </div>
                ) : (
                  "Sign in"
                )}
              </Button>
              <p className="mt-2 text-center text-base text-black/60">
                <button
                  type="button"
                  className="font-medium text-primary transition-all duration-200 hover:underline"
                  onClick={handleForgotPassword}
                >
                  Forgot Password?
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
      <ForgotPasswordModal
        isOpen={isForgotPasswordOpen}
        onClose={() => setIsForgotPasswordOpen(false)}
      />
    </div>
  );
}

export default Login;
