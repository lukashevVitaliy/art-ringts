import { useState, useEffect } from 'react';
import Select from 'react-select';

import s from "./price.module.scss";


const options = [
	{ value: 'Все', label: 'Все' },
	{ value: 'до 50 000', label: 'до 50 000' },
	{ value: '50-70 000', label: '50-70 000' },
	{ value: '70-100 000', label: '70-100 000' },
	{ value: 'от 100 000', label: 'от 100 000' },
	{ value: 'от 150 000', label: 'от 150 000' }
]


export const Price = () => {
	const [selectedOption, setSelectedOption] = useState();

	return (
		<div className={s.price_panel}>
			<p>Цена:</p>
			<Select
				className="price-select"
				classNamePrefix="custom-select"
				defaultValue={{ value: 'Все', label: 'Все' }}
				onChange={setSelectedOption}
				options={options}
				value={selectedOption}
			/>
		</div>
	)
}
