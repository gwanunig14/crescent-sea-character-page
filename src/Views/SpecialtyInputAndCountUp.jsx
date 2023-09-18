import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import GenericCountUp from "./CountUp";
import { ignore } from "../Tools/Strings";

export default function SpecialtyInputAndCountUp({
  primarySkill,
  stringHash,
  list,
  setSkill,
  setSpecialty,
  disabled,
}) {
  const [opened, setOpened] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const skillChanged = (skill, newNumber) => {
    setSkill(skill, newNumber);
  };

  const specialtyChanged = (specialty, newNumber) => {
    setSpecialty(primarySkill, specialty, newNumber);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      setSpecialty(primarySkill, event.target.value, 0);
      setOpened(false);
      setInputValue("");
    }
  };

  const renderSpecialties = () => {
    return Object.keys(list).map((specialty) => {
      if (specialty === "general") return null;

      const skillString = stringHash[specialty] || specialty;
      const skillPoint = list[specialty];

      return (
        <>
          <GenericCountUp
            key={specialty}
            fieldName={skillString}
            dataKey={specialty}
            count={skillPoint}
            returnText={specialtyChanged}
            plusDisabled={disabled(stringHash.name, skillPoint, "plus")}
            minusDisabled={disabled(stringHash.name, skillPoint, "minus")}
          />
        </>
      );
    });
  };

  const characteristicWarning = () => {
    debugger;
    if (ignore.includes(stringHash.name)) {
      return (
        <div
          style={{ textAlign: "left", display: "inline-block", width: "350px" }}
        >
          {`Starting ${stringHash.name} skill is based on characteristics and can't be altered directly.`}
        </div>
      );
    } else if (Object.keys(list).length === 0) {
      return (
        <div
          style={{ textAlign: "left", display: "inline-block", width: "350px" }}
        >
          {`${stringHash.name} has no basic skill and requires specialties to be usable.`}
        </div>
      );
    }
    return null;
  };

  return list.general ? (
    <>
      <GenericCountUp
        fieldName={stringHash.name}
        dataKey={primarySkill}
        count={list.general}
        returnText={skillChanged}
        plusDisabled={disabled(primarySkill, list.general, "plus")}
        minusDisabled={disabled(primarySkill, list.general, "minus")}
      />

      <div style={{ textAlign: "left", paddingLeft: "120px" }}>
        <Button onClick={() => setOpened(true)}>New Specialty</Button>
      </div>
    </>
  ) : (
    <>
      <div
        style={{
          width: "120px",
          textAlign: "left",
          verticalAlign: "top",
          display: "inline-block",
        }}
      >
        {stringHash.name + ": "}
      </div>
      {characteristicWarning()}
      {renderSpecialties()}
      {opened ? (
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
        />
      ) : (
        <div style={{ textAlign: "left", paddingLeft: "120px" }}>
          <Button onClick={() => setOpened(true)}>New Specialty</Button>
        </div>
      )}
    </>
  );
}
