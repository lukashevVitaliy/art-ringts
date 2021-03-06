import Head from "next/head";
import Image from "next/image";

import s from "./about-wedding-rings.module.scss";


const AboutWeddingRings = () => {
	return (
		<div className={s.about_wedding_rings}>
			<Head>
				<title>About Wedding Rings</title>
			</Head>
			<div className="container">
				<div className={s.about_wedding_rings_wrap}>
					<div className={s.about_wedding_rings_left}>
						<h3 className={s.about_wedding_rings_title}>КАК ВЫБРАТЬ ОБРУЧАЛЬНЫЕ КОЛЬЦА?</h3>
						<div className={s.about_wedding_rings_desc}>
							<p>
								Выбрать кольца - очень ответственное дело. Они будут с вами всегда. Очень часто в повседневной жизни и для мужчины, и для женщины обручальное кольцо - единственное украшение на пальцах. И оно должно не только обозначать, что Вы уже нашли свою вторую половинку, но и украшать руку.
							</p>
							<p>
								Раньше обручальные кольца были доступны только в вариантах "бублик пошире" и "бублик поуже", при этом на гладкости семейной жизни гладкость обручального кольца никак не сказывается.
							</p>
							<p>
								В настоящее время есть всевозможные вариации обручальных колец: <span>ажурные</span>, <span>комбинированные</span>, с крутяшками, <span>с бриллиантами</span> и другими драгоценными камнями, с эмалью или чернением, с отпечатками пальцев...
							</p>
							<p>
								Все обручальные кольца в Art-Rings имеют дизайн, который близок к классике и не выйдет из моды, так что за актуальность Ваших колец можно не переживать.
							</p>
							<p>
								Для того, чтобы выбрать кольца, лучше всего прийти и померить их, оценив не только красоту, но и удобство, это возможно сделать <span>в нашем офисе</span>. Только специалист верно определит размер, потому что более 90% удобства кольца определяется правильно подобранным размером. Кольцо никогда не должно жать (например, летом или при физической нагрузке пальцы утолщаются из-за притока крови); но и не быть свободным до такой степени, чтобы однажды оно соскользнуло с пальца и потерялось.
							</p>
							<p>
								Длину пальцев подчёркнут широкие кольца, для недлинных пальцев лучше выбрать кольца поуже. Ажурные обручальные кольца кольца придают любому образу лёгкости, а бриллианты-роскоши. Не забывайте, что Art-Rings дарит в каждое обручальное кольцо <span>бриллиант абсолютно бесплатно!</span>
							</p>
							<p>
								Кольца с узорами, особенно если они подчёркнуты чернением, никогда не надоест рассматривать. Комбинированные обручальные кольца не только интересно смотрятся, их безусловный плюс ещё и в том, что они сочетаются с любыми украшениями.
							</p>
							<p>
								Если паре понравились разные кольца, то можно подобрать обручальные кольца разного дизайна, например, невесте-ажурное, а жениху-строгое классическое с бриллиантом.
							</p>
							<p>
								В Art-Rings на обручальные кольца можно нанести гравировку с инициалами, словами любви и любыми другими символами.
							</p>
						</div>
					</div>
					<div className={s.about_wedding_rings_image}>
						<Image src="/assets/image/rings/wedding/obruchalnie-koltsa.jpg" width={326} height={433} alt="wedding rings" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutWeddingRings