export const RaceStrings = {
  dwarf: "Dwarf",
  elf: "Elf",
  human: "Human",
};

export const GenderStrings = {
  male: "Male",
  female: "Female",
};

export const KingdomStrings = {
  gartu: "Gartu",
  drishma: "Drishma",
  edneth: "Edneth",
  brelloth: "Brelloth",
  portro: "Portro",
  hobantho: "Hobantho",
  crillatha: "Crillatha",
  virensa: "Virensa",
  pirates: "Pirates",
  independent: "Independent",
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
  name: "Combat",
  brawl: "Brawl",
  dodge: "Dodge",
  grapple: "Grapple",
  meleeWeapon: MeleeWeaponStrings,
  missileWeapon: MissileWeaponStrings,
  shield: "Shield",
  bow: "Bow",
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
  name: "Communication",
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
  animal: "Animal",
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
  name: "Mental",
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
  name: "Motor Skills",
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
  name: "Perception",
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
  name: "Physical",
  climb: "Climb",
  fish: "Fish",
  hide: "Hide",
  hunt: "Hunt",
  jump: "Jump",
  liquor: "Liquor",
  pilot: PilotStrings,
  ride: "Ride",
  stealth: "Stealth",
  swim: "Swim",
  throw: "Throw",
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

export const WealthStrings = {
  wealthy: "Wealthy",
  affluent: "Affluent",
  average: "Average",
  poor: "Poor",
  destitute: "Destitute",
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
  wealth: WealthStrings,
};

export const SkillSectionStrings = {
  communication: {
    sectionName: "Communication",
    section: "communication",
    modifier: "charisma",
    stringHash: CommunicationStrings,
  },
  motorSkills: {
    sectionName: "Motor Skills",
    section: "motorSkills",
    modifier: "dexterity",
    stringHash: MotorSkillStrings,
  },
  mental: {
    sectionName: "Mental",
    section: "mental",
    modifier: "intelligence",
    stringHash: MentalStrings,
  },
  perception: {
    sectionName: "Perception",
    section: "perception",
    modifier: "power",
    stringHash: PerceptionStrings,
  },
  physical: {
    sectionName: "Physical",
    section: "physical",
    modifier: "strength",
    stringHash: PhysicalStrings,
  },
  combat: {
    sectionName: "Combat",
    section: "combat",
    modifier: "dexterity",
    stringHash: CombatStrings,
  },
};

export const ignore = ["Dodge", "Gaming", "Literacy", "Language"];
