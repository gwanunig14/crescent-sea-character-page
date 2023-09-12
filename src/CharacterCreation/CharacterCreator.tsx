import React, { useState } from 'react';
import { Character, Skills } from '../DataTemplates/CharacterObject';
import PersonalPage from './PersonalPage';
import PersonalData from '../DataTemplates/PersonalData';
import Characteristics from '../DataTemplates/Characteristics';

function CharacterCreator() {
    const [character, setCharacter] = useState<Character>({ personalDetails: null, characteristics: null, skills: null, weapons: {}, armor: {} })
    const [page, setPage] = useState(0)


    const setCharacterData = (pageData: PersonalData | Characteristics | Skills, step: keyof Character) => {
        setCharacter((prevState) => ({
            ...prevState,
            [step]: pageData,
        }))
        setPage(page + 1)
    }

    switch (page) {
        case 0:
            return PersonalPage(setCharacterData)
        default:
            return null
    }
}

export default CharacterCreator;