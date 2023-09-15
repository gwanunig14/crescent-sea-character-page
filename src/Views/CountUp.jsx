import React from "react";
import Button from "react-bootstrap/Button";

export default function CountUp({
  fieldName,
  dataKey,
  count,
  returnText,
  plusDisabled,
  minusDisabled,
  confirmation,
}) {
  const handleButtonPress = (func) => {
    const newNumber = func === "plus" ? count + 1 : count - 1;
    returnText(dataKey, newNumber);
  };

  const characteristicWarning = () => {
    if (fieldName === "Dodge" || fieldName === "Gaming") {
      return (
        <div>
          {`Starting ${fieldName} skill is based on characteristics and can't be altered directly.`}
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      {`${fieldName}: ${count}`}
      {characteristicWarning()}
      {!minusDisabled && !confirmation && (
        <Button
          disabled={minusDisabled}
          onClick={() => handleButtonPress("minus")}
        >
          -
        </Button>
      )}
      {!plusDisabled && !confirmation && (
        <Button
          disabled={plusDisabled}
          onClick={() => handleButtonPress("plus")}
        >
          +
        </Button>
      )}
    </div>
  );
}
