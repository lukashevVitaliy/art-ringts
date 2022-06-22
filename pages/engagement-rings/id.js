import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { FaHeart } from "react-icons/fa"


import ProductIdSlider from "../../components/product-id-slider/product-id-slider";
import Tabs from "../../components/tabs/tabs";
import SliderNovelties from "../../components/slider-novelties/slider-novelties";

import s from "./id.module.scss";
import cart from '/public/assets/icons/shopping-cart.svg';
import whatsApp from '/public/assets/icons/social/wa.svg';
import checkbox from "/public/assets/icons/checkbox-001.svg";


const RingId = () => {
	return (
		<div className={s.ring_id}>
			<Head>
				<title>Engagement Ring</title>
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

				<div className={s.ring_id_top}>
					<h4 className={s.ring_id_title}>Арт. 020</h4>
					<span className={s.ring_id_rating}>★★★★★</span>
					<span className={s.ring_id_reviews}>1 отзыв</span>
					<button className={s.ring_id_favorites}>
						<span className={s.ring_id_favorites_image} >
							<FaHeart style={{ "width": "17.2px", "height": "15px", "color": "#9eafc2" }} />
						</span>
						<span className={s.ring_id_favorites_text} >
							в избранное
						</span>
					</button >
				</div>

				<div className={s.ring_id_position}>
					<ProductIdSlider />
					<div className={s.right}>
						<div className={s.price}>
							<span className={s.price_current}>59 600 ₽</span>
							<span className={s.price_old}>69 600 ₽</span>
						</div>
						<div className={s.size_rings}>
							<div className={s.size_rings_two}>
								<p>Размер (жен.)</p>
								<select name="woman" >
									<option defaultValue="14.00">14.00</option>
									<option value="14.25">14.25</option>
									<option value="14.50">14.50</option>
									<option value="14.75">14.75</option>
									<option value="15.00">15.00</option>
									<option value="15.25">15.25</option>
									<option value="15.50">15.50</option>
									<option value="15.75">15.75</option>
									<option value="16.00">16.00</option>
									<option value="16.25">16.25</option>
									<option value="16.50">16.50</option>
									<option value="16.75">16.75</option>
									<option value="17.00">17.00</option>
									<option value="17.25">17.25</option>
									<option value="17.50">17.50</option>
									<option value="17.75">17.75</option>
									<option value="18.00">18.00</option>
									<option value="18.25">18.25</option>
									<option value="18.50">18.50</option>
									<option value="18.75">18.75</option>
									<option value="19.00">19.00</option>
									<option value="19.25">19.25</option>
									<option value="19.50">19.50</option>
									<option value="19.75">19.75</option>
									<option value="20.00">20.00</option>
									<option value="20.25">20.25</option>
									<option value="20.50">20.50</option>
									<option value="20.75">20.75</option>
									<option value="21.00">21.00</option>
									<option value="21.25">21.25</option>
									<option value="21.50">21.50</option>
									<option value="21.75">21.75</option>
									<option value="22.00">22.00</option>
									<option value="22.25">22.25</option>
									<option value="22.50">22.50</option>
									<option value="22.75">22.75</option>
									<option value="23.00">23.00</option>
									<option value="23.25">23.25</option>
									<option value="23.50">23.50</option>
									<option value="23.75">23.75</option>
									<option value="24.00">24.00</option>
									<option value="24.25">24.25</option>
									<option value="24.50">24.50</option>
									<option value="24.75">24.75</option>
									<option value="25.00">25.00</option>
								</select>
							</div>
							<div className={s.size_rings_two}>
								<p>Размер (муж.)</p>
								<select name="man" >
									<option defaultValue="14.00">14.00</option>
									<option value="14.25">14.25</option>
									<option value="14.50">14.50</option>
									<option value="14.75">14.75</option>
									<option value="15.00">15.00</option>
									<option value="15.25">15.25</option>
									<option value="15.50">15.50</option>
									<option value="15.75">15.75</option>
									<option value="16.00">16.00</option>
									<option value="16.25">16.25</option>
									<option value="16.50">16.50</option>
									<option value="16.75">16.75</option>
									<option value="17.00">17.00</option>
									<option value="17.25">17.25</option>
									<option value="17.50">17.50</option>
									<option value="17.75">17.75</option>
									<option value="18.00">18.00</option>
									<option value="18.25">18.25</option>
									<option value="18.50">18.50</option>
									<option value="18.75">18.75</option>
									<option value="19.00">19.00</option>
									<option value="19.25">19.25</option>
									<option value="19.50">19.50</option>
									<option value="19.75">19.75</option>
									<option value="20.00">20.00</option>
									<option value="20.25">20.25</option>
									<option value="20.50">20.50</option>
									<option value="20.75">20.75</option>
									<option value="21.00">21.00</option>
									<option value="21.25">21.25</option>
									<option value="21.50">21.50</option>
									<option value="21.75">21.75</option>
									<option value="22.00">22.00</option>
									<option value="22.25">22.25</option>
									<option value="22.50">22.50</option>
									<option value="22.75">22.75</option>
									<option value="23.00">23.00</option>
									<option value="23.25">23.25</option>
									<option value="23.50">23.50</option>
									<option value="23.75">23.75</option>
									<option value="24.00">24.00</option>
									<option value="24.25">24.25</option>
									<option value="24.50">24.50</option>
									<option value="24.75">24.75</option>
									<option value="25.00">25.00</option>
								</select>
							</div>
						</div>
						<button className="btn btn-cart" style={{ marginBottom: '10px' }}>
							<Image src={cart} width={24} height={24} alt="icon cart" />
							<span>в корзину</span>
						</button>
						<button className="btn btn-whatsApp">
							<Image src={whatsApp} width={30} height={30} alt="icon WhatsApp" />
							<span>написать whatsapp</span>
						</button>

						<div className={s.desc}>
							<p className={s.desc_representation}>
								<Image src={checkbox} width={15} height={15} alt="checkbox in stock" />
								<span>Образцы в офисе: Да</span>
							</p>
							<ul>
								<li>Вес: 9,9 гр</li>
								<li>Материал: Золото 585 пробы</li>
								<li>Вставки: 7 Бриллиантов кр 57</li>
								<li>Изготовим из: золота 750 пр и платины 950</li>
								<li>Вид: 06</li>
							</ul>
						</div>
						<div className={s.design}>
							<p>Внесём любые правки в дизайн:</p>
							<ul>
								<li>ширина, толщина, камни (добавить, убрать, размер, цвет)</li>
								<li>цвет колец (одноцветные, двухцветные)</li>
								<li>поверхность (глянцевая, матовая, текстурированная и т.д.)</li>
								<li>можно без гравировки эмблемы (лебеди)</li>
								<li>возможно изготовление в другой пробе и из других драгоценных металлов</li>
								<li>возможно нанести свою гравировку</li>
							</ul>
						</div>
					</div>
				</div>

				<div className={s.info}>
					<Tabs />
				</div>
				<h3 className={s.reviewed_title}>НЕДАВНО ПРОСМОТРЕННЫЕ</h3>
				<SliderNovelties />
			</div >
		</div >
	)
}

export default RingId;