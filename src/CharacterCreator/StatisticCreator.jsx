import React, { useState } from "react";
import {
  newDwarfCharacteristics,
  newElfCharacteristics,
  newHumanCharacteristics,
} from "../DataTemplates/CharacteristicData";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { makeMutableCopy } from "../Tools/ReusableFunctions";
import SkillCreator from "./SkillCreator";

function CharacteristicCountUp({
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

export default function StatisticCreator({ submitCharacteristicData }) {
  // Initialize characteristics based on race
  const character = useSelector((state) => state.currentCharacter);
  // const characteristicPointCount = 108;
  let characteristicPointCount = 85;

  let characteristics = character.characteristics;

  if (!characteristics) {
    switch (character.personalDetails.race) {
      case "dwarf":
        characteristics = newDwarfCharacteristics;
        break;
      case "elf":
        characteristics = newElfCharacteristics;
        break;
      default:
        characteristics = newHumanCharacteristics;
        break;
    }
  }

  const [characteristicData, setCharacteristicData] = useState(characteristics);

  // Update the field in characteristicData
  function setField(key, stringData, section) {
    let newCD = makeMutableCopy(characteristicData);
    newCD[key] = Number(stringData);
    setCharacteristicData(newCD);
    submitCharacteristicData(newCD, section);
  }

  // Calculate remaining points
  const getCharacteristicCount = () => {
    let statCount = Object.values(characteristicData).reduce(
      (acc, v) => acc + v,
      0
    );

    const result = characteristicPointCount - statCount;
    return result;
  };

  // Check if a button should be disabled
  const isDisabled = (current, func, max) => {
    if (func === "plus") {
      return getCharacteristicCount() === 0 || current === max;
    } else {
      return current === 0;
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <div>
        {`${getCharacteristicCount()} characteristic points remaining.`}
      </div>
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            {Object.keys(characteristicData).map((key) => (
              <CharacteristicCountUp
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
      <SkillCreator submitSkillData={setField} />
      <Button
        style={{
          fontSize: "12px !important",
          height: "45px",
          margin: "10px 10px 0 0",
          position: "absolute",
          left: "10px",
          top: "10px",
          width: "100px",
        }}
        onClick={() =>
          submitCharacteristicData(characteristicData, "characteristics")
        }
      >
        Back
      </Button>
      {getCharacteristicCount() === 0 && (
        <Button
          style={{
            fontSize: "12px !important",
            height: "45px",
            margin: "10px 10px 0 0",
            position: "absolute",
            right: "10px",
            top: "10px",
            width: "100px",
          }}
          onClick={() =>
            submitCharacteristicData(characteristicData, "characteristics")
          }
        >
          Next
        </Button>
      )}
    </div>
  );
}
