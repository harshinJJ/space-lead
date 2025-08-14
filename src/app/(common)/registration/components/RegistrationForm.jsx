'use client'
import React from "react";
import { Controller, useForm } from "react-hook-form";

const titles = ["Mr.", "Ms.", "Dr.", "Prof."];

export default function RegistrationForm({ type, paid, onSubmit, onChange, defaultValues = {} }) {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues });

  // Watch all fields for live badge update
  const values = watch();
  React.useEffect(() => {
    if (onChange) onChange(values);
  }, [values, onChange]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col gap-4">
        {/* Title */}
        <label className="text-sm font-semibold text-white">Title*</label>
        <Controller
          name="title"
          control={control}
          rules={{ required: "Title is required" }}
          render={({ field }) => (
            <select {...field} className="bg-white rounded px-3 py-2 w-full border focus:outline-none focus:ring-2 focus:ring-teal-400">
              <option value="">Select Title</option>
              {titles.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          )}
        />
        {errors.title && <span className="text-red-500 text-xs">{errors.title.message}</span>}

        {/* First Name */}
        <label className="text-sm font-semibold text-white">First Name*</label>
        <Controller
          name="firstName"
          control={control}
          rules={{ required: "First name is required" }}
          render={({ field }) => (
            <input {...field} className="bg-white rounded px-3 py-2 w-full border focus:outline-none focus:ring-2 focus:ring-teal-400" placeholder="First name" />
          )}
        />
        {errors.firstName && <span className="text-red-500 text-xs">{errors.firstName.message}</span>}

        {/* Last Name */}
        <label className="text-sm font-semibold text-white">Last Name*</label>
        <Controller
          name="lastName"
          control={control}
          rules={{ required: "Last name is required" }}
          render={({ field }) => (
            <input {...field} className="bg-white rounded px-3 py-2 w-full border focus:outline-none focus:ring-2 focus:ring-teal-400" placeholder="Last name" />
          )}
        />
        {errors.lastName && <span className="text-red-500 text-xs">{errors.lastName.message}</span>}

        {/* Phone */}
        <label className="text-sm font-semibold text-white">Phone No.*</label>
        <Controller
          name="phone"
          control={control}
          rules={{
            required: "Phone number is required",
            pattern: {
              value: /^\+\d{1,3}\d{7,}$/,
              message: "Enter a valid phone number with country code (e.g. +966...)"
            }
          }}
          render={({ field }) => (
            <input {...field} className="bg-white rounded px-3 py-2 w-full border focus:outline-none focus:ring-2 focus:ring-teal-400" placeholder="Phone number" />
          )}
        />
        {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}

        {/* Email */}
        <label className="text-sm font-semibold text-white">Email*</label>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
              message: "Enter a valid email address"
            }
          }}
          render={({ field }) => (
            <input {...field} className="bg-white rounded px-3 py-2 w-full border focus:outline-none focus:ring-2 focus:ring-teal-400" placeholder="Email" />
          )}
        />
        {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}

        {/* Institution Name (Student only) */}
        {type === "student" && (
          <>
            <label className="text-sm font-semibold text-white">Institution Name*</label>
            <Controller
              name="institution"
              control={control}
              rules={{ required: "Institution name is required" }}
              render={({ field }) => (
                <input {...field} className="bg-white rounded px-3 py-2 w-full border focus:outline-none focus:ring-2 focus:ring-teal-400" placeholder="Institution name" />
              )}
            />
            {errors.institution && <span className="text-red-500 text-xs">{errors.institution.message}</span>}

            <label className="text-sm font-semibold text-white">Student ID*</label>
            <Controller
              name="studentId"
              control={control}
              rules={{ required: "Student ID is required" }}
              render={({ field }) => (
                <input {...field} className="bg-white rounded px-3 py-2 w-full border focus:outline-none focus:ring-2 focus:ring-teal-400" placeholder="Student ID" />
              )}
            />
            {errors.studentId && <span className="text-red-500 text-xs">{errors.studentId.message}</span>}
          </>
        )}

        {/* Professional only: Company Name */}
        {type === "professional" && (
          <>
            <label className="text-sm font-semibold text-white">Company Name*</label>
            <Controller
              name="company"
              control={control}
              rules={{ required: "Company name is required" }}
              render={({ field }) => (
                <input {...field} className="bg-white rounded px-3 py-2 w-full border focus:outline-none focus:ring-2 focus:ring-teal-400" placeholder="Company name" />
              )}
            />
            {errors.company && <span className="text-red-500 text-xs">{errors.company.message}</span>}
          </>
        )}

        <button type="submit" className="bg-gradient-to-r from-teal-400 to-purple-500 text-white px-6 py-2 rounded-full font-semibold mt-6 w-full">Complete Your Registration →</button>
      </div>
    </form>
  );
}
