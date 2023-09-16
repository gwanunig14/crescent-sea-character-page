import React, { useState } from "react";
import {
  newDwarfCharacteristics,
  newElfCharacteristics,
  newHumanCharacteristics,
} from "../DataTemplates/CharacteristicData";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { makeMutableCopy } from "../Tools/ReusableFunctions";
import { ignore } from "../Tools/Strings";

function CharacteristCountUp({
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
        <div>
          {`Starting ${fieldName} skill is based on characteristics and can't be altered directly.`}
        </div>
      );
    }
    return null;
  };

  return (
    <td>
      <div
        style={{ display: "flex", width: "120px", justifyContent: "center" }}
      >
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

export default function CharacteristicCreator({ submitCharacteristicData }) {
  // Initialize characteristics based on race
  const character = useSelector((state) => state.currentCharacter);
  let characteristics = character.characteristics;

  if (!characteristics) {
    characteristics = newHumanCharacteristics;

    switch (character.personalDetails.race) {
      case "dwarf":
        characteristics = newDwarfCharacteristics;
        break;
      case "elf":
        characteristics = newElfCharacteristics;
        break;
      default:
        break;
    }
  }

  const [characteristicData, setCharacteristicData] = useState(characteristics);

  // Update the field in characteristicData
  function setField(key, stringData) {
    let newCD = makeMutableCopy(characteristicData);
    newCD[key] = Number(stringData);
    setCharacteristicData(newCD);
  }

  // Calculate remaining points
  const getCount = () => {
    let statCount = Object.values(characteristicData).reduce(
      (acc, v) => acc + v,
      0
    );
    return 108 - statCount;
  };

  // Check if a button should be disabled
  const isDisabled = (current, func, max) => {
    if (func === "plus") {
      return getCount() === 0 || current === max;
    } else {
      return current === 0;
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <div>{`${getCount()} characteristic points remaining.`}</div>
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            {Object.keys(characteristicData).map((key) => (
              <CharacteristCountUp
                key={key}
                fieldName={key}
                dataKey={key}
                count={characteristicData[key]}
                returnText={setField}
                plusDisabled={isDisabled(characteristicData[key], "plus", 20)}
                minusDisabled={isDisabled(characteristicData[key], "minus")}
              />
            ))}
          </tr>
        </tbody>
      </table>
      <Button
        onClick={() =>
          submitCharacteristicData(
            characteristicData,
            "characteristics",
            "minus"
          )
        }
      >
        Back
      </Button>
      {getCount() === 0 && (
        <Button
          onClick={() =>
            submitCharacteristicData(
              characteristicData,
              "characteristics",
              "plus"
            )
          }
        >
          Next
        </Button>
      )}
    </div>
  );
}
