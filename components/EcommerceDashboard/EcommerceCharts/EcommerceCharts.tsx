'use client';

import React, { FC } from 'react';
import styles from './EcommerceCharts.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const EcommerceCharts: FC = () => {
	return <div className={cx('eccommerce-charts')}>Ecommerce Charts</div>;
};

export default EcommerceCharts;
