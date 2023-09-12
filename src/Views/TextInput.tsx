import React from 'react';
import PersonalData from '../DataTemplates/PersonalData';
import { Capitalize } from '../Strings';

export default function TextInput(fieldName: string, dataKey: keyof PersonalData, show: boolean, returnText: <K extends keyof PersonalData>(key: K, value: PersonalData[K]) => void) {

    const enterPressed = (event: any) => {
        if (event.key === 'Enter') {
            returnText(dataKey, event.target.value)
        }
    }

    return (
        show && <div>
            {Capitalize(fieldName)}
            <input type='text' onKeyDown={enterPressed}/>
        </div>
    )
}