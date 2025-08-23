"use client";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import Modal from "@/components/common/Modal";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^\+?\d+$/, "Phone number is invalid")
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number cannot be more than 15 digits")
    .required("Phone number is required"),
  message: Yup.string()
    .min(20, "Message must be at least 20 characters")
    .max(500, "Message cannot be more than 500 characters")
    .required("Message is required"),
});
const ContactForm = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const {
    handleSubmit,
    values,
    errors,
    handleChange,
    handleBlur,
    touched,
    resetForm,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema,
    validateOnChange: true, // Disable validation on field change
    validateOnBlur: true,
    onSubmit: (values) => {
      setShowSuccess(true);
      resetForm();
    },
  });

  return (
    <section className="bg-white bg-[url('/images/backgrounds/contact_form_bg.png')] bg-no-repeat bg-cover bg-[center_top] px-5 sm:px-0 lg:py-32.75 py-20 w-full">
      <Modal
        // timer={5000}
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
      >
        <div className="text-center">
          <h3 className="text-xl font-semibold text-green-600">
            🎉 Message Sent!
          </h3>
          <p className="text-gray-600 mt-2">
            Thank you for reaching out. We’ll get back to you soon.
          </p>
        </div>
      </Modal>
      <div className="container mx-auto">
        <p className="text-secondary text-2xl">Get Started</p>
        <div className="flex justify-between items-center lg:pe-69.5 mb-8">
          <h2 className="font-azonix text-2xl md:text-3xl lg:text-[2.5rem] lg:max-w-[25ch] mb-8 leading-tight text-gray-900">
            GET IN TOUCH WITH US. WE'RE HERE TO ASSIST YOU.
          </h2>

          <div className="hidden md:flex flex-col gap-6">
            <a
              href="#"
              className="w-12.5 h-12.5 flex items-center justify-center rounded-full border border-secondary text-secondary hover:bg-teal-50 transition"
            >
              <svg
                width="9"
                height="16"
                viewBox="0 0 9 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.70623 15.1464L2.68576 8.8871H0.0078125V6.20456H2.68576V4.4162C2.68576 2.00263 4.17783 0.839478 6.32721 0.839478C7.35678 0.839478 8.24165 0.916261 8.49952 0.950579V3.4729L7.00882 3.47358C5.83987 3.47358 5.61353 4.03 5.61353 4.84651V6.20456H8.93429L8.04165 8.8871H5.61352V15.1464H2.70623Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="#"
              className="w-12.5 h-12.5 flex items-center justify-center rounded-full border border-secondary text-secondary hover:bg-teal-50 transition"
            >
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_93_10234)">
                  <path
                    d="M12.7552 2.0481H5.25693C3.18635 2.0481 1.50781 3.71698 1.50781 5.77565V13.2308C1.50781 15.2894 3.18635 16.9583 5.25693 16.9583H12.7552C14.8258 16.9583 16.5043 15.2894 16.5043 13.2308V5.77565C16.5043 3.71698 14.8258 2.0481 12.7552 2.0481Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.0052 9.03414C12.0978 9.65459 11.9912 10.2882 11.7006 10.845C11.4101 11.4017 10.9503 11.8532 10.3868 12.1352C9.82331 12.4172 9.18472 12.5154 8.56187 12.4157C7.93902 12.3161 7.36363 12.0237 6.91754 11.5802C6.47145 11.1367 6.17738 10.5646 6.07716 9.94531C5.97693 9.32604 6.07566 8.69112 6.35929 8.13085C6.64292 7.57059 7.09701 7.1135 7.65698 6.82462C8.21694 6.53573 8.85427 6.42976 9.47831 6.52176C10.1149 6.61561 10.7042 6.91052 11.1592 7.36293C11.6142 7.81534 11.9108 8.40125 12.0052 9.03414Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <ellipse
                    cx="13.1289"
                    cy="5.40074"
                    rx="1.125"
                    ry="1.11827"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_93_10234">
                    <rect
                      width="17.9958"
                      height="17.8923"
                      fill="white"
                      transform="translate(0.0078125 0.555908)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a
              href="#"
              className="w-12.5 h-12.5 flex items-center justify-center rounded-full border border-secondary text-secondary hover:bg-teal-50 transition"
            >
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6406 8.74414L18.9258 0.267578H17.207L10.8789 7.61133L5.82031 0.267578H0L7.63672 11.3809L0 20.2676H1.71875L8.39844 12.4941L13.75 20.2676H19.5703L11.6406 8.74414ZM9.27734 11.4785L2.34375 1.57617H5L17.207 19.0176H14.5508L9.27734 11.4785Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 text-2xl md:grid-cols-3 gap-6">
            <div>
              <label className="block font-medium ">Your Name</label>
              <input
                type="text"
                maxLength={100}
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className="w-full border-b border-gray-300 focus:border-teal-500 outline-none py-2 bg-transparent"
              />
              {errors.name && touched.name && (
                <p className="text-red-500 text-lg">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block font-medium ">Email Address</label>
              <input
                type="email"
                maxLength={100}
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className="w-full border-b border-gray-300 focus:border-teal-500 outline-none py-2 bg-transparent"
              />
              {errors.email && touched.email && (
                <p className="text-red-500 text-lg">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block font-medium ">
                Phone Number (optional)
              </label>
              <input
                type="tel"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                maxLength={15}
                className="w-full border-b border-gray-300 focus:border-teal-500 outline-none py-2 bg-transparent"
              />
              {errors.phone && touched.phone && (
                <p className="text-red-500 text-lg">{errors.phone}</p>
              )}
            </div>
          </div>
          <div>
            <label className="block text-2xl ">Message</label>
            <textarea
              rows={3}
              name="message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
              className="w-full border-b text-2xl border-gray-300 focus:border-teal-500 outline-none py-2 bg-transparent resize-none"
            />
            {errors.message && touched.message && (
              <p className="text-red-500 text-lg">{errors.message}</p>
            )}
          </div>
          <div className="flex items-center justify-between mt-6">
            <PrimaryButton
              type="submit"
              className="w-fit  px-7.5 py-[1.0625rem] items-center gap-2 "
            >
              <span className="leading-[100%] text-lg ">
                Leave us a Message
              </span>
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.7598 9.46875L11.6807 15.5479C11.5732 15.6553 11.4463 15.7383 11.2998 15.7969C11.1533 15.8555 11.002 15.8848 10.8457 15.8848C10.6797 15.8848 10.521 15.8555 10.3696 15.7969C10.2183 15.7383 10.0889 15.6553 9.98145 15.5479C9.72754 15.3135 9.60059 15.0254 9.60059 14.6836C9.60059 14.3418 9.72754 14.0586 9.98145 13.834L13.9658 9.82031H2.34961C2.00781 9.82031 1.71973 9.70312 1.48535 9.46875C1.25098 9.23438 1.13379 8.94629 1.13379 8.60449C1.13379 8.28223 1.25098 7.99902 1.48535 7.75488C1.71973 7.51074 2.00781 7.38867 2.34961 7.38867H13.9658L9.98145 3.4043C9.72754 3.16992 9.60059 2.88184 9.60059 2.54004C9.60059 2.19824 9.72754 1.91504 9.98145 1.69043C10.2061 1.44629 10.4893 1.32422 10.8311 1.32422C11.1729 1.32422 11.4561 1.44629 11.6807 1.69043L17.7598 7.76953C18.0039 7.99414 18.126 8.27734 18.126 8.61914C18.126 8.96094 18.0039 9.24414 17.7598 9.46875Z"
                  fill="white"
                />
              </svg>
            </PrimaryButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
