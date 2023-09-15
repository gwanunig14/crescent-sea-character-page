import {
  startingDwarfCombat,
  startingElfCombat,
  startingHumanCombat,
} from "./Combat";
import {
  startingDwarfCommunication,
  startingElfCommunication,
  startingHumanCommunication,
} from "./Communication";
import {
  startingDwarfMental,
  startingElfMental,
  startingHumanMental,
} from "./Mental";
import {
  startingDwarfMotorSkills,
  startingElfMotorSkills,
  startingHumanMotorSkills,
} from "./MotorSkills";
import {
  startingDwarfPerception,
  startingElfPerception,
  startingHumanPerception,
} from "./Perception";
import {
  startingDwarfPhysical,
  startingElfPhysical,
  startingHumanPhysical,
} from "./Physical";

export const StarterDwarfSkills = {
  combat: startingDwarfCombat,
  communication: startingDwarfCommunication,
  mental: startingDwarfMental,
  motorSkills: startingDwarfMotorSkills,
  perception: startingDwarfPerception,
  physical: startingDwarfPhysical,
};
export const StarterElfSkills = {
  combat: startingElfCombat,
  communication: startingElfCommunication,
  mental: startingElfMental,
  motorSkills: startingElfMotorSkills,
  perception: startingElfPerception,
  physical: startingElfPhysical,
};
export const StarterHumanSkills = {
  combat: startingHumanCombat,
  communication: startingHumanCommunication,
  mental: startingHumanMental,
  motorSkills: startingHumanMotorSkills,
  perception: startingHumanPerception,
  physical: startingHumanPhysical,
};
