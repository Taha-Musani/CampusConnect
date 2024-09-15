
// src/components/RegistrationPage.js
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const RegistrationPage = () => {
  const [isAlumni, setIsAlumni] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Registration Data", data);
    // Handle registration logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Create an Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name Input */}
          <div>
            <label htmlFor="fullName" className="block mb-1 text-sm text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className={`w-full px-4 py-2 border ${
                errors.fullName ? "border-red-500" : "border-gray-300"
              } rounded-md focus:ring-blue-500 focus:border-blue-500`}
              placeholder="Enter your full name"
              {...register("fullName", {
                required: "Full Name is required",
              })}
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-500">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block mb-1 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              className={`w-full px-4 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md focus:ring-blue-500 focus:border-blue-500`}
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block mb-1 text-sm text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              className={`w-full px-4 py-2 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-md focus:ring-blue-500 focus:border-blue-500`}
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Contact Number Input */}
          <div>
            <label htmlFor="contactNo" className="block mb-1 text-sm text-gray-600">
              Contact No.
            </label>
            <input
              type="tel"
              id="contactNo"
              className={`w-full px-4 py-2 border ${
                errors.contactNo ? "border-red-500" : "border-gray-300"
              } rounded-md focus:ring-blue-500 focus:border-blue-500`}
              placeholder="Enter your contact number"
              {...register("contactNo", {
                required: "Contact number is required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Invalid contact number",
                },
                minLength: {
                  value: 10,
                  message: "Contact number must be at least 10 digits",
                },
              })}
            />
            {errors.contactNo && (
              <p className="mt-1 text-xs text-red-500">
                {errors.contactNo.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
