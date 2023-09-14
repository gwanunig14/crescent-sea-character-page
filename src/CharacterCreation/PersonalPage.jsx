import React, { useState } from "react";
import TextInput from "../Views/TextInput";
import DropdownSelector from "../Views/DropdownSelector";
import {
  GenderStrings,
  KingdomStrings,
  RaceStrings,
  ReligionStrings,
} from "../Strings";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function PersonalPage({ submitPersonalData }) {
  const character = useSelector((state) => state.currentCharacter);
  const [personalData, setPersonalData] = useState(character.personalDetails);

  const setField = (key, stringData) => {
    let newPD = { ...personalData };
    newPD[key] = stringData;
    setPersonalData(newPD);
  };

  const textDataField = (name, dataKey) => {
    const value = personalData[dataKey] ? personalData[dataKey] : "";
    return (
      <TextInput
        name={name}
        dataKey={dataKey}
        value={value}
        setField={setField}
      />
    );
  };

  const dropdownDataField = (name, dataKey, optionList) => (
    <DropdownSelector
      name={name}
      dataKey={dataKey}
      optionList={optionList}
      setField={setField}
      value={personalData[dataKey]}
    />
  );

  const distinctiveFeatureDataField = () => (
    <TextInput
      name="Distinctive Features (separated by commas)"
      dataKey="distinctiveFeatures"
      setField={(value) => {
        const features = value.split(",");
        setField("distinctiveFeatures", features);
      }}
    />
  );

  const startingLoyalty = (kingdom) => {
    return (
      <DropdownSelector
        name="reputation"
        dataKey="kingdomReputations"
        optionList={{
          friendly: "Friendly",
          none: "None",
          aware: "Aware",
          dislike: "Dislike",
        }}
        setField={(key, stringData) => {
          let newPD = {
            ...personalData,
            kingdomReputations: {
              ...personalData.kingdomReputations,
            },
          };
          newPD.kingdomReputations[kingdom] = stringData;
          setPersonalData(newPD);
        }}
        value={personalData.kingdomReputations[kingdom]}
      />
    );
  };

  const renderFields = () => {
    const fieldArray = [
      textDataField("Name", "characterName"),
      dropdownDataField("Race", "race", RaceStrings),
      dropdownDataField("Gender", "gender", GenderStrings),
      dropdownDataField("Birth Kingdom", "kingdomBirth", KingdomStrings),
      textDataField("Height in centimeters", "height"),
      textDataField("Weight in pounds", "weight"),
      textDataField(
        personalData.characterName
          ? `${personalData.characterName}'s profession`
          : "Your character's profession",
        "startingProfession"
      ),
      dropdownDataField("Religion", "religion", ReligionStrings),
      distinctiveFeatureDataField(),
      textDataField("Age", "age"),
      dropdownDataField("Kingdom Devotion", "kingdomLoyalty", KingdomStrings),
    ];

    return fieldArray.map((field, index) => <div key={index}>{field}</div>);
  };

  return (
    <div>
      {renderFields()}
      <div>
        <div>Set your character's starting Reputation</div>
        {Object.keys(KingdomStrings).map((kingdom) => (
          <div key={kingdom}>
            <div>{KingdomStrings[kingdom]}</div>
            {startingLoyalty(kingdom)}
          </div>
        ))}
        {!Object.values(personalData).includes("") && (
          <Button
            onClick={() =>
              submitPersonalData(personalData, "personalDetails", "plus")
            }
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
}
