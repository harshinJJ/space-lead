"use client";
import { useRef, useCallback, useEffect } from "react";

const useDebounce = (callback, delay = 300) => {
  const debounceTimer = useRef(null);

  const debouncedFunction = useCallback(
    (...args) => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
      debounceTimer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  useEffect(() => {
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, []);

  return debouncedFunction;
};

export default useDebounce;
