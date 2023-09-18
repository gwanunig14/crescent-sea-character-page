import React, { useState } from "react";
import {
  newDwarfCharacteristics,
  newElfCharacteristics,
  newHumanCharacteristics,
} from "../../DataTemplates/CharacteristicData";
import { useSelector } from "react-redux";
import { makeMutableCopy } from "../../Tools/ReusableFunctions";
import { CharacteristicCountUp } from "../../Views/CountUp";

export default function CharacteristicsCreator({
  submitCharacteristicData,
  isDisabled,
}) {
  // Initialize characteristics based on race
  const character = useSelector((state) => state.currentCharacter);
  const characteristicPointCount = 108;
  // let characteristicPointCount = 85;

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
  function setCharactics(key, stringData) {
    let newCD = makeMutableCopy(characteristicData);
    newCD[key] = Number(stringData);
    setCharacteristicData(newCD);
    submitCharacteristicData(
      newCD,
      getCharacteristicsCount(),
      "characteristics"
    );
  }

  // Calculate remaining points
  const getCharacteristicsCount = () => {
    let statCount = Object.values(characteristicData).reduce(
      (acc, v) => acc + v,
      0
    );

    const result = characteristicPointCount - statCount;
    return result;
  };

  return (
    <>
      <div>{`${getCharacteristicsCount()}`}</div>
      <div>{`characteristic points remaining.`}</div>
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            {Object.keys(characteristicData).map((key) => (
              <CharacteristicCountUp
                key={key}
                fieldName={key}
                dataKey={key}
                count={characteristicData[key]}
                returnText={setCharactics}
                plusDisabled={isDisabled(
                  characteristicData[key],
                  "plus",
                  getCharacteristicsCount(),
                  20
                )}
                minusDisabled={isDisabled(
                  characteristicData[key],
                  "minus",
                  getCharacteristicsCount()
                )}
              />
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
}
