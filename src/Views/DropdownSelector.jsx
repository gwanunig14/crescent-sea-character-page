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
  rep = false,
}) {
  const label =
    value && typeof value === "string"
      ? optionList[value]
      : `Select your ${name}`;

  const handleSelect = (selectedValue) => {
    setField(dataKey, selectedValue);
  };

  debugger;

  return (
    <tr>
      {!rep ? <td>{name}</td> : null}
      <td>
        <Dropdown onSelect={handleSelect}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {label}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {Object.keys(optionList)?.map((option) => (
              <Dropdown.Item eventKey={option} key={option}>
                {optionList[option]}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
  );
}
