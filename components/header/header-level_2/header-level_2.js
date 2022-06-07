import Image from "next/image";
import Link from "next/link";

import s from "./Header-level_2.module.scss";


const HeaderLevel_2 = () => {
	return (
		<div className={s.navigate}>
			<div className="container">
				<div className={s.navigate_wrap}>
					<nav className={s.navigate_menu}>
						<ul className={s.navigate_menu_list}>
							<li className={s.navigate_menu_link}>
								<Link href="/studio">
									<a>Студия</a>
								</Link>
							</li>
							<li className={s.navigate_menu_link}>
								<Link href="/about">
									<a>О нас</a>
								</Link>
							</li>
							<li className={s.navigate_menu_link}>
								<Link href="#">
									<a>Доставка и Оплата</a>
								</Link>
							</li>
							<li className={s.navigate_menu_link}>
								<Link href="#">
									<a>Гарантии</a>
								</Link>
							</li>
							<li className={s.navigate_menu_link}>
								<Link href="#">
									<a>Отзывы</a>
								</Link>
							</li>
						</ul>
					</nav>
					<form className={s.search_form}>
						<input name="text" type="text" placeholder="Поиск украшений" />
						<button type="submit" className={s.search_btn}>
							<Image src="/assets/icons/search.svg" width={20} height={20} alt="search" />
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default HeaderLevel_2;


