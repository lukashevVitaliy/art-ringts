import Image from "next/image";

import RatingReview from "../rating-review/rating-review";

import s from "./form-review.module.scss";
import scraper from "../../public/assets/icons/scraper.svg";

const FormReview = () => {
	return (
		<form className={s.form_review} name="form-review">
			<div className={s.form_review_wrap}>
				<div className={s.form_review_name}>
					<label htmlFor="name">Ваше имя</label>
					<input type="text" name="name" />
					<p className="error-form">Error</p>
				</div>
				<button className="btn btn-download">
					<Image src={scraper} width={18.05} height={19} alt="icons" />
					<span>ЗАГРУЗИТЬ ФОТО</span>
				</button>
			</div>
			<div className={s.form_review_message}>
				<label htmlFor="review">Ваш отзыв</label>
				<textarea name="review" />
				<p className="error-form">Error</p>
			</div>
			<div className={s.form_review_checked}>
				<RatingReview />
				<button className="btn btn__review">Оставить отзыв</button>
			</div>
		</form>
	)
}

export default FormReview;