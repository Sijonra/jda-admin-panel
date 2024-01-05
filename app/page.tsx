import style from './page.module.scss';
import classNames from 'classnames/bind';
import '../styles/themes.css';
import Header from '@/components/Header/Header';

const cx = classNames.bind(style);

export default function Home() {
	return (
		<main>
			<Header />
		</main>
	);
}
