import style from './page.module.scss';
import classNames from 'classnames/bind';
import '../styles/themes.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const cx = classNames.bind(style);

export default function Home() {
	return (
		<main className={cx('main')}>
			<Header />
			<Footer />
		</main>
	);
}
