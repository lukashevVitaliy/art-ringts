import Head from "next/dist/shared/lib/head";
import Link from "next/link";
import Filters from "../../components/filters/filters";
import ProductsList from "../../components/products-list/products-list";
import { DescBottomCatalog } from "../../components/desc-bottom-catalog";
import Pagination from "../../components/pagination/pagination";

import s from "./index.module.scss";


const WeddingTriosRings = () => {
	return (
		<div className={s.wedding_trios_rings}>
			<Head>
				<title>Wedding Trios Rings</title>
			</Head>
			<div className="container">
				<ul className="breadcrumbs_list">
					<li className="breadcrumbs_item">
						<Link href="/"><a>Главная</a></Link>
					</li>
					<li className="breadcrumbs_item">
						<Link href="/wedding-trios-rings"><a>Свадебные трио</a></Link>
					</li>
				</ul>

				<h4 className={s.wedding_trios_rings_title}>Свадебные трио</h4>
				<p className={s.wedding_trios_rings_desc}>
					В студии «Арт-Рингз» Вы найдете парные обручальные кольца на самый взыскательный вкус! Любую модель из представленной коллекции мы изготовим в срок с учетом Ваших параметров: желаемого цвет золота, ширины и толщины колец, количества бриллиантов или других камней. Парные обручальные кольца от «Арт-Рингз» - уникальные, как Ваша пара, как Ваша любовь!
				</p>
				<Filters />
				<ProductsList url={`/wedding-trios-rings/id`} />
				<Pagination />
				<DescBottomCatalog />
			</div>
		</div>
	)
}

export default WeddingTriosRings;