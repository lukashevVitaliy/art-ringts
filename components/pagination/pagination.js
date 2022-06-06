import s from "./pagination.module.scss";

const Pagination = () => {
	return (
		<div className={s.pagination}>
			<button
				type="button"
				className={s.pagination_arrow_left}
			// onClick={prevPage}
			>❮ Предыдущая</button>
			<span className={s.pagination_num}>1 of 20</span>
			<button
				type="button"
				className={s.pagination_arrow_right}
			// onClick={nextPage}
			>Следующая ❯</button>
		</div>
	)
}

export default Pagination;
