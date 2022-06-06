import Link from "next/link";
import Image from "next/image";

import s from "./catalog.module.scss";


const Catalog = () => {
	return (
		<div className={s.catalog}>
			<div className="container">
				<h1 className={s.catalog_title}>КАТАЛОГ</h1>
				<div className={s.catalog_items}>
					<div className={s.catalog_item}>
						<Link href="#">
							<a>
								<div className={s.catalog_item_image}>
									<Image src="/assets/image/home/1.jpg" width={400} height={300} alt="ПОМОЛВОЧНЫЕ КОЛЬЦА" />
								</div>
								<p className={s.catalog_item_title}>ПОМОЛВОЧНЫЕ КОЛЬЦА</p>
							</a>
						</Link>
					</div>
					<div className={s.catalog_item}>
						<Link href="#">
							<a>
								<div className={s.catalog_item_image}>
									<Image src="/assets/image/home/2.jpg" width={400} height={300} alt="ОБРУЧАЛЬНЫЕ КОЛЬЦА" />
								</div>
								<p className={s.catalog_item_title}>ОБРУЧАЛЬНЫЕ КОЛЬЦА</p>
							</a>
						</Link>
					</div>
					<div className={s.catalog_item}>
						<Link href="#">
							<a>
								<div className={s.catalog_item_image}>
									<Image src="/assets/image/home/3.jpg" width={400} height={300} alt="НА ЗАКАЗ" />
								</div>
								<p className={s.catalog_item_title}>НА ЗАКАЗ</p>
							</a>
						</Link>
					</div>
				</div>
				<div className={s.catalog_desc}>
					<p>В нашей компании «Art-Rings» вы сможете заказать обручальные кольца для себя и своих близких. А благодаря наличию в мастерской профессионального оборудования и качественных материалов, у наших ювелиров есть все необходимое, чтобы воплотить любую вашу мечту.</p>
					<p>Мы очень надеемся, что в нашем каталоге обручальных колец вы найдете именно то, что искали. Мы постарались сделать его максимально удобным для вас. Зная собственный размер, вы без труда сможете узнать конечную цену, понравившегося кольца.</p>
					<p>Обручальные кольца на заказ – оригинальное решение для тех, кто любит все эксклюзивное. Для этого вы можете воспользоваться нашей услугой «Обручальные кольца в Москве». Вы можете сделать заказ обручальных колец по каталогу в нашем ювелирном салоне в городе Москва. Так же в нашем каталоге присутствуют обручальные кольца из золота , белого золота и серебра которые помогут реализовать любые пожелания и воплотить самые смелые фантазии. Подарите друг другу прекрасные уникальные кольца и получите приятные подарки и скидки!</p>
				</div>
			</div>
		</div>
	)
}

export default Catalog; 