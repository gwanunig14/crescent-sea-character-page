import { useState } from 'react';
import Strings from '../Strings';
import { Character } from '../DataTemplates/CharacterObject';
import Characteristics, { newDwarfCharacteristics, newElfCharacteristics, newHumanCharacteristics } from '../DataTemplates/Characteristics';
import CountUp from '../Views/CountUp';
import { Button } from 'react-bootstrap';

export default function CharacteristicPage(race: string | null | undefined, submitCharacteristicData: (cd: Characteristics, name: keyof Character) => void) {
    var characteristics = newHumanCharacteristics

    switch (race) {
        case Strings.DWARF:
            characteristics = newDwarfCharacteristics
            break
        case Strings.ELF:
            characteristics = newElfCharacteristics
            break
        default:
            break
    }

    debugger

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
            {getCount() === 0 && <Button onClick={() => submitCharacteristicData(characteristicData, 'characteristics')}></Button>}
        </div>
    )
}