import React from "react";
import Select, { components } from "react-select";

// Custom Dropdown Indicator
const DropdownIndicator = (props) => {
  const { menuIsOpen } = props.selectProps;
  return (
    <components.DropdownIndicator {...props}>
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

// Custom styles for react-select
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "#F6F6F6",
    border: "none",
    boxShadow: "none",
    borderRadius: "12px",
    height: "100%",
    minWidth: "5.25rem",
    paddingLeft: "0.875rem",
    paddingright: "0.875rem",
    fontSize: "0.75rem",
    color: "#31313B",
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: "0",
  }),
  input: (provided) => ({
    ...provided,
    margin: "0",
    paddingLeft: "0.875rem",
    paddingright: "0.875rem",
    paddingTop: "0.75rem",
    paddingBottom: "0.75rem",
    fontSize: "0.75rem",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: "#A3A3A3",
    paddingRight: "12px",
    transition: "transform 0.2s",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "12px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
    marginTop: "4px",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#F0F0F0" : "#fff",
    color: "#31313B",
    fontSize: "18px",
    cursor: "pointer",
  }),
};

const FormSelect = ({
  options,
  labelKey = "label",
  valueKey = "value",
  ...props
}) => {
  return (
    <Select
      options={options}
      isClearable={false}
      styles={customStyles}
      autoComplete="off"
      getOptionLabel={(e) => e[labelKey]}
      getOptionValue={(e) => e[valueKey]}
      components={{ DropdownIndicator }}
      {...props}
    />
  );
};

export default FormSelect;
