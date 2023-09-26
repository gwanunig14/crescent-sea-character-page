import React from "react";
import { makeMutableCopy } from "../../Tools/ReusableFunctions";
import { CharacteristicCountUp } from "../../Views/CountUp";

export default function CharacteristicsCreator({
  character,
  submitCharacteristicData,
  isDisabled,
}) {
  // Initialize characteristics based on race
  const characteristicPointCount = 106;

  let characteristicData = character.characteristics;

  // Update the field in characteristicData
  function setCharactics(key, stringData) {
    let newCD = makeMutableCopy(characteristicData);
    newCD[key] = Number(stringData);
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
