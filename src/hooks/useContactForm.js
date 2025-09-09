import PublicServices from "@/services/publicServices";
import { useFormik } from "formik";
import React, { useRef, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import toast from "react-hot-toast";
import * as Yup from "yup";
import useDebounce from "./useDebounce";

const useContactForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [showV2, setShowV2] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const fieldRefs = useRef({});

  const setRef = (field) => (el) => {
    fieldRefs.current[field] = el;
  };

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("This field is required")
      .matches(/^[A-Za-z\s]+$/, "Name must contain only letters"),
    email: Yup.string()
      .required("This field is required")
      .matches(
        /^[^\s].*[^\s]$|^[^\s]$/,
        "Email must not start or end with spaces"
      )
      .matches(
        /^(?!.*\.\.)(?!.*@.*\.(\w+)\.\1$)[a-zA-Z0-9](?:[a-zA-Z0-9._%+-]*[a-zA-Z0-9])?@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+$/,
        "Invalid email format"
      ),
    phone: Yup.string()
      .matches(/^\+?\d+$/, "Phone number is invalid")
      .min(10, "Must be at least 10 digits")
      .max(15, "Cannot be more than 15 digits"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .max(500, "Message cannot be more than 500 characters")
      .required("Message is required"),
  });
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      onContactSubmit(values);
    },
    validateOnBlur: true,
    validateOnChange: true,
  });

  const scrollToField = (field) => {
    const ref = fieldRefs.current[field];
    if (ref && ref.scrollIntoView) {
      ref.scrollIntoView({ behavior: "smooth", block: "center" });
      ref.focus?.();
      document.querySelectorAll(".error-blink-bg").forEach((el) => {
        el.classList.remove("error-blink-bg");
      });
      setTimeout(() => {
        ref.classList.add("error-blink-bg");
      }, 100);
    }
  };

  const handleFormSubmit = async () => {
    const errors = await formik.validateForm();

    formik.setTouched(
      Object.keys(formik.initialValues).reduce((acc, key) => {
        acc[key] = true;
        return acc;
      }, {}),
      true
    );
    const errorKeys = Object.keys(errors);

    if (errorKeys.length > 0) {
      const errors = formik.errors;
      const hasErrors = errors && Object.keys(errors).length > 0;
      if (hasErrors) {
        Object.keys(errors).forEach((field) => {
          formik.setFieldTouched(field, true, false);
          formik.setFieldError(field, errors[field]);
        });
      }

      const priorityOrder = ["name", "email", "phone", "message"];
      const firstError = priorityOrder.find((key) => errorKeys.includes(key));
      scrollToField(firstError);
      return;
    }
    formik.handleSubmit();
  };
  const onSubmitRegistration = useDebounce(handleFormSubmit, 300);

  const onContactSubmit = async (values) => {
    let payload = { ...values };
    if (!showV2) {
      const token = await executeRecaptcha("submit");
      if (token) {
        payload.recaptchaToken = token;
        payload.recaptchaType = "v3";
      } else {
        setShowV2(true);
        scrollToField("recaptcha");
        return;
      }
    } else {
      if (recaptchaToken) {
        payload.recaptchaToken = recaptchaToken;
        payload.recaptchaType = "v2";
      } else {
        scrollToField("recaptcha");
        return;
      }
    }
    if (payload.title && payload.title.value) {
      payload.title = payload.title.value;
    }
    if (payload.country && payload.country.name) {
      payload.country = payload.country.name;
    }
    if (payload.nationality && payload.nationality.name) {
      payload.nationality = payload.nationality.name;
    }
    // const phone = separatePhoneNumber(payload.phoneNumber);

    // payload.phoneNumber = phone.nationalNumber || "";
    // payload.country_code = phone.countryCode || "";

    PublicServices.submitContactForm(payload)
      .then((res) => {
        if (res.result == "success") {
          setShowSuccess(true);
          formik.resetForm();
        } else {
          if (res?.errors) {
            Object.keys(res.errors).forEach((field) => {
              formik.setFieldTouched(field, true, false);
              formik.setFieldError(field, errors[field]);
              scrollToField(field);
              return;
            });
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    formik,
    onSubmitRegistration,
    showV2,
    setRecaptchaToken,
    setRef,
    showSuccess,
    setShowSuccess,
  };
};

export default useContactForm;
