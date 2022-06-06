import { useState, useEffect } from 'react';
import Select from 'react-select';

import s from "./size.module.scss";


const options = [
	{ value: '21', label: '21' },
	{ value: '25', label: '25' },
	{ value: '50', label: '50' },
	{ value: '75', label: '75' },
	{ value: '100', label: '100' }
]


export const Size = () => {
	const [selectedOption, setSelectedOption] = useState();

	return (
		<div className={s.size_panel}>
			<p>Показать:</p>
			<Select
				className="size-select"
				classNamePrefix="custom-select"
				defaultValue={{ value: '21', label: '21' }}
				onChange={setSelectedOption}
				options={options}
				value={selectedOption}
			/>
		</div>
	)
}
