import React from "react";
import Button from "react-bootstrap/Button";
import { ignore } from "../Tools/Strings";

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
    if (ignore.includes(fieldName)) {
      return (
        <td style={{ textAlign: "left" }}>
          {`Starting ${fieldName} skill is based on characteristics and can't be altered directly.`}
        </td>
      );
    }
    return null;
  };

  return (
    <tr>
      <td style={{ width: "100px", textAlign: "left" }}>{`${fieldName}:`}</td>
      <td style={{ width: "30px", textAlign: "right" }}>{count}</td>
      {characteristicWarning() ? (
        characteristicWarning()
      ) : (
        <>
          <td>
            {!minusDisabled && !confirmation && (
              <Button
                disabled={minusDisabled}
                onClick={() => handleButtonPress("minus")}
              >
                -
              </Button>
            )}
          </td>
          <td>
            {!plusDisabled && !confirmation && (
              <Button
                disabled={plusDisabled}
                onClick={() => handleButtonPress("plus")}
              >
                +
              </Button>
            )}
          </td>
        </>
      )}
    </tr>
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
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <div>{`${fieldName}:`}</div>
        <div>{count}</div>
      </div>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <div>
          {!minusDisabled && !confirmation && (
            <Button
              disabled={minusDisabled}
              onClick={() => handleButtonPress("minus")}
            >
              -
            </Button>
          )}
        </div>
        <div>
          {!plusDisabled && !confirmation && (
            <Button
              disabled={plusDisabled}
              onClick={() => handleButtonPress("plus")}
            >
              +
            </Button>
          )}
        </div>
      </div>
    </td>
  );
}
