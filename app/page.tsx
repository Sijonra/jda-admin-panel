import style from './page.module.scss';
import classNames from 'classnames';
import '../styles/themes.css';

const cx = classNames.bind(style);

export default function Home() {
	return (
		<main>
			<p className={style.title}>Hello World</p>
		</main>
	);
}
