"use client";
import React, { useState, useRef, useEffect } from "react";
import "react-phone-number-input/style.css";
import PhoneInput, {
  isValidPhoneNumber,
  isPossiblePhoneNumber,
  getCountries,
} from "react-phone-number-input";
import "./PhoneInputs.css";
import metadata from "@/../public/assets/json/phone-metadata.json";

import defaultLabels from "react-phone-number-input/locale/en.json";
import Image from "next/image";

// Custom Country Select Component
const CustomCountrySelect = ({
  value,
  onChange,
  options,
  disabled,
  labels,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const selectRef = useRef(null);
  const inputRef = useRef(null);

  const normalize = (str) =>
    str
      .normalize("NFD") // decompose letters and diacritics
      .replace(/[\u0300-\u036f]/g, "") // remove diacritics
      .toLowerCase();

  const filteredOptions = options.filter((option) => {
    const label = labels[option.value] || option.label || option.value;
    return normalize(label).includes(normalize(searchTerm));
  });

  const selectedOption = options.find((opt) => opt.value === value);
  const selectedLabel = selectedOption
    ? labels[selectedOption.value] || selectedOption.label
    : "";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    onChange(option.value);
    setIsOpen(false);
    setSearchTerm("");
  };

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      if (!isOpen) {
        setTimeout(() => inputRef.current?.focus(), 100);
      }
    }
  };
  return (
    <div
      className={`custom-country-select  ${disabled ? "disabled" : ""}`}
      ref={selectRef}
    >
      <div className="select-trigger" onClick={toggleDropdown}>
        <div className="selected-country">
          {selectedOption && (
            <Image
              className="flag-icon"
              src={
                selectedOption.value.toLowerCase() === "ac"
                  ? "/assets/img/ac.png"
                  : selectedOption.value.toLowerCase() === "ta"
                  ? "/assets/img/tr.png"
                  : `https://flagcdn.com/w40/${selectedOption.value.toLowerCase()}.png`
              }
              alt={`${selectedOption.value} flag`}
              width={24}
              height={18}
              style={{ borderRadius: "2px", objectFit: "cover" }}
            />
          )}
        </div>
        <svg
          className={`dropdown-arrow ${isOpen ? "open" : ""}`}
          width="12"
          height="12"
          viewBox="0 0 12 12"
        >
          <path
            d="M2 4l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>

      {isOpen && (
        <div className="select-dropdown">
          <div className="search-wrapper">
            <input
              ref={inputRef}
              type="text"
              className="country-search"
              placeholder="Search countries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="options-list">
            {filteredOptions.map((option) => (
              <div
                key={option.value}
                className={`select-option ${
                  option.value === value ? "selected" : ""
                }`}
                onClick={() => handleSelect(option)}
              >
                <Image
                  className="flag-icon"
                  src={
                    option.value.toLowerCase() === "ac"
                      ? "/assets/img/ac.png"
                      : option.value.toLowerCase() === "ta"
                      ? "/assets/img/tr.png"
                      : `https://flagcdn.com/w40/${option.value.toLowerCase()}.png`
                  }
                  alt={`${option.value} flag`}
                  width={24}
                  height={18}
                  style={{ borderRadius: "2px", objectFit: "cover" }}
                />
                <span className="country-name">
                  {labels[option.value] || option.label}
                </span>
              </div>
            ))}
            {filteredOptions.length === 0 && (
              <div className="no-options">No countries found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const PhoneInputs = ({
  isRequired,
  label,
  error,
  disabled,
  readOnly,
  value,
  name,
  onChange,
  placeholder,
  pointerEvents,
  country = "SA",
  onBlur,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const allowedCountries = getCountries(metadata).filter((c) => c !== "EH");

  // Create labels with dial codes
  const labelsWithDialCodes = Object.keys(defaultLabels).reduce(
    (acc, countryCode) => {
      const countryData = metadata.countries[countryCode];
      const countryLabel =
        defaultLabels[countryCode] === "Taiwan"
          ? "Taiwan ROC"
          : defaultLabels[countryCode] === "Turkey"
          ? "Türkiye"
          : defaultLabels[countryCode];
      if (countryData) {
        const dialCode = countryData[0];
        acc[countryCode] = `${countryLabel} (+${dialCode})`;
      } else {
        acc[countryCode] = countryLabel;
      }
      return acc;
    },
    {}
  );

  // Create options for custom select
  const countryOptions = Object.keys(metadata.countries)
    .map((countryCode) => ({
      value: countryCode,
      label: defaultLabels[countryCode] || countryCode,
      dialCode: metadata.countries[countryCode][0],
    }))
    .sort((a, b) =>
      (labelsWithDialCodes[a.value] || a.label).localeCompare(
        labelsWithDialCodes[b.value] || b.label
      )
    );

  return (
    <div
      className="input-box"
      style={{
        pointerEvents: pointerEvents || (readOnly ? "none" : "auto"),
      }}
    >
      <label className={`form-label ${isRequired ? "required-field" : ""}`}>
        {label}
      </label>
      <PhoneInput
        limitMaxLength={15}
        defaultCountry={country}
        international
        countries={allowedCountries}
        countryCallingCodeEditable={false}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        autoComplete="off"
        onBlur={(e) => {
          setIsFocused(false);
          onBlur(e);
        }}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder || ""}
        className={`
    w-full py-3 px-3.5 text-sm rounded-lg bg-[#F6F6F6] text-[#31313B]
    border ${
      isFocused
        ? "border-[var(--primary-color)]"
        : "border-transparent hover:border-[#e0e0e0]"
    }
    focus:outline-none focus:ring-0
    focus:border-[var(--primary-color)]
    
    ${error ? "border-red-500" : ""}
  `}
        name={name}
        labels={labelsWithDialCodes}
        metadata={metadata}
        countrySelectComponent={CustomCountrySelect}
        countrySelectProps={{
          disabled,
          labels: labelsWithDialCodes,
          options: countryOptions,
        }}
        {...rest}
      />

      {error && (
        <div className="invalid-feedback" style={{ display: "block" }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default PhoneInputs;

// const PhoneInput = ({ className = "", ...props }) => (
//   <Phone
//     defaultCountry="AE"
//     international
//     withCountryCallingCode
//     limitMaxLength={15}
//     className={`bg-[#F6F6F6] w-full py-3 px-3.5 text-xs rounded-lg [&>input:focus-visible]:outline-none  focus-visible:outline-none focus-visible:ring-2  ${className}`}
//     {...props}
//   />
// );

// export default PhoneInput;
