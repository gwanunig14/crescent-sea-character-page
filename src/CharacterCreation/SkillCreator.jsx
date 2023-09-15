import React, { useState } from "react";
import { ignore, SkillSectionStrings } from "../Tools/Strings";
import CountUp from "../Views/CountUp";
import Button from "react-bootstrap/Button";
import {
  StarterDwarfSkills,
  StarterElfSkills,
  StarterHumanSkills,
} from "../DataTemplates/Skills/StarterRaces";
import SpecialtyInputAndCountUp from "../Views/SpecialtyInputAndCountUp";
import { useSelector } from "react-redux";
import { makeMutableCopy } from "../Tools/ReusableFunctions";

export default function SkillPage({ maxSkillPoints, submitSkillData }) {
  const character = useSelector((state) => state.currentCharacter);
  const [skillData, setSkillData] = useState(
    character.skills || getDefaultSkills(character)
  );

  function setSkill(key, skillValue) {
    const group = findGroup(skillData, key);
    let newSD = makeMutableCopy(skillData);
    if (typeof skillData[group][key] === "number") {
      newSD[group][key] = Number(skillValue);
    } else {
      newSD[group][key].general = Number(skillValue);
    }
    setSkillData(newSD);
  }

  function setSpecialty(skillKey, specialtyKey, specialtyValue) {
    const group = findGroup(skillData, skillKey);
    let newSD = makeMutableCopy(skillData);
    newSD[group][skillKey][specialtyKey] = specialtyValue;
    setSkillData(newSD);
  }

  function findGroup(hash, targetItem) {
    for (const k in hash) {
      for (const ke in hash[k]) {
        if (ke === targetItem) {
          return k;
        }
      }
    }
  }

  function getDefaultSkills(character) {
    switch (character.personalDetails.race) {
      case "dwarf":
        return StarterDwarfSkills;
      case "elf":
        return StarterElfSkills;
      default:
        return StarterHumanSkills;
    }
  }

  const getCount = () => {
    let statCount = 0;
    Object.values(skillData).forEach((v) => {
      Object.values(v).forEach((va) => {
        if (ignore.includes(va))
          if (typeof va === "number") {
            statCount += va;
          } else if (typeof va !== "string") {
            Object.values(va).forEach((val) => {
              statCount += val;
            });
          }
      });
    });
    return maxSkillPoints - statCount;
  };

  const disabled = (skill, current, func) => {
    if (ignore.includes(skill)) return true;
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

  const skillSection = (sectionData) => {
    const { sectionName, section, modifier, stringHash } = sectionData;
    return (
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
  };

  const countUpLoop = (skillHash, skillGroup) => {
    return Object.keys(skillHash).map((skill) => {
      if (typeof skillData[skillGroup][skill] === "number") {
        const skillString = skillHash[skill];
        const skillPoint = skillData[skillGroup][skill];
        return countUpView(
          skillString,
          skill,
          skillPoint,
          disabled(skill, skillPoint, "plus"),
          disabled(skill, skillPoint, "minus")
        );
      } else if (skill !== "name") {
        return (
          <SpecialtyInputAndCountUp
            key={skill}
            primarySkill={skill}
            stringHash={skillHash[skill]}
            list={skillData[skillGroup][skill]}
            setSkill={setSkill}
            setSpecialty={setSpecialty}
            disabled={disabled}
          />
        );
      } else return null;
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
      {skillSection(SkillSectionStrings.communication)}
      {skillSection(SkillSectionStrings.motorSkills)}
      {skillSection(SkillSectionStrings.mental)}
      {skillSection(SkillSectionStrings.perception)}
      {skillSection(SkillSectionStrings.physical)}
      {skillSection(SkillSectionStrings.combat)}
      <div>{getCount()}</div>
      <Button onClick={() => submitSkillData(skillData, "skills", "minus")}>
        Back
      </Button>
      {getCount() === 0 && (
        <Button onClick={() => submitSkillData(skillData, "skills", "plus")}>
          Next
        </Button>
      )}
    </div>
  );
}
