import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Counter from "../../components/counter/counter";

import s from "./cart.module.scss";


const Cart = () => {
	return (
		<div className={s.cart}>
			<Head>
				<title>Cart</title>
			</Head>
			<div className="container">
				<ul className="breadcrumbs_list">
					<li className="breadcrumbs_item">
						<Link href="/"><a>Главная</a></Link>
					</li>
					<li className="breadcrumbs_item">
						<Link href="/cart"><a>Корзина</a></Link>
					</li>
				</ul>

				<div className={s.cart_top}>
					<h4 className={s.cart_top_title}>Корзина</h4>
					<button className={s.cart_top_btn}>УДАЛИТЬ ВСЕ</button>
				</div>
				<div className={s.cart_wrapper}>
					<div className={s.cart_info}>
						<div className={s.cart_info_titles}>
							<p className={s.cart_info_titles_name}>Название</p>
							<p className={s.cart_info_titles_model}>Модель</p>
							<p className={s.cart_info_titles_quantity}>Кол-во</p>
							<p className={s.cart_info_titles_price}>Цена</p>
						</div>
						<div className={s.cart_info_item}>
							<div className={s.cart_info_item_image}>
								<Image src="/assets/image/rings/wedding/021-s.jpg" width={100} height={100} alt="image ring" />
							</div>
							<p className={s.cart_info_item_title}>Арт. 01</p>
							<p className={s.cart_info_item_model}>01</p>
							<Counter />
							{/* <p className={s.cart_info_item_quantity}>100</p> */}
							<div className={s.cart_info_item_price}>
								<p className={s.cart_info_item_price_new}>90 000 ₽</p>
								<p className={s.cart_info_item_price_old}>1 000 000 ₽</p>
							</div>
							<button className={s.cart_info_item_delete}>×</button>
						</div>
						<div className={s.cart_info_item}>
							<div className={s.cart_info_item_image}>
								<Image src="/assets/image/rings/wedding/021-s.jpg" width={100} height={100} alt="image ring" />
							</div>
							<p className={s.cart_info_item_title}>Арт. 01</p>
							<p className={s.cart_info_item_model}>01</p>
							<Counter />
							{/* <p className={s.cart_info_item_quantity}>100</p> */}
							<div className={s.cart_info_item_price}>
								<p className={s.cart_info_item_price_new}>90 000 ₽</p>
								<p className={s.cart_info_item_price_old}>1 000 000 ₽</p>
							</div>
							<button className={s.cart_info_item_delete}>×</button>
						</div>

						<div className={s.cart_info_item_discount}>
							<Image src="/assets/image/discount.png" width={690} height={84} alt="discount" />
						</div>
					</div>

					<div className={s.cart_info_amount}>
						<div className={s.cart_info_amount_wrap}>
							<div className={s.cart_info_amount_info}>
								<span className={s.cart_info_amount_info_text}>Итого:</span>
								<div className={s.cart_info_amount_info_block}>
									<p className={s.cart_info_amount_info_total_new}>110 000 ₽</p>
									<p className={s.cart_info_amount_info_total_old}>119 200 ₽</p>
								</div>
							</div>
							<button className="btn">ОФОРМИТЬ ЗАКАЗ</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cart;