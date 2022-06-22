
import s from "./rating-review.module.scss";

const RatingReview = () => {
	return (
		<div className={s.rating}>
			<div className={s.rating_label}>Ваша оценка</div>
			<div className={s.rating_review}>
				<div className={s.rating_review_items}>
					<input id="rating_review_5" className={s.rating_review_item} type="radio" name="rating_review" value="5" />
					<label htmlFor="rating_review_5" className={s.rating_review_label}></label>
					<input id="rating_review_4" className={s.rating_review_item} type="radio" name="rating_review" value="4" />
					<label htmlFor="rating_review_4" className={s.rating_review_label}></label>
					<input id="rating_review_3" className={s.rating_review_item} type="radio" name="rating_review" value="3" />
					<label htmlFor="rating_review_3" className={s.rating_review_label}></label>
					<input id="rating_review_2" className={s.rating_review_item} type="radio" name="rating_review" value="2" />
					<label htmlFor="rating_review_2" className={s.rating_review_label}></label>
					<input id="rating_review_1" className={s.rating_review_item} type="radio" name="rating_review" value="1" />
					<label htmlFor="rating_review_1" className={s.rating_review_label}></label>
				</div>
			</div>
		</div>
	)
}

export default RatingReview;