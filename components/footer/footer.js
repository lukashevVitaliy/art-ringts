import Image from "next/image";
import Link from "next/link";

import SocialLinks from "../social-links/social-links";

import s from './footer.module.scss';

const Footer = () => {
	return (
		<footer className={s.footer}>
			<div className="container">
				<div className={s.footer_top}>

					<div className={s.footer_top_data}>
						<div className={s.footer_top_data_logo}>
							<Link href="/">
								<a>
									<Image src="/assets/icons/logo_text.svg" width={140} height={44} alt="логотип без текста" />
								</a>
							</Link>

						</div>

						<p className={s.footer_top_data_policy}>
							<Link href="#"><a>Политика конфиденциальности</a></Link>
						</p>
						<p className={s.footer_top_data_itn}>ИНН 672208547140</p>
					</div>

					<div className={s.footer_top_info}>
						<p className={s.footer_top_info_title}>ИНФОРМАЦИЯ</p>
						<ul className={s.footer_top_info_list}>
							<li className={s.footer_top_info_link}>
								<Link href="#"><a>Студия</a></Link>
							</li>
							<li className={s.footer_top_info_link}>
								<Link href="#"><a>О нас</a></Link>
							</li>
							<li className={s.footer_top_info_link}>
								<Link href="#"><a>Доставка и Оплата</a></Link>
							</li>
							<li className={s.footer_top_info_link}>
								<Link href="#"><a>Гарантии</a></Link>
							</li>
							<li className={s.footer_top_info_link}>
								<Link href="#"><a>Отзывы</a></Link>
							</li>
						</ul>
					</div>

					<div className={s.footer_top_buyers}>
						<p className={s.footer_top_buyers_title}>ПОКУПАТЕЛЯМ</p>
						<ul className={s.footer_top_buyers_list}>
							<li className={s.footer_top_buyers_link}>
								<Link href="#"><a>Бриллиант в подарок</a></Link>
							</li>
							<li className={s.footer_top_buyers_link}>
								<Link href="#"><a>Как выбрать обручальные кольца</a></Link>
							</li>
							<li className={s.footer_top_buyers_link}>
								<Link href="#"><a>О помолвочных кольцах</a></Link>
							</li>
						</ul>
					</div>

					<div className={s.footer_top_range}>
						<p className={s.footer_top_range_title}>АССОРТИМЕНТ</p>
						<ul className={s.footer_top_range_list}>
							<li className={s.footer_top_range_link}>
								<Link href="#"><a>Все обручальные кольца</a></Link>
							</li>
							<li className={s.footer_top_range_link}>
								<Link href="#"><a>Необычные обручальные кольца</a></Link>
							</li>
							<li className={s.footer_top_range_link}>
								<Link href="#"><a>Классические обручальные кольца</a></Link>
							</li>
							<li className={s.footer_top_range_link}>
								<Link href="#"><a>Помолвочные кольца</a></Link>
							</li>
							<li className={s.footer_top_range_link}>
								<Link href="#"><a>Кольца с лебедями</a></Link>
							</li>
							<li className={s.footer_top_range_link}>
								<Link href="#"><a>Обручальные кольца парные</a></Link>
							</li>
						</ul>
					</div>
					<div className={s.footer_top_contacts}>
						<p className={s.footer_top_contacts_title}>КОНТАКТЫ</p>
						<div className={s.footer_top_contacts_block}>
							<p className={s.footer_top_contacts_phone}>
								<Link href="tel:+79778412340">
									<a>+7(977) 841 23 40</a>
								</Link>
							</p>
							<p className={s.footer_top_contacts_phone}>
								<Link href="tel:+74999408777">
									<a>+7(499) 940 87 77</a>
								</Link>
							</p>
							<p className={s.footer_top_contacts_location}>Москва, Большой Кисловский переулок, 5-7с1</p>
							<p className={s.footer_top_contacts_mail}>
								<Link href="mailto:info@art-rings.ru"><a>info@art-rings.ru</a></Link>
							</p>
						</div>
					</div>
				</div>

				<div className={s.footer_bottom}>
					<p>Разработка сайта - "Demo version"</p>
					<SocialLinks />
				</div>
			</div>
		</footer>
	)
}

export default Footer;
