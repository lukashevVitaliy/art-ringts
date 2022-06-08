import Image from 'next/image';
import Link from 'next/link';

import s from "./diamond-gift.module.scss";


const DiamondGift = () => {
	return (
		<>
			<div className={s.diamond_gift}>
				<div className={s.diamond_gift_line}></div>
				<div className={s.diamond_gift_image}>
					<Link href="#">
						<a>
							<Image src="/assets/icons/diamond.svg" width={56} height={48} alt="icon diamond" />
						</a>
					</Link>
				</div>
				<div className={s.diamond_gift_line}></div>
			</div>
			<p className={s.diamond_gift_text}>Бриллиант в подарок</p>
		</>
	)
}

export default DiamondGift;
