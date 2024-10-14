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

  const style = {
    fontSize: "14px",
    width: rep ? "120px" : "152px",
    backgroundColor: "white",
    color: "#4a2c2a",
    borderColor: "#4a2c2a",
  };

  return (
    <div>
      {!rep ? (
        <div
          style={{
            display: "inline-block",
            marginRight: "10px",
            width: "160px",
            fontSize: "14px",
          }}
        >{`${name}:`}</div>
      ) : null}
      <div style={{ display: "inline-block" }}>
        <Dropdown onSelect={handleSelect}>
          <Dropdown.Toggle
            variant="outline-secondary"
            id="dropdown-basic"
            style={style}
          >
            {label}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {optionList.constructor === Array
              ? optionList.map((option) => (
                  <Dropdown.Item
                    eventKey={option}
                    key={option}
                    style={{ color: "#4a2c2a" }}
                  >
                    {option}
                  </Dropdown.Item>
                ))
              : Object.keys(optionList)?.map((option) => (
                  <Dropdown.Item
                    eventKey={option}
                    key={option}
                    style={{ color: "#4a2c2a" }}
                  >
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

  const style = {
    fontSize: "14px",
    backgroundColor: "white",
    color: "#4a2c2a",
    borderColor: "#4a2c2a",
  };

  return (
    <div>
      <div
        style={{
          display: "inline-block",
          marginRight: "10px",
          width: "160px",
          fontSize: "14px",
        }}
      >{`${name}:`}</div>
      <div style={{ display: "inline-block" }}>
        <Dropdown onSelect={handleSelect}>
          <Dropdown.Toggle
            variant="outline-secondary"
            id="dropdown-basic"
            style={style}
          >
            {label}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {Object.keys(optionList)?.map((option) => (
              <Dropdown.Item
                eventKey={option}
                key={option}
                style={{ color: "#4a2c2a" }}
              >
                {option}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}
