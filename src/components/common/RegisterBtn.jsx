import React from "react";
import { PrimaryLink } from "../buttons/PrimaryButton";

const RegisterBtn = ({
  children,
  className = "",
  href = "/registration",
  ...props
}) => {
  return (
    <PrimaryLink
      href={href}
      {...props}
      className={`z-99 fixed bottom-[40vh] [--bg-gradient-dir:top] btn-gradient-top btn-gradient transform -translate-y-15 right-0 text-[1.375rem] py-2.5 px-10.25 rounded-br-[0] rounded-tr-[0] rounded-l-[1.25rem] [writing-mode:sideways-lr]  ${className}`}
    >
      {children}
    </PrimaryLink>
  );
};

export default RegisterBtn;
