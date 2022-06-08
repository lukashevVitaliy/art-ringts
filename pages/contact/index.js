import Head from "next/head";
import Contacts from "../../components/contacts/contacts";
import SliderContact from "../../components/slider-contact/slider-contact";

import s from "./contact.module.scss";


const Contact = () => {
	return (
		<div className={s.contact}>
			<Head>
				<title>Contact</title>
			</Head>
			<div className="container">
				<h1 className={s.contact_title}>КОНТАКТЫ</h1>
				<p className={s.contact_comment}>Наша студия переехала с ул. Никольской на Арбат. Теперь у нас ещё просторнее, уютнее и больше красивых колечек!</p>
				<div className={s.contact_wrap}>
					<Contacts />
					<div className={s.contact_map}>
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.2121370620935!2d37.60344141609888!3d55.754816999303834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a4e41323a77%3A0xd11bd86002c4812c!2z0JHQvtC70YzRiNC-0Lkg0JrQuNGB0LvQvtCy0YHQutC40Lkg0L_QtdGALiwgNS03LCDQnNC-0YHQutCy0LAsINCg0L7RgdGB0LjRjywgMTI1MDA5!5e0!3m2!1sru!2s!4v1654628590244!5m2!1sru!2s" width="100%" height="100%" style={{ "border": 0, "allowfullScreen": "", "loading": "lazy", "referrerpolicy": "no-referrer-when-downgrade" }}></iframe>
					</div>
				</div>
				<h2 className={s.contact_subtitle}>Фото студии с улицы</h2>
			</div>
			<SliderContact />
		</div>
	)
}

export default Contact;