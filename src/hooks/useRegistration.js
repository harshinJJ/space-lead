import { useEffect, useRef, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

import { isValidPhoneNumber } from "react-phone-number-input";
import toast from "react-hot-toast";

import useDebounce from "@/hooks/useDebounce";
import { separatePhoneNumber } from "@/utils/functions";
import RegistrationServices from "@/services/registrationServices";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const useRegistration = ({ type, onSuccess }) => {
  const fieldRefs = useRef({});
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [loading, setLoading] = useState(true);
  const [regData, setRegData] = useState(null);
  const [beforePayment, setBeforePayment] = useState(false);

  const { executeRecaptcha } = useGoogleReCaptcha();
  const [showV2, setShowV2] = useState(false);
  const [captcha, setCaptcha] = useState(null);

  const setRef = (field) => (el) => {
    fieldRefs.current[field] = el;
  };

  const initialValues = {
    title: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    institution: "",
    country: "",
    nationality: "",
    studentId: "",
    jobTitle: "",
    companyName: "",
    isOldFile: "",
  };

  const validationSchema = Yup.object({
    title: Yup.object().required("Title is required"),
    firstName: Yup.string()
      .required("This field is required")
      .matches(/^[A-Za-z\s]+$/, "First name must contain only letters"),
    lastName: Yup.string()
      .required("This field is required")
      .matches(/^[A-Za-z\s]+$/, "Last Name must contain only letters"),
    phoneNumber: Yup.string()
      .required("This field is required")
      .test("is-valid", "Mobile Number is not valid", (value) =>
        isValidPhoneNumber(value || "")
      ),
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
    country: Yup.object().required("This field is required"),
    nationality: Yup.object().required("This field is required"),
    // Student specific
    institution: Yup.string().when([], {
      is: () => type === "student",
      then: (schema) =>
        schema
          .required("This field is required")
          .test(
            "invalid-institution-name",
            "Invalid Institution Name",
            (value) => {
              if (!value) return true;

              const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              const specialCharPattern = /[^a-zA-Z0-9\s&'’.-]/;
              const numericOnlyPattern = /^\d+$/;

              return (
                !emailPattern.test(value) &&
                !specialCharPattern.test(value) &&
                !numericOnlyPattern.test(value.trim())
              );
            }
          ),
      otherwise: (schema) => schema.notRequired(),
    }),
    studentId: Yup.mixed().when([], {
      is: () => type === "student",
      then: (schema) => schema.required("Student ID file is required"),
    }),

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
      then: (schema) =>
        schema
          .required("This field is required")
          .test("invalid-companyname", "Invalid Company Name", (value) => {
            if (!value) return true;

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // block emails
            const allowedPattern = /^[a-zA-Z0-9\s&'’.-]+$/; // allow only valid chars
            const numericOnlyPattern = /^\d+$/; // block only numbers
            const onlySpecialsPattern = /^[^a-zA-Z0-9]+$/; // block only specials (.,- etc.)

            return (
              !emailPattern.test(value) &&
              allowedPattern.test(value) &&
              !numericOnlyPattern.test(value.trim()) &&
              !onlySpecialsPattern.test(value.trim()) // block if only special chars
            );
          }),
      otherwise: (schema) => schema.notRequired(),
    }),
  });

  const billingInitialValue = {
    billing_full_name: "",
    billing_job_title: "",
    billing_company_name: "",
    billing_company_country: "",
    billing_po_box: "",
    billing_vat_number: "",
    billing_address: "",
  };
  const billingValidationSchema = Yup.object().shape({
    billing_full_name: Yup.string()
      .required("Full Name is required")
      .matches(
        /^[A-Za-z\s]+$/,
        "Full name must contain only letters and spaces"
      ),
    billing_job_title: Yup.string()
      .required("Job Title is required")
      // .test(
      //   "no-leading-trailing-space",
      //   "Job title must not start or end with space.",
      //   (value) => {
      //     if (!value) return true;
      //     return value === value.trim();
      //   }
      // )
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
    billing_company_name: Yup.string()
      .required("Company Name is required")
      .test("invalid-companyname", "Invalid Company Name", (value) => {
        if (!value) return true;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // block emails
        const allowedPattern = /^[a-zA-Z0-9\s&'’.-]+$/; // allow only valid chars
        const numericOnlyPattern = /^\d+$/; // block only numbers
        const onlySpecialsPattern = /^[^a-zA-Z0-9]+$/; // block only specials (.,- etc.)

        return (
          !emailPattern.test(value) &&
          allowedPattern.test(value) &&
          !numericOnlyPattern.test(value.trim()) &&
          !onlySpecialsPattern.test(value.trim()) // block if only special chars
        );
      }),
    billing_company_country: Yup.object().required("Country is required"),
    billing_po_box: Yup.string()
      // .required("P.O Box is required")
      .matches(/^\d+$/, "P.O Box must contain only numbers")
      .max(8, "P.O Box must be at most 8 digits"),
    billing_address: Yup.string().required("Address is required"),
    // .test(
    //   "no-leading-trailing-space",
    //   "Address must not start or end with space.",
    //   (value) => {
    //     if (!value) return true;
    //     return value === value.trim();
    //   }
    // ),
    billing_vat_number: Yup.string().matches(
      /^[a-zA-Z0-9]*$/,
      "VAT Number must be alphanumeric"
    ),
    // .max(20, "VAT Number must be at most 20 characters"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      //   if (beforePayment) {
      //     setRegData(values);
      //     billingFormik.setFieldValue(
      //       "billing_full_name",
      //       `${values.firstname} ${values.lastname}`
      //     );
      //     billingFormik.setFieldValue("billing_job_title", values.jobtitle);
      //     billingFormik.setFieldValue("billing_company_name", values.companyName);

      //     window.scrollTo({ top: 0, behavior: "smooth" });
      //   } else {
      onSendRegister(values);
      //   }
    },
    validateOnBlur: true,
    validateOnChange: true,
  });
  const billingFormik = useFormik({
    initialValues: billingInitialValue,
    validationSchema: billingValidationSchema,
    onSubmit: (values) => {
      onSendRegister(regData, values);
    },
  });

  const onSendRegister = async (item) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (key === "studentId" && value) {
        formData.append(key, value); // append File
      } else {
        formData.append(key, value);
      }
    });

    if (!showV2) {
      const token = await executeRecaptcha("submit");
      if (token) {
        formData.append("reCaptchaToken", token);
        formData.append("reCaptchaType", "v3");
      } else {
        setShowV2(true);
        scrollToField("recaptcha");
        return;
      }
    } else {
      if (recaptchaToken) {
        formData.append("reCaptchaToken", recaptchaToken);
        formData.append("reCaptchaType", "v2");
      } else {
        scrollToField("recaptcha");
        return;
      }
    }
    if (formData.title && formData.title.value) {
      formData.append("title", formData.title.value);
    }
    if (formData.country && formData.country.name) {
      formData.append("country", formData.country.value);
    }
    if (formData.nationality && formData.nationality.name) {
      formData.append("nationality", formData.nationality.value);
    }
    const phone = separatePhoneNumber(formData.phoneNumber);

    formData.append("phoneNumber", phone.nationalNumber || "");
    formData.append("country_code", phone.countryCode || "");

    RegistrationServices.createFormData(formData)
      .then((res) => {
        if (res.result === "success") {
          onSuccess && onSuccess(true);
          formik.resetForm();
          // billingFormik.resetForm();
          window?.scrollTo({ top: 0, behavior: "smooth" });
        } else if (res?.errors) {
          Object.keys(errors).forEach((field) => {
            formik.setFieldTouched(field, true, false);
            formik.setFieldError(field, errors[field]);
            scrollToField(field);
            return;
          });
        }
        // if (res.status == 200) {
        //   formik.resetForm();
        //   billingFormik.resetForm();
        //   toast.success(
        //     res?.data?.message || "Registration completed successfully."
        //   );
        //   if (res.data?.redirect_type == "payment") {
        //     if (!!res.data?.payment_data?.redirect_url) {
        //       window.location.href = res.data?.payment_data?.redirect_url;
        //     } else {
        //       toast.error("Try Again");
        //     }
        //   } else {
        //     navigate(`/registration-status/${res.data.uid}`);
        //   }
        // } else {
        //   if (res?.response?.data?.validation_errors?.length > 0) {
        //     const errors =
        //       res?.response?.data?.validation_errors[0]?.error ??
        //       res?.response?.data?.validation_errors[0]?.errors;
        //     if (errors["emailid"]) {
        //       toast.error(
        //         "This email is already registered. Click Login to log back in to complete/edit your registration"
        //       );
        //       //   alertToast.show({
        //       //     message:
        //       //       "This email is already registered. Click Login to log back in to complete/edit your registration",
        //       //     onClick: () => {
        //       //       navigate("/auth/login");
        //       //     },
        //       //     timeout: 60000,
        //       //     buttonName: "Login",
        //       //   });
        //       return;
        //     }
        //     if (errors) {
        //       Object.keys(errors).forEach((field) => {
        //         formik.setFieldTouched(field, true, false);
        //         formik.setFieldError(field, errors[field]);
        //         scrollToField(field);
        //         return;
        //       });
        //     }
        //   } else {
        //     toast.error(
        //       res?.response?.data?.message ||
        //         res?.response?.data?.detail ||
        //         "Registration failed. Please try again."
        //     );
        //     // alertToast.show({
        //     //   message:
        //     //     res?.response?.data?.message ||
        //     //     res?.response?.data?.detail ||
        //     //     "Registration failed. Please try again.",
        //     //   onClick: () => {
        //     //     // console.log("User clicked YES!");
        //     //   },
        //     //   timeout: 3000, // closes automatically after 3 seconds
        //     // });
        //   }
        // }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // abandoned register
  const isFieldValid = async (fieldName) => {
    try {
      const fieldSchema = Yup.reach(validationSchema, fieldName);
      await fieldSchema.validate(formik.values[fieldName]);
      return true;
    } catch (err) {
      return false;
    }
  };
  const abandonedRegister = async () => {
    if (
      !!formik.values.firstname &&
      !!formik.values.lastname &&
      !!formik.values.emailid
    ) {
      const fNameValidate = await isFieldValid("firstname");
      const lNameValidate = await isFieldValid("lastname");
      const emailValidate = await isFieldValid("emailid");
      const isValidEmailId = isValidEmail(formik.values.emailid);
      if (fNameValidate && lNameValidate && emailValidate && isValidEmailId) {
        const emailFromSession = sessionStorage.getItem(
          "abandonedRegisterEmail"
        );
        if (!!emailFromSession && emailFromSession === formik.values.emailid) {
          return;
        } else {
          const payload = {
            first_name: formik.values.firstname,
            last_name: formik.values.lastname,
            email: formik.values.emailid,
          };
          RegistrationService.abandoned(payload).then(async (res) => {
            if (SUCCESS_CODES.includes(res.status)) {
              sessionStorage.setItem(
                "abandonedRegisterEmail",
                formik.values.emailid
              );
            }
          });
        }
      }
    }
  };
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
    console.log("handleFormSubmit");
    const errors = await formik.validateForm();

    // const billingErrors =
    //   ticket.is_free || !beforePayment
    //     ? {}
    //     : await billingFormik.validateForm();
    // console.log(errors, billingErrors, "errors");
    formik.setTouched(
      Object.keys(formik.initialValues).reduce((acc, key) => {
        acc[key] = true;
        return acc;
      }, {}),
      true
    );
    // billingFormik.setTouched(
    //   Object.keys(billingFormik.initialValues).reduce((acc, key) => {
    //     acc[key] = true;
    //     return acc;
    //   }, {}),
    //   true
    // );
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

      const priorityOrder = [
        "title",
        "firstname",
        "lastname",
        "phoneNumber",
        "email",
        "institution",
        "country",
        "nationality",
        "studentId",
        "jobTitle",
        "companyName",
        "isOldFile",
        "billing_full_name",
        "billing_job_title",
        "billing_company_name",
        "billing_company_country",
        "billing_po_box",
        "billing_vat_number",
        "billing_address",
        "billing_city",
        "billing_pin_code",
      ];
      const firstError = priorityOrder.find((key) => errorKeys.includes(key));
      scrollToField(firstError);
      return;
    }
    formik.handleSubmit();
  };
  const onSubmitRegistration = useDebounce(handleFormSubmit, 300);

  const handleBillingSubmit = async () => {
    if (beforePayment && totalPrice > 0) {
      const errors = await billingFormik.validateForm();
      billingFormik.setTouched(
        Object.keys(billingFormik.initialValues).reduce((acc, key) => {
          acc[key] = true;
          return acc;
        }, {}),
        true
      );
      const errorKeys = Object.keys(errors);
      if (errorKeys.length > 0) {
        const errors = billingFormik.errors;
        const hasErrors = errors && Object.keys(errors).length > 0;
        if (hasErrors) {
          Object.keys(errors).forEach((field) => {
            billingFormik.setFieldTouched(field, true, false);
            billingFormik.setFieldError(field, errors[field]);
          });
        }
        const priorityOrder = [
          "billing_full_name",
          "billing_job_title",
          "billing_company_name",
          "billing_company_country",
          "billing_po_box",
          "billing_address",
          "billing_vat_number",
        ];
        const firstError = priorityOrder.find((key) => errorKeys.includes(key));
        scrollToField(firstError);
        return;
      }
      billingFormik.handleSubmit();
    } else {
      onSendRegister(regData);
    }
  };
  const onSubmitBilling = useDebounce(handleBillingSubmit, 300);

  return {
    formik,
    setRef,
    abandonedRegister,
    onSubmitRegistration,
    setRecaptchaToken,
    loading,
    beforePayment,
    billingFormik,
    onSubmitBilling,
    showV2,
  };
};

export default useRegistration;
