import React, { useState } from 'react';
import authService from '../appwrite/auth';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Input, Logo } from './index'; // Reusing the Input component
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { login } from '../store/authSlice';

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false); // For eye toggle
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // For eye toggle

  const create = async (data) => {
    setError('');
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const currentUser = await authService.getCurrentUser();
        if (currentUser) dispatch(login(currentUser));
        navigate('/');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  // Watch password and confirm password
  const password = watch('password');
  const confirmPassword = watch('confirmPassword');

  return (
    <div className="flex items-center justify-center">
      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-5">
            <Input
              label="Full Name: "
              placeholder="Enter your full name"
              {...register('name', { required: true })}
            />
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register('email', {
                required: true,
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: 'Email address must be valid',
                },
              })}
            />

            {/* Password Field */}
            <Input
              label="Password: "
              placeholder="Enter your password"
              type={showPassword ? 'text' : 'password'}
              {...register('password', {
                required: 'Password is required',
                validate: {
                  minLength: (value) => value.length >= 8 || 'Password must be at least 8 characters',
                  hasUpperCase: (value) => /[A-Z]/.test(value) || 'Password must have an uppercase letter',
                  hasLowerCase: (value) => /[a-z]/.test(value) || 'Password must have a lowercase letter',
                  hasSpecialChar: (value) => /[!@#$%^&*]/.test(value) || 'Password must have a special character',
                  hasNumber: (value) => /\d/.test(value) || 'Password must have a number',
                },
              })}
              rightElement={
                <button type="button" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              }
            />
            {errors.password && <p className="text-red-600">{errors.password.message}</p>}

            {/* Confirm Password Field */}
            <Input
              label="Confirm Password: "
              placeholder="Confirm your password"
              type={showConfirmPassword ? 'text' : 'password'}
              {...register('confirmPassword', {
                required: 'Please confirm your password',
                validate: (value) => value === password || 'Passwords do not match',
              })}
              rightElement={
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  {showConfirmPassword ? 'Hide' : 'Show'}
                </button>
              }
            />
            {errors.confirmPassword && <p className="text-red-600">{errors.confirmPassword.message}</p>}

            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
