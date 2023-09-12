import { useState } from 'react';
import TextInput from '../Views/TextInput';
import DropdownSelector from '../Views/DropdownSelector';
import KingdomReputations, { Reputation } from '../DataTemplates/KingdomReputations';
import Strings, { Capitalize } from '../Strings';
import { Button } from 'react-bootstrap';
import { Character } from '../DataTemplates/CharacterObject';
import Characteristics, { newDwarfCharacteristics, newElfCharacteristics, newHumanCharacteristics } from '../DataTemplates/Characteristics';
import CountUp from '../Views/CountUp';

export default function CharacteristPage(race: string, submitCharacteristicData: (cd: Characteristics, name: keyof Character) => void) {
    var characteristics = newHumanCharacteristics

    switch (race) {
        case Strings.DWARF:
            characteristics = newDwarfCharacteristics
        case Strings.ELF:
            characteristics = newElfCharacteristics
        default:
    }

    const [characteristicData, setCharacteristicData] = useState<Characteristics>(characteristics)

    function setField<K extends keyof Characteristics>(key: K, stringData: Characteristics[K]): void {
        setCharacteristicData((prevState) => ({
            ...prevState,
            [key]: Number(stringData),
        }));
    }

    const getCount = () => {
        let statCount = 0
        Object.values(characteristicData).map((v: number) => statCount = statCount + v)
        return 108 - statCount
    }

    return (
        <div>
            <div>
                {CountUp('STR', 'strength', characteristicData.strength, setField)}
                {CountUp('CON', 'constitution', characteristicData.constitution, setField)}
                {CountUp('SIZ', 'size', characteristicData.size, setField)}
                {CountUp('INT', 'intelligence', characteristicData.intelligence, setField)}
                {CountUp('POW', 'power', characteristicData.power, setField)}
                {CountUp('DEX', 'dexterity', characteristicData.dexterity, setField)}
                {CountUp('CHA', 'charisma', characteristicData.charisma, setField)}
                {CountUp('EDU', 'education', characteristicData.education, setField)}
            </div>
            <div>
                {getCount()}
            </div>
        </div>
    )
}