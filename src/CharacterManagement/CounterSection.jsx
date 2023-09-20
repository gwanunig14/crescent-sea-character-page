import { useState } from "react";
import { characterSheetStyleNames } from "../Tools/StyleNames";
import GenericCountUp from "../Views/CountUp";

export default function CounterSection({
  maxHitPoints,
  drinkCounter,
  power,
  magicActivated,
  adjustDrinks,
  confirmation,
}) {
  const [hitPoints, setHitPoints] = useState(maxHitPoints);
  const [powerPoints, setPowerPoints] = useState(power);

  const adjustHitPoints = (unnecessary, newHP) => {
    setHitPoints(newHP);
  };

  const adjustPowerPoints = (unnecessary, newPP) => {
    setPowerPoints(newPP);
  };

  return (
    <td>
      <div className={characterSheetStyleNames.title}>Counters</div>
      <div className={`${characterSheetStyleNames.box} counter`}>
        <div>
          <GenericCountUp
            fieldName={"Hit Points"}
            count={hitPoints}
            returnText={adjustHitPoints}
            plusDisabled={hitPoints === maxHitPoints}
            minusDisabled={hitPoints === 0}
            confirmation={confirmation}
          />
        </div>
        {magicActivated && (
          <div>
            <GenericCountUp
              fieldName={"Power Points"}
              count={powerPoints}
              returnText={adjustPowerPoints}
              plusDisabled={powerPoints === power}
              minusDisabled={powerPoints === 0}
              confirmation={confirmation}
            />
          </div>
        )}
        <div>
          <GenericCountUp
            fieldName={"Drink Failures"}
            count={drinkCounter}
            returnText={adjustDrinks}
            plusDisabled={drinkCounter === 100}
            minusDisabled={drinkCounter === 0}
            confirmation={confirmation}
          />
        </div>
      </div>
    </td>
  );
}
