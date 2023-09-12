import React, {useState} from 'react';
import { DropdownButton } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import PersonalData from '../DataTemplates/PersonalData';
import { Reputation } from '../DataTemplates/KingdomReputations';

export default function Dropdown(name: string, dataKey: keyof PersonalData, options: string[], returnText: <K extends keyof PersonalData>(key: K, value: PersonalData[K] | Reputation) => void) {
    const selection = 'Select your ' + name

    const handleSelect = (e: any) => {
        console.log(e)
        returnText(dataKey, e)
    }

    return (
        <div>
            {name != 'none' && name}
            <DropdownButton title={selection.toUpperCase()} onSelect={handleSelect}>
                {options.map((option) => <DropdownItem eventKey={option}>{option.toUpperCase()}</DropdownItem>)}
            </DropdownButton>
        </div>
    )
}
