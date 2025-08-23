"use client";
import React from "react";

/**
 * FadeLoaderBlock
 * - Fades in/out (animate-pulse) to indicate loading
 * - Quick props for size/shape
 */
export default function FadeLoader({
  className = "",
  w = "w-full",
  h = "h-4",
  rounded = "rounded-lg",
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
        // fade effect
        "motion-safe:animate-pulse",
        // base colors (light/dark)
        "bg-gray-200 dark:bg-gray-700",
        // size + shape
        w,
        h,
        rounded,
        // layout safety
        "shrink-0",
        className,
      ].join(" ")}
    />
  );
}
