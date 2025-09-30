import { useFormik } from "formik";
import React, { useRef, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import toast from "react-hot-toast";
import * as Yup from "yup";
import useDebounce from "./useDebounce";
import RegistrationServices from "@/services/registrationServices";
import { separatePhoneNumber } from "@/utils/functions";
import { isValidPhoneNumber } from "react-phone-number-input";
import { SUCCESS_CODES } from "@/data/successCodes";

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
    firstname: "",
    email: "",
    phoneNumber: "",
    message: "",
  };
  const validationSchema = Yup.object({
    firstname: Yup.string()
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
    phoneNumber: Yup.string()
      .required("This field is required")
      .test("is-valid", "Mobile Number is not valid", (value) =>
        isValidPhoneNumber(value || "")
      ),
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

      const priorityOrder = ["firstname", "email", "phoneNumber", "message"];
      const firstError = priorityOrder.find((key) => errorKeys.includes(key));
      scrollToField(firstError);
      return;
    }
    formik.handleSubmit();
  };
  const onSubmitRegistration = useDebounce(handleFormSubmit, 300);

  const onContactSubmit = async (values) => {
    const payload = { form_data:{...values} };
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
    const phone = separatePhoneNumber(values.phoneNumber);

    // payload.form_data.mobile = phone.nationalNumber;
    // payload.form_data.country_code = phone.countryCode;

    payload.form_data.mobile = phone.nationalNumber;
    payload.form_data.country_code = phone.countryCode;

    delete payload.form_data.phoneNumber

    const formData = new FormData();
    formData.append("payload", JSON.stringify(payload));

    RegistrationServices.submitContactForm(formData)
      .then((res) => {
        if (SUCCESS_CODES.includes(res.status) && res.data) {
          setShowSuccess(true);
          formik.resetForm();
          formik.setSubmitting(false);
        } else if (res?.data?.errors) {
          Object.keys(res.data.errors).forEach((field) => {
            formik.setFieldTouched(field, true, false);
            formik.setFieldError(field, errors[field]);
            scrollToField(field);
            formik.setSubmitting(false);
          });
        } else if (res?.message) {
          toast.error(res.message, { id: "contact-toast" });
          formik.setSubmitting(false);
        }
      })
      .catch((error) => {
        console.log(error);
        formik.setSubmitting(false);
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
