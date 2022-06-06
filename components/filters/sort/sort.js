import { useState, useEffect } from 'react';
import Select from 'react-select';

import s from "./sort.module.scss";


const options = [
	{ value: 'По умолчанию', label: 'По умолчанию' },
	{ value: 'Не дорогие', label: 'Не дорогие' },
	{ value: 'Дорогие', label: 'Дорогие' },
	{ value: 'Рейтинг (начиная с высокого)', label: 'Рейтинг (начиная с высокого)' },
	{ value: 'Рейтинг (начиная с низкого)', label: 'Рейтинг (начиная с низкого)' },
	{ value: 'Новинки', label: 'Новинки' }
]


export const Sort = () => {
	const [selectedOption, setSelectedOption] = useState();

	return (
		<div className={s.sort_panel}>
			<p>Сортировать:</p>
			<Select
				className="sort-select"
				classNamePrefix="custom-select"
				defaultValue={{ value: 'По умолчанию', label: 'По умолчанию' }}
				onChange={setSelectedOption}
				options={options}
				value={selectedOption}
			/>
		</div>
	)
}
