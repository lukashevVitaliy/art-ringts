import Image from "next/image";

import s from "./work-examples.module.scss";


export const WorkExamples = () => {
	return (
		<div className={s.work_examples}>
			<div className={s.work_examples_image}>
				<Image src="/assets/image/rings/work-examples/ring.jpg" width={420} height={420} alt="work examples" />
			</div>
		</div>
	)
}