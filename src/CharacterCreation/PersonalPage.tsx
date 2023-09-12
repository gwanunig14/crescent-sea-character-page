import { useState } from 'react';
import PersonalData, {Genders, Kingdom, Kingdoms, Races, Religions, newCharacterPersonalDetails} from '../DataTemplates/PersonalData';
import TextInput from '../Views/TextInput';
import Dropdown from '../Views/Dropdown';
import KingdomReputations, { Reputation } from '../DataTemplates/KingdomReputations';

export default function PersonalPage() {
    const [personalData, setPersonalData] = useState<PersonalData>(newCharacterPersonalDetails)

    function setField<K extends keyof PersonalData>(key: K, stringData: PersonalData[K] | Reputation): void {
        setPersonalData((prevState) => ({
            ...prevState,
            [key]: stringData,
          }));
    }

    const textDataField = (name: string, dataKey: keyof PersonalData) => TextInput(name, dataKey, setField)

    const dropdownDataField = (name: string, dataKey: keyof PersonalData, optionList: string[]) => Dropdown(name, dataKey, optionList, setField)

    const distinctiveFeatureDataField = () => TextInput('Distinctive Features (separated by commas)', 'distinctiveFeatures', (value: string) => {
        const features = value.split(',');
        setField('distinctiveFeatures' as keyof PersonalData, features as string[]);
      })


    const startingLoyalty = (kingdom: keyof KingdomReputations) =>
        Dropdown('none', 'kingdomReputations', ['friendly', 'none', 'aware', 'dislike'], (key, stringData) => {
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

    const showField = (valueCheck: keyof PersonalData) => personalData[valueCheck] !== null

    return (
        <div>
            {textDataField('Name', 'characterName')}
            {showField('characterName') && dropdownDataField('Gender','gender', arrayMap(Genders))}
            {showField('gender') && dropdownDataField('Race', 'race', arrayMap(Races))}
            {showField('race') && dropdownDataField('Birth Kingdom', 'kingdomBirth', arrayMap(Kingdoms))}
            {showField('kingdomBirth') && textDataField('Height in centimeters', 'height')}
            {showField('height') && textDataField('Weight in pounds', 'weight')}
            {showField('weight') && textDataField("Character's profession", 'startingProfession')}
            {showField('startingProfession') && dropdownDataField('Religion', 'religion', arrayMap(Religions))}
            {showField('religion') && distinctiveFeatureDataField()}
            {showField('distinctiveFeatures') && textDataField('Age', 'age')}
            {showField('age') && dropdownDataField('Kingdom Devotion', 'kingdomLoyalty', arrayMap(Kingdoms))}
            {showField('kingdomLoyalty') && 
                <div>
                    <div>Set your character's starting Reputation</div>
                    {Object.keys(Kingdoms).map((k) => (
                        <div key={k}>
                            <div>{Kingdoms[k as keyof typeof Kingdoms].toUpperCase()}</div>
                            {startingLoyalty(Kingdoms[k as keyof typeof Kingdoms] as keyof KingdomReputations)}
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}