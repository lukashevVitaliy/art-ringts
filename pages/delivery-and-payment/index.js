import Head from "next/head";

import s from "./delivery-and-payment.module.scss";

const DeliveryAndPayment = () => {
	return (
		<div className={s.delivery_and_payment}>
			<Head>
				<title>Delivery And Payment</title>
			</Head>
			<div className="container">
				<h1 className={s.delivery_and_payment_title}>ДОСТАВКА И ОПЛАТА</h1>
				<p className={s.delivery_and_payment_desc}>
					Все ювелирные изделия Art-Rings изготовляются после получения компанией информации по следующим параметрам: материал изделия (изделий), цвет изделия (изделий), размер изделия (изделий), материал вставок, а также после осуществления предоплаты в размере 50% от стоимости заказа.<br />
					Доставка в регионы России (кроме Москвы) осуществляется транспортной компанией согласно правил транспортировки ювелирных изделий и производится <span>бесплатно</span>.
				</p>
			</div>
		</div>
	)
}

export default DeliveryAndPayment;
