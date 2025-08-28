import React from "react";

const Error = ({ message }) => {
  if (!message) return null;
  return <div className="text-red-500 text-xs mt-1">{message}</div>;
};

export default Error;
