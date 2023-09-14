import React, { useState } from "react";
import {
  CommunicationStrings,
  MotorSkillStrings,
  CombatStrings,
  RaceStrings,
  MentalStrings,
  PerceptionStrings,
  PhysicalStrings,
} from "../Strings";
import CountUp from "../Views/CountUp";
import { Button } from "react-bootstrap";
import {
  StarterDwarfSkills,
  StarterHumanSkills,
} from "../DataTemplates/Skills/StarterRaces";
import SpecialtyInputAndCountUp from "../Views/SpecialtyInputAndCountUp";

export default function SkillPage({
  character,
  maxSkillPoints,
  submitSkillData,
}) {
  const [skillData, setSkillData] = useState(
    character.skills || getDefaultSkills(character)
  );

  function setSkill(key, stringData) {
    const group = findGroup(skillData, key);
    const newSkillData = { ...skillData };
    newSkillData[group][key] = Number(stringData);
    setSkillData(newSkillData);
  }

  function setSpecialty(skillKey, specialtyKey, stringData) {
    const group = findGroup(skillData, skillKey);
    const newSkillData = { ...skillData };
    newSkillData[group][skillKey][specialtyKey] = Number(stringData);
    setSkillData(newSkillData);
  }

  function getDefaultSkills(character) {
    switch (character.personalDetails.race) {
      case RaceStrings.dwarf:
      case RaceStrings.elf:
        return StarterDwarfSkills;
      default:
        return StarterHumanSkills;
    }
  }

  const getCount = () => {
    let statCount = 0;
    Object.values(skillData).forEach((v) => {
      Object.values(v).forEach((va) => {
        if (
          va !== "Language" ||
          va !== "Literacy" ||
          va !== "Dodge" ||
          va !== "Gaming"
        )
          if (typeof va === "number") {
            statCount += va;
          } else {
            Object.values(va).forEach((val) => {
              statCount += val;
            });
          }
      });
    });
    return maxSkillPoints - statCount;
  };

  const disabled = (skill, current, func) => {
    if (
      skill === "Language" ||
      skill === "Literacy" ||
      skill === "Dodge" ||
      skill === "Gaming"
    )
      return true;
    if (func === "plus") {
      if (getCount() === 0) {
        return true;
      } else if (current === 100) {
        return true;
      }
    } else {
      if (current === 0) {
        return true;
      }
    }

    return false;
  };

  const skillSection = (sectionName, section, modifier, stringHash) => (
    <div>
      <div>{sectionName}</div>
      <div>
        {sectionName} skills will have{" "}
        {Math.floor(character.characteristics[modifier] / 2)} points added to
        them based on {character.personalDetails.characterName}'s {modifier}
      </div>
      {countUpLoop(stringHash, section)}
    </div>
  );

  const countUpLoop = (skillHash, skillGroup) => {
    return Object.keys(skillHash).map((skill) => {
      if (typeof skillData[skillGroup][skill] === "number") {
        const skillString = skillHash[skill];
        const skillPoint = skillData[skillGroup][skill];
        return countUpView(
          skillString,
          skill,
          skillPoint,
          disabled(skillPoint, "plus"),
          disabled(skillPoint, "minus")
        );
      } else {
        return (
          <SpecialtyInputAndCountUp
            key={skill}
            primarySkill={skill}
            stringHash={skillHash[skill]}
            list={skillData[skillGroup][skill]}
            setSpecialty={setSpecialty}
            disabled={disabled}
          />
        );
      }
    });
  };

  const countUpView = (
    fieldName,
    dataKey,
    count,
    plusDisabled,
    minusDisabled
  ) => (
    <CountUp
      key={dataKey}
      fieldName={fieldName}
      dataKey={dataKey}
      count={count}
      returnText={setSkill}
      plusDisabled={plusDisabled}
      minusDisabled={minusDisabled}
    />
  );

  return (
    <div>
      {skillSection(
        "Communication",
        "communication",
        "charisma",
        CommunicationStrings
      )}
      {skillSection(
        "Motor Skills",
        "motorSkills",
        "dexterity",
        MotorSkillStrings
      )}
      {skillSection("Mental", "mental", "intelligence", MentalStrings)}
      {skillSection("Perception", "perception", "power", PerceptionStrings)}
      {skillSection("Physical", "physical", "strength", PhysicalStrings)}
      {skillSection("Combat", "combat", "dexterity", CombatStrings)}
      <div>{getCount()}</div>
      {getCount() === 0 && (
        <Button onClick={() => submitSkillData(skillData, "characteristics")}>
          Next
        </Button>
      )}
      <Button
        onClick={() => submitSkillData(skillData, "personalDetails", "minus")}
      >
        Back
      </Button>
    </div>
  );
}
