import React, { useState } from "react";

const FormInput = ({ className = "", onFocus, onBlur, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <input
      className={`bg-[#F6F6F6] w-full py-2.5 px-3.5 text-sm rounded-lg 
        border ${isFocused ? "border-[var(--primary-color)]" : "border-transparent hover:border-[#e0e0e0]"}
        focus:outline-none focus:ring-0
        text-[#31313B] ${className}`}
      maxLength={50}
      onFocus={(e) => {
        setIsFocused(true);
        onFocus?.(e);
      }}
      onBlur={(e) => {
        setIsFocused(false);
        onBlur?.(e);
      }}
      {...props}
    />
  );
};

export default FormInput;
