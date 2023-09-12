import React, { useState } from "react";
import {
  Genders,
  Kingdoms,
  Races,
  Religions,
  newCharacterPersonalDetails,
} from "../DataTemplates/PersonalData";
import TextInput from "../Views/TextInput";
import DropdownSelector from "../Views/DropdownSelector";
import { Capitalize } from "../Strings";
import { Button } from "react-bootstrap";

export default function PersonalPage({ submitPersonalData }) {
  const [personalData, setPersonalData] = useState(newCharacterPersonalDetails);

  function setField(key, stringData) {
    setPersonalData((prevState) => ({
      ...prevState,
      [key]: stringData,
    }));
  }

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

  const arrayMap = (array) => Object.keys(array).map((k) => array[k]);

  return (
    <div>
      {textDataField("Name", "characterName")}
      {dropdownDataField("Gender", "gender", arrayMap(Genders))}
      {dropdownDataField("Race", "race", arrayMap(Races))}
      {dropdownDataField("Birth Kingdom", "kingdomBirth", arrayMap(Kingdoms))}
      {textDataField("Height in centimeters", "height")}
      {textDataField("Weight in pounds", "weight")}
      {textDataField(
        personalData.characterName + "'s profession",
        "startingProfession"
      )}
      {dropdownDataField("Religion", "religion", arrayMap(Religions))}
      {distinctiveFeatureDataField()}
      {textDataField("Age", "age")}
      {dropdownDataField(
        "Kingdom Devotion",
        "kingdomLoyalty",
        arrayMap(Kingdoms)
      )}
      <div>
        <div>Set your character's starting Reputation</div>
        {Object.keys(Kingdoms).map((k) => (
          <div key={k}>
            <div>{Capitalize(Kingdoms[k])}</div>
            {startingLoyalty(Kingdoms[k])}
          </div>
        ))}
        <Button
          onClick={() => submitPersonalData(personalData, "personalDetails")}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
