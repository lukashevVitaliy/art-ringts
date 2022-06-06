import { Autoplay, FreeMode, Keyboard, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Card } from "../card";

import s from "./slider-novelties.module.scss";

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const SliderNovelties = () => {
	return (
		<div className="container">
			<Swiper
				style={{
					"--swiper-navigation-color": "#000",
					"--swiper-navigation-size": "20px"
				}}
				modules={[Keyboard, FreeMode, Autoplay, Navigation, Pagination]}
				spaceBetween={25}
				slidesPerView={3}
				autoplay={true}
				speed={2500}
				freeMode={false}
				keyboard={{
					enabled: true,
					onlyInViewport: true,
					pageUpDown: true
				}}
				navigation={true}
				pagination={{
					clickable: true,
					type: 'progressbar'
				}}
				loop={true}
			>
				<SwiperSlide className={s.slider_novelties}>
					<Card />
				</SwiperSlide>
				<SwiperSlide className={s.slider_novelties}>
					<Card />
				</SwiperSlide>
				<SwiperSlide className={s.slider_novelties}>
					<Card />
				</SwiperSlide>
				<SwiperSlide className={s.slider_novelties}>
					<Card />
				</SwiperSlide>
				<SwiperSlide className={s.slider_novelties}>
					<Card />
				</SwiperSlide>
				<SwiperSlide className={s.slider_novelties}>
					<Card />
				</SwiperSlide>
			</Swiper>
		</div >
	)
}

export default SliderNovelties;
