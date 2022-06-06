import { Size } from "./size";
import { Sort } from "./sort";
import { Price } from "./price";
import { Inserts } from "./inserts";

import s from "./filters.module.scss";


const Filters = () => {
	return (
		<div className={s.filters}>
			<Size />
			<Sort />
			<Price />
			<Inserts />
		</div>
	)
}

export default Filters;
