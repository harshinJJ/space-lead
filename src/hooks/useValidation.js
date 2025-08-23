import React from "react";
import * as Yup from "yup";
import { isValidPhoneNumber } from "react-phone-number-input";

const useValidation = ({ type = "" }) => {
  // common
  const nameSchema = Yup.string()
    .min(2, "Must be at least 2 characters")
    .max(50, "Cannot exceed 50 characters")
    .required("This field is required");

  const emailSchema = Yup.string()
    .email("Enter a valid email address")
    .required("Email is required");

  const phoneSchema = Yup.string()
    .required("Phone number is required")
    .test("is-valid-phone", "Phone number is invalid", (value) =>
      value ? isValidPhoneNumber(value) : false
    );
  //   const phoneSchema = Yup.string()
  //     .matches(/^\+?\d+$/, "Phone number is invalid")
  //     .min(10, "Must be at least 10 digits")
  //     .max(15, "Cannot be more than 15 digits")
  //     .required("Phone number is required");

  // blocks
  const contactFormSchema = Yup.object({
    name: nameSchema,
    email: emailSchema,
    phone: phoneSchema,
    message: Yup.string()
      .min(20, "Message must be at least 20 characters")
      .max(500, "Message cannot be more than 500 characters")
      .required("Message is required"),
  });

  const registerFormSchema = Yup.object({
    title: Yup.object().required("Title is required"),
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    phone: phoneSchema,
    email: emailSchema,

    // Student specific
    institution: Yup.string().when([], {
      is: () => type === "student",
      then: (schema) => schema.required("Institution name is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    studentId: Yup.mixed().required("Student ID file is required"),

    // Professional specific
    jobTitle: Yup.string().when([], {
      is: () => type === "professional",
      then: (schema) => schema.required("Job title is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    company: Yup.string().when([], {
      is: () => type === "professional",
      then: (schema) => schema.required("Company name is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
  });
  return {
    contactFormSchema,
    registerFormSchema,
  };
};

export default useValidation;
