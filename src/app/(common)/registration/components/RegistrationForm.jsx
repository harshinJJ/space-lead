"use client";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import BadgePreview from "./BadgePreview";
import TicketSummary from "./TicketSummary";
import FormInput from "@/components/formInputs/FormInput";
import Label from "@/components/common/Label";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import PhoneInput from "@/components/formInputs/PhoneInput";
import Select from "react-select";
import FormSelect from "@/components/formInputs/FormSelect";
import Error from "@/components/common/Error";
import { useFormik } from "formik";
import useValidation from "@/hooks/useValidation";
import dynamic from "next/dynamic";
import countryList from "@/../public/assets/json/countryList.json";
import titleList from "@/../public/assets/json/honorifics.json";
import publicServices from "@/services/publicServices";
import useDebounce from "@/hooks/useDebounce";
import ReCaptchaHandler, { ReCAPTCHAV2 } from "@/utils/ReCaptchaHandler";
import useRegistration from "@/hooks/useRegistration";

// import FileUplodCroper from "@/components/formInputs/FileUploader";
const FileUplodCroper = dynamic(
  () => import("@/components/formInputs/FileUploader"),
  { ssr: false }
);

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
  const { registerFormSchema } = useValidation({ type: type,onSuccess:onSuccess });
  const registerData = useRegistration({ type });
  const { formik, setRef, showV2, setRecaptchaToken } = registerData;
  const {
    errors,
    touched,
    values: formData,
    handleChange,
    handleBlur,
    setFieldValue,
    setFieldTouched,
    validateField,
  } = formik;

  // const {
  //   // values: formData,
  //   // errors,
  //   // touched,
  //   // handleChange,
  //   // handleBlur,
  //   handleSubmit,
  //   setFieldValue,
  //   isSubmitting,
  //   setFieldTouched,
  //   validateField,
  // } = useFormik({
  //   initialValues: {
  //     title: "",
  //     firstName: "",
  //     lastName: "",
  //     phoneNumber: "",
  //     email: "",
  //     institution: "",
  //     country: "",
  //     nationality: "",
  //     studentId: "",
  //     jobTitle: "",
  //     companyName: "",
  //     isOldFile: "",
  //   },
  //   validationSchema: registerFormSchema,
  //   onSubmit: useDebounce(
  //     async (values, { resetForm, setErrors, setSubmitting }) => {
  //       setSubmitting(true);
  //       const formData = new FormData();
  //       Object.entries(values).forEach(([key, value]) => {
  //         if (key === "studentId" && value) {
  //           formData.append(key, value); // append File
  //         } else {
  //           formData.append(key, value);
  //         }
  //       });
  //       if (isVerified) {
  //         formData.append("reCaptchaToken", captcha?.token);
  //         formData.append("reCaptchaType", captcha?.type);
  //       }

  //       const res = await submitContactForm(formData);

  //       if (res.result === "success") {
  //         onSuccess && onSuccess(true);
  //         resetForm();
  //         window?.scrollTo({ top: 0, behavior: "smooth" });
  //       } else if (res?.errors) {
  //         const errorList = {};
  //         Object.entries(res.errors).forEach(([key, value]) => {
  //           errorList[key] = value;
  //         });
  //         setErrors(errorList);
  //       }
  //       setSubmitting(false);
  //     }
  //   ),
  // });

  return (
    <>
      <p className="uppercase text-lg text-center">
        Please enter your information
      </p>
      <div className="flex flex-col md:flex-row gap-5 xl:gap-10 2xl:gap-22.5 w-full  text-black bg-white rounded-3xl p-5 lg:px-5 xl:px-14 lg:pt-6 lg:pb-12.25">
        <div className="flex-1">
          <div className="bg-white/10  text-black-b2 rounded-xl mb-4">
            <p className="font-light text-sm text-[#31313B] mb-1">
              Please enter your details below, Fields marked with a * are
              mandatory.
            </p>
            <div className="text-sm text-[#F82D2D] font-[500] mb-11.5">
              *When adding your phone number, ensure your country code is
              entered first, e.g. +966*
            </div>
            <form
              id="registrationForm"
              className="w-full grid grid-cols-1 md:grid-cols-2 [&>div]:col-span-2 [&>div]:xl:col-span-1 gap-4 gap-y-6"
            >
              <div className="flex items-start gap-4">
                {/* Title */}
                <div ref={setRef("title")} className="md:flex-7/20 flex-1/5">
                  <Label
                    htmlFor="react-select-title-select-input"
                    required={true}
                  >
                    Title
                  </Label>

                  <FormSelect
                    instanceId={"title-select"}
                    name="title"
                    placeholder="Title"
                    onChange={(option) => setFieldValue("title", option)}
                    onBlur={() => setFieldTouched("title", true)}
                    value={formData.title}
                    options={titleList}
                  />
                  {touched.title && <Error message={errors?.title} />}
                </div>
                <div
                  ref={setRef("firstName")}
                  className="w-full md:flex-13/20 flex-4/5"
                >
                  {/* First Name */}
                  <Label required={true}>First Name</Label>

                  <FormInput
                    name="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={formData.firstName}
                    placeholder="First name"
                  />
                  {touched.firstName && <Error message={errors?.firstName} />}
                </div>
              </div>
              {/* Last Name */}
              <div ref={setRef("lastName")}>
                <Label required={true}>Last Name</Label>
                <FormInput
                  name="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={formData.lastName}
                  placeholder="Last name"
                />
                {touched.lastName && <Error message={errors?.lastName} />}
              </div>
              {/* Phone */}
              <div ref={setRef("phoneNumber")}>
                <Label required={true}>Phone No.</Label>
                <PhoneInput
                  name="phoneNumber"
                  // onChange={handleChange}
                  onChange={(val) => setFieldValue("phoneNumber", val)}
                  onBlur={handleBlur}
                  value={formData.phoneNumber}
                  placeholder="Phone number"
                />
                {touched.phoneNumber && <Error message={errors?.phoneNumber} />}
              </div>
              {/* Email */}
              <div ref={setRef("email")}>
                <Label required={true}>Email</Label>
                <FormInput
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={formData.email}
                  placeholder="Email"
                />
                {touched.email && <Error message={errors?.email} />}
              </div>
              <div ref={setRef("country")}>
                <Label required={true}>Country of Residency</Label>
                <FormSelect
                  instanceId={"residency-select"}
                  name="country"
                  onChange={(option) => setFieldValue("country", option)}
                  placeholder="Country of Residency"
                  onBlur={() => setFieldTouched("country", true)}
                  valueKey="name"
                  labelKey="name"
                  value={formData.country}
                  options={countryList}
                />
                {touched.country && <Error message={errors?.country} />}
              </div>
              {/* Email */}
              <div ref={setRef("nationality")}>
                <Label required={true}>Nationality</Label>
                <FormSelect
                  instanceId={"nationality-select"}
                  name="nationality"
                  placeholder="Nationality"
                  onChange={(option) => setFieldValue("nationality", option)}
                  onBlur={() => setFieldTouched("nationality", true)}
                  valueKey="name"
                  labelKey="name"
                  value={formData.nationality}
                  options={countryList}
                />
                {/* <FormInput
                  name="nationality"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={formData.nationality}
                  placeholder="Nationality"
                /> */}
                {touched.nationality && <Error message={errors?.nationality} />}
              </div>

              {/* Institution Name (Student only) */}
              {type === "student" && (
                <>
                  <div ref={setRef("institution")}>
                    <Label required={true}>Institution Name</Label>
                    <FormInput
                      name="institution"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={formData.institution}
                      placeholder="Institution name"
                    />
                    {touched.institution && (
                      <Error message={errors?.institution} />
                    )}
                  </div>
                  <div ref={setRef("studentId")}>
                    <Label required={true}>Student ID</Label>
                    {/* <FormInput
                      name="studentId"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={formData.studentId}
                      placeholder="Student ID"
                    /> */}
                    <FileUplodCroper
                      defaultImage={
                        formData.studentId
                          ? URL.createObjectURL(formData.studentId)
                          : formData.isOldFile
                      }
                      onCropDone={async (val) => {
                        setFieldValue("studentId", val);
                        if (val) {
                          await setFieldTouched("studentId", true);
                          await validateField("studentId");
                        } else {
                          setFieldValue("isOldFile", "");
                        }
                      }}
                    />
                    {touched.studentId && <Error message={errors?.studentId} />}
                  </div>
                </>
              )}

              {/* Professional only: Company Name */}
              {type === "professional" && (
                <>
                  <div ref={setRef("jobTitle")}>
                    <Label required={true}>Job Title</Label>
                    <FormInput
                      name="jobTitle"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={formData.jobTitle}
                      placeholder="Job title"
                    />
                    {touched.jobTitle && <Error message={errors?.jobTitle} />}
                  </div>
                  <div ref={setRef("companyName")}>
                    <Label required={true}>Company Name</Label>
                    <FormInput
                      name="companyName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={formData.companyName}
                      placeholder="Company name"
                    />
                    {touched.companyName && (
                      <Error message={errors?.companyName} />
                    )}
                  </div>
                </>
              )}

              {showV2 && (
                <div ref={setRef("recaptcha")}>
                  <ReCAPTCHAV2 setCaptcha={setRecaptchaToken} />
                </div>
              )}

              <PrimaryButton
                type="button"
                onClick={registerData.onSubmitRegistration}
                className="gap-2.5 text-lg col-span-2 w-fit px-7.5 font-light tracking-[1px]"
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
            organisation={formData.companyName || ""}
            badgeId={"Badgeid"}
          />
        </div>
      </div>
    </>
  );
}
