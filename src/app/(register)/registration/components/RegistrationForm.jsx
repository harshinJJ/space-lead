"use client";
import React, { useRef, useState } from "react";
import BadgePreview from "./BadgePreview";
import TicketSummary from "./TicketSummary";
import FormInput from "@/components/formInputs/FormInput";
import Label from "@/components/common/Label";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import PhoneInput from "@/components/formInputs/PhoneInput";
import FormSelect from "@/components/formInputs/FormSelect";
import Error from "@/components/common/Error";
import dynamic from "next/dynamic";
import countryList from "@/../public/assets/json/countryList.json";
import titleList from "@/../public/assets/json/honorifics.json";
import { ReCAPTCHAV2 } from "@/utils/ReCaptchaHandler";
import useRegistration from "@/hooks/useRegistration";
import ButtonLoader from "@/components/loader/ButtonLoader";
import SuccessModal from "./SuccessModal";
import SessionTypeSelector from "./SessionTypeSelector";
import ReCAPTCHA from "react-google-recaptcha";
import { CheckIcon } from "@/data/icons";
import { TextOverlay } from "@/components/common/ComingSoonOverlay";

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
  sessionList = [],
  isWorkshop = false,
}) {
  const [session, setSession] = useState(sessionList[0]);
  const registerData = useRegistration({
    type,
    session,
    isWorkshop,
  });
  const {
    formik,
    setRef,
    showV2,
    setRecaptchaToken,
    setSuccess,
    success,
    successInfo,
    setSuccessInfo,
    containerRef,
    recaptchaRef,
  } = registerData;
  const {
    errors,
    touched,
    values: formData,
    handleChange,
    handleBlur,
    setFieldValue,
    setFieldTouched,
    validateField,
    isSubmitting,
  } = formik;

  const handleContinue = () => {
    setSuccess(false);
    setSuccessInfo(null);
  };

  // const handleWorkshopSelect = (workshop = {}) => {
  //   setWorkshops((prevWorkshops) => {
  //     if (prevWorkshops.some((w) => w.id === workshop.id)) {
  //       return prevWorkshops.filter((w) => w.id !== workshop.id);
  //     }
  //     return [...prevWorkshops, workshop];
  //   });
  // };

  const handleWorkshopSelect = async (workshop) => {
    const currentWorkshops = formData.workshops || [];
    const isSelected = currentWorkshops.some((w) => w.id === workshop.id);

    if (isSelected) {
      await setFieldValue(
        "workshops",
        currentWorkshops.filter((w) => w.id !== workshop.id)
      );
    } else {
      await setFieldValue("workshops", [...currentWorkshops, workshop]);
    }
    setFieldTouched("workshops", true);
  };

  const handleSessionSelect = async (data) => {
    if (session?.id === data?.id) return;
    setSession(data);
    // Reset workshops when session changes
    setFieldTouched("workshops", false);
    setFieldValue("workshops", [], false);
  };

  const ticketName = session?.display_ticket_name || session?.ticket_name;
  return (
    <section ref={containerRef}>
      {success ? (
        <div className="container-fluid mx-auto flex flex-col items-center justify-center lg:px-56.75 px-5">
          <h2 className="text-3xl md:text-4xl xl:text-[2.5rem] font-azonix  mb-8 tracking-wide text-center">
            YOUR REGISTRATION
          </h2>
          <SuccessModal
            status="success"
            uid={successInfo?.unique_id}
            ticketUrl={
              successInfo?.booking_status == "2" &&
              successInfo?.encrypted_unique_id
            }
            onContinue={handleContinue}
          />
        </div>
      ) : (
        <div className="container-fluid mx-auto flex flex-col items-center justify-center  px-5">
          <h2 className="xl:text-5xl sm:text-3xl xs:text-2xl text-lg font-azonix text-white xl:mb-15 lg:mb-10 mb-5 tracking-wide text-center ">
            Secure your place at the <br className="hidden xs:block" /> frontier
            of discovery
          </h2>
          <div className="w-full flex flex-col gap-8 max-w-285">
            <SessionTypeSelector
              sessions={sessionList}
              selected={session?.id}
              onSelect={handleSessionSelect}
            />
            <p className="uppercase md:text-lg text-base text-center">
              Please enter your information
            </p>
            <div className="flex flex-col lg:flex-row gap-5 xl:gap-10 2xl:gap-22.5 w-full  text-black bg-white rounded-3xl p-5 lg:px-5 xl:px-14 lg:pt-6 lg:pb-12.25">
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
                      <div
                        ref={setRef("title")}
                        className="md:flex-7/20 flex-2/6 xs:flex-1/5"
                      >
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
                          onChange={async (option) => {
                            await setFieldValue("title", option);
                            if (option) {
                              setFieldTouched("title", true);
                            }
                          }}
                          onBlur={() => setFieldTouched("title", true)}
                          value={formData.title}
                          options={titleList}
                        />
                        {touched.title && <Error message={errors?.title} />}
                      </div>
                      <div
                        ref={setRef("firstname")}
                        className="w-full md:flex-13/20 flex-4/6 xs:felx-4/5"
                      >
                        {/* First Name */}
                        <Label required={true}>First Name</Label>

                        <FormInput
                          name="firstname"
                          onChange={(value) => {
                            setFieldValue("firstname", value);
                          }}
                          onBlur={(value, e) => {
                            setFieldValue("firstname", value);
                            handleBlur(e);
                          }}
                          value={formData.firstname}
                          placeholder="First name"
                          autoComplete="name"
                        />
                        {touched.firstname && (
                          <Error message={errors?.firstname} />
                        )}
                      </div>
                    </div>
                    {/* Last Name */}
                    <div ref={setRef("lastname")}>
                      <Label required={true}>Last Name</Label>
                      <FormInput
                        name="lastname"
                        onChange={(value) => {
                          setFieldValue("lastname", value);
                        }}
                        onBlur={(value, e) => {
                          setFieldValue("lastname", value);
                          handleBlur(e);
                        }}
                        value={formData.lastname}
                        placeholder="Last name"
                        autoComplete="lastName"
                      />
                      {touched.lastname && <Error message={errors?.lastname} />}
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
                      {touched.phoneNumber && (
                        <Error message={errors?.phoneNumber} />
                      )}
                    </div>
                    {/* Email */}
                    <div ref={setRef("email")}>
                      <Label required={true}>Email</Label>
                      <FormInput
                        name="email"
                        onChange={(value) => {
                          setFieldValue("email", value);
                        }}
                        onBlur={(value, e) => {
                          setFieldValue("email", value);
                          handleBlur(e);
                        }}
                        value={formData.email}
                        placeholder="Email"
                        autoComplete="email"
                      />
                      {touched.email && <Error message={errors?.email} />}
                    </div>
                    <div ref={setRef("country")}>
                      <Label required={true}>Country of Residence</Label>
                      <FormSelect
                        instanceId={"residency-select"}
                        name="country"
                        onChange={async (option) => {
                          await setFieldValue("country", option);
                          if (option) {
                            setFieldTouched("country", true);
                          }
                        }}
                        placeholder="Country of Residence"
                        onBlur={() => setFieldTouched("country", true)}
                        valueKey="code"
                        labelKey="name"
                        autoComplete="country"
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
                        autoComplete="nationality"
                        onChange={async (option) => {
                          await setFieldValue("nationality", option);
                          if (option) {
                            setFieldTouched("nationality", true);
                          }
                        }}
                        onBlur={() => setFieldTouched("nationality", true)}
                        valueKey="code"
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
                      {touched.nationality && (
                        <Error message={errors?.nationality} />
                      )}
                    </div>

                    {/* Institution Name (Student only) */}
                    {ticketName?.toLowerCase()?.startsWith("student") && (
                      <div ref={setRef("institution")}>
                        <Label required={true}>Institution Name</Label>
                        <FormInput
                          name="institution"
                          onChange={(value) => {
                            setFieldValue("institution", value);
                          }}
                          onBlur={(value, e) => {
                            setFieldValue("institution", value);
                            handleBlur(e);
                          }}
                          autoComplete="institution"
                          value={formData.institution}
                          placeholder="Institution name"
                        />
                        {touched.institution && (
                          <Error message={errors?.institution} />
                        )}
                      </div>
                    )}

                    {/* Professional only: Company Name */}
                    {ticketName?.toLowerCase()?.startsWith("professional") && (
                      <>
                        <div ref={setRef("jobtitle")}>
                          <Label required={true}>Job Title</Label>
                          <FormInput
                            name="jobtitle"
                            autoComplete="designation"
                            onChange={(value) => {
                              setFieldValue("jobtitle", value);
                            }}
                            onBlur={(value, e) => {
                              setFieldValue("jobtitle", value);
                              handleBlur(e);
                            }}
                            value={formData.jobtitle}
                            placeholder="Job title"
                          />
                          {touched.jobtitle && (
                            <Error message={errors?.jobtitle} />
                          )}
                        </div>
                        <div ref={setRef("companyname")}>
                          <Label required={true}>Company Name</Label>
                          <FormInput
                            name="companyname"
                            onChange={(value) => {
                              setFieldValue("companyname", value);
                            }}
                            onBlur={(value, e) => {
                              setFieldValue("companyname", value);
                              handleBlur(e);
                            }}
                            autoComplete="company"
                            value={formData.companyname}
                            placeholder="Company name"
                          />
                          {touched.companyname && (
                            <Error message={errors?.companyname} />
                          )}
                        </div>
                      </>
                    )}
                    {session?.document_required && (
                      <div ref={setRef("user_document")}>
                        <Label required={true}>
                          {ticketName?.toLowerCase()?.startsWith("professional")
                            ? "Professional"
                            : "Student"}{" "}
                          ID
                        </Label>
                        <FileUplodCroper
                          defaultImage={
                            formData.user_document
                              ? URL.createObjectURL(formData.user_document)
                              : formData.isOldFile
                          }
                          onCropDone={async (val) => {
                            setFieldValue("user_document", val);
                            if (val) {
                              await setFieldTouched("user_document", true);
                              await validateField("user_document");
                            } else {
                              setFieldValue("isOldFile", "");
                            }
                          }}
                        />
                        {touched.user_document && (
                          <Error message={errors?.user_document} />
                        )}
                      </div>
                    )}

                    {session?.workshop?.length > 0 && isWorkshop && (
                      <div className=" xl:!col-span-2">
                        <Label required={true}>
                          Select workshop(s) to attend
                        </Label>
                        <div className="border-1 border-black/20 rounded-2xl w-full">
                          <div
                            ref={setRef("workshops")}
                            className="w-full grid grid-cols-1 sm:grid-cols-2 items-stretch p-2.5 gap-2.5"
                          >
                            {session?.workshop?.map((workshop, i) => {
                              const isSelected = formData?.workshops?.some(
                                (w) => w.id === workshop.id
                              );
                              return (
                                <label
                                  key={i}
                                  className={` relative text-sm flex items-start lg:gap-2.5 gap-1 cursor-pointer h-inherit rounded-lg  ${
                                    isSelected
                                      ? "bg-gradient-to-r from-[#9066b7] to-tertiary from-30% to-90% p-3.25"
                                      : "border-1 border-secondary p-3"
                                  }`}
                                >
                                  <input
                                    type="checkbox"
                                    checked={isSelected}
                                    disabled={
                                      workshop?.booked_quantity >=
                                      workshop?.booking_capacity
                                    }
                                    onChange={() =>
                                      handleWorkshopSelect(workshop)
                                    }
                                    className="sr-only peer disabled:!cursor-not-allowed"
                                  />
                                  {isSelected && (
                                    <span
                                      className={` animate-partial-rotate absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-5 h-5 aspect-square rounded-full flex items-center justify-center  bg-green-500 peer-checked:text-white transition-all duration-200 `}
                                    >
                                      <CheckIcon className="w-full h-full" />
                                    </span>
                                  )}
                                  <div className="flex select-none text-black peer-checked:!text-white  items-start justify-between w-full ms-2 gap-2 overflow-hidden">
                                    <span className=" leading-[1] flex-2 break-all text-wrap font-semibold">
                                      {workshop?.display_title ||
                                        workshop?.session_title}{" "}
                                    </span>
                                    {workshop?.price_amount && (
                                      <span className=" flex-1 leading-[1] text-nowrap font-droid-bold text-end">
                                        {session?.currency_name}{" "}
                                        {(session?.ticket_visitor_type == "7"
                                          ? workshop?.student_amount
                                          : session?.ticket_visitor_type == "15"
                                          ? workshop?.professional_amount
                                          : workshop?.price_amount) || 0}
                                      </span>
                                    )}
                                  </div>
                                  {workshop?.booked_quantity >=
                                    workshop?.booking_capacity && (
                                    <TextOverlay
                                      containerClass="rounded-lg backdrop-blur-[2.5px]"
                                      className="!bg-black/40 w-full h-full  !text-black font-droid-bold rounded-lg cursor-not-allowed"
                                      text="Sold out"
                                    />
                                  )}
                                </label>
                              );
                            })}
                          </div>
                        </div>
                        {errors.workshops && touched.workshops && (
                          <div className="text-red-500 text-xs mt-2">
                            {errors?.workshops}
                          </div>
                        )}
                      </div>
                    )}
                    {showV2 && (
                      <div ref={setRef("recaptcha")}>
                        <ReCAPTCHA
                          sitekey={
                            process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY_V2
                          }
                          onError={() => setRecaptchaToken(null)}
                          onChange={setRecaptchaToken}
                          ref={recaptchaRef}
                        />
                      </div>
                    )}

                    <PrimaryButton
                      type="button"
                      disabled={isSubmitting}
                      onClick={registerData.onSubmitRegistration}
                      className="gap-2.5 text-lg col-span-2 w-fit px-7.5 font-light tracking-[1px]"
                    >
                      <span>Complete Your Registration </span>
                      {isSubmitting ? (
                        <ButtonLoader />
                      ) : (
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
                      )}
                    </PrimaryButton>
                  </form>
                </div>
                {(session?.price_amount > 0 || checkPriceExist(formData?.workshops, session?.ticket_visitor_type)) && (
                  <TicketSummary
                    name={ticketName}
                    price={session?.price_amount}
                    currency={session?.currency_name}
                    workshops={formData?.workshops}
                    visitorType={session?.ticket_visitor_type}
                  />
                )}
              </div>
              <div className="w-full  lg:w-86.5 flex-shrink-0 flex flex-col items-center justify-start xl:px-4.5">
                <BadgePreview
                  name={
                    formData.firstname || formData.lastname
                      ? `${formData.firstname} ${formData.lastname || ""}`
                      : undefined
                  }
                  category={ticketName}
                  title={formData.jobtitle || ""}
                  organisation={formData.companyname || ""}
                  institution={formData.institution || ""}
                  badgeId={"Badgeid"}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

const checkPriceExist = (workshops, visitorType) => {
  return workshops?.some((workshop) => {
    if (visitorType === "7") {
      return workshop?.student_amount > 0;
    } else if (visitorType === "15") {
      return workshop?.professional_amount > 0;
    } else {
      return workshop?.price_amount > 0;
    }
  });
};
