import Link from "next/link";
import React from "react";

const PrimaryButton = ({ children, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={`text-white flex justify-center items-center py-2 px-3 bg-linear-to-r from-[#5AC0BE] to-[#7F529F] rounded-full ${className}`}
    >
      {children}
    </button>
  );
};
export const PrimaryLink = ({
  children,
  className = "",
  href = "#",
  ...props
}) => {
  return (
    <Link
      {...props}
      href={href}
      className={`text-white flex justify-center items-center py-2 px-3 bg-linear-to-r from-[#5AC0BE] to-[#7F529F] rounded-full ${className}`}
    >
      {children}
    </Link>
  );
};

export default PrimaryButton;
