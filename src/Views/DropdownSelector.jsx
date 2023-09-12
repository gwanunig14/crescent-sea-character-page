import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Capitalize } from "../Strings";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function DropdownSelector({
  name,
  dataKey,
  optionList,
  setField,
  value,
}) {
  const label = () => {
    if (value && typeof value === "string") {
      return Capitalize(value);
    }

    return "Select your " + name;
  };

  const handleSelect = (e) => {
    setField(dataKey, e);
  };

  return (
    <div>
      {name}
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {label()}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {optionList?.map((option) => (
            <Dropdown.Item eventKey={option} key={option}>
              {Capitalize(option)}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
