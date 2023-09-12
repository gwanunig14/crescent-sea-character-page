import { Capitalize } from '../Strings';
import Characteristics from '../DataTemplates/Characteristics';
import { Button } from 'react-bootstrap';

export default function CountUp(
    fieldName: string,
    dataKey: keyof Characteristics,
    count: number,
    returnText: (key: any, value: any) => void
) {

    const pressed = (func: string) => {
        var newNumber = func === 'plus' ? count + 1 : count - 1
        returnText(dataKey, newNumber)
    }

    return (
        <div>
            {Capitalize(fieldName) + ': ' + count}
            <Button onClick={() => pressed('minus')}>-</Button>
            <Button onClick={() => pressed('plus')}>+</Button>
        </div>
    )
} 