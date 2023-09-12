const Strings = {
    DWARF: 'dwarf',
    ELF: 'elf',
    HUMAN: 'human',
    MALE: 'male',
    FEMALE: 'female',
    GARTU: 'gartu',
    DRISHMA: 'drishma',
    EDNETH: 'edneth',
    BRELLOTH: 'brelloth',
    PORTRO: 'portro',
    HOBANTHO: 'hobantho',
    CRILLATHA: 'crillatha',
    VIRENSA: 'virensa',
    PIRATE: 'pirate',
    INDEPENDENT: 'independent',
    TWELVE: 'the twelve',
    TRINITY: 'the trinity',
    CREATOR: "the creator's children",
    WATER: 'the water of life',
    HERO: 'hero',
    LOVE: 'love',
    GRATEFUL: 'grateful',
    FRIENDLY: 'friendly',
    NONE: 'none',
    AWARE: 'aware',
    DISLIKE: 'dislike',
    HATE: 'hate',
    FEAR: 'fear',
    STRENGTH: 'strength',
    CONSTITUTION: 'constitution',
    SIZE: 'size',
    INTELLIGENCE: 'intelligence',
    POWER: 'power',
    DEXTERITY: 'dexterity',
    CHARISMA: 'charisma',
    EDUCATION: 'education'
}

export const Capitalize = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
}

export default Strings