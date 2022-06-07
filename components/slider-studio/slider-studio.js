import Image from 'next/image';
import { Autoplay, FreeMode, Keyboard, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import s from "./slider-studio";

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';


const SliderStudio = () => {
	return (
		<div className={s.slider_studio}>
			<Swiper
				modules={[Keyboard, FreeMode, Autoplay, Pagination]}
				spaceBetween={10}
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
				<SwiperSlide className={s.slider_studio}>
					<div className={s.slider_studio_image}>
						<Image src="/assets/image/studio/studio_1.png" width={640} height={510} alt="image studio" />
					</div>
				</SwiperSlide>
				<SwiperSlide className={s.slider_studio}>
					<div className={s.slider_studio_image}>
						<Image src="/assets/image/studio/studio_2.png" width={640} height={510} alt="image studio" />
					</div>
				</SwiperSlide>
				<SwiperSlide className={s.slider_studio}>
					<div className={s.slider_studio_image}>
						<Image src="/assets/image/studio/studio_3.png" width={640} height={510} alt="image studio" />
					</div>
				</SwiperSlide>
				<SwiperSlide className={s.slider_studio}>
					<div className={s.slider_studio_image}>
						<Image src="/assets/image/studio/studio_4.png" width={640} height={510} alt="image studio" />
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default SliderStudio;
