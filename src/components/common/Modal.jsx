"use client";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const SIZE_CLASSES = {
  sm: "md:max-w-2/5 lg:max-w-1/5 max-w-3/4",
  md: "md:max-w-2/3 xl:max-w-1/3 lg:max-w-2/5 max-w-3/4",
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
  const modalContentRef = useRef(null);

  // 🔒 Prevent background scroll on mobile
  useEffect(() => {
    if (!isOpen) return;

    // Save original body style
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    // Lock body scroll
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none"; // 👈 Critical for mobile

    // Prevent touch scrolling on background
    const preventDefault = (e) => {
      // Allow scrolling inside modal content
      if (modalContentRef.current?.contains(e.target)) {
        // Optional: only allow if content is scrollable
        const { scrollTop, scrollHeight, clientHeight } =
          modalContentRef.current;
        const atTop = scrollTop === 0;
        const atBottom = scrollTop + clientHeight >= scrollHeight;

        // If trying to scroll up at top or down at bottom, prevent pull
        if ((atTop && e.deltaY < 0) || (atBottom && e.deltaY > 0)) {
          e.preventDefault();
        }
        return;
      }

      // Block all other touch moves
      e.preventDefault();
    };

    // Use non-passive listener to allow preventDefault
    document.addEventListener("touchmove", preventDefault, { passive: false });

    return () => {
      // Cleanup
      document.body.style.overflow = originalOverflow;
      document.body.style.touchAction = "";
      document.body.style.paddingRight = originalPaddingRight;
      document.removeEventListener("touchmove", preventDefault);
    };
  }, [isOpen]);

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
        ref={modalContentRef}
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
