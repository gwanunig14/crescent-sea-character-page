import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import GenericCountUp from "./CountUp";
import { ignore } from "../Tools/Strings";
import { emptyArray } from "../Tools/ReusableFunctions";

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
    return list.map(({ specialty, val }, i) => {
      if (specialty === "general") return null;

      const skillString = stringHash[specialty] || specialty;
      const skillPoint = val;

      return (
        <div style={{ marginLeft: "50px" }} key={i}>
          <GenericCountUp
            key={specialty}
            fieldName={skillString}
            dataKey={specialty}
            count={skillPoint}
            returnText={specialtyChanged}
            plusDisabled={disabled(stringHash.name, skillPoint, "plus")}
            minusDisabled={disabled(stringHash.name, skillPoint, "minus")}
          />
        </div>
      );
    });
  };

  const characteristicWarning = () => {
    if (ignore.includes(stringHash.name)) {
      return (
        <div
          style={{ textAlign: "left", display: "inline-block", width: "310px" }}
        >
          {`Starting ${stringHash.name} skill is based on characteristics and can't be altered directly.`}
        </div>
      );
    } else if (emptyArray(list)) {
      return (
        <div
          style={{ textAlign: "left", display: "inline-block", width: "310px" }}
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
      {renderSpecialties()}
      <div style={{ textAlign: "left", paddingLeft: "140px" }}>
        <Button onClick={() => setOpened(true)}>New Specialty</Button>
      </div>
    </>
  ) : (
    <div style={{ marginBottom: "15px" }}>
      <div style={{ marginBottom: "15px" }}>
        <div
          style={{
            width: "140px",
            textAlign: "left",
            verticalAlign: "top",
            display: "inline-block",
          }}
        >
          {stringHash.name + ": "}
        </div>
        {characteristicWarning()}
      </div>
      {renderSpecialties()}
      {!ignore.includes(stringHash.name) ? (
        opened ? (
          <div>
            <input
              type="text"
              value={inputValue}
              style={{ marginLeft: "140px" }}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
            />
          </div>
        ) : (
          <div style={{ textAlign: "left", paddingLeft: "140px" }}>
            <Button onClick={() => setOpened(true)}>New Specialty</Button>
          </div>
        )
      ) : null}
    </div>
  );
}
