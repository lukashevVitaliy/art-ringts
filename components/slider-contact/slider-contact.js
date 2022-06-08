import Image from 'next/image';
import { Autoplay, FreeMode, Keyboard, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import s from "./slider-contact";

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';


const SliderContact = () => {
	return (
		<div className={s.slider_contact}>
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
				<SwiperSlide className={s.slider_contact}>
					<div className={s.slider_contact_image}>
						<Image src="/assets/image/address/image-1.jpg" width={640} height={480} alt="image address" />
					</div>
				</SwiperSlide>
				<SwiperSlide className={s.slider_contact}>
					<div className={s.slider_contact_image}>
						<Image src="/assets/image/address/image-2.jpg" width={640} height={480} alt="image address" />
					</div>
				</SwiperSlide>
				<SwiperSlide className={s.slider_contact}>
					<div className={s.slider_contact_image}>
						<Image src="/assets/image/address/image-3.jpg" width={640} height={480} alt="image address" />
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default SliderContact;
