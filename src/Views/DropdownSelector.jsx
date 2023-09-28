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
      ? optionList[value] && typeof optionList[value] !== "object"
        ? optionList[value]
        : value
      : `${name}`;

  const handleSelect = (selectedValue) => {
    setField(dataKey, selectedValue);
  };

  const style = !rep
    ? { fontSize: "12px", width: "132px" }
    : { fontSize: "12px", width: "100px" };

  return (
    <div>
      {!rep ? (
        <div
          style={{
            display: "inline-block",
            marginRight: "10px",
            width: "140px",
          }}
        >{`${name}:`}</div>
      ) : null}
      <div style={{ display: "inline-block" }}>
        <Dropdown onSelect={handleSelect}>
          <Dropdown.Toggle variant="success" id="dropdown-basic" style={style}>
            {label}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {optionList.constructor === Array
              ? optionList.map((option) => (
                  <Dropdown.Item eventKey={option} key={option}>
                    {option}
                  </Dropdown.Item>
                ))
              : Object.keys(optionList)?.map((option) => (
                  <Dropdown.Item eventKey={option} key={option}>
                    {typeof optionList[option] === "string"
                      ? optionList[option]
                      : option}
                  </Dropdown.Item>
                ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export function AddItemDropdownSelector({ name, optionList, setField, value }) {
  const label = value && typeof value === "string" ? value : `${name}`;

  const handleSelect = (selectedValue) => {
    setField(selectedValue, optionList[selectedValue]);
  };

  return (
    <div>
      <div
        style={{
          display: "inline-block",
          marginRight: "10px",
          width: "140px",
        }}
      >{`${name}:`}</div>
      <div style={{ display: "inline-block" }}>
        <Dropdown onSelect={handleSelect}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {label}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {Object.keys(optionList)?.map((option) => (
              <Dropdown.Item eventKey={option} key={option}>
                {option}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}
