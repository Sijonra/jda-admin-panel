import style from './page.module.scss';
import classNames from 'classnames/bind';
import '../styles/themes.css';

const cx = classNames.bind(style);

export default function Home() {
	return (
		<main>
			<p className={cx('title')}>Phoenix Admin Panel</p>
		</main>
	);
}
