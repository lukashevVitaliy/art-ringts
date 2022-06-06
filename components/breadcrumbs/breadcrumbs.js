import Link from "next/link";

import s from "./breadcrumbs.module.scss";


const Breadcrumbs = () => {

	const items = [];

	return (
		<div className={s.breadcrumbs}>
			<ul className={s.breadcrumbs_list}>
				<li className={s.breadcrumbs_item}>
					<Link href="/"><a>Главная</a></Link>
				</li>
				<li className={s.breadcrumbs_item}>
					<Link href="/catalog"><a>Каталог</a></Link>
				</li>
			</ul>
		</div>
	)
}

export default Breadcrumbs;