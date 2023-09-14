import React, { useState } from "react";
import { newCharacterPersonalDetails } from "../DataTemplates/PersonalData";
import TextInput from "../Views/TextInput";
import DropdownSelector from "../Views/DropdownSelector";
import {
  GenderStrings,
  KingdomStrings,
  RaceStrings,
  ReligionStrings,
} from "../Strings";
import { Button } from "react-bootstrap";

export default function PersonalPage({ submitPersonalData }) {
  const [personalData, setPersonalData] = useState(newCharacterPersonalDetails);

  const setField = (key, stringData) => {
    setPersonalData((prevState) => ({
      ...prevState,
      [key]: stringData,
    }));
  };

  const textDataField = (name, dataKey) => (
    <TextInput name={name} dataKey={dataKey} setField={setField} />
  );

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

  const startingLoyalty = (kingdom) => (
    <DropdownSelector
      name="reputation"
      dataKey="kingdomReputations"
      optionList={["friendly", "none", "aware", "dislike"]}
      setField={(key, stringData) => {
        setPersonalData((prevState) => ({
          ...prevState,
          kingdomReputations: {
            ...prevState.kingdomReputations,
            [kingdom]: stringData,
          },
        }));
      }}
      value={personalData.kingdomReputations[kingdom]}
    />
  );

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
            {startingLoyalty(KingdomStrings[kingdom])}
          </div>
        ))}
        <Button
          onClick={() =>
            submitPersonalData(personalData, "personalDetails", "plus")
          }
        >
          Next
        </Button>
        <Button
          onClick={() =>
            submitPersonalData(personalData, "personalDetails", "minus")
          }
        >
          Back
        </Button>
      </div>
    </div>
  );
}
