"use client";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import BadgePreview from "./BadgePreview";
import TicketSummary from "./TicketSummary";
import FormInput from "@/components/formInputs/FormInput";
import Label from "@/components/common/Label";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import PhoneInput from "@/components/formInputs/PhoneInput";
import Select from "react-select";
import FormSelect from "@/components/formInputs/FormSelect";

const titles = [
  { label: "Mr.", value: "mr" },
  { label: "Ms.", value: "ms" },
  { label: "Dr.", value: "dr" },
  { label: "Prof.", value: "prof" },
];

export default function RegistrationForm({
  type,
  paid,
  session = {},
  onSuccess,
}) {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const formData = watch();

  const onSubmit = (data) => {
    onSuccess && onSuccess(true);
    window?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <p className="uppercase text-lg text-center">
        Please enter your information
      </p>
      <div className="flex flex-col md:flex-row gap-5 xl:gap-10 2xl:gap-22.5 w-full  text-[#000000] bg-white rounded-3xl p-5 lg:px-5 xl:px-14 lg:pt-6 lg:pb-12.25">
        <div className="flex-1">
          <div className="bg-white/10  text-[#000000B2] rounded-xl mb-4">
            <p className="font-encode-sans-semi-condensed font-light text-sm text-[#31313B] mb-1">
              Please enter your details below, Fields marked with a * are
              mandatory.
            </p>
            <div className="text-sm text-[#F82D2D] font-encode-sans-semi-condensed font-[500] mb-11.5">
              *When adding your phone number, ensure your country code is
              entered first, e.g. +966*
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full grid grid-cols-1 md:grid-cols-2 [&>div]:col-span-2 [&>div]:xl:col-span-1 gap-4 gap-y-6"
            >
              <div className="flex items-start gap-4">
                {/* Title */}
                <div>
                  <Label required={true}>Title</Label>
                  <Controller
                    name="title"
                    control={control}
                    rules={{ required: "Title is required" }}
                    defaultValue={titles[0]}
                    render={({ field }) => (
                      <FormSelect
                        instanceId={"title-select"}
                        {...field}
                        options={titles}
                      />
                    )}
                  />
                  {errors.title && (
                    <span className="text-red-500 text-xs">
                      {errors.title.message}
                    </span>
                  )}
                </div>
                <div className="w-full">
                  {/* First Name */}
                  <Label required={true}>First Name</Label>
                  <Controller
                    name="firstName"
                    control={control}
                    rules={{ required: "First name is required" }}
                    defaultValue={""}
                    render={({ field }) => (
                      <FormInput {...field} placeholder="First name" />
                    )}
                  />
                  {errors.firstName && (
                    <span className="text-red-500 text-xs">
                      {errors.firstName.message}
                    </span>
                  )}
                </div>
              </div>
              {/* Last Name */}
              <div>
                <Label required={true}>Last Name</Label>
                <Controller
                  name="lastName"
                  control={control}
                  rules={{ required: "Last name is required" }}
                  defaultValue={""}
                  render={({ field }) => (
                    <FormInput {...field} placeholder="Last name" />
                  )}
                />
                {errors.lastName && (
                  <span className="text-red-500 text-xs">
                    {errors.lastName.message}
                  </span>
                )}
              </div>
              {/* Phone */}
              <div>
                <Label required={true}>Phone No.</Label>
                <Controller
                  name="phone"
                  control={control}
                  defaultValue={""}
                  rules={{
                    required: "Phone number is required",
                    pattern: {
                      value: /^\+\d{1,3}\d{7,}$/,
                      message: "Enter a valid phone number ",
                    },
                  }}
                  render={({ field }) => (
                    // <FormInput {...field} placeholder="Phone number" />
                    <PhoneInput {...field} placeholder="Phone number" />
                  )}
                />
                {errors.phone && (
                  <span className="text-red-500 text-xs">
                    {errors.phone.message}
                  </span>
                )}
              </div>
              {/* Email */}
              <div>
                <Label required={true}>Email</Label>
                <Controller
                  name="email"
                  defaultValue={""}
                  control={control}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                      message: "Enter a valid email address",
                    },
                  }}
                  render={({ field }) => (
                    <FormInput {...field} placeholder="Email" />
                  )}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs">
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Institution Name (Student only) */}
              {type === "student" && (
                <>
                  <div>
                    <Label required={true}>Institution Name</Label>
                    <Controller
                      name="institution"
                      defaultValue={""}
                      control={control}
                      rules={{ required: "Institution name is required" }}
                      render={({ field }) => (
                        <FormInput {...field} placeholder="Institution name" />
                      )}
                    />
                    {errors.institution && (
                      <span className="text-red-500 text-xs">
                        {errors.institution.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <Label required={true}>Student ID</Label>
                    <Controller
                      name="studentId"
                      defaultValue={""}
                      control={control}
                      rules={{ required: "Student ID is required" }}
                      render={({ field }) => (
                        <FormInput {...field} placeholder="Student ID" />
                      )}
                    />
                    {errors.studentId && (
                      <span className="text-red-500 text-xs">
                        {errors.studentId.message}
                      </span>
                    )}
                  </div>
                </>
              )}

              {/* Professional only: Company Name */}
              {type === "professional" && (
                <>
                  <div>
                    <Label required={true}>Job Title</Label>
                    <Controller
                      name="jobTitle"
                      defaultValue={""}
                      control={control}
                      rules={{ required: "Job title is required" }}
                      render={({ field }) => (
                        <FormInput {...field} placeholder="Job title" />
                      )}
                    />
                    {errors.jobTitle && (
                      <span className="text-red-500 text-xs">
                        {errors.jobTitle.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <Label required={true}>Company Name*</Label>
                    <Controller
                      name="company"
                      defaultValue={""}
                      control={control}
                      rules={{ required: "Company name is required" }}
                      render={({ field }) => (
                        <FormInput {...field} placeholder="Company name" />
                      )}
                    />
                    {errors.company && (
                      <span className="text-red-500 text-xs">
                        {errors.company.message}
                      </span>
                    )}
                  </div>
                </>
              )}

              <PrimaryButton
                type="submit"
                className="gap-2.5 text-lg col-span-2 w-fit px-7.5 font-dm-sans font-light tracking-[1px]"
              >
                <span>Complete Your Registration </span>

                <svg
                  width="21"
                  height="16"
                  viewBox="0 0 21 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.9287 9.08276L11.8496 15.1619C11.7422 15.2693 11.6152 15.3523 11.4688 15.4109C11.3223 15.4695 11.1709 15.4988 11.0146 15.4988C10.8486 15.4988 10.6899 15.4695 10.5386 15.4109C10.3872 15.3523 10.2578 15.2693 10.1504 15.1619C9.89648 14.9275 9.76953 14.6394 9.76953 14.2976C9.76953 13.9558 9.89648 13.6726 10.1504 13.448L14.1348 9.43433H2.51855C2.17676 9.43433 1.88867 9.31714 1.6543 9.08276C1.41992 8.84839 1.30273 8.5603 1.30273 8.21851C1.30273 7.89624 1.41992 7.61304 1.6543 7.3689C1.88867 7.12476 2.17676 7.00269 2.51855 7.00269H14.1348L10.1504 3.01831C9.89648 2.78394 9.76953 2.49585 9.76953 2.15405C9.76953 1.81226 9.89648 1.52905 10.1504 1.30444C10.375 1.0603 10.6582 0.938232 11 0.938232C11.3418 0.938232 11.625 1.0603 11.8496 1.30444L17.9287 7.38354C18.1729 7.60815 18.2949 7.89136 18.2949 8.23315C18.2949 8.57495 18.1729 8.85815 17.9287 9.08276Z"
                    fill="white"
                  />
                </svg>
              </PrimaryButton>
            </form>
          </div>
          {session?.price > 0 && (
            <TicketSummary price={session.price} currency={session.currency} />
          )}
        </div>
        <div className="w-full md:w-80 lg:w-86.5 flex-shrink-0 flex flex-col items-center justify-start xl:px-4.5">
          <BadgePreview
            name={
              formData.firstName || formData.lastName
                ? `${formData.firstName} ${formData.lastName || ""}`
                : undefined
            }
            category={type}
            title={formData.jobTitle || ""}
            organisation={formData.company || ""}
            badgeId={formData.studentId}
          />
        </div>
      </div>
    </>
  );
}
