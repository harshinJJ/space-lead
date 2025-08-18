import React from "react";

const Label = ({ children, required, className, ...props }) => {
  return (
    <label {...props} className={`text-xs font-inter ${className}`}>
      {children}
      {required && <span className="text-[#F82D2D]">*</span>}
    </label>
  );
};

export default Label;
