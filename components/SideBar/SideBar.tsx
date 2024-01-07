'use client';

import React, { FC } from 'react';
import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';
import useSidebar from '@/hooks/useSidebar';
import SideBarItem from './SideBarItem';
import SVG__HomeIcon from '@/public/assets/sideBarIcons/homeIcon.svg';
import sideBarItems from '@/state/SideBarItems';

const cx = classNames.bind(styles);

const SideBar: FC = () => {
	const itemsHome = sideBarItems((state) => state.itemsHome);
	const itemsApp = sideBarItems((state) => state.itemsApps);
	const isSideBarActive = useSidebar((state) => state.isActive);

	return (
		<aside className={cx('sidebar', isSideBarActive ? 'sidebar--show' : '')}>
			<nav className={cx('sidebar-nav')}>
				<ul className={cx('sidebar-list', 'sidebar__list--home')}>
					{itemsHome.map((item) => {
						return (
							<li key={item.id} className={cx('sidebar-list__item')}>
								<SideBarItem
									title={item.title}
									subItems={item.subItems}
									withArrow={item.arrow}
									icon={item.svg}
								/>
							</li>
						);
					})}
				</ul>
				<ul className={cx('sidebar-list', 'sidebar__list--apps')}>
					<span className={cx('sidebar-list__label')}>Apps</span>
					{itemsApp.map((item) => {
						return (
							<li key={item.id} className={cx('sidebar-list__item')}>
								<SideBarItem
									title={item.title}
									subItems={item.subItems}
									withArrow={item.arrow}
									icon={item.svg}
									labelNew={item.labelNew}
									labelActive={item.labelActive}
								/>
							</li>
						);
					})}
				</ul>
			</nav>
			<div className={cx('sidebar-collapse')}>collapse</div>
		</aside>
	);
};

export default SideBar;
