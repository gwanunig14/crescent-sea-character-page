import KingdomReputations from "./KingdomReputations";

export const Genders = { 
    MALE: 'male',
    FEMALE: 'female'
}

export const Races = [{
    DWARF: 'dwarf',
    ELF: 'elf',
    HUMAN: 'human'
}]

export const Kingdoms = {
    GARTU: 'gartu',
    DRISHMA: 'drishma',
    EDNETH: 'edneth',
    BRELLOTH: 'brelloth',
    PORTRO: 'portro',
    HOBANTHO: 'hobantho',
    CRILLATHA: 'crillatha',
    VIRENSA: 'virensa',
    PIRATE: 'pirate',
    INDEPENDENT: 'independent'
}

export const Religions = {
    TWELVE: 'the twelve',
    TRINITY: 'the trinity',
    CREATOR: "the creator's children",
    WATER: 'the water of life'
}

type Gender = 'male' | 'female'

type Race = 'dwarf' | 'elf' | 'human'

export type Kingdom = 'gartu' | 'drishma' | 'edneth' | 'brelloth' | 'portro' | 'hobantho' | 'crillatha' | 'virensa' | 'pirates' | 'independent'

type Religion = 'the twelve' | 'the trinity' | "the creator's children" | 'the water of life'

export default interface PersonalData {
    characterName: string | null;
    gender: Gender | null;
    race: Race | null;
    kingdomBirth: Kingdom | null;
    height: number | null;
    weight: number | null;
    startingProfession: string | null;
    religion: Religion | null;
    distinctiveFeatures: string[] | null;
    movement: number;
    age: number | null;
    wealth: string | null;
    kingdomLoyalty: Kingdom | null;
    kingdomReputations: KingdomReputations;
}

export const newCharacterPersonalDetails : PersonalData = {
    characterName: null,
    gender: null,
    race: null,
    kingdomBirth: null,
    height: null,
    weight: null,
    startingProfession: null,
    religion: null,
    distinctiveFeatures: null,
    movement: 30,
    age: null,
    wealth: null,
    kingdomLoyalty: null,
    kingdomReputations: {
        gartu: 'none',
        drishma: 'none',
        edneth: 'none',
        brelloth: 'none',
        portro: 'none',
        hobantho: 'none',
        crillatha: 'none',
        virensa: 'none',
        pirates: 'none',
        independent: 'none'
    }
}