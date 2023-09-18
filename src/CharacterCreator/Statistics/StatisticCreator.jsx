import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import SkillCreator from "./Skills/SkillCreator";
import CharacteristicsCreator from "./CharacteristicsCreator";

export default function StatisticCreator({ submitStatisticData, changeStep }) {
  const [charactericsRemaining, setCharacteristicsRemaining] = useState(false);
  const [skillsRemaining, setSkillsRemaining] = useState(false);

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
        submitCharacteristicData={setField}
        isDisabled={isDisabled}
      />
      <SkillCreator submitSkillData={setField} isDisabled={isDisabled} />
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
        onClick={() => changeStep("backward")}
      >
        Back
      </Button>
      {charactericsRemaining === 0 && skillsRemaining === 0 && (
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
          onClick={() => changeStep("forward")}
        >
          Next
        </Button>
      )}
    </div>
  );
}
