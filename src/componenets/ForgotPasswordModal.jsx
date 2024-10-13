import React, { useState } from "react";
import { Button, Input } from "./index";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function ForgotPasswordModal({ isOpen, onClose }) {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleForgotPassword = async (data) => {
    setError("");
    setSuccess("");
    try {
      await authService.resetPassword(data.email);
      setSuccess("Password reset link sent to your email");
    } catch (error) {
      setError(error.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className='text-2xl font-bold mb-4'>Forgot Password</h2>
        {error && <p className='text-red-600 mb-4'>{error}</p>}
        {success && <p className='text-green-600 mb-4'>{success}</p>}
        <form onSubmit={handleSubmit(handleForgotPassword)}>
          <div className='space-y-4'>
            <Input
              label='Email: '
              placeholder='Enter your email'
              type='email'
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Button type='submit' className='w-full'>
              Send Reset Link
            </Button>
          </div>
        </form>
        <Button onClick={onClose} className='mt-4 w-full'>
          Close
        </Button>
      </div>
    </div>
  );
}

export default ForgotPasswordModal;
