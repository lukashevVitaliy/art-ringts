import HeaderLevel_1 from "./header-level_1/header-level_1";
import HeaderLevel_2 from "./header-level_2/header-level_2";
import HeaderLevel_3 from "./header-level_3/header-level_3";
import HeaderLevel_4 from "./header-level_4/header-level_4";

import s from "./Header.module.scss";


const Header = () => {
	return (
		<header className={s.header}>
			<HeaderLevel_1 />
			<HeaderLevel_2 />
			<HeaderLevel_3 />
			<HeaderLevel_4 />
		</header>
	)
}

export default Header;