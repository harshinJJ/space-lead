"use client";
import React from "react";

/**
 * FadeLoaderBlock
 * - Fades in/out (animate-pulse) to indicate loading
 * - Quick props for size/shape
 */
export default function FadeLoader({
  className = "",
  size = "w-8 h-8", // Tailwind width & height
  border = "border-4", // Tailwind border width
  borderColor = "border-gray-200", // base color
  borderTopColor = "border-t-black/50", // highlight color
  as: Tag = "div",
  "aria-label": ariaLabel = "Loading…",
}) {
  return (
    <Tag
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label={ariaLabel}
      className={[
        "rounded-full",
        "animate-spin",
        size,
        border,
        borderColor,
        borderTopColor,
        "inline-block",
        className,
      ].join(" ")}
    />
  );
}
