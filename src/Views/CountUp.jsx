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
        <div style={{ textAlign: "left" }}>
          {`Starting ${fieldName} skill is based on characteristics and can't be altered directly.`}
        </div>
      );
    }
    return null;
  };

  return (
    <table style={{ width: "100%" }}>
      <tbody>
        <tr>
          <td
            style={{ width: "100px", textAlign: "left" }}
          >{`${fieldName}:`}</td>
          <td style={{ width: "30px", textAlign: "right" }}>{count}</td>
          {characteristicWarning() ? (
            <td>{characteristicWarning()}</td>
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
      </tbody>
    </table>
  );
}
