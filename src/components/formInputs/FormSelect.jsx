"use client";
import React, { useEffect, useState } from "react";
import Select, { components } from "react-select";

// // Custom Dropdown Indicator
const DropdownIndicator = (props) => {
  const { menuIsOpen } = props.selectProps;
  return (
    <components.DropdownIndicator {...props} className="!ps-0 xs:!ps-2">
      <svg
        width="13"
        height="8"
        viewBox="0 0 13 8"
        style={{
          transition: "transform 0.2s",
          transform: menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
        }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.6777 1.34241L6.6194 6.40074L1.56107 1.34241"
          stroke="#A8A8A8"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </components.DropdownIndicator>
  );
};
const Input = (props)=>(
  <components.Input {...props} autoComplete="customselectinputthatshallneverbefilled"/>
)

// const customStyles = {
//   control: (provided, state) => ({
//     ...provided,
//     backgroundColor: "#F6F6F6",
//     border: "none",
//     boxShadow: "none",
//     borderRadius: "12px",
//     height: "100%",
//     minWidth: "5.25rem",
//     paddingLeft: "0.875rem",
//     paddingright: "0.875rem",
//     fontSize: "0.75rem",
//     color: "#31313B",
//   }),
//   valueContainer: (provided) => ({
//     ...provided,
//     padding: "0",
//   }),
//   input: (provided) => ({
//     ...provided,
//     margin: "0",
//     paddingLeft: "0.875rem",
//     paddingright: "0.875rem",
//     paddingTop: "0.75rem",
//     paddingBottom: "0.75rem",
//     fontSize: "0.75rem",
//   }),
//   indicatorSeparator: () => ({
//     display: "none",
//   }),
//   dropdownIndicator: (provided, state) => ({
//     ...provided,
//     color: "#A3A3A3",
//     paddingRight: "12px",
//     transition: "transform 0.2s",
//   }),
//   menu: (provided) => ({
//     ...provided,
//     borderRadius: "12px",
//     boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
//     marginTop: "4px",
//   }),
//   option: (provided, state) => ({
//     ...provided,
//     backgroundColor: state.isFocused ? "#F0F0F0" : "#fff",
//     color: "#31313B",
//     fontSize: "18px",
//     cursor: "pointer",
//   }),
// };

const FormSelect = ({
  isRequired,
  label,
  error,
  labelKey = "label",
  valueKey = "value",
  options = [],
  value,
  onChange,
  onBlur,
  id,
  isDisabled,
  ...props
}) => {
  const [hasValue, setHasValue] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setHasValue(value && (Array.isArray(value) ? value.length > 0 : true));
  }, [value]);

  const handleChange = (selectedOption) => {
    setHasValue(
      selectedOption &&
        (Array.isArray(selectedOption) ? selectedOption.length > 0 : true)
    );
    if (onChange) {
      onChange(selectedOption);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    e && onBlur(e);
  };
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      // height: 50,
      fontWeight: "normal",
      // padding: "5px",
      borderRadius: "12px",
      borderColor: isFocused ? "var(--primary-color)" : "transparent",
      // boxShadow: isFocused ? "0 0 0 3px rgba(1, 14, 255, 0.1)" : "none",
      boxShadow: "none",
      fontSize: "0.875rem",
      color: "#31313B",
      // paddingLeft: "0.875rem",
      // paddingright: "0.875rem",
      backgroundColor: "#F6F6F6",
      "&:hover": {
        borderColor: isFocused ? "var(--primary-color)" : "#e0e0e0",
      },
      cursor:state.isDisabled ? "not-allowed" : "pointer",
      pointerEvents:"auto",
    }),
    option: (provided, state) => ({
      ...provided,
      fontWeight: "normal",
      backgroundColor: state.isSelected
        ? "#f8f9fa " // selected
        : state.isFocused
        ? "#f0f0f0" // hover/focus
        : "#fff", // normal
      "&:hover": {
        backgroundColor: "var(--primary-color)",
      },
      color: state.isSelected ? "var(--primary-color)" : "#333", // normal text
      ":active": {
        backgroundColor: "var(--primary-color)",
        color: "#fff",
      },
      "&:hover": {
        backgroundColor: "var(--primary-color)",
        color: "#fff",
      },
    }),

    menu: (provided) => ({
      ...provided,
      borderRadius: "8px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      fontWeight: "normal",
    }),
    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "#C8E6C9",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "#2E7D32",
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: "#2E7D32",
      ":hover": {
        backgroundColor: "#81C784",
        color: "white",
      },
    }),
    input: (base) => ({
      ...base,
      borderColor: isFocused ? "none" : "#e0e0e0",
      boxShadow: isFocused ? "none" : "none",
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
      margin: 0,
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    noOptionsMessage: (provided) => ({
      ...provided,
      fontSize: "0.875rem", // 👈 change font size here
    }),
  };

  return (
    <Select
      options={options}
      isClearable={false}
      styles={customStyles}
      autoComplete="customselectinputthatshallneverbefilled"
      getOptionLabel={(e) => e[labelKey]}
      getOptionValue={(e) => e[valueKey]}
      placeholder=""
      value={value}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMenuClose={handleBlur}
      components={{ DropdownIndicator,Input }}
      inputProps={{ autoComplete: "customselectinputthatshallneverbefilled", form: { autoComplete: "off" } }}
      isDisabled={isDisabled}
      {...props}
    />
  );
};

export default FormSelect;
