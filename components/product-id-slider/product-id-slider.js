import { FreeMode, Keyboard, Navigation, EffectFade, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import Image from 'next/image';


import art_021_b from "../../public/assets/image/rings/wedding/021-b.jpg";
import art_021_g from "../../public/assets/image/rings/wedding/021-g.jpg";
import art_021_s from "../../public/assets/image/rings/wedding/021-s.jpg";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/keyboard';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';

import s from "./product-id-slider.module.scss";


const ProductIdSlider = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState({ el: "#product_slider_thumbs" });

	return (
		<div className={s.product_id_slider}>

			<Swiper
				style={{
					"--swiper-navigation-color": "#9eafc2",
					"--swiper-navigation-size": "34px"
				}}
				freeMode={true}
				navigation={true}
				grabCursor={true}
				thumbs={{
					swiper: thumbsSwiper
				}}
				keyboard={{
					enabled: true,
					onlyInViewport: true,
					pageUpDown: true
				}}
				effect="fade"
				modules={[Thumbs, Keyboard, FreeMode, Navigation, EffectFade]}
				className={s.product_id_slider_main}
			>
				<SwiperSlide className={s.swiper_slide_main}>
					<div className={s.swiper_slide_main_image}>
						<Image src={art_021_b} width={690} height={690} alt="ring" />
					</div>
				</SwiperSlide>
				<SwiperSlide className={s.swiper_slide_main}>
					<div className={s.swiper_slide_main_image}>
						<Image src={art_021_g} width={690} height={690} alt="ring" />
					</div>
				</SwiperSlide>
				<SwiperSlide className={s.swiper_slide_main}>
					<div className={s.swiper_slide_main_image}>
						<Image src={art_021_s} width={690} height={690} alt="ring" />
					</div>
				</SwiperSlide>
			</Swiper>

			<Swiper
				id="product_slider_thumbs"
				onSwiper={setThumbsSwiper}
				spaceBetween={15}
				freeMode={true}
				direction="vertical"
				slidesPerView={3}
				modules={[Thumbs, FreeMode, Navigation]}
				className={s.product_id_slider_thumbs}
			>
				<SwiperSlide className={s.swiper_slide_thumbs}>
					<div className={s.swiper_slide_thumbs_image}>
						<Image src={art_021_b} width={690} height={690} alt="ring" />
					</div>
				</SwiperSlide>
				<SwiperSlide className={s.swiper_slide_thumbs}>
					<div className={s.swiper_slide_thumbs_image}>
						<Image src={art_021_g} width={690} height={690} alt="ring" />
					</div>
				</SwiperSlide>
				<SwiperSlide className={s.swiper_slide_thumbs}>
					<div className={s.swiper_slide_thumbs_image}>
						<Image src={art_021_s} width={690} height={690} alt="ring" />
					</div>
				</SwiperSlide>
			</Swiper>
		</div >
	)
}

export default ProductIdSlider;
