import { useState } from 'react';
import PersonalData, { Genders, Kingdoms, Races, Religions, newCharacterPersonalDetails } from '../DataTemplates/PersonalData';
import TextInput from '../Views/TextInput';
import DropdownSelector from '../Views/DropdownSelector';
import KingdomReputations, { Reputation } from '../DataTemplates/KingdomReputations';
import { Capitalize } from '../Strings';
import { Button } from 'react-bootstrap';
import { Character } from '../DataTemplates/CharacterObject';

export default function PersonalPage(submitPersonalData: (pd: PersonalData, name: keyof Character) => void) {
    const [personalData, setPersonalData] = useState<PersonalData>(newCharacterPersonalDetails)

    function setField(key: keyof PersonalData, stringData: PersonalData[keyof PersonalData] | Reputation): void {
        setPersonalData((prevState) => ({
            ...prevState,
            [key]: stringData,
        }));
    }

    const textDataField = (name: string, dataKey: keyof PersonalData) => TextInput(name, dataKey, setField)

    const dropdownDataField = (name: string, dataKey: keyof PersonalData, optionList: string[]) => DropdownSelector(name, dataKey, optionList, setField)

    const distinctiveFeatureDataField = () => TextInput('Distinctive Features (separated by commas)', 'distinctiveFeatures', (value: string) => {
        const features = value.split(',');
        setField('distinctiveFeatures' as keyof PersonalData, features as string[]);
    })


    const startingLoyalty = (kingdom: keyof KingdomReputations) =>
        DropdownSelector('reputation', 'kingdomReputations', ['friendly', 'none', 'aware', 'dislike'], (key, stringData) => {
            setPersonalData((prevState) => ({
                ...prevState,
                kingdomReputations: {
                    ...prevState.kingdomReputations,
                    [kingdom]: stringData
                },
            })
            )
        })

    const arrayMap = (array: any) => Object.keys(array).map(k => array[k])

    return (
        <div>
            {textDataField('Name', 'characterName')}
            {dropdownDataField('Gender', 'gender', arrayMap(Genders))}
            {dropdownDataField('Race', 'race', arrayMap(Races))}
            {dropdownDataField('Birth Kingdom', 'kingdomBirth', arrayMap(Kingdoms))}
            {textDataField('Height in centimeters', 'height')}
            {textDataField('Weight in pounds', 'weight')}
            {textDataField(personalData.characterName + "'s profession", 'startingProfession')}
            {dropdownDataField('Religion', 'religion', arrayMap(Religions))}
            {distinctiveFeatureDataField()}
            {textDataField('Age', 'age')}
            {dropdownDataField('Kingdom Devotion', 'kingdomLoyalty', arrayMap(Kingdoms))}
            {
                <div>
                    {<div>Set your character's starting Reputation</div>}
                    {Object.keys(Kingdoms).map((k) => (
                        <div key={k}>
                            {<div>{Capitalize(Kingdoms[k as keyof typeof Kingdoms])}</div>}
                            {startingLoyalty(Kingdoms[k as keyof typeof Kingdoms] as keyof KingdomReputations)}
                        </div>
                    ))}
                    <Button onClick={() => submitPersonalData(personalData, 'personalDetails')}>Next</Button>
                </div>
            }

        </div>
    )
}