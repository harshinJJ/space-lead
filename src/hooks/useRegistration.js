import { useEffect, useRef, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

import { isValidPhoneNumber } from "react-phone-number-input";
import toast from "react-hot-toast";

import useDebounce from "@/hooks/useDebounce";
import { separatePhoneNumber } from "@/utils/functions";
import RegistrationServices from "@/services/registrationServices";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { SUCCESS_CODES } from "@/data/successCodes";

const useRegistration = ({ type, session }) => {
  const fieldRefs = useRef({});
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [success, setSuccess] = useState(false);
  const [successInfo, setSuccessInfo] = useState();

  const { executeRecaptcha } = useGoogleReCaptcha();
  const [showV2, setShowV2] = useState(false);

  const setRef = (field) => (el) => {
    fieldRefs.current[field] = el;
  };

  const initialValues = {
    title: "",
    firstname: "",
    lastname: "",
    phoneNumber: "",
    email: "",
    institution: "",
    country: "",
    nationality: "",
    user_document: "",
    jobtitle: "",
    companyname: "",
    isOldFile: "",
  };
  const validationSchema = Yup.object({
    title: Yup.object().required("Title is required"),
    firstname: Yup.string()
      .required("This field is required")
      .matches(/^[A-Za-z\s]+$/, "First name must contain only letters")
      .test(
        "not-only-spaces",
        "Invalid first name",
        (value) => value && value.trim().length > 0
      ),
    lastname: Yup.string()
      .required("This field is required")
      .matches(/^[A-Za-z\s]+$/, "Last Name must contain only letters")
      .test(
        "not-only-spaces",
        "Invalid last name",
        (value) => value && value.trim().length > 0
      ),
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
      is: () =>
        session?.sales_ticket_type_name?.toLowerCase()?.startsWith("student"),
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
          )
          .test(
            "not-only-spaces",
            "Invalid Institution Name",
            (value) => value && value.trim().length > 0
          ),
      otherwise: (schema) => schema.notRequired(),
    }),
    user_document: Yup.mixed().when([], {
      is: () => session?.document_required,
      then: (schema) => schema.required("ID is required"),
    }),

    // Professional specific
    jobtitle: Yup.string().when([], {
      is: () =>
        session?.sales_ticket_type_name
          ?.toLowerCase()
          ?.startsWith("professional"),
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
          })
          .test(
            "not-only-spaces",
            "Invalid Job Title",
            (value) => value && value.trim().length > 0
          ),
      otherwise: (schema) => schema.notRequired(),
    }),
    companyname: Yup.string().when([], {
      is: () =>
        session?.sales_ticket_type_name
          ?.toLowerCase()
          ?.startsWith("professional"),
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
          })
          .test(
            "not-only-spaces",
            "Invalid Company Name",
            (value) => value && value.trim().length > 0
          ),
      otherwise: (schema) => schema.notRequired(),
    }),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onSendRegister(values);
    },
    validateOnBlur: true,
    validateOnChange: true,
  });

  const onSendRegister = async (item) => {
    const payload = { form_data: { ...item } };
    if (session.id) {
      payload.form_data.ticket_id = session.id;
      payload.form_data.event_id = session.event_id;
      payload.currency_name = session.currency_name;
    }

    if (item.title && item.title.value) {
      payload.form_data.title = item.title.value;
    }
    if (item.country && item.country.name) {
      payload.form_data.country = item.country.name;
    }
    if (item.nationality && item.nationality.name) {
      payload.form_data.nationality = item.nationality.name;
    }
    const phone = separatePhoneNumber(item.phoneNumber);

    payload.form_data.phoneNumber = phone.nationalNumber;
    payload.form_data.country_code = phone.countryCode;

    if (!showV2) {
      const token = await executeRecaptcha("submit");
      if (token) {
        payload["recaptcha_token"] = token;
        payload["recaptcha_type"] = "v3";
      } else {
        setShowV2(true);
        scrollToField("recaptcha");
        return;
      }
    } else {
      if (recaptchaToken) {
        payload["recaptcha_token"] = recaptchaToken;
        payload["recaptcha_type"] = "v2";
      } else {
        scrollToField("recaptcha");
        return;
      }
    }
    if (
      session?.sales_ticket_type_name?.toLowerCase()?.startsWith("professional")
    ) {
      delete payload.form_data.institution;
    }
    if (session?.sales_ticket_type_name?.toLowerCase()?.startsWith("student")) {
      delete payload.form_data.jobtitle;
      delete payload.form_data.companyname;
    }
    // deleting unwanted values
    delete payload.form_data.isOldFile;
    delete payload.form_data.user_document;

    const formData = new FormData();
    formData.append("payload", JSON.stringify(payload));
    if (item.user_document) {
      formData.append("user_document", item.user_document);
    }

    RegistrationServices.createFormData(formData)
      .then((res) => {
        if (SUCCESS_CODES.includes(res.status) && res.data) {
          formik.setSubmitting(false);
          if (res?.data?.redirect_type == "payment" && res.data?.payment_url) {
            window.location.href = res.data?.payment_url;
          } else {
            setSuccess(true);
            setSuccessInfo(res?.data?.data);
            formik.resetForm();
            window?.scrollTo({ top: 0, behavior: "smooth" });
          }
        } else if (res?.data.errors) {
          const errors = res?.data.errors;
          Object.keys(errors).forEach((field) => {
            formik.setFieldTouched(field, true, false);
            formik.setFieldError(field, errors[field]);
            scrollToField(field);
            formik.setSubmitting(false);
          });
        } else if (res?.message) {
          toast.error(res.message, { id: "register-toast" });
          formik.setSubmitting(false);
        }
      })
      .catch((error) => {
        console.log(error);
        formik.setSubmitting(false);
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

      const priorityOrder = [
        "title",
        "firstname",
        "lastname",
        "phoneNumber",
        "email",
        "institution",
        "country",
        "nationality",
        "user_document",
        "jobtitle",
        "companyname",
        "isOldFile",
      ];
      const firstError = priorityOrder.find((key) => errorKeys.includes(key));
      scrollToField(firstError);
      return;
    }
    formik.handleSubmit();
  };
  const onSubmitRegistration = useDebounce(handleFormSubmit, 300);

  return {
    formik,
    setRef,
    abandonedRegister,
    onSubmitRegistration,
    setRecaptchaToken,
    showV2,
    success,
    setSuccess,
    successInfo,
    setSuccessInfo,
  };
};

export default useRegistration;
