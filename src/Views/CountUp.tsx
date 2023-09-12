import React, { useState } from 'react';
import PersonalData from '../DataTemplates/PersonalData';
import { Capitalize } from '../Strings';
import Characteristics from '../DataTemplates/Characteristics';
import { Reputation } from '../DataTemplates/KingdomReputations';
import { Button } from 'react-bootstrap';

export default function CountUp(
    fieldName: string,
    dataKey: keyof Characteristics,
    starter: number,
    returnText: (key: any, value: any) => void,
) {
    const [number, setNumber] = useState(starter)

    const pressed = (func: string) => {
        var newNumber = func == 'plus' ? number + 1 : number - 1
        returnText(dataKey, newNumber)
        setNumber(newNumber)
    }

    return (
        <div>
            {Capitalize(fieldName) + ': ' + number}
            <Button onClick={() => pressed('minus')}>-</Button>
            <Button onClick={() => pressed('plus')}>+</Button>
        </div>
    )
}