import React, { useState } from "react";
import { ShellIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";
import { Button, Input } from "../componenets/index";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { useForm } from "react-hook-form";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default function SignUp() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { register, handleSubmit, watch } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");

  const create = async (data) => {
    setError("");
    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const currentUser  = await authService.getCurrentUser ();
        if (currentUser ) dispatch(login(currentUser ));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    if (password.length < 6) {
      setPasswordStrength("Weak");
    } else if (
      password.length >= 6 &&
      /\d/.test(password) &&
      /[A-Z]/.test(password)
    ) {
      setPasswordStrength("Strong");
    } else {
      setPasswordStrength("Medium");
    }
  };

  const signup_with_ = async (provider) => {
    try {
      await authService.account.createOAuth2Session(
        provider,
        "https://mega-blog-8587.vercel.app/",
        "http://localhost:5173/error"
      );
    } catch (error) {
      setError("OAuth signup failed. Please try again.");
      console.error("OAuth error:", error);
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
                Welcome to MegaBlog <ShellIcon size={40} />
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>

              {error && (
                <p className="text-red-600 mt-8 text-center">{error}</p>
              )}

              <form
                onSubmit={handleSubmit(create)}
                className="mt-8 grid grid-cols-6 gap-6"
              >
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="FirstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>

                  <Input
                    placeholder="Enter your full name"
                    {...register("name", {
                      required: true,
                      pattern: {
                        value: /^[a-zA-Z ]+$/,
                        message: 'Numbers and Symbols are not allowed'
                      }
                    })}
                    className="mt-1 w-full border border-black rounded-md bg-white text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    pattern="[a-zA-Z ]+"
                    onInvalid={(e) => e.target.setCustomValidity('Numbers and Symbols are not allowed')}
                    onInput={(e) => e.target.setCustomValidity('')}
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Email{" "}
                  </label>

                  <Input
                    placeholder="Enter your email"
                    type="email"
                    {...register("email", {
                      required: true,
                      validate: {
                        matchPattern: (value) =>
                          /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/.test(
                            value
                          ) || "Email address must be a valid address",
                      },
                    })}
                    className="mt-1 w-full border border-black rounded-md bg-white text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="relative flex flex-col">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      {...register("password", {
                        required: true,
                        onChange: handlePasswordChange,
                      })}
                      className="mt-1 w-full border border-black rounded-md bg-white text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 pr-10" // Add padding to the right
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/3 transform -translate-y-1/2" // Center the button vertically
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                      ) : (
                        <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                      )}
                    </button>

                    {/* Use min-h to reserve space for the strength message */}
                    <p
                      className={`mt-1 text-sm ${
                        passwordStrength === "Strong"
                          ? "text-green-500"
                          : passwordStrength === "Medium"
                          ? "text-yellow-500"
                          : "text-red-500"
                      }`}
                      style={{ minHeight: "20px", transition: "opacity 0.3s" }} // Adjust min-height as needed
                    >
                      {watch("password")?.length > 0
                        ? `Strength: ${passwordStrength}`
                        : ""}
                    </p>
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="PasswordConfirmation"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password Confirmation
                  </label>
                  <div className="relative flex flex-col">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      {...register("confirmPassword", {
                        required: true,
                      })}
                      className="mt-1 w-full border border-black rounded-md bg-white text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 pr-10" // Add padding to the right
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2" // Center the button vertically
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
                        <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                      ) : (
                        <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="col-span-6">
                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?
                    <a href="/login" className="text-gray-700 underline">
                      Log in
                    </a>
                    .
                  </p>
                </div>

                <div className="col-span-6 sm :flex sm:items-center sm:gap-4">
                  <Button type="submit" className="w-full">
                    Create Account
                  </Button>
                </div>
              </form>
              <div className="w-full">
                <p className="mt-4  text-center text-sm text-gray-500">
                  Or SignUp using
                </p>
                <div className="mt-2 flex justify-around">
                  <Button
                    className="p-2 outline-none border-none rounded bg-slate-200"
                    onClick={() => signup_with_("google")}
                    title="Signup with google"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                      alt="google"
                      className="w-[25px]"
                    />
                  </Button>
                  
                  <Button
                    className="p-2 outline-none border-none rounded bg-slate-200"
                    onClick={() => signup_with_("linkedin")}
                    title="Signup with linkedin"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                      alt="linkedin"
                      className="w-[25px]"
                    />
                  </Button>
                  <Button
                    className="p-2 outline-none border-none rounded bg-slate-200"
                    onClick={() => signup_with_("github")}
                    title="Signup with github"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"
                      alt="github"
                      className="w-[25px]"
                    />
                  </Button>
                </div>
              </div>
              <div style={{ position: "absolute", top: "80px", right: "40px" }}>
                <Link to="/">
                  <FontAwesomeIcon icon={faHome} style={{ fontSize: "24px", color: "#1D4ED8" }} />
                </Link>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}