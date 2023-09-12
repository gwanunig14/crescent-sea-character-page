import React from 'react';
import PersonalData from '../DataTemplates/PersonalData';

export default function TextInput(fieldName: String, dataKey: keyof PersonalData, returnText: <K extends keyof PersonalData>(key: K, value: PersonalData[K]) => void) {

    const enterPressed = (event: any) => {
        if (event.key === 'Enter') {
            returnText(dataKey, event.target.value)
        }
    }

    return (
        <div>
            {fieldName.toUpperCase()}
            <input type='text' onKeyDown={enterPressed}/>
        </div>
    )
}