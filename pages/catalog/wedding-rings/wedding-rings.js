import Filters from "../../../components/filters/filters";
import ProductsList from "../../../components/products-list/products-list";
import Pagination from "../../../components/pagination/pagination";

import s from "./wedding-rings.module.scss";


const WeddingRings = () => {
	return (
		<div className={s.wedding_rings}>
			<h4 className={s.wedding_rings_title}>обручальные кольца</h4>
			<p className={s.wedding_rings_desc}>
				Эксклюзивные обручальные кольца с оригинальным дизайном от «Арт-Рингз» — отличный выбор для закрепления союза Вашей любви. В такой важный день все должно быть идеально и ключевой деталью являются обручальные кольца для «нее» и «него» — будущих счастливых супругов.
			</p>
			<Filters />
			<ProductsList />
			<Pagination />
			<p className={s.wedding_rings_text}>
				Дизайнерские обручальные кольца от производителя хороши тем, что их внешний вид и особенности оформления разнообразны и можно легко подобрать те, которые подойдут именно Вам и Вашей второй половинке. В разделе представлено свыше двухсот готовых моделей обручальных колец — возможно, Вы захотите внести в некоторые из них свои небольшие дополнения или вовсе заказать неповторимую модель: мы создадим <span>уникальный дизайн</span> по Вашему описанию или рисунку, воплотив любые идеи.Можно выбрать любой вид поверхности: глянцевую или матовую, текстурированную, узорчатую… Выполним резные обручальные кольца или с любой гравировкой. Кольца можно дополнить драгоценными камнями, например, бриллиантами — такие парные кольца смотрятся роскошно и эффектно. Всем покупателям колец с фирменной эмблемой Art-Rings мы дарим <span>бриллиант в подарок.</span><br />
				Парные обручальные кольца от «Арт-Рингз» можно недорого <span>купить в Москве</span> или с удобной <span>доставкой в регионы</span>. С радостью ответим на Ваши вопросы по телефонам: +7 (499) 940-87-77.
			</p>
		</div>
	)
}

export default WeddingRings;