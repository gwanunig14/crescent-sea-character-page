import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import PersonalData, { Reputation } from '../DataTemplates/PersonalData';
import { Capitalize } from '../Strings';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function DropdownSelector({
	name,
	dataKey,
	options,
	returnText,
	selection,
}) {
	const label = () => {
		if (selection && typeof selection === 'string') {
			return Capitalize(selection);
		}

		return 'Select your ' + name;
	};

	const handleSelect = (e) => {
		returnText(dataKey, e);
	};

	return (
		<div>
			{name}
			<Dropdown onSelect={handleSelect}>
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					{label()}
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
	);
}