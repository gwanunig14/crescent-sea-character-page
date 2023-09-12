import React from 'react';
import PersonalData from '../DataTemplates/PersonalData';
import { Capitalize } from '../Strings';
import Characteristics from '../DataTemplates/Characteristics';

export default function TextInput({
    fieldName,
    dataKey,
    returnText,
}) {
    const enterPressed = (event) => {
        if (event.key === 'Enter') {
            returnText(dataKey, event.target.value);
        }
    };

    return (
        <div>
            {Capitalize(fieldName) + ': '}
            <input type='text' onKeyDown={enterPressed} />
        </div>
    );
}