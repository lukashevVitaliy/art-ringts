import { CardSlider } from "../card-slider";

import s from "./products-list.module.scss";

import React from 'react'

const ProductsList = ({ url }) => {
	return (
		<div className={s.products_list}>
			<CardSlider url={url} />
			<CardSlider url={url} />
			<CardSlider url={url} />
			<CardSlider url={url} />
			<CardSlider url={url} />
			<CardSlider url={url} />
			<CardSlider url={url} />
			<CardSlider url={url} />
			<CardSlider url={url} />
			<CardSlider url={url} />
			<CardSlider url={url} />
			<CardSlider url={url} />
			<CardSlider url={url} />
			<CardSlider url={url} />
			<CardSlider url={url} />
			<CardSlider url={url} />
			<CardSlider url={url} />
			<CardSlider url={url} />
			<CardSlider url={url} />
			<CardSlider url={url} />
			<CardSlider url={url} />
		</div>
	)
}

export default ProductsList;