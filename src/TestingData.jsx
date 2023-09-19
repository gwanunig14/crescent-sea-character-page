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
    startingProfession: "Blacksmith",
    wealth: "average",
    religion: "theTwelve",
    distinctiveFeatures: [
      "Face scar",
      "Nose ring",
      "Cow lick",
      "Schizophrenia",
    ],
    age: 19,
    kingdomLoyalty: "independent",
    kingdomReputations: {
      brelloth: "none",
      crillatha: "none",
      drishma: "friendly",
      edneth: "none",
      gartu: "aware",
      hobantho: "none",
      independent: "none",
      pirates: "none",
      portro: "none",
      virensa: "none",
    },
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
    startingProfession: "Blacksmith",
    wealth: "average",
    religion: "theTwelve",
    distinctiveFeatures: ["Face scar"],
    age: 19,
    kingdomLoyalty: "independent",
    kingdomReputations: {
      gartu: "none",
      drishma: "none",
      edneth: "none",
      brelloth: "none",
      portro: "none",
      hobantho: "none",
      crillatha: "none",
      virensa: "none",
      pirates: "none",
      independent: "none",
    },
  },
  characteristics: newElfCharacteristics,
  skills: StarterElfSkills,
  magicActivated: true,
};
