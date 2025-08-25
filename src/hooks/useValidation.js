import React from "react";
import * as Yup from "yup";
import { isValidPhoneNumber } from "react-phone-number-input";

const useValidation = (props) => {
  const { type = "" } = props || {}; // type can be 'student' or 'professional'
  // common
  const nameSchema = Yup.string()
    .min(2, "Must be at least 2 characters")
    .max(50, "Cannot exceed 50 characters")
    .required("This field is required");

  const emailSchema = Yup.string()
    .required("This field is required")
    .matches(
      /^[^\s].*[^\s]$|^[^\s]$/,
      "Email must not start or end with spaces"
    )
    .matches(
      /^(?!.*\.\.)(?!.*@.*\.(\w+)\.\1$)[a-zA-Z0-9](?:[a-zA-Z0-9._%+-]*[a-zA-Z0-9])?@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+$/,
      "Invalid email format"
    );

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
    phone: Yup.string()
      .matches(/^\+?\d+$/, "Phone number is invalid")
      .min(10, "Must be at least 10 digits")
      .max(15, "Cannot be more than 15 digits")
      .required("Phone number is required"),
    message: Yup.string()
      .min(20, "Message must be at least 20 characters")
      .max(500, "Message cannot be more than 500 characters")
      .required("Message is required"),
  });

  const registerFormSchema = Yup.object({
    title: Yup.object().required("Title is required"),
    firstName: Yup.string()
      .required("This field is required")
      .matches(/^[A-Za-z\s]+$/, "First name must contain only letters"),
    lastName: Yup.string()
      .required("This field is required")
      .matches(/^[A-Za-z\s]+$/, "Last Name must contain only letters"),
    phone: phoneSchema,
    email: emailSchema,

    // Student specific
    institution: Yup.string().when([], {
      is: () => type === "student",
      then: (schema) => schema.required("This field is required")
      .test("invalid-institution-name", "Invalid Institution Name", (value) => {
        if (!value) return true;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const specialCharPattern = /[^a-zA-Z0-9\s&'’.-]/;
        const numericOnlyPattern = /^\d+$/;

        return (
          !emailPattern.test(value) &&
          !specialCharPattern.test(value) &&
          !numericOnlyPattern.test(value.trim())
        );
      }),
      otherwise: (schema) => schema.notRequired(),
    }),
    studentId: Yup.mixed().required("Student ID file is required"),

    // Professional specific
    jobTitle: Yup.string().when([], {
      is: () => type === "professional",
      then: (schema) =>
        schema
          .required("This field is required")
          .test("invalid-jobtitle", "Invalid Job Title", (value) => {
            if (!value) return true;

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const specialCharPattern = /[^a-zA-Z0-9\s\/\-]/;
            const numericOnlyPattern = /^\d+$/;

            return (
              !emailPattern.test(value) &&
              !specialCharPattern.test(value) &&
              !numericOnlyPattern.test(value.trim())
            );
          }),
      otherwise: (schema) => schema.notRequired(),
    }),
    company: Yup.string().when([], {
      is: () => type === "professional",
      then: (schema) => schema.required("This field is required")
      .test("invalid-companyname", "Invalid Company Name", (value) => {
        if (!value) return true;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const specialCharPattern = /[^a-zA-Z0-9\s&'’.-]/;
        const numericOnlyPattern = /^\d+$/;

        return (
          !emailPattern.test(value) &&
          !specialCharPattern.test(value) &&
          !numericOnlyPattern.test(value.trim())
        );
      }),
      otherwise: (schema) => schema.notRequired(),
    }),
  });
  return {
    contactFormSchema,
    registerFormSchema,
  };
};

export default useValidation;
