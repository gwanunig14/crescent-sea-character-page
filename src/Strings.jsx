export const RaceStrings = {
  dwarf: "dwarf",
  elf: "elf",
  human: "human",
};

export const GenderStrings = {
  male: "male",
  female: "female",
};

export const KingdomStrings = {
  gartu: "gartu",
  drishma: "drishma",
  edneth: "edneth",
  brelloth: "brelloth",
  portro: "portro",
  hobantho: "hobantho",
  crillatha: "crillatha",
  virensa: "virensa",
  pirate: "pirate",
  independent: "independent",
};

export const ReligionStrings = {
  theTwelve: "The Twelve",
  theTrinity: "The Trinity",
  theCreatorsChildren: "The Creator's Children",
  theWaterOfLife: "The Water of Life",
};

export const ReputationStrings = {
  hero: "Hero",
  love: "Love",
  grateful: "Grateful",
  friendly: "Friendly",
  none: "None",
  aware: "Aware",
  dislike: "Dislike",
  hate: "Hate",
  fear: "Fear",
};

export const CharacteristicStrings = {
  strength: "Strength",
  constitution: "Constitution",
  size: "Size",
  intelligence: "Intelligence",
  power: "Power",
  dexterity: "Dexterity",
  charisma: "Charisma",
  education: "Education",
};

export const LanguageStrings = {
  basic: "Basic",
  elvish: "Elvish",
  dwarvish: "Dwarvish",
  entish: "Entish",
  troll: "Troll",
  orc: "Orc",
  blackSpeech: "Black Speech",
};

export const CombatStrings = {
  brawl: "Brawl",
  dodge: "Dodge",
  grapple: "Grapple",
  meleeWeapon: "Melee Weapon",
  missileWeapon: "Missile Weapon",
  shield: "Shield",
};

export const CommunicationStrings = {
  bargain: "Bargain",
  command: "Command",
  disguise: "Disguise",
  etiquette: "Etiquette",
  fastTalk: "Fast Talk",
  intimidate: "Intimidate",
  langauage: "Language",
  nature: "Nature",
  perform: "Perform",
  persuade: "Persuade",
  teach: "Teach",
};

export const MentalStrings = {
  appraise: "Appraise",
  firstAid: "First Aid",
  gaming: "Gaming",
  knowledge: "Knowledge",
  literacy: "Literacy",
  medicine: "Medicine",
  potion: "Potion",
  science: "Science",
  strategy: "Strategy",
  technical: "Technical",
};

export const MotorSkillStrings = {
  art: "Art",
  craft: "Craft",
  demolition: "Demoltion",
  fineManipulation: "Fine Manipulation",
  instrument: "Instrument",
  lockpicking: "Lockpicking",
  repair: "Repair",
  sleightOfHand: "Sleight of Hand",
};

export const PerceptionStrings = {
  insight: "Insight",
  listen: "Listen",
  navigate: "Navigate",
  research: "Research",
  sense: "Sense",
  spot: "Spot",
  track: "Track",
};

export const PhysicalStrings = {
  climb: "climb",
  fish: "fish",
  hide: "hide",
  hunt: "hunt",
  jump: "jump",
  liquor: "liquor",
  pilot: "pilot",
  ride: "ride",
  stealth: "stealth",
  swim: "swim",
  throw: "throw",
};

export const SkillStrings = {
  combat: CombatStrings,
  communication: CommunicationStrings,
  mental: MentalStrings,
  motorSkills: MotorSkillStrings,
  perception: PerceptionStrings,
  physical: PhysicalStrings,
};

export const MeleeWeaponStrings = { axe: "Axe", sword: "Sword" };

export const MissileWeaponStrings = { bow: "Bow" };

export const WeaponStrings = {
  meleeWeapon: MeleeWeaponStrings,
  missileWeapon: MissileWeaponStrings,
};

export const Strings = {
  race: RaceStrings,
  gender: GenderStrings,
  kingdom: KingdomStrings,
  religion: ReligionStrings,
  reputation: ReputationStrings,
  characteristic: CharacteristicStrings,
  language: LanguageStrings,
  skill: SkillStrings,
  weapon: WeaponStrings,
};

export const Capitalize = (word) => {
  return word?.charAt(0).toUpperCase() + word?.slice(1);
};
