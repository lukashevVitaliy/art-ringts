import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

import SocialLink from '../social-links/social-links';

import s from './menu-burger.module.scss';
import logo from '../../public/assets/icons/logo-burger.svg';

const MenuBurger = () => {
	const [menuActive, setMenuActive] = useState(false);
	console.log(menuActive);

	const items = [
		{ value: 'Студия', href: '/studio' },
		{ value: 'О нас', href: '/about' },
		{ value: 'Доставка и оплата', href: '/delivery-and-payment' },
		{ value: 'Гарантии', href: '/buyer-protection' },
		{ value: 'Контакты', href: '/contact' },
	]

	return (
		<>
			<div className={menuActive ? "menu_burger active" : `${s.menu_burger}`} >
				<div className={s.menu_burger_wrap}>
					<button
						className={s.menu_burger_close}
						onClick={() => setMenuActive(!menuActive)}
					>
						<span></span>
						<span></span>
					</button>
					<div className={s.menu_burger_logo}>
						<Link href="/"><a><Image src={logo} width={218} height={130} alt="logo icon" /></a></Link>
					</div>
					<nav>
						<ul className={s.menu_burger_list}>
							{items.map(item => {
								return (
									<li key={uuidv4()} className={s.menu_burger_link}>
										<Link href={item.href}><a>{item.value}</a></Link>
									</li>
								)
							})}
						</ul>
					</nav>
					<div className={s.menu_burger_footer}>
						<div className={s.menu_burger_assortment}>
							<nav>
								<ul>
									<li><Link href="#"><a>Все обручальные кольца</a></Link></li>
									<li><Link href="#"><a>Необычные обручальные кольца</a></Link></li>
									<li><Link href="#"><a>Классические обручальные кольца</a></Link></li>
									<li><Link href="#"><a>Помолвочные кольца</a></Link></li>
									<li><Link href="#"><a>Кольца с лебедями</a></Link></li>
									<li><Link href="#"><a>Обручальные кольца парные</a></Link></li>
								</ul>
							</nav>
						</div>
						<div className={s.menu_burger_info}>
							<nav>
								<ul>
									<li><Link href="#"><a>Студия</a></Link></li>
									<li><Link href="#"><a>О нас</a></Link></li>
									<li><Link href="#"><a>Контакты</a></Link></li>
									<li><Link href="#"><a>Доставка и Оплата</a></Link></li>
									<li><Link href="#"><a>Гарантии</a></Link></li>
									<li><Link href="#"><a>Отзывы</a></Link></li>
								</ul>
							</nav>
						</div>
						<div className={s.menu_burger_buyers}>
							<div className={s.menu_burger_inner}>
								<div className={s.menu_burger_desc}>
									<nav>
										<ul>
											<li><Link href="#"><a>Бриллиант в подарок</a></Link></li>
											<li><Link href="#"><a>Как выбрать обручальные кольца</a></Link></li>
											<li><Link href="#"><a>О помолвочных кольцах</a></Link></li>
										</ul>
									</nav>
								</div>
								<SocialLink />
							</div>
						</div>
					</div>
				</div>
			</div>

			<button
				className={s.burger}
				onClick={() => setMenuActive(!menuActive)}
			>
				<span></span>
				<span></span>
				<span></span>
			</button>
		</>
	)
}

export default MenuBurger;
