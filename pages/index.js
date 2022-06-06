import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import SliderSpecialRingth from '../components/slider-special-ringth/slider-special-ringth';
import SliderNovelties from '../components/slider-novelties/slider-novelties';
import Catalog from '../components/catalog/catalog';

import s from "./index.module.scss";


const Home = () => {
	return (
		<div className={s.home}>
			<Head>
				<title>Home</title>
			</Head>
			<p className={s.home_text}>Oсобенные обручальные кольца</p>
			<SliderSpecialRingth />
			<div className={s.home_diamond}>
				<div className={s.home_diamond_line}></div>
				<div className={s.home_diamond_image}>
					<Link href="#">
						<a>
							<Image src="/assets/icons/diamond.svg" width={56} height={48} alt="icon diamond" />
						</a>
					</Link>
				</div>
				<div className={s.home_diamond_line}></div>
			</div>
			<p className={s.home_diamond_text}>Бриллиант в подарок</p>
			<Catalog />
			<h1 className={s.home_title}>Новинки</h1>
			<SliderNovelties />
		</div>
	)
}

export default Home;