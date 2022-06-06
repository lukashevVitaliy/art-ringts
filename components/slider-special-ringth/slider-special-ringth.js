import { Autoplay, FreeMode, Keyboard, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';

import s from './slider-special-ringth.module.scss';


const SliderSpecialRingth = () => {
	return (
		<Swiper
			style={{
				"--swiper-pagination-bullet-horizontal-gap": "15px",
				"--swiper-pagination-bullet-width": "15px",
				"--swiper-pagination-bullet-height": "15px",
				"--swiper-pagination-bullet-inactive-color": "#fff"
			}}
			modules={[Pagination, Keyboard, FreeMode, Autoplay]}
			spaceBetween={50}
			slidesPerView={1}
			autoplay={false}
			freeMode={false}
			keyboard={{
				enabled: true,
				onlyInViewport: true,
				pageUpDown: true
			}}
			pagination={{ clickable: true }}
			loop={true}
		>
			<SwiperSlide className={s.slider_special_ringth}>
				<div className={s.slider_special_ringth_image}>
					<Image src="/assets/image/home/banner.jpg" width={1920} height={655} alt="special ringth" />
				</div>
			</SwiperSlide>
			<SwiperSlide className={s.slider_special_ringth}>
				<div className={s.slider_special_ringth_image}>
					<Image src="/assets/image/home/banner.jpg" width={1920} height={655} alt="special ringth" />
				</div>
			</SwiperSlide>
			<SwiperSlide className={s.slider_special_ringth}>
				<div className={s.slider_special_ringth_image}>
					<Image src="/assets/image/home/banner.jpg" width={1920} height={655} alt="special ringth" />
				</div>
			</SwiperSlide>
		</Swiper>
	)
}

export default SliderSpecialRingth; 