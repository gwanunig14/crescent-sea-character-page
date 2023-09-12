import Characteristics from "./Characteristics";
import PersonalData from "./PersonalData";
import Combat from "./Skills/Combat";
import Communication from "./Skills/Communication";
import Mental from "./Skills/Mental";
import MotorSkills from "./Skills/MotorSkills";
import Perception from "./Skills/Perception";
import Physical from "./Skills/Physical";

export interface Skills {
    communication: Communication;
    motorSkills: MotorSkills;
    mental: Mental;
    perception: Perception;
    physical: Physical;
    combat: Combat;
}

export interface Character {
    personalDetails: PersonalData | null;
    characteristics: Characteristics | null;
    skills: Skills | null;
    armor: {}
    weapons: {}
}