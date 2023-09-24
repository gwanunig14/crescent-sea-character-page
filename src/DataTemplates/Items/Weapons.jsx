const fist = {
  type: "Fist",
  name: "",
  skill: "brawl",
  damage: "1d3",
  attack: 1,
  special: "crushing",
  range: "short",
  hands: "1H",
  hitPoints: "-",
  parry: "No",
};

const grapple = {
  type: "Grapple",
  name: "",
  skill: "grapple",
  damage: "special",
  attack: 1,
  special: "entangle",
  range: "short",
  hands: "2H",
  hitPoints: "-",
  parry: "No",
};

const headButt = {
  type: "Head Butt",
  name: "",
  skill: "brawl",
  damage: "1d3",
  attack: 1,
  special: "crushing",
  range: "short",
  hands: "-",
  hitPoints: "-",
  parry: "No",
};

const kick = {
  type: "Kick",
  name: "",
  skill: "brawl",
  damage: "1d3",
  attack: 1,
  special: "crushing",
  range: "short",
  hands: "-",
  hitPoints: "-",
  parry: "No",
};

export const startingDwarfWeapons = {
  fist: fist,
  grapple: grapple,
  headButt: headButt,
  kick: kick,
  battleAxe: {
    type: "BattleAxe",
    name: "",
    skill: "axe",
    damage: "1d8 + 2",
    attack: 1,
    special: "bleeding",
    range: "medium",
    hands: "1h",
    hitPoints: "15",
    parry: "Yes",
  },
};

export const startingElfWeapons = {
  fist: fist,
  grapple: grapple,
  headButt: headButt,
  kick: kick,
  longBow: {
    type: "Long Bow",
    name: "",
    skill: "bow",
    damage: "1d8 + 2",
    attack: 1,
    special: "impaling",
    range: "150",
    hands: "2h",
    hitPoints: "15",
    parry: "No",
  },
};

export const startingHumanWeapons = {
  fist: fist,
  grapple: grapple,
  headButt: headButt,
  kick: kick,
  sword: {
    type: "Long Sword",
    name: "",
    skill: "sword",
    damage: "1d8 + 1/2",
    attack: 1,
    special: "impaling",
    range: "150",
    hands: "2h",
    hitPoints: "15",
    parry: "No",
  },
};
