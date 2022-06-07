import { Autoplay, FreeMode, Keyboard, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { WorkExamples } from '../work-examples';

import s from "./slider-work-examples.module.scss";

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const SliderWorkExamples = () => {
	return (
		<div className={s.slider_work_examples}>
			<div className="container">
				<Swiper
					style={{
						"--swiper-navigation-color": "#000",
						"--swiper-navigation-size": "20px"
					}}
					modules={[Keyboard, FreeMode, Autoplay, Navigation, Pagination]}
					spaceBetween={14}
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
					<SwiperSlide className={s.slider_work_examples}>
						<WorkExamples />
					</SwiperSlide>
					<SwiperSlide className={s.slider_work_examples}>
						<WorkExamples />
					</SwiperSlide>
					<SwiperSlide className={s.slider_work_examples}>
						<WorkExamples />
					</SwiperSlide>
				</Swiper>
			</div >
		</div>
	)
}

export default SliderWorkExamples;
