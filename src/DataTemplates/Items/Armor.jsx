const chainMail = { name: "", type: "Chain Mail", av: "7" };

const softLeather = { name: "", type: "Soft Leather", av: "1" };

const hardLeather = { name: "", type: "Hard Leather", av: "2" };

export const starterHumanArmor = {
  armor: { hardLeather: hardLeather },
  shield: {},
};

export const starterDwarfArmor = {
  armor: { chainMail: chainMail },
  shield: {},
};

export const starterElfArmor = {
  armor: { softLeather: softLeather },
  shield: {},
};
