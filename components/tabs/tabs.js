import { useState } from "react";

import SliderReviews from "../slider-reviews/slider-reviews";
import FormReview from "../form-review/form-review";

import s from "./tabs.module.scss";

const Tabs = () => {
	const [desc, setDesc] = useState(true);
	const [reviews, setReviews] = useState(false);

	const clickDesc = () => {
		if (!desc) {
			setReviews(!reviews)
			setDesc(!desc)
		}
	}
	const clickReviews = () => {
		if (!reviews) {
			setDesc(!desc)
			setReviews(!reviews)
		}
	}

	return (
		<div className={s.tabs}>
			<div className={s.tabs_header}>
				<div className={s.tabs_header_items}>
					<h3
						className={s.tabs_header_item}
						onClick={clickDesc}
					>ОПИСАНИЕ
					</h3>
					<h3
						className={s.tabs_header_item}
						onClick={clickReviews}
					>ОТЗЫВЫ (2)
					</h3>
				</div>
			</div>
			{desc && <div className={s.tabs_content}>
				<p>Прекрасные обручальные кольца с инкрустацией дорожками бриллиантов в женском кольце.</p>
				<p>Это замечательный образец современной классики. Бриллианты в кольце расположены под углом к шинке. Камни при столь необычном расположении сияют по-особенному. Их блеск заметен лучше всего когда рука находится в движении.</p>
				<p>Мужское кольцо без инкрустации, оно более строгое. Скосы шинки имеют другую, матированную, фактуру. В целом дизайн этих парных колец очень изысканный и современный.</p>
				<p>Такие кольца обязательно понравятся тем, кто ищет что-то классическое и в то же время особенное, не такое, как у всех!</p>
			</div>}
			{reviews && <div className={s.tabs_content}>
				<SliderReviews />
				<FormReview />
			</div>
			}
		</div>
	)
}

export default Tabs; 
