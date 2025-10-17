import { smartTrim } from "@/utils/functions";
import React, { useState } from "react";

const FormInput = ({ className = "", onFocus, onBlur, onChange,disabled, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <input
      className={`bg-[#F6F6F6] w-full py-2.5 px-3.5 text-sm rounded-lg disabled:!cursor-not-allowed 
        border ${
          isFocused
            ? "border-[var(--primary-color)]"
            : "border-transparent hover:border-[#e0e0e0]"
        }
        focus:outline-none focus:ring-0
        text-[#31313B] ${className}`}
      maxLength={50}
      onFocus={(e) => {
        setIsFocused(true);
        onFocus?.(e);
      }}
      // onBlur={(e) => {
      //   setIsFocused(false);
      //   onBlur?.(e);
      // }}
      onChange={(e) => {
        let value = e.target.value.replace(
          /[^a-zA-Z0-9\s&.,\-'/()#@!+_:;]/g,
          "" // keep only allowed chars
        );
        if (/^\s*$/.test(value)) {
          value = "";
        }
        onChange(value, e);
      }}
      onBlur={(e) => {
        let trimmed = e.target.value.replace(
          /[^a-zA-Z0-9\s&.,\-'/()#@!+_:;]/g,
          ""
        );

        if (/^\s*$/.test(trimmed)) {
          trimmed = "";
        } else {
          trimmed = smartTrim(trimmed);
        }
        setIsFocused(false);
        onBlur(trimmed, e);
      }}
      disabled={disabled}
      {...props}
    />
  );
};

export default FormInput;
