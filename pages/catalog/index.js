import Link from "next/link";

import WeddingRings from "./wedding-rings/wedding-rings";

import s from "./index.module.scss";

const Catalog = () => {
	return (
		<div className={s.catalog}>
			<div className="container">

				<ul className={s.breadcrumbs_list}>
					<li className={s.breadcrumbs_item}>
						<Link href="/"><a>Главная</a></Link>
					</li>
					<li className={s.breadcrumbs_item}>
						<Link href="/catalog"><a>Каталог</a></Link>
					</li>
				</ul>

				<WeddingRings />
			</div>
		</div>

	)
}

export default Catalog;