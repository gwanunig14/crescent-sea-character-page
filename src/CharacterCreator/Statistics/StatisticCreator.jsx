import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import SkillCreator from "./Skills/SkillCreator";
import CharacteristicsCreator from "./CharacteristicsCreator";

export default function StatisticCreator({
  submitStatisticData,
  changeStep,
  character,
}) {
  const [characteristicsRemaining, setCharacteristicsRemaining] = useState(0);
  const [skillsRemaining, setSkillsRemaining] = useState(0);

  // Update the field in characteristicData
  function setField(nD, remaining, section) {
    if (section === "skills") {
      setSkillsRemaining(remaining - 1);
    } else {
      setCharacteristicsRemaining(remaining - 1);
    }
    submitStatisticData(nD, section);
  }
  // Check if a button should be disabled
  const isDisabled = (current, func, counter, max) => {
    if (func === "plus") {
      return counter === 0 || current === max;
    } else {
      return current === 0;
    }
  };

  return (
    <div>
      <CharacteristicsCreator
        character={character}
        submitCharacteristicData={setField}
        isDisabled={isDisabled}
      />
      <SkillCreator
        character={character}
        submitSkillData={setField}
        isDisabled={isDisabled}
      />
      <Button
        style={{
          fontSize: "12px !important",
          height: "45px",
          margin: "20px 0 0 20px",
          position: "absolute",
          left: "10px",
          top: "10px",
          width: "100px",
          backgroundColor: "white",
          color: "#4a2c2a",
          borderColor: "#4a2c2a",
          borderWidth: "2px",
          fontWeight: "bold",
        }}
        onClick={() => changeStep("backward")}
      >
        Back
      </Button>
      {characteristicsRemaining === 0 && skillsRemaining === 0 && (
        <Button
          style={{
            fontSize: "12px !important",
            height: "45px",
            margin: "20px 20px 0 0",
            position: "absolute",
            right: "10px",
            top: "10px",
            width: "100px",
            backgroundColor: "white",
            color: "#4a2c2a",
            borderColor: "#4a2c2a",
            borderWidth: "2px",
            fontWeight: "bold",
          }}
          onClick={() => changeStep("forward")}
        >
          Next
        </Button>
      )}
    </div>
  );
}
