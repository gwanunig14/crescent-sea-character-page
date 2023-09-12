import { useState } from 'react';
import PersonalData, {Genders, Kingdoms, Races, Religions, newCharacterPersonalDetails} from '../DataTemplates/PersonalData';
import TextInput from '../Views/TextInput';
import DropdownSelector from '../Views/DropdownSelector';
import KingdomReputations, { Reputation } from '../DataTemplates/KingdomReputations';
import { Capitalize } from '../Strings';

export default function PersonalPage() {
    const [personalData, setPersonalData] = useState<PersonalData>(newCharacterPersonalDetails)

    function setField<K extends keyof PersonalData>(key: K, stringData: PersonalData[K] | Reputation): void {
        setPersonalData((prevState) => ({
            ...prevState,
            [key]: stringData,
          }));
    }

    const textDataField = (name: string, dataKey: keyof PersonalData, show: boolean) => TextInput(name, dataKey, show, setField)

    const dropdownDataField = (name: string, dataKey: keyof PersonalData, show: boolean, optionList: string[]) => DropdownSelector(name, dataKey, show, optionList, setField)

    const distinctiveFeatureDataField = () => TextInput('Distinctive Features (separated by commas)', 'distinctiveFeatures', showField('religion'), (value: string) => {
        const features = value.split(',');
        setField('distinctiveFeatures' as keyof PersonalData, features as string[]);
      })


    const startingLoyalty = (kingdom: keyof KingdomReputations) =>
        DropdownSelector('reputation', 'kingdomReputations', showField('kingdomLoyalty'), ['friendly', 'none', 'aware', 'dislike'], (key, stringData) => {
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
            {textDataField('Name', 'characterName', true)}
            {dropdownDataField('Gender','gender', showField('characterName'), arrayMap(Genders))}
            {dropdownDataField('Race', 'race', showField('gender'), arrayMap(Races))}
            {dropdownDataField('Birth Kingdom', 'kingdomBirth', showField('race'), arrayMap(Kingdoms))}
            {textDataField('Height in centimeters', 'height', showField('kingdomBirth'))}
            {textDataField('Weight in pounds', 'weight', showField('height'))}
            {textDataField("Character's profession", 'startingProfession', showField('weight'))}
            {dropdownDataField('Religion', 'religion', showField('startingProfession'), arrayMap(Religions))}
            {distinctiveFeatureDataField()}
            {textDataField('Age', 'age', showField('distinctiveFeatures'))}
            {dropdownDataField('Kingdom Devotion', 'kingdomLoyalty',showField('age'), arrayMap(Kingdoms))}
            {
                <div>
                    <div>Set your character's starting Reputation</div>
                    {Object.keys(Kingdoms).map((k) => (
                        <div key={k}>
                            <div>{Capitalize(Kingdoms[k as keyof typeof Kingdoms])}</div>
                            {startingLoyalty(Kingdoms[k as keyof typeof Kingdoms] as keyof KingdomReputations)}
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}