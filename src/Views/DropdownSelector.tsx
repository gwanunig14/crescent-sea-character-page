import React, {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import PersonalData from '../DataTemplates/PersonalData';
import { Reputation } from '../DataTemplates/KingdomReputations';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Capitalize } from '../Strings';

export default function DropdownSelector(name: string, 
    dataKey: keyof PersonalData, 
    show: boolean, 
    options: string[], 
    returnText: <K extends keyof PersonalData>(key: K, value: PersonalData[K] | Reputation) => void) {
    const [selectedValue, setSelectedValue] = useState('Select your ' + name);
  
    const handleSelect = (e: any) => {
      setSelectedValue(Capitalize(e))
      returnText(dataKey, e);
    };
    
    return (
        show && (
          <div>
            {name}
            <Dropdown onSelect={handleSelect}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {selectedValue}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {options.map((option) => (
                  <Dropdown.Item eventKey={option} key={option}>
                    {Capitalize(option)}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        )
      );
  }