import Image from "next/image";
import Link from "next/link";

import SocialLinks from "../../social-links/social-links";

import s from "./Header-level_1.module.scss";


const HeaderLevel_1 = () => {
	return (
		<div className={s.info}>
			<div className="container">
				<div className={s.info__wrap}>
					<div className={s.info__location}>
						<div className={s.location__item}>
							<div className={s.location__image}>
								<Image src="/assets/icons/location.svg" width={20} height={20} alt="locations" />
							</div>
							<p>Москва, Большой Кисловский переулок, 5-7с1</p>
						</div>
						<div className={s.location__item}>
							<div className={s.location__image}>
								<Image src="/assets/icons/email.svg" width={20} height={20} alt="email" />
							</div>
							<Link href="mailto:info@art-rings.ru">
								<a>info@art-rings.ru</a>
							</Link>
						</div>
					</div>

					<div className={s.info__time}>
						<div className={s.time__image}>
							<Image src="/assets/icons/clock.svg" width={20} height={20} alt="working hours" />
						</div>
						<div className={s.time__desc}>
							<p>пн-пт 11:00-20:00</p>
							<p>сб, вс 11:00-17:00</p>
						</div>
					</div>

					<div className={s.info__phone}>
						<div className={s.phone__image}>
							<Image src="/assets/icons/phone.svg" width={20} height={20} alt="working hours" />
						</div>
						<div className={s.phone__desc}>
							<Link href="tel:+74999408777">
								<a>+7 (499) 940-87-77</a>
							</Link>
							<Link href="tel:+79778412340">
								<a>+7 (977) 841-23-40</a>
							</Link>
						</div>
					</div>

					<SocialLinks />
				</div>
			</div>
		</div>
	)
}

export default HeaderLevel_1;


