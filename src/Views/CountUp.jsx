import React from "react";
import Button from "react-bootstrap/Button";
import { ignore } from "../Tools/Strings";

export default function GenericCountUp({
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
    if (ignore.includes(fieldName)) {
      return (
        <div style={{ textAlign: "left", display: "inline-block" }}>
          {`Starting ${fieldName} skill is based on characteristics and can't be altered directly.`}
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ marginBottom: "15px" }}>
      <div
        style={{ width: "140px", textAlign: "left", display: "inline-block" }}
      >{`${fieldName}:`}</div>
      <div
        style={{ width: "30px", textAlign: "left", display: "inline-block" }}
      >
        {count}
      </div>
      {characteristicWarning() ? (
        characteristicWarning()
      ) : (
        <>
          <div style={{ display: "inline-block" }}>
            {!minusDisabled && !confirmation && (
              <Button
                disabled={minusDisabled}
                onClick={() => handleButtonPress("minus")}
              >
                -
              </Button>
            )}
          </div>
          <div style={{ display: "inline-block" }}>
            {!plusDisabled && !confirmation && (
              <Button
                disabled={plusDisabled}
                onClick={() => handleButtonPress("plus")}
              >
                +
              </Button>
            )}
          </div>
        </>
      )}
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
  confirmation,
}) {
  const handleButtonPress = (func) => {
    const newNumber = func === "plus" ? count + 1 : count - 1;
    returnText(dataKey, newNumber, "characteristics");
  };

  return (
    <td>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        {!minusDisabled && !confirmation && (
          <Button
            disabled={minusDisabled}
            onClick={() => handleButtonPress("minus")}
          >
            -
          </Button>
        )}
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            bottom: 0,
          }}
        >
          <span style={{ alignSelf: "center" }}>{`${fieldName}:`}</span>
          <span style={{ alignSelf: "center" }}>{count}</span>
        </div>
        {!plusDisabled && !confirmation && (
          <Button
            disabled={plusDisabled}
            onClick={() => handleButtonPress("plus")}
          >
            +
          </Button>
        )}
      </div>
    </td>
  );
}
