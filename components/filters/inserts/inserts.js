import { useState, useEffect } from 'react';
import Select from 'react-select';

import s from "./inserts.module.scss";


const options = [
	{ value: 'Все', label: 'Все' },
	{ value: 'С камнями', label: 'С камнями' },
	{ value: 'Без камней', label: 'Без камней' }
]


export const Inserts = () => {
	const [selectedOption, setSelectedOption] = useState();

	return (
		<div className={s.inserts_panel}>
			<p>Вставки:</p>
			<Select
				className="inserts-select"
				classNamePrefix="custom-select"
				defaultValue={{ value: 'Все', label: 'Все' }}
				onChange={setSelectedOption}
				options={options}
				value={selectedOption}
			/>
		</div>
	)
}
