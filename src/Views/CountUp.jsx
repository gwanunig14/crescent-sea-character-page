import React from "react";
import Button from "react-bootstrap/Button";
import { ignore } from "../Tools/Strings";

// Common styles
const commonStyles = {
  inlineBlock: { display: "inline-block" },
  leftAlign: { textAlign: "left" },
  spacer: { marginRight: "5px" },
  containerBorder: {
    border: "2px solid #4a2c2a",
    padding: "10px 5px", // 10px vertical, 5px horizontal
    borderRadius: "4px",
  },
};

// Updated CounterButton component
const CounterButton = ({ disabled, onClick, label }) => (
  <div style={{ ...commonStyles.inlineBlock, ...commonStyles.spacer }}>
    {!disabled && (
      <Button
        disabled={disabled}
        onClick={onClick}
        style={{
          padding: "2px 6px", // Reduced padding to make the button smaller
          fontSize: "0.75rem", // Smaller font size
          lineHeight: "1", // Tighter line height
          border: "1px solid #4a2c2a", // Replace #007bff with your banner color
          backgroundColor: "white",
          color: "#4a2c2a", // Replace #007bff with your banner color
        }}
      >
        {label}
      </Button>
    )}
  </div>
);

export default function GenericCountUp({
  fieldName,
  dataKey,
  count,
  returnText,
  plusDisabled,
  minusDisabled,
}) {
  const handleButtonPress = (func) => {
    const newNumber = func === "plus" ? count + 1 : count - 1;
    returnText(dataKey, newNumber);
  };

  const characteristicWarning = () => {
    if (ignore.includes(fieldName)) {
      return (
        <div
          style={{
            ...commonStyles.leftAlign,
            ...commonStyles.inlineBlock,
            marginTop: "5px",
          }}
        >
          {`Starting ${
            fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
          } skill is based on characteristics and can't be altered directly.`}
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ ...commonStyles.containerBorder, marginBottom: "10px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span
          style={{
            ...commonStyles.leftAlign,
            ...commonStyles.inlineBlock,
            width: "140px",
            marginRight: "3px", // Reduced from 5px to 3px
          }}
        >
          {`${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}:`}
        </span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <span
            style={{
              ...commonStyles.inlineBlock,
              width: "30px",
              textAlign: "center",
              marginRight: "3px", // Reduced from 5px to 3px
            }}
          >
            {count}
          </span>
          {!ignore.includes(fieldName) && (
            <>
              <CounterButton
                disabled={minusDisabled}
                onClick={() => handleButtonPress("minus")}
                label="-"
              />
              <CounterButton
                disabled={plusDisabled}
                onClick={() => handleButtonPress("plus")}
                label="+"
              />
            </>
          )}
        </div>
      </div>
      {characteristicWarning()}
    </div>
  );
}

export function CharacteristicCountUp({
  fieldName,
  dataKey,
  count,
  returnText,
  plusDisabled,
  minusDisabled,
}) {
  const handleButtonPress = (func) => {
    const newNumber = func === "plus" ? count + 1 : count - 1;
    returnText(dataKey, newNumber, "characteristics");
  };

  return (
    <td style={{ padding: "3px" }}>
      <div
        style={{
          ...commonStyles.containerBorder,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ marginRight: "3px" }}>{`${
          fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
        }:`}</span>
        <span
          style={{ marginRight: "3px", textAlign: "center", width: "30px" }}
        >
          {count}
        </span>
        <CounterButton
          disabled={minusDisabled}
          onClick={() => handleButtonPress("minus")}
          label="-"
        />
        <CounterButton
          disabled={plusDisabled}
          onClick={() => handleButtonPress("plus")}
          label="+"
        />
      </div>
    </td>
  );
}
