import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import SliderWorkExamples from "../../components/slider-work-examples/slider-work-examples";

import s from "./rings-to-order.module.scss";


const RingsToOrder = () => {
	return (
		<div className={s.rings_to_order}>
			<Head>
				<title>Rings To Order</title>
			</Head>
			<div className="container">
				<ul className="breadcrumbs_list">
					<li className="breadcrumbs_item">
						<Link href="/"><a>Главная</a></Link>
					</li>
					<li className="breadcrumbs_item">
						<Link href="/rings-to-order"><a>На заказ</a></Link>
					</li>
				</ul>
			</div>

			<div className={s.rings_to_order_banner}>
				<div className="container">
					<div className={s.rings_to_order_banner_wrap}>
						<h1 className={s.rings_to_order_banner_title}>
							СОЗДАЙТЕ СВОЕ УНИКАЛЬНОЕ УКРАШЕНИЕ
						</h1>
						<p className={s.rings_to_order_banner_text}>
							Загрузите фото с любым украшением и мы с радостью изготовим его для вас
						</p>
						<button className="btn">Рассчитать стоимость</button>
					</div>
				</div>
			</div>

			<h1 className={s.rings_to_order_title}>ПРИМЕРЫ РАБОТ</h1>
			<SliderWorkExamples />

			<div className={s.rings_to_order_procedure}>
				<div className="container">
					<h1 className={s.rings_to_order_procedure_title}>КАК МЫ ЭТО ДЕЛАЕМ</h1>
					<div className={s.rings_to_order_procedure_items}>
						<div className={s.rings_to_order_procedure_item}>
							<p className={s.rings_to_order_procedure_item_stage}>1 этап</p>
							<h4 className={s.rings_to_order_procedure_item_title}>СОЗДАНИЕ КОНЦЕПЦИИ</h4>
							<p className={s.rings_to_order_procedure_item_desc}>
								На этом этапе мы помогаем Вам определиться с концепцией будущего украшения, металлом, подбираем вставки, рассчитываем примерную стоимость готового изделия.
							</p>
							<p className={s.rings_to_order_procedure_item_time}>1-3 дня</p>
							<div className={s.rings_to_order_procedure_item_image}>
								<Image src="/assets/bg/stage_1.jpg" width={625} height={388} alt="image backgroung" />
							</div>
						</div>
						<div className={s.rings_to_order_procedure_item}>
							<p className={s.rings_to_order_procedure_item_stage}>2 этап</p>
							<h4 className={s.rings_to_order_procedure_item_title}>РАЗРАБОТКА ДИЗАЙНА</h4>
							<p className={s.rings_to_order_procedure_item_desc}>
								Исходя из информации, полученной от Вас ранее, дизайнеры готовят эскизы будущего изделия.
							</p>
							<p className={s.rings_to_order_procedure_item_time}>5-15 дней</p>
							<div className={s.rings_to_order_procedure_item_image}>
								<Image src="/assets/bg/stage_2.jpg" width={625} height={388} alt="image backgroung" />
							</div>
						</div>
						<div className={s.rings_to_order_procedure_item}>
							<p className={s.rings_to_order_procedure_item_stage}>3 этап</p>
							<h4 className={s.rings_to_order_procedure_item_title}>изготовление</h4>
							<p className={s.rings_to_order_procedure_item_desc}>Согласованный дизайн передается ювелирам, которые изготавливают будущее украшение. </p>
							<p className={s.rings_to_order_procedure_item_time}>1-3 дня</p>
							<div className={s.rings_to_order_procedure_item_image}>
								<Image src="/assets/bg/stage_3.jpg" width={625} height={388} alt="image backgroung" />
							</div>
						</div>
						<div className={s.rings_to_order_procedure_item}>
							<p className={s.rings_to_order_procedure_item_stage}>4 этап</p>
							<h4 className={s.rings_to_order_procedure_item_title}>ДОСТАВКА и оплата</h4>
							<p className={s.rings_to_order_procedure_item_desc}>
								Выполненный заказ передается клиенту. Заказ комплектуется всеми необходимыми сертификатами (при наличии), гарантией, подарочным футляром.
							</p>
							<p className={s.rings_to_order_procedure_item_time}>1-3 дня</p>
							<div className={s.rings_to_order_procedure_item_image}>
								<Image src="/assets/bg/stage_4.jpg" width={625} height={388} alt="image backgroung" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<div className={s.rings_to_order_application}>
					<form className={s.rings_to_order_form}>
						<div className={s.rings_to_order_form_wrap}>
							<div className={s.rings_to_order_form_name}>
								<label htmlFor="name">Ваше имя</label>
								<input type="text" name="name" />
								<p className="error-form">Error</p>
							</div>
							<div className={s.rings_to_order_form_download}>
								<button className="btn btn-download">
									<Image src="/assets/icons/scraper.svg" width={18.05} height={19} alt="icons" />
									<span>ЗАГРУЗИТЬ ФОТО</span>
								</button>
							</div>
							<div className={s.rings_to_order_form_email}>
								<label htmlFor="email">Ваш e-mail</label>
								<input type="email" name="email" />
								<p className="error-form">Error</p>
							</div>
							<div className={s.rings_to_order_form_tel}>
								<label htmlFor="phone">Ваш телефон</label>
								<input type="tel" name="phone" />
								<p className="error-form">Error</p>
							</div>
						</div>
						<p>Комментарий</p>
						<textarea name="comment" maxLength={1000} />
						<button className="btn">РАССЧИТАТЬ СТОИМОСТЬ</button>
					</form>
					<div className={s.info}>
						<div className={s.info_image}>
							<Image src="/assets/image/rings/order/azakli.jpg" width={400} height={600} alt="image" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RingsToOrder;
