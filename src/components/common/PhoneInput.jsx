import "react-phone-number-input/style.css";
import Phone from "react-phone-number-input";
import { useState } from "react";

const PhoneInput = ({ className = "", ...props }) => (
  <Phone
    defaultCountry="AE"
    international
    withCountryCallingCode
    limitMaxLength={15}
    className={`bg-[#F6F6F6] w-full py-3 px-3.5 text-xs rounded-lg [&>input:focus-visible]:outline-none  focus-visible:outline-none focus-visible:ring-2  ${className}`}
    {...props}
  />
);

export default PhoneInput;
