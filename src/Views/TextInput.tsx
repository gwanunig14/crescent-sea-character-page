import React from 'react';
import PersonalData from '../DataTemplates/PersonalData';
import { Capitalize } from '../Strings';
import Characteristics from '../DataTemplates/Characteristics';
import { Reputation } from '../DataTemplates/KingdomReputations';

export default function TextInput(
    fieldName: string,
    dataKey: keyof PersonalData | keyof Characteristics,
    returnText: (key: any, value: any) => void,
) {
    const enterPressed = (event: any) => {
        if (event.key === 'Enter') {
            returnText(dataKey, event.target.value)
        }
    }

    return (
        <div>
            {Capitalize(fieldName) + ': '}
            <input type='text' onKeyDown={enterPressed} />
        </div>
    )
}