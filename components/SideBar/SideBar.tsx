'use client';

import React, { FC } from 'react';
import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';
import useSidebar from '@/hooks/useSidebar';
import SideBarItem from './SideBarItem';
import SVG__HomeIcon from '@/public/assets/sideBarIcons/homeIcon.svg';

const cx = classNames.bind(styles);

const SideBar: FC = () => {
	const isSideBarActive = useSidebar((state) => state.isActive);
	console.log(isSideBarActive);

	return (
		<aside className={cx('sidebar', isSideBarActive ? 'sidebar--show' : '')}>
			<nav className={cx('sidebar-nav')}>
				<ul className={cx('sidebar-list')}>
					<li className={cx('sidebar-list__item')}>
						<SideBarItem
							title='Home'
							withArrow={true}
							icon={
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16px'
									height='16px'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'>
									<path d='M21.21 15.89A10 10 0 1 1 8 2.83'></path>
									<path d='M22 12A10 10 0 0 0 12 2v10z'></path>
								</svg>
							}
						/>
					</li>
					<li className={cx('sidebar-list__item')}>
						<SideBarItem
							title='Home'
							withArrow={true}
							icon={
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16px'
									height='16px'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'>
									<path d='M21.21 15.89A10 10 0 1 1 8 2.83'></path>
									<path d='M22 12A10 10 0 0 0 12 2v10z'></path>
								</svg>
							}
						/>
					</li>
				</ul>
			</nav>
			<div className={cx('sidebar-collapse')}>collapse</div>
		</aside>
	);
};

export default SideBar;
