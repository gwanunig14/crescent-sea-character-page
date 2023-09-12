import Dropdown from 'react-bootstrap/Dropdown';
import PersonalData from '../DataTemplates/PersonalData';
import { Reputation } from '../DataTemplates/KingdomReputations';
import { Capitalize } from '../Strings';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function DropdownSelector(
	name: string,
	dataKey: keyof PersonalData,
	options: string[],
	returnText: <K extends keyof PersonalData>(key: K, value: PersonalData[K] | Reputation) => void,
	selection: PersonalData[keyof PersonalData] | null) {

	const label = () => {
		if (selection && typeof selection === "string") {
			return Capitalize(selection)
		}

		return 'Select your ' + name
	}

	const handleSelect = (e: any) => {
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