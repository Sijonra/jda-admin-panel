import style from './page.module.scss';
import classNames from 'classnames/bind';
import '../styles/themes.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import SideBar from '@/components/SideBar/SideBar';
import Ecommerce from '@/components/EcommerceDashboard/Ecommerce';

const cx = classNames.bind(style);

export default function Home() {
	return (
		<div className={cx('page')}>
			<Header />
			<SideBar />
			<main className={cx('main')}>
				<Ecommerce />
			</main>
			<Footer />
		</div>
	);
}
