import Image from "next/image";
import Link from "next/link";

import s from "./social-links.module.scss";


const SocialLinks = () => {
	return (
		<div className={s.social_links}>
			<Link href="https://www.facebook.com" className={s.social_links_image}>
				<a>
					<Image src="/assets/icons/social/fb.svg" width={35} height={35} alt="Facebook" />
				</a>
			</Link>
			<Link href="https://vk.com" className={s.social_links_image}>
				<a>
					<Image src="/assets/icons/social/vk.svg" width={35} height={35} alt="vk" />
				</a>
			</Link>
			<Link href="https://www.whatsapp.com" className={s.social_links_image}>
				<a>
					<Image src="/assets/icons/social/wa.svg" width={35} height={35} alt="WhatsApp" />
				</a>
			</Link>
			<Link href="https://www.instagram.com" className={s.social_links_image}>
				<a>
					<Image src="/assets/icons/social/insta.svg" width={35} height={35} alt="Instagram" />
				</a>
			</Link>
			<Link href="https://web.telegram.org" className={s.social_links_image}>
				<a>
					<Image src="/assets/icons/social/tg.svg" width={35} height={35} alt="Telegram" />
				</a>
			</Link>
		</div>
	)
}

export default SocialLinks;
