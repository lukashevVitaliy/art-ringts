import s from "./counter.module.scss";

const Counter = () => {
	const decQty = () => {
		if (quantity <= 1) return;

		const newQty = quantity - 1;
		setQuantity(newQty);
	}
	const incQty = () => {
		const newQty = quantity + 1;
		setQuantity(newQty);
	}

	return (
		<div className={s.counter}>
			<button
				type="button"
				className={s.counter_dec}
				onClick={decQty}
			>-</button>
			<span className={s.counter_num}>100</span>
			<button
				type="button"
				className={s.counter_inc}
				onClick={incQty}
			>+</button>
		</div>
	)
}

export default Counter;