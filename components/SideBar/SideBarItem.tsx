'use client';

import React, { FC, useState } from 'react';
import styles from './SideBarItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface ISideBarItem {
	title: string;
	withArrow: boolean;
	icon: React.ReactElement;
}

const SideBarItem: FC<ISideBarItem> = ({ title, withArrow, icon }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleActive = () => setIsOpen(!isOpen);

	return (
		<>
			<div
				onClick={handleActive}
				className={cx('sidebar-item', isOpen ? 'sidebar-item--active' : '')}>
				{withArrow && (
					<svg
						aria-hidden='true'
						focusable='false'
						data-prefix='fas'
						data-icon='caret-right'
						role='img'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 256 512'
						data-fa-i2svg=''
						className={cx('sidebar-item__arrow')}>
						<path
							fill='currentColor'
							d='M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z'></path>
					</svg>
				)}
				<div className={cx('sidebar-item__icon')}>{icon}</div>
				<p className={cx('sidebar-item__title')}>{title}</p>
			</div>
			<div
				className={cx(
					'sidebar-item__content',
					'sidebar-item-content',
					isOpen ? 'sidebar-item__content--active' : ''
				)}>
				<div className={cx('sidebar-item-content__item')}>
					<span>123</span>
				</div>
				<div className={cx('sidebar-item-content__item')}>
					<span>123</span>
				</div>
				<div className={cx('sidebar-item-content__item')}>
					<span>123</span>
				</div>
			</div>
		</>
	);
};

export default SideBarItem;
