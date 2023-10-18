import React from "react";
import "./Select.css";

const Select = ({ listOptions, onchange, value }) => {
  return (
    <div className="select">
      <select onChange={onchange} value={value}>
        {listOptions.map((option: any) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

export const SelectObject = ({ options, onChange, value }) => {
  return (
    <div className="select">
      <select onChange={onChange} value={value}>
        {options.map((list: any) => (
          <option value={list.value} key={list.value}>
            {list.description.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};
