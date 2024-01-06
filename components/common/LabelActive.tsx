import React, { FC } from 'react';
import styles from './Labels.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface ILabelActive {}

const LabelActive: FC<ILabelActive> = ({}) => {
	return <span className={cx('label-active')}></span>;
};

export default LabelActive;
