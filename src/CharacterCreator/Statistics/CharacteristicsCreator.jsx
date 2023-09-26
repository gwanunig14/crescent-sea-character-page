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
            {characteristicData.map(({ key, value }) => (
              <CharacteristicCountUp
                key={key}
                fieldName={key}
                dataKey={key}
                count={value}
                returnText={setCharactics}
                plusDisabled={isDisabled(
                  value,
                  "plus",
                  getCharacteristicsCount(),
                  20
                )}
                minusDisabled={isDisabled(
                  value,
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
