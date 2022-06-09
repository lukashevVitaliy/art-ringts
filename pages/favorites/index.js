import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Pagination from "../../components/pagination/pagination";
import ProductList from "../../components/products-list/products-list";

import s from "./favorites.module.scss";


const Favorites = () => {
	return (
		<div className={s.favorites}>
			<Head>
				<title>Favorites</title>
			</Head>
			<div className="container">
				<ul className="breadcrumbs_list">
					<li className="breadcrumbs_item">
						<Link href="/"><a>Главная</a></Link>
					</li>
					<li className="breadcrumbs_item">
						<Link href="/favorites"><a>Избранное</a></Link>
					</li>
				</ul>

				<div className={s.favorites_top}>
					<h4 className={s.favorites_top_title}>избранное</h4>
					<button className={s.favorites_top_btn}>УДАЛИТЬ ВСЕ</button>
				</div>
				<div className={s.favorites_list}>
					<ProductList />
					<div className={s.favorites_image}>
						<Image src="/assets/image/rings/order/azakli.jpg" width={294} height={595} alt="image" />
					</div>
				</div>

				<Pagination />
			</div>
		</div>
	)
}

export default Favorites;