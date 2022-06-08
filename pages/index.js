import Head from 'next/head';

import SliderSpecialRingth from '../components/slider-special-ringth/slider-special-ringth';
import SliderNovelties from '../components/slider-novelties/slider-novelties';
import Catalog from '../components/catalog/catalog';
import DiamondGift from '../components/diamond-gift/diamond-gift';

import s from "./index.module.scss";


const Home = () => {
	return (
		<div className={s.home}>
			<Head>
				<title>Home</title>
			</Head>
			<p className={s.home_text}>Oсобенные обручальные кольца</p>
			<SliderSpecialRingth />
			<DiamondGift />
			<Catalog />
			<h1 className={s.home_title}>Новинки</h1>
			<SliderNovelties />
		</div>
	)
}

export default Home;