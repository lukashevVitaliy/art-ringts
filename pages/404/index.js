import Head from "next/head";
import Image from "next/image";

import s from "./404.module.scss";


const NotFoundPage = () => {
	return (
		<div className={s.not_fFound_page}>
			<Head>
				<title>Not Found Page</title>
			</Head>
			<div className={s.not_fFound_page_image}>
				<Image src="/assets/icons/404.svg" width={129} height={70} alt="icons 404" />
			</div>
			<p className={s.not_fFound_page_text}>
				Страница, которую вы ищете, устарела или не существует.
			</p>
			<button className="btn">НА ГЛАВНУЮ</button>
		</div>
	)
}

export default NotFoundPage;