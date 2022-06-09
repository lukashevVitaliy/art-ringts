import Head from "next/head";
import Link from "next/link";
import Filters from "../../components/filters/filters";
import ProductsList from "../../components/products-list/products-list";
import { DescBottomCatalog } from "../../components/desc-bottom-catalog";
import Pagination from "../../components/pagination/pagination";

import s from "./index.module.scss";


const WeddingRings = () => {
	return (
		<div className={s.wedding_rings}>
			<Head>
				<title>Wedding Rings</title>
			</Head>
			<div className="container">
				<ul className="breadcrumbs_list">
					<li className="breadcrumbs_item">
						<Link href="/"><a>Главная</a></Link>
					</li>
					<li className="breadcrumbs_item">
						<Link href="/wedding-rings"><a>Обручальные кольца</a></Link>
					</li>
				</ul>

				<h4 className={s.wedding_rings_title}>Обручальные кольца</h4>
				<p className={s.wedding_rings_desc}>
					Эксклюзивные обручальные кольца с оригинальным дизайном от «Арт-Рингз» — отличный выбор для закрепления союза Вашей любви. В такой важный день все должно быть идеально и ключевой деталью являются обручальные кольца для «нее» и «него» — будущих счастливых супругов.
				</p>
				<Filters />
				<ProductsList />
				<Pagination />
				<DescBottomCatalog />
			</div>
		</div>
	)
}

export default WeddingRings;