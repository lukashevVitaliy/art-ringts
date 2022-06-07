import Image from "next/image";
import Link from "next/link";

import s from "./Header-level_4.module.scss";


const HeaderLevel_4 = () => {
	return (
		<div className={s.navigate_bottom}>
			<div className="container">
				<div className={s.navigate_bottom_wrap}>
					<div className={s.navigate_bottom_left}>
						<div className={s.logo_header_image}>
							<Link href="/">
								<a>
									<Image src="/assets/icons/logo_header.svg" width={106} height={63} alt="logo header" />
								</a>
							</Link>
						</div>
						<button className={s.burger}>
							<div className={s.burger_image}>
								<Image src="/assets/icons/burger.svg" width={31} height={21} alt="burger menu" />
							</div>
						</button>
					</div>

					<nav className={s.menu_bottom}>
						<ul className={s.menu_bottom_list}>
							<li className={s.menu_bottom_link}>
								<Link href="/wedding-rings">
									<a>ОБРУЧАЛЬНЫЕ КОЛЬЦА</a>
								</Link>
							</li>
							<li className={s.menu_bottom_link}>
								<Link href="/engagement-rings">
									<a>ПОМОЛВОЧНЫЕ КОЛЬЦА</a>
								</Link>
							</li>
							<li className={s.menu_bottom_link}>
								<Link href="/wedding-trios">
									<a>СВАДЕБНЫЕ ТРИО</a>
								</Link>
							</li>
							<li className={s.menu_bottom_link}>
								<Link href="/rings-to-order">
									<a>НА ЗАКАЗ</a>
								</Link>
							</li>
						</ul>
					</nav>

					<div className={s.navigate_bottom_right}>
						<button className={s.cart_image}>
							<Image src="/assets/icons/cart.svg" width={24} height={24} alt="cart" />
						</button>
						<button className={s.like_image}>
							<Image src="/assets/icons/heart.svg" width={24} height={24} alt="heart" />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeaderLevel_4;


