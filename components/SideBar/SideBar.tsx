'use client';

import React, { FC } from 'react';
import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';
import useSidebar from '@/hooks/useSidebar';

const cx = classNames.bind(styles);

const SideBar: FC = () => {
	const isSideBarActive = useSidebar((state) => state.isActive);
	console.log(isSideBarActive);

	return (
		<aside className={cx('sidebar', isSideBarActive ? 'sidebar--show' : '')}>
			<nav className={cx('sidebar-nav')}>nav</nav>
			<div className={cx('sidebar-collapse')}>collapse</div>
		</aside>
	);
};

export default SideBar;
