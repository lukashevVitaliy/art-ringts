import Link from "next/link";
import Image from "next/image";

import SocialLinks from "../social-links/social-links";

import s from "./cobtacts.module.scss";

const Contacts = () => {
	return (
		<div className={s.contacts}>
			<div className={s.contacts_wrap}>
				<h3 className={s.contacts_title}>КОНТАКТЫ</h3>
				<div className={s.contacts_inner}>
					<div className={s.contacts_location_image}>
						<Image src="/assets/icons/location.svg" width={20} height={20} alt="locations" />
					</div>
					<p>Москва, Большой Кисловский переулок, 5-7с1</p>
				</div>
				<div className={s.contacts_inner}>
					<div className={s.contacts_phone_image}>
						<Image src="/assets/icons/phone.svg" width={20} height={20} alt="working hours" />
					</div>
					<div className={s.contacts_phone_desc}>
						<Link href="tel:+74999408777">
							<a>+7 (499) 940-87-77</a>
						</Link><br />
						<Link href="tel:+79778412340">
							<a>+7 (977) 841-23-40</a>
						</Link>
					</div>
				</div>
				<div className={s.contacts_inner}>
					<div className={s.contacts_time_image}>
						<Image src="/assets/icons/clock.svg" width={20} height={20} alt="working hours" />
					</div>
					<div className={s.contacts_time_desc}>
						<p>пн-пт 11:00-20:00</p>
						<p>сб, вс 11:00-17:00</p>
					</div>
				</div>
				<SocialLinks />
			</div>
		</div>
	)
}

export default Contacts;
