import React, { useState } from 'react';
import { Character, Skills } from '../DataTemplates/CharacterObject';
import PersonalPage from './PersonalPage';
import PersonalData from '../DataTemplates/PersonalData';
import Characteristics from '../DataTemplates/Characteristics';

function CharacterCreator() {
    const [character, setCharacter] = useState<Character>({personalDetails: null, characteristics: null, skills: null, weapons: {}, armor: {}})


    const setCharacterData = (pageData: PersonalData | Characteristics | Skills, step: keyof Character) => {
        setCharacter((prevState) => ({
            ...prevState,
            [step]: pageData,
            }))
    }

    return PersonalPage(setCharacterData)
}

export default CharacterCreator;