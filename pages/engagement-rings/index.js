import Head from "next/head";
import Link from "next/link";
import Filters from "../../components/filters/filters";
import ProductsList from "../../components/products-list/products-list";
import { DescBottomCatalog } from "../../components/desc-bottom-catalog";
import Pagination from "../../components/pagination/pagination";

import s from "./engagement-rings.module.scss";


const EngagementRings = () => {
	return (
		<div className={s.engagement_rings}>
			<Head>
				<title>Engagement Rings</title>
			</Head>
			<div className="container">
				<ul className="breadcrumbs_list">
					<li className="breadcrumbs_item">
						<Link href="/"><a>Главная</a></Link>
					</li>
					<li className="breadcrumbs_item">
						<Link href="/engagement-rings"><a>Помолвочные кольца</a></Link>
					</li>
				</ul>


				<h4 className={s.engagement_rings_title}>Помолвочные кольца</h4>
				<p className={s.engagement_rings_desc}>
					В магазине «Арт-Рингз» можно выбрать идеальное помолвочное кольцо, которое выразит чувства мужчины, делающего предложение руки и сердца своей любимой. Будущей невесте может посчастливиться стать обладательницей не только лучшего мужа на свете, но и изысканного колечка, выполненного из золота и украшенного бриллиантами.
				</p>
				<Filters />
				<ProductsList />
				<Pagination />
				<DescBottomCatalog />
			</div>
		</div>
	)
}

export default EngagementRings;