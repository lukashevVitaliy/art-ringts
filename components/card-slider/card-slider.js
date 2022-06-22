import Link from "next/link";
import Image from "next/image";
import { Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import art021_s from "/public/assets/image/rings/wedding/021-s.jpg";
import art021_g from "/public/assets/image/rings/wedding/021-g.jpg";
import art021_b from "/public/assets/image/rings/wedding/021-b.jpg";
import s from "./card-slider.module.scss";

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

export const CardSlider = ({ url }) => {
	return (
		<Link href={url} >
			<a>
				<div className={s.card_slider}>
					<div className={s.card_slider_wrap}>
						<div className={s.card_slider_top}>
							<span className={s.card_slider_top_art}>Арт. 019</span>
							<span className={s.card_slider_top_rating}>★★★★★</span>
						</div>
						<Swiper
							modules={[Autoplay, EffectFade]}
							spaceBetween={0}
							slidesPerView={1}
							autoplay={true}
							speed={600}
							effect="fade"
							loop={true}
							className="swiper-image"
						>
							<SwiperSlide>
								<div className={s.card_slider_image}>
									<Image src={art021_s} width={280} height={280} alt="jewel" />
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className={s.card_slider_image}>
									<Image src={art021_g} width={280} height={280} alt="jewel" />
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className={s.card_slider_image}>
									<Image src={art021_b} width={280} height={280} alt="jewel" />
								</div>
							</SwiperSlide>
						</Swiper>
						<div className={s.card_slider_bottom}>
							<span className={s.card_slider_bottom_like}>
								<Image src="/assets/icons/like.svg" width={25} height={25} alt="like" />
							</span>
							<span className={s.card_slider_bottom_price}>59 600 ₽</span>
						</div>
					</div>
				</div>
			</a>
		</Link>

	)
}