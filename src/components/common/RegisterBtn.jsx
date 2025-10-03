import React from "react";
import { PrimaryLink } from "../buttons/PrimaryButton";

const RegisterBtn = ({
  children,
  className = "",
  href = "/registration",
  ...props
}) => {
  return (
    <div className={`z-99 fixed bottom-[40vh] leading-[1]  w-fit aspect-square right-0 flex items-end rotate-270  pointer-events-none`}>
    <PrimaryLink
      href={href}
      {...props}
      className={`relative leading-[1]  btn-gradient text-3xl py-3 px-10.25 rounded-br-[0] rounded-bl-[0]  rounded-tr-[1rem] rounded-tl-[1rem] pointer-events-auto ${className}`}
    >
      {children}
    </PrimaryLink></div>
  );
};

export default RegisterBtn;
