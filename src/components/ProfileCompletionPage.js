import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Step titles
const steps = ["Profile & Bio", "Contact Info", "Position", "Skills", "University", "Achievements"];

// Validation schema
const schema = yup.object().shape({
  // Step 1
  bio: yup.string().required("Bio is required").max(300, "Bio cannot exceed 300 characters"),
  // Step 2
  github: yup.string().url("Invalid GitHub URL").nullable(),
  linkedin: yup.string().url("Invalid LinkedIn URL").nullable(),
  twitter: yup.string().url("Invalid Twitter URL").nullable(),
  // Step 3
  city: yup.string().required("City is required"),
  company: yup.string().required("Company name is required"),
  country: yup.string().required("Country is required"),
  jobTitle: yup.string().required("Job title is required"),
  // Step 4
  skills: yup.array().of(
    yup.object().shape({
      name: yup.string().required("Skill name is required"),
      level: yup.string().required("Skill level is required"),
    })
  ).min(1, "At least one skill is required"),
  // Step 5
  university: yup.object().shape({
    name: yup.string().required("University name is required"),
    city: yup.string().required("City is required"),
    domain: yup.string().required("Domain is required"),
    passoutYear: yup
      .number()
      .typeError("Pass out year must be a number")
      .required("Pass out year is required")
      .min(1900, "Invalid year")
      .max(new Date().getFullYear(), "Invalid year"),
  }),
  // Step 6
  achievements: yup.string().required("Achievements are required"),
});

const ProfileStepperForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { fields: skillsFields, append: addSkill, remove: removeSkill } = useFieldArray({
    control,
    name: "skills",
  });

  const onSubmit = (data) => {
    console.log("Profile Data:", data);
    // Handle profile submission logic here
  };

  const goToStep = (stepIndex) => setCurrentStep(stepIndex);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Stepper Navigation */}
      <div className="flex mb-6 space-x-2">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`cursor-pointer px-4 py-2 rounded-full ${
              index <= currentStep ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-600"
            }`}
            onClick={() => goToStep(index)}
          >
            {step}
          </div>
        ))}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg">
        {currentStep === 0 && (
          <>
            {/* Step 1: Profile Picture and Bio */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Profile Picture & Bio</h3>

              <div className="mb-4">
                <label className="block text-sm text-gray-600">Profile Picture</label>
                <input
                  type="file"
                  className="block w-full text-sm border border-gray-300 rounded-md"
                  {...register("profilePicture")}
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm text-gray-600">Bio</label>
                <textarea
                  className={`w-full px-3 py-2 border rounded-md ${
                    errors.bio ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Tell us about yourself"
                  {...register("bio")}
                />
                {errors.bio && <p className="text-red-500 text-xs">{errors.bio.message}</p>}
              </div>
            </div>
          </>
        )}

        {currentStep === 1 && (
          <>
            {/* Step 2: Contact Info */}
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="GitHub Profile"
                className={`w-full px-3 py-2 border rounded-md ${errors.github ? "border-red-500" : "border-gray-300"}`}
                {...register("github")}
              />
              {errors.github && <p className="text-red-500 text-xs">{errors.github.message}</p>}

              <input
                type="text"
                placeholder="LinkedIn Profile"
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.linkedin ? "border-red-500" : "border-gray-300"
                }`}
                {...register("linkedin")}
              />
              {errors.linkedin && <p className="text-red-500 text-xs">{errors.linkedin.message}</p>}

              <input
                type="text"
                placeholder="Twitter Profile"
                className={`w-full px-3 py-2 border rounded-md ${errors.twitter ? "border-red-500" : "border-gray-300"}`}
                {...register("twitter")}
              />
              {errors.twitter && <p className="text-red-500 text-xs">{errors.twitter.message}</p>}
            </div>
          </>
        )}

        {currentStep === 2 && (
          <>
            {/* Step 3: Position Info */}
            <h3 className="text-xl font-semibold mb-4">Position</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="City"
                className={`w-full px-3 py-2 border rounded-md ${errors.city ? "border-red-500" : "border-gray-300"}`}
                {...register("city")}
              />
              {errors.city && <p className="text-red-500 text-xs">{errors.city.message}</p>}

              <input
                type="text"
                placeholder="Company Name"
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.company ? "border-red-500" : "border-gray-300"
                }`}
                {...register("company")}
              />
              {errors.company && <p className="text-red-500 text-xs">{errors.company.message}</p>}

              <input
                type="text"
                placeholder="Country"
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.country ? "border-red-500" : "border-gray-300"
                }`}
                {...register("country")}
              />
              {errors.country && <p className="text-red-500 text-xs">{errors.country.message}</p>}

              <input
                type="text"
                placeholder="Job Title"
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.jobTitle ? "border-red-500" : "border-gray-300"
                }`}
                {...register("jobTitle")}
              />
              {errors.jobTitle && <p className="text-red-500 text-xs">{errors.jobTitle.message}</p>}
            </div>
          </>
        )}

        {currentStep === 3 && (
          <>
            {/* Step 4: Skills */}
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            {skillsFields.map((skill, index) => (
              <div key={skill.id} className="flex space-x-4 mb-4">
                <input
                  type="text"
                  placeholder="Skill Name"
                  className={`w-full px-3 py-2 border rounded-md ${
                    errors.skills?.[index]?.name ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register(`skills.${index}.name`)}
                />
                {errors.skills?.[index]?.name && <p className="text-red-500 text-xs">{errors.skills[index].name.message}</p>}

                <input
                  type="text"
                  placeholder="Skill Level"
                  className={`w-full px-3 py-2 border rounded-md ${
                    errors.skills?.[index]?.level ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register(`skills.${index}.level`)}
                />
                {errors.skills?.[index]?.level && <p className="text-red-500 text-xs">{errors.skills[index].level.message}</p>}

                <button
                  type="button"
                  className="px-2 py-1 text-red-500 bg-red-200 rounded"
                  onClick={() => removeSkill(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addSkill({ name: "", level: "" })}
              className="px-3 py-2 text-blue-500 bg-blue-100 rounded"
            >
              Add Skill
            </button>
          </>
        )}

        {currentStep === 4 && (
          <>
            {/* Step 5: University */}
            <h3 className="text-xl font-semibold mb-4">University</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="University Name"
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.university?.name ? "border-red-500" : "border-gray-300"
                }`}
                {...register("university.name")}
              />
              {errors.university?.name && <p className="text-red-500 text-xs">{errors.university.name.message}</p>}

              <input
                type="text"
                placeholder="City"
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.university?.city ? "border-red-500" : "border-gray-300"
                }`}
                {...register("university.city")}
              />
              {errors.university?.city && <p className="text-red-500 text-xs">{errors.university.city.message}</p>}

              <input
                type="text"
                placeholder="Domain"
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.university?.domain ? "border-red-500" : "border-gray-300"
                }`}
                {...register("university.domain")}
              />
              {errors.university?.domain && <p className="text-red-500 text-xs">{errors.university.domain.message}</p>}

              <input
                type="number"
                placeholder="Passout Year"
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.university?.passoutYear ? "border-red-500" : "border-gray-300"
                }`}
                {...register("university.passoutYear")}
              />
              {errors.university?.passoutYear && <p className="text-red-500 text-xs">{errors.university.passoutYear.message}</p>}
            </div>
          </>
        )}

        {currentStep === 5 && (
          <>
            {/* Step 6: Achievements */}
            <h3 className="text-xl font-semibold mb-4">Achievements</h3>
            <div className="space-y-4">
              <textarea
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.achievements ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Your Achievements"
                {...register("achievements")}
              ></textarea>
              {errors.achievements && <p className="text-red-500 text-xs">{errors.achievements.message}</p>}
              
              <input
                type="text"
                placeholder="Other Activities"
                className="w-full px-3 py-2 border rounded-md"
                {...register("activities")}
              />
            </div>
          </>
        )}

        {/* Step Navigation Buttons */}
        <div className="flex justify-between mt-8">
          {currentStep > 0 && (
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              onClick={() => setCurrentStep((prev) => prev - 1)}
            >
              Previous
            </button>
          )}
          {currentStep < steps.length - 1 && (
            <button
              type="button"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => setCurrentStep((prev) => prev + 1)}
            >
              Next
            </button>
          )}
          {currentStep === steps.length - 1 && (
            <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ProfileStepperForm;
