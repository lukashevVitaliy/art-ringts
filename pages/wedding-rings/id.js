import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import s from "./id.module.scss";


const WeddingRing = () => {
	return (
		<div className={s.wedding_rings}>
			<Head>
				<title>Wedding Ring</title>
			</Head>
			<div className="container">
				<ul className="breadcrumbs_list">
					<li className="breadcrumbs_item">
						<Link href="/"><a>Главная</a></Link>
					</li>
					<li className="breadcrumbs_item">
						<Link href="/wedding-rings"><a>Обручальные кольца</a></Link>
					</li>
				</ul>
				Wedding Ring
			</div>
		</div>
	)
}

export default WeddingRing