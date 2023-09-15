import {
  newElfCharacteristics,
  newHumanCharacteristics,
} from "./DataTemplates/CharacteristicData";
import {
  StarterElfSkills,
  StarterHumanSkills,
} from "./DataTemplates/Skills/StarterRaces";

export const TestingCharacter1 = {
  personalDetails: {
    characterName: "Paul",
    race: "elf",
    gender: "male",
    kingdomBirth: "drishma",
    height: 120,
    weight: 10,
    startingProfession: "Blacksmith",
    wealth: "average",
    religion: "theTwelve",
    distinctiveFeatures: ["Face scar"],
    age: 19,
    kingdomLoyalty: "independent",
  },
  characteristics: newHumanCharacteristics,
  skills: StarterHumanSkills,
  magicActivated: true,
};

export const TestingCharacter2 = {
  personalDetails: {
    characterName: "Janet",
    race: "elf",
    gender: "female",
    kingdomBirth: "drishma",
    height: 120,
    weight: 10,
    startingProfession: "Blacksmith",
    wealth: "average",
    religion: "theTwelve",
    distinctiveFeatures: ["Face scar"],
    age: 19,
    kingdomLoyalty: "independent",
  },
  characteristics: newElfCharacteristics,
  skills: StarterElfSkills,
  magicActivated: true,
};
