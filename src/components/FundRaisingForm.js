
// import React, { useState } from 'react';

// const FundRaisingStepper = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     goal: '',
//     donorName: '',
//     donorEmail: '',
//     donorContact: '',
//     amount: '',
//     paymentMethod: 'credit',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const nextStep = () => {
//     setStep(step + 1);
//   };

//   const prevStep = () => {
//     setStep(step - 1);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic
//     console.log(formData);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-blue-50">
//       <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-center text-blue-600">Fund Raising Form</h2>

//         {/* Stepper Header */}
//         <div className="flex items-center justify-between pt-8 pb-6">
//           <div className={`step ${step === 1 ? 'text-blue-600' : 'text-gray-400'}`}>1. Fund Details</div>
//           <div className="flex-1 h-1 mx-4 bg-gray-300"></div>
//           <div className={`step ${step === 2 ? 'text-blue-600' : 'text-gray-400'}`}>2. Donor Info</div>
//           <div className="flex-1 h-1 mx-4 bg-gray-300"></div>
//           <div className={`step ${step === 3 ? 'text-blue-600' : 'text-gray-400'}`}>3. Payment Details</div>
//         </div>

//         <form onSubmit={handleSubmit}>
//           {step === 1 && (
//             <div className="space-y-6">
//               <div className="input-group">
//                 <label htmlFor="title" className="block text-sm font-medium text-gray-700">
//                   Fund Title
//                 </label>
//                 <input
//                   id="title"
//                   name="title"
//                   type="text"
//                   value={formData.title}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
//                   placeholder="Enter the title for your fund raising"
//                 />
//               </div>
//               <div className="input-group">
//                 <label htmlFor="description" className="block text-sm font-medium text-gray-700">
//                   Description
//                 </label>
//                 <textarea
//                   id="description"
//                   name="description"
//                   value={formData.description}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
//                   placeholder="Describe the purpose of your fund raising"
//                 />
//               </div>
//               <div className="input-group">
//                 <label htmlFor="goal" className="block text-sm font-medium text-gray-700">
//                   Fundraising Goal (USD)
//                 </label>
//                 <input
//                   id="goal"
//                   name="goal"
//                   type="number"
//                   value={formData.goal}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
//                   placeholder="Enter your target goal amount"
//                 />
//               </div>
//               <div className="flex justify-end">
//                 <button
//                   type="button"
//                   onClick={nextStep}
//                   className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-500"
//                 >
//                   Next
//                 </button>
//               </div>
//             </div>
//           )}

//           {step === 2 && (
//             <div className="space-y-6">
//               <div className="input-group">
//                 <label htmlFor="donorName" className="block text-sm font-medium text-gray-700">
//                   Donor Name
//                 </label>
//                 <input
//                   id="donorName"
//                   name="donorName"
//                   type="text"
//                   value={formData.donorName}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
//                   placeholder="Enter donor's full name"
//                 />
//               </div>
//               <div className="input-group">
//                 <label htmlFor="donorEmail" className="block text-sm font-medium text-gray-700">
//                   Donor Email
//                 </label>
//                 <input
//                   id="donorEmail"
//                   name="donorEmail"
//                   type="email"
//                   value={formData.donorEmail}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
//                   placeholder="Enter donor's email"
//                 />
//               </div>
//               <div className="input-group">
//                 <label htmlFor="donorContact" className="block text-sm font-medium text-gray-700">
//                   Donor Contact
//                 </label>
//                 <input
//                   id="donorContact"
//                   name="donorContact"
//                   type="text"
//                   value={formData.donorContact}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
//                   placeholder="Enter donor's contact number"
//                 />
//               </div>
//               <div className="flex justify-between">
//                 <button
//                   type="button"
//                   onClick={prevStep}
//                   className="px-4 py-2 text-white bg-gray-600 rounded-md hover:bg-gray-500"
//                 >
//                   Previous
//                 </button>
//                 <button
//                   type="button"
//                   onClick={nextStep}
//                   className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-500"
//                 >
//                   Next
//                 </button>
//               </div>
//             </div>
//           )}

//           {step === 3 && (
//             <div className="space-y-6">
//               <div className="input-group">
//                 <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
//                   Donation Amount (USD)
//                 </label>
//                 <input
//                   id="amount"
//                   name="amount"
//                   type="number"
//                   value={formData.amount}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
//                   placeholder="Enter the donation amount"
//                 />
//               </div>
//               <div className="input-group">
//                 <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">
//                   Payment Method
//                 </label>
//                 <select
//                   id="paymentMethod"
//                   name="paymentMethod"
//                   value={formData.paymentMethod}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
//                 >
//                   <option value="credit">Credit Card</option>
//                   <option value="paypal">PayPal</option>
//                   <option value="bank">Bank Transfer</option>
//                 </select>
//               </div>
//               <div className="flex justify-between">
//                 <button
//                   type="button"
//                   onClick={prevStep}
//                   className="px-4 py-2 text-white bg-gray-600 rounded-md hover:bg-gray-500"
//                 >
//                   Previous
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-500"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </div>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default FundRaisingStepper;






// src/components/FundRaisingForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const FundRaisingForm = () => {
  // Validation schema
  const schema = yup.object().shape({
    fundTitle: yup
      .string()
      .required('Fund title is required')
      .max(100, 'Maximum 100 characters'),
    fundDescription: yup
      .string()
      .required('Fund description is required')
      .max(1000, 'Maximum 1000 characters'),
    fundGoal: yup
      .number()
      .typeError('Fund goal must be a number')
      .positive('Fund goal must be positive')
      .required('Fund goal is required'),
    fundRaiserName: yup
      .string()
      .required('Fund raiser name is required')
      .max(50, 'Maximum 50 characters'),
    fundRaiserEmail: yup
      .string()
      .email('Invalid email')
      .required('Fund raiser email is required'),
    date: yup.date().required('Date is required'),
    image: yup
      .mixed()
      .test('fileSize', 'File size is too large', (value) => {
        if (!value.length) return true; // image is optional
        return value[0].size <= 2000000; // 2MB limit
      }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    // Handle form submission here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xl p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Fund Raising Form
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Fund Title */}
          <div>
            <label htmlFor="fundTitle" className="block mb-1 text-sm text-gray-600">
              Fund Title
            </label>
            <input
              type="text"
              id="fundTitle"
              className={`w-full px-4 py-2 border ${
                errors.fundTitle ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500`}
              {...register('fundTitle')}
            />
            {errors.fundTitle && (
              <p className="mt-1 text-xs text-red-500">{errors.fundTitle.message}</p>
            )}
          </div>

          {/* Fund Description */}
          <div>
            <label
              htmlFor="fundDescription"
              className="block mb-1 text-sm text-gray-600"
            >
              Fund Description
            </label>
            <textarea
              id="fundDescription"
              className={`w-full px-4 py-2 border ${
                errors.fundDescription ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500`}
              {...register('fundDescription')}
            />
            {errors.fundDescription && (
              <p className="mt-1 text-xs text-red-500">
                {errors.fundDescription.message}
              </p>
            )}
          </div>

          {/* Fund Goal/Amount */}
          <div>
            <label htmlFor="fundGoal" className="block mb-1 text-sm text-gray-600">
              Fund Goal Amount
            </label>
            <input
              type="number"
              id="fundGoal"
              className={`w-full px-4 py-2 border ${
                errors.fundGoal ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500`}
              {...register('fundGoal')}
            />
            {errors.fundGoal && (
              <p className="mt-1 text-xs text-red-500">{errors.fundGoal.message}</p>
            )}
          </div>

          {/* Fund Raiser Name */}
          <div>
            <label
              htmlFor="fundRaiserName"
              className="block mb-1 text-sm text-gray-600"
            >
              Fund Raiser Name
            </label>
            <input
              type="text"
              id="fundRaiserName"
              className={`w-full px-4 py-2 border ${
                errors.fundRaiserName ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500`}
              {...register('fundRaiserName')}
            />
            {errors.fundRaiserName && (
              <p className="mt-1 text-xs text-red-500">
                {errors.fundRaiserName.message}
              </p>
            )}
          </div>

          {/* Fund Raiser Email/Username */}
          <div>
            <label
              htmlFor="fundRaiserEmail"
              className="block mb-1 text-sm text-gray-600"
            >
              Fund Raiser Email
            </label>
            <input
              type="email"
              id="fundRaiserEmail"
              className={`w-full px-4 py-2 border ${
                errors.fundRaiserEmail ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500`}
              {...register('fundRaiserEmail')}
            />
            {errors.fundRaiserEmail && (
              <p className="mt-1 text-xs text-red-500">
                {errors.fundRaiserEmail.message}
              </p>
            )}
          </div>

          {/* Image (Optional) */}
          <div>
            <label htmlFor="image" className="block mb-1 text-sm text-gray-600">
              Image (Optional)
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              className={`w-full px-4 py-2 border ${
                errors.image ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500`}
              {...register('image')}
            />
            {errors.image && (
              <p className="mt-1 text-xs text-red-500">{errors.image.message}</p>
            )}
          </div>

          {/* Date */}
          <div>
            <label htmlFor="date" className="block mb-1 text-sm text-gray-600">
              Date
            </label>
            <input
              type="date"
              id="date"
              className={`w-full px-4 py-2 border ${
                errors.date ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500`}
              {...register('date')}
            />
            {errors.date && (
              <p className="mt-1 text-xs text-red-500">{errors.date.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Submit Fund Raising Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FundRaisingForm;
