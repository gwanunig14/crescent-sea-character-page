import React, { useState } from 'react';
import { Character, Skills } from '../DataTemplates/CharacterObject';
import PersonalPage from './PersonalPage';
import PersonalData from '../DataTemplates/PersonalData';
import Characteristics from '../DataTemplates/Characteristics';

const pages = [
    'personalDetails',
    'characteristics',
    'skills'
]

function CharacterCreator() {
    const [character, setCharacter] = useState<Character>()
    const [pageNumber, setPageNumber] = useState(0)

    // const setCharacterData = (pageData: PersonalData | Characteristics | Skills) => {
    //     Object.keys(pageData).forEach(k => {
    //         setCharacter(character[pages[pageNumber]] = pageData[k])
    //         setPageNumber(pageNumber + 1)
    //     })
    // }

    return PersonalPage()
}

export default CharacterCreator;