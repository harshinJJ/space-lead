import Link from "next/link";
import React from "react";

const SecondaryButton = ({ children, className, ...props }) => {
  return (
    <button
      className={`cursor-pointer mt-2 bg-[#353535] text-white px-4 py-2 rounded-full text-base font-medium flex items-center gap-1 w-fit hover:bg-cyan-500 transition-all duration-500 ease-in-out ${className}`}
    >
      {children}
    </button>
  );
};

export const SecondaryLink = ({
  children,
  href = "#",
  className,
  ...props
}) => {
  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      {...props}
      className={`cursor-pointer mt-2 bg-[#353535] text-white px-4 py-2 rounded-full text-base font-medium flex items-center gap-1 w-fit hover:bg-cyan-500 transition-all duration-500 ease-in-out ${className}`}
    >
      {children}
    </Link>
  );
};

export default SecondaryButton;
