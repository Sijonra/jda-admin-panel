import React, { FC } from 'react';
import styles from './Labels.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface ILabelNew {}

const LabelNew: FC<ILabelNew> = ({}) => {
	return <span className={cx('label-new')}>new</span>;
};

export default LabelNew;
