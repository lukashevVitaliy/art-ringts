import Link from "next/link";
import Filters from "../../components/filters/filters";
import ProductsList from "../../components/products-list/products-list";
import { DescBottomCatalog } from "../../components/desc-bottom-catalog";
import Pagination from "../../components/pagination/pagination";

import s from "./wedding-trios.module.scss";


const WeddingTrios = () => {
	return (
		<div className={s.wedding_trios}>
			<div className="container">
				<ul className="breadcrumbs_list">
					<li className="breadcrumbs_item">
						<Link href="/"><a>Главная</a></Link>
					</li>
					<li className="breadcrumbs_item">
						<Link href="/wedding-trios"><a>Свадебные трио</a></Link>
					</li>
				</ul>

				<h4 className={s.wedding_trios_title}>Свадебные трио</h4>
				<p className={s.wedding_trios_desc}>
					В студии «Арт-Рингз» Вы найдете парные обручальные кольца на самый взыскательный вкус! Любую модель из представленной коллекции мы изготовим в срок с учетом Ваших параметров: желаемого цвет золота, ширины и толщины колец, количества бриллиантов или других камней. Парные обручальные кольца от «Арт-Рингз» - уникальные, как Ваша пара, как Ваша любовь!
				</p>
				<Filters />
				<ProductsList />
				<Pagination />
				<DescBottomCatalog />
			</div>
		</div>
	)
}

export default WeddingTrios;