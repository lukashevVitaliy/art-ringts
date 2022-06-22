import Image from "next/image";
import { Autoplay, FreeMode, Keyboard, Mousewheel, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel';
import 'swiper/css/navigation';

import s from "./slider-reviews.module.scss";
import ring_review from "../../public/assets/image/rings/wedding/021-b.jpg"

const SliderReviews = () => {
	return (
		<div className={s.slider_reviews}>
			<Swiper
				style={{
					"--swiper-navigation-color": "#020f59",
					"--swiper-navigation-size": "25px"
				}}
				modules={[Keyboard, FreeMode, Autoplay, Mousewheel, Navigation]}
				navigation={true}
				spaceBetween={10}
				slidesPerView={2}
				autoplay={true}
				speed={6000}
				loop={true}
				freeMode={false}
				keyboard={{
					enabled: true,
					onlyInViewport: true,
					pageUpDown: true
				}}
				mousewheel={{
					sensitivity: 1
				}}
				className={s.reviews_sliders}
			>
				<SwiperSlide className={s.swiper_slider}>
					<div className={s.swiper_slider_wrap}>
						<p className={s.swiper_slider_name}>София</p>
						<div className={s.swiper_slider_rating}>★★★★★</div>
						<p className={s.swiper_slider_message}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nobis facilis eveniet necessitatibus iste possimus molestiae corrupti vero laboriosam unde.
						</p>
						<div className={s.swiper_slider_images}>
							<div className={s.swiper_slider_image}>
								<Image src={ring_review} width={70} height={70} alt="images rings" />
							</div>
							<div className={s.swiper_slider_image}>
								<Image src={ring_review} width={70} height={70} alt="images rings" />
							</div>
							<div className={s.swiper_slider_image}>
								<Image src={ring_review} width={70} height={70} alt="images rings" />
							</div>
							<div className={s.swiper_slider_image}>
								<Image src={ring_review} width={70} height={70} alt="images rings" />
							</div>
						</div>
						<p className={s.swiper_slider_data}>17.06.2022</p>
					</div>
				</SwiperSlide>
				<SwiperSlide className={s.swiper_slider}>
					<div className={s.swiper_slider_wrap}>
						<p className={s.swiper_slider_name}>Виталий</p>
						<div className={s.swiper_slider_rating}>★★★★★</div>
						<p className={s.swiper_slider_message}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nobis facilis eveniet necessitatibus iste possimus molestiae corrupti vero laboriosam unde.
						</p>
						<div className={s.swiper_slider_images}>
							<div className={s.swiper_slider_image}>
								<Image src={ring_review} width={70} height={70} alt="images rings" />
							</div>
							<div className={s.swiper_slider_image}>
								<Image src={ring_review} width={70} height={70} alt="images rings" />
							</div>
							<div className={s.swiper_slider_image}>
								<Image src={ring_review} width={70} height={70} alt="images rings" />
							</div>
							<div className={s.swiper_slider_image}>
								<Image src={ring_review} width={70} height={70} alt="images rings" />
							</div>
						</div>
						<p className={s.swiper_slider_data}>17.06.2022</p>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default SliderReviews;