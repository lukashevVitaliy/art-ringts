import Link from "next/link";
import Image from "next/image";

import s from "./card.module.scss";


export const Card = () => {
	return (
		<Link href="#" >
			<a>
				<div className={s.card}>
					<div className={s.card_wrap}>
						<div className={s.card_top}>
							<span className={s.card_top_art}>Арт. 019</span>
							<span className={s.card_top_rating}>★★★★★</span>
						</div>
						<div className={s.card_image}>
							<Image src="/assets/image/novelties/art.063.jpg" width={280} height={280} alt="jewel" />
						</div>
						<div className={s.card_bottom}>
							<span className={s.card_bottom_like}>
								<Image src="/assets/icons/like.svg" width={25} height={25} alt="like" />
							</span>
							<span className={s.card_bottom_price}>59 600 ₽</span>
						</div>
					</div>
				</div>
			</a>
		</Link>
	)
}