import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import CountUp from "./CountUp";
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
          <td></td>
          <td>
            <CountUp
              key={specialty}
              fieldName={skillString}
              dataKey={specialty}
              count={skillPoint}
              returnText={specialtyChanged}
              plusDisabled={disabled(stringHash.name, skillPoint, "plus")}
              minusDisabled={disabled(stringHash.name, skillPoint, "minus")}
            />
          </td>
        </>
      );
    });
  };

  const characteristicWarning = () => {
    if (ignore.includes(stringHash.name)) {
      return (
        <td style={{ textAlign: "left" }}>
          {`Starting ${stringHash.name} skill is based on characteristics and can't be altered directly.`}
        </td>
      );
    }
    return null;
  };

  return list.general ? (
    <CountUp
      fieldName={stringHash.name}
      dataKey={primarySkill}
      count={list.general}
      returnText={skillChanged}
      plusDisabled={disabled(list.general, "plus")}
      minusDisabled={disabled(list.general, "plus")}
    />
  ) : (
    <>
      <tr>
        <td>{stringHash.name + ": "}</td>
        <td>{characteristicWarning()}</td>
      </tr>
      <tr>{renderSpecialties()}</tr>
      {opened ? (
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
        />
      ) : (
        <tr>
          <td></td>
          <td style={{ textAlign: "left" }}>
            <Button onClick={() => setOpened(true)}>New Specialty</Button>
          </td>
        </tr>
      )}
    </>
  );
}
