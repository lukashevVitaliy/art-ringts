import Head from "next/head";
import Image from "next/image";

import DiamondGift from "../../components/diamond-gift/diamond-gift";

import s from "./diamond.module.scss";


const Diamond = () => {
	return (
		<div className={s.diamond}>
			<Head>
				<title>Diamond</title>
			</Head>
			<div className={s.diamond_wrap}>
				<DiamondGift />
				<p>
					На свадьбу все дарят подарки, и у Art-Rings для молодожёнов приготовлено нечто особенное!
				</p>
				<p>
					Мы дарим подарок, который всегда будет с Вами!
				</p>
				<p>
					Бриллиант в каждое обручальное кольцо с нашей эмблемой совершенно бесплатно!
				</p>
				<p>
					<span>
						Для более подробной информации, пожалуйста, свяжитесь с менеджерами по телефону +7 (499) 940-87-77, приезжайте в наш офис: Большой Кисловский переулок, 5-7с1 или пишите<br /> info@art-rings.ru
					</span>
				</p>
				<div className={s.diamond_image}>
					<Image src="/assets/image/diamond.jpg" width={251} height={217} alt="image diamond" />
				</div>
			</div>
		</div>
	)
}

export default Diamond;

