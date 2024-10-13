import React, { useState } from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { useForm } from "react-hook-form";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

function Signup() {
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

  return (
    <div className='flex items-center justify-center'>
      <div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10'>
        <div className='mb-2 flex justify-center'>
          <span className='inline-block w-full max-w-[100px]'>
            <Logo width='100%' />
          </span>
        </div>
        <h2 className='text-center text-2xl font-bold leading-tight'>
          Sign up to create account
        </h2>
        <p className='mt-2 text-center text-base text-black/60'>
          Already have an account?&nbsp;
          <Link
            to='/login'
            className='font-medium text-primary transition-all duration-200 hover:underline'
          >
            Sign In
          </Link>
        </p>
        {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}

        <form onSubmit={handleSubmit(create)}>
          <div className='space-y-5'>
            <Input
              label='Full Name: '
              placeholder='Enter your full name'
              {...register("name", {
                required: true,
              })}
            />

            <Input
              placeholder='Enter your email'
              type='email'
              label='Email: '
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />

            <div className='flex flex-col sm:flex-row sm:justify-around gap-2'>
              <div className='relative flex flex-col'>
                <Input
                  label='Password: '
                  type={showPassword ? "text" : "password"}
                  placeholder='Enter your password'
                  {...register("password", {
                    required: true,
                    onChange: handlePasswordChange,
                  })}
                />
                <button
                  type='button'
                  className='absolute right-3 top-9'
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <AiOutlineEye fontSize={24} fill='#AFB2BF' />
                  ) : (
                    <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />
                  )}
                </button>
                <p
                  className={`mt-1 text-sm ${
                    passwordStrength === "Strong"
                      ? "text-green-500"
                      : passwordStrength === "Medium"
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}
                >
                  Strength: {passwordStrength}
                </p>
              </div>
              <div className='relative'>
                <Input
                  label='Confirm Password: '
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder='Confirm your password'
                  {...register("confirmPassword", {
                    required: true,
                  })}
                />
                <button
                  type='button'
                  className='absolute right-1 top-9'
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <AiOutlineEye fontSize={24} fill='#AFB2BF' />
                  ) : (
                    <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />
                  )}
                </button>
              </div>
            </div>
            <Button type='submit' className='w-full'>
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
