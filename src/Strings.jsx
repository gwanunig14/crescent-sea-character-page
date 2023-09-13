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

export const MeleeWeaponStrings = {
  name: "Melee Weapon",
  axe: "Axe",
  sword: "Sword",
};

export const MissileWeaponStrings = { name: "Missile Weapon", bow: "Bow" };

export const CombatStrings = {
  brawl: "Brawl",
  dodge: "Dodge",
  grapple: "Grapple",
  meleeWeapon: MeleeWeaponStrings,
  missileWeapon: MissileWeaponStrings,
  shield: "Shield",
};

export const LanguageStrings = {
  name: "Language",
  basic: "Basic",
  elvish: "Elvish",
  dwarvish: "Dwarvish",
  entish: "Entish",
  troll: "Troll",
  orc: "Orc",
  blackSpeech: "Black Speech",
};

export const NatureStrings = {
  name: "Nature",
};

export const CommunicationStrings = {
  bargain: "Bargain",
  command: "Command",
  disguise: "Disguise",
  etiquette: "Etiquette",
  fastTalk: "Fast Talk",
  intimidate: "Intimidate",
  language: LanguageStrings,
  nature: NatureStrings,
  perform: "Perform",
  persuade: "Persuade",
  teach: "Teach",
};

export const KnowledgeStrings = {
  name: "Knowledge",
};

export const LiteracyStrings = {
  ...LanguageStrings,
  name: "Literacy",
};

export const PotionStrings = {
  name: "Potion",
};

export const ScienceStrings = { name: "Science" };

export const TechnicalStrings = {
  name: "Technical",
};

export const MentalStrings = {
  appraise: "Appraise",
  firstAid: "First Aid",
  gaming: "Gaming",
  knowledge: KnowledgeStrings,
  literacy: LiteracyStrings,
  medicine: "Medicine",
  potion: PotionStrings,
  science: ScienceStrings,
  strategy: "Strategy",
  technical: TechnicalStrings,
};

export const ArtStrings = {
  name: "Art",
};

export const CraftStrings = {
  name: "Craft",
};

export const InstrumentStrings = {
  name: "Instrument",
};

export const RepairStrings = {
  name: "Repair",
};

export const MotorSkillStrings = {
  art: ArtStrings,
  craft: CraftStrings,
  demolition: "Demoltion",
  fineManipulation: "Fine Manipulation",
  instrument: InstrumentStrings,
  lockpicking: "Lockpicking",
  repair: RepairStrings,
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

export const PilotStrings = {
  name: "Pilot",
};

export const PhysicalStrings = {
  climb: "climb",
  fish: "fish",
  hide: "hide",
  hunt: "hunt",
  jump: "jump",
  liquor: "liquor",
  pilot: PilotStrings,
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
