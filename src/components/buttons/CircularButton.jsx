import Link from "next/link";
import React from "react";

const CircularButton = ({ children, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={`cursor-pointer text-white flex justify-center items-center aspect-square bg-secondary hover:bg-[#505A7B] rounded-full ${className}`}
    >
      {children}
    </button>
  );
};
export const CircularLink = ({
  children,
  className = "",
  href = "#",
  ...props
}) => {
  return (
    <Link
      {...props}
      href={href}
      className={`cursor-pointer text-white flex justify-center items-center aspect-square bg-secondary hover:bg-[#505A7B] rounded-full ${className}`}
    >
      {children}
    </Link>
  );
};

export default CircularButton;
