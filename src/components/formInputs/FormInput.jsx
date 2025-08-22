import React from "react";

const FormInput = ({ className, ...props }) => {
  return (
    <input
      // className={`bg-[#F6F6F6] w-full py-3 px-3.5 text-xs rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${className}`}
      className={`bg-[#F6F6F6] w-full py-3 px-3.5 text-xs rounded-lg focus-visible:outline-none  ${className}`}
      maxLength={50}
      {...props}
    />
  );
};

export default FormInput;
