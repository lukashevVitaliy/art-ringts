import Head from "next/head";
import s from "./buyer-protection.module.scss";

const BuyerProtection = () => {
	return (
		<div className={s.buyer_protection}>
			<Head>
				<title>Buyer Protection</title>
			</Head>
			<div className="container">
				<h1 className={s.buyer_protection_title}>ГАРАНТИИ</h1>
				<p className={s.buyer_protection_desc}>
					Art-Rings предоставляет своим клиентам пожизненную гарантию на подлинность материалов и камней, из которых изготовлены наши ювелирные изделия.
					Все ювелирные изделия Art-Rings клеймированы в соответствии с требованиями Пробирной палаты Российской Федерации, камни прошли геммологическую экспертизу.<br />
					Гарантия на форму кольца, полировку, гальванические покрытия и закрепку камней до 0,01 Кт составляет 1 год.
				</p>
			</div>
		</div>
	)
}

export default BuyerProtection;
