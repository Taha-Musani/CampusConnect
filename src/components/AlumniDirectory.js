import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Sample alumni data
const alumniData = [
  { name: "John Doe", city: "New York", university: "Harvard", passoutYear: 2015 },
  { name: "Jane Smith", city: "Los Angeles", university: "MIT", passoutYear: 2018 },
  { name: "Robert Brown", city: "Chicago", university: "Stanford", passoutYear: 2019 },
  { name: "Emily White", city: "New York", university: "Harvard", passoutYear: 2018 },
  // Add more alumni data here
];

// Validation schema using yup
const searchSchema = yup.object().shape({
  city: yup.string().required("City is required"),
  university: yup.string().required("University is required"),
  passoutYear: yup
    .number()
    .typeError("Passout year must be a number")
    .required("Passout year is required")
    .min(1900, "Year must be after 1900")
    .max(new Date().getFullYear(), "Year cannot be in the future"),
});

const AlumniDirectory = () => {
  const [filteredAlumni, setFilteredAlumni] = useState([]);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(searchSchema),
  });

  const onSubmit = (data) => {
    // Filter the alumni based on form data
    const result = alumniData.filter(
      (alumnus) =>
        alumnus.city.toLowerCase() === data.city.toLowerCase() &&
        alumnus.university.toLowerCase() === data.university.toLowerCase() &&
        alumnus.passoutYear === parseInt(data.passoutYear)
    );
    setFilteredAlumni(result);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center mb-6">Alumni Directory</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* City Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">City</label>
            <input
              type="text"
              {...register("city")}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.city ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              placeholder="Enter city"
            />
            {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
          </div>

          {/* University Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">University</label>
            <input
              type="text"
              {...register("university")}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.university ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              placeholder="Enter university"
            />
            {errors.university && <p className="text-red-500 text-sm mt-1">{errors.university.message}</p>}
          </div>

          {/* Passing Year Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Passing Year</label>
            <input
              type="date"
              {...register("passoutYear")}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.passoutYear ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              placeholder="Enter passout year"
            />
            {errors.passoutYear && <p className="text-red-500 text-sm mt-1">{errors.passoutYear.message}</p>}
          </div>

          {/* Search Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition"
            >
              Search Alumni
            </button>
          </div>
        </form>

        {/* Results Section */}
        {filteredAlumni.length > 0 ? (
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-4">Search Results:</h3>
            <ul>
              {filteredAlumni.map((alumnus, index) => (
                <li key={index} className="mb-2 p-4 bg-gray-100 rounded-lg">
                  <p className="text-lg font-medium">Name: {alumnus.name}</p>
                  <p className="text-sm text-gray-700">City: {alumnus.city}</p>
                  <p className="text-sm text-gray-700">University: {alumnus.university}</p>
                  <p className="text-sm text-gray-700">Passing Year: {alumnus.passoutYear}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : filteredAlumni.length === 0 ? (
          <p className="mt-4 text-gray-500">No alumni found for the selected criteria.</p>
        ) : null}
      </div>
    </div>
  );
};

export default AlumniDirectory;
