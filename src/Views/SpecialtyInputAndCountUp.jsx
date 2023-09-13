import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CountUp from "./CountUp";

export default function SpecialtyInputAndCountUp({
  primarySkill,
  stringHash,
  list,
  setSpecialty,
  disabled,
}) {
  const [opened, setOpened] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const enterPressed = (event) => {
    if (event.key === "Enter") {
      setSpecialty(primarySkill, event.target.value, 0);
      setOpened(false);
      setInputValue("");
    }
  };

  const specialtyChanged = (specialty, newNumber) => {
    setSpecialty(primarySkill, specialty, newNumber);
  };

  const countUpView = (
    fieldName,
    dataKey,
    count,
    plusDisabled,
    minusDisabled
  ) => (
    <CountUp
      fieldName={fieldName}
      dataKey={dataKey}
      count={count}
      returnText={specialtyChanged}
      plusDisabled={plusDisabled}
      minusDisabled={minusDisabled}
    />
  );

  const characteristicWarning = () => {
    if (stringHash.name === "Literacy" || stringHash.name === "Language") {
      return (
        <div>
          {"Starting " +
            stringHash.name +
            " skill is based on characteristics and can't be altered directly."}
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      {list.general ? (
        <CountUp
          fieldName={stringHash.name}
          dataKey={primarySkill}
          count={list.general}
          returnText={specialtyChanged}
          plusDisabled={disabled(list.general, "plus")}
          minusDisabled={disabled(list.general, "plus")}
        />
      ) : (
        <div>{stringHash.name + ": "}</div>
      )}
      {characteristicWarning()}
      {Object.keys(list).map((specialty) => {
        if (specialty === "general") return null;

        const skillString = stringHash[specialty]
          ? stringHash[specialty]
          : specialty;
        const skillPoint = list[specialty];
        return countUpView(
          skillString,
          specialty,
          skillPoint,
          disabled(stringHash.name, skillPoint, "plus"),
          disabled(stringHash.name, skillPoint, "minus")
        );
      })}
      {opened ? (
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={enterPressed}
        />
      ) : (
        <Button onClick={() => setOpened(true)}>New Specialty</Button>
      )}
    </div>
  );
}
