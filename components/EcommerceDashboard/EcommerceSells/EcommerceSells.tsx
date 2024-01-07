'use client';

import React, { FC } from 'react';
import styles from './EcommerceSells.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const EcommerceSells: FC = () => {
	return (
		<div className={cx('ecommerce-sells')}>
			<div className={cx('ecommerce-sells__title')}></div>
		</div>
	);
};

export default EcommerceSells;
