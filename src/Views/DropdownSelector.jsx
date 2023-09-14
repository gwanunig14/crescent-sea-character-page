import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function DropdownSelector({
  name,
  dataKey,
  optionList,
  setField,
  value,
}) {
  const label =
    value && typeof value === "string" ? value : `Select your ${name}`;

  const handleSelect = (selectedValue) => {
    setField(dataKey, selectedValue);
  };

  return (
    <div>
      {name}
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {label}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {optionList?.map((option) => (
            <Dropdown.Item eventKey={option} key={option}>
              {option}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
