import React, { useState } from "react";
import { ShellIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";
import { Button, Input, Logo } from "../componenets/index";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { useForm } from "react-hook-form";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

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
        const currentUser = await authService.getCurrentUser();
        if (currentUser) dispatch(login(currentUser));
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

  //custom function for a specific provider
  const signup_with_=async(provider)=>{
    try {
      await authService.account.createOAuth2Session(
        provider,
        "http://localhost:5173/",
        "http://localhost:5173/error"
      );
    } catch (error) {
      setError("OAuth signup failed. Please try again.");
      console.error("OAuth error:", error);
    }
  }

  

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
              {/* <a className="block text-blue-600" href="#">
                <span className="sr-only">Home</span>
                <svg
                  className="h-8 sm:h-10"
                  viewBox="0 0 28 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                    fill="currentColor"
                  />
                </svg>
              </a> */}

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

                {/* <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="LastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>

                  <input
                    type="text"
                    id="LastName"
                    name="last_name"
                    className="mt-1 w-full border border-black rounded-md bg-white text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div> */}

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
                          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
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

                {/* <div className="col-span-6">
                  <label htmlFor="MarketingAccept" className="flex gap-4">
                    <input
                      type="checkbox"
                      id="MarketingAccept"
                      name="marketing_accept"
                      className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                    />

                    <span className="text-sm text-gray-700">
                      I want to receive emails about events, product updates and
                      company announcements.
                    </span>
                  </label>
                </div> */}

                <div className="col-span-6">
                  {/* <p className="text-sm text-gray-500">
                    By creating an account, you agree to our
                    <a href="#" className="text-gray-700 underline">
                      {" "}
                      terms and conditions{" "}
                    </a>
                    and
                    <a href="#" className="text-gray-700 underline">
                      privacy policy
                    </a>
                    .
                  </p> */}
                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?
                    <a href="/login" className="text-gray-700 underline">
                      Log in
                    </a>
                    .
                  </p>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
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
                    onClick={() => signup_with_("facebook")}
                    title="Signup with facebook"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"
                      alt="facebook"
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
              <div className="text-center mt-6">
                <Link to="/">
                  <Button className="w-auto px-8 py-2 border border-gray-600 bg-blue-900 text-white hover:bg-gray-300 hover:text-blue-900 transition rounded-lg">
                    Back to Home
                  </Button>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}
