"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const SIZE_CLASSES = {
  sm: "md:max-w-2/5 lg:max-w-1/5 max-w-3/4",
  md: "md:max-w-2/3 lg:max-w-1/3 max-w-3/4",
  lg: "max-w-full",
};

const Modal = ({
  isOpen,
  onClose,
  children,
  timer,
  size = "md",
  className = "",
  btnClassName = "",
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen || !timer) return;
    const timeout = setTimeout(onClose, timer);
    return () => clearTimeout(timeout);
  }, [isOpen, timer, onClose]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-999 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.5)" }}
      onClick={onClose}
    >
      <div
        className={`relative bg-white shadow-xl rounded-2xl p-6 w-[90%] ${
          SIZE_CLASSES[size] || SIZE_CLASSES.md
        } ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className={`absolute z-1 cursor-pointer top-3 right-3 text-2xl text-gray-500 hover:text-gray-700 focus:outline-none ${btnClassName}`}
          aria-label="Close modal"
        >
          {/* &times; */}
          <svg
            fill="currentColor"
            className="w-full h-auto"
            width="24"
            height="24"
            viewBox="-6 -6 24 24"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMin"
            class="jam jam-close"
          >
            <path d="M7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485 2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535 3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z" />
          </svg>
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
