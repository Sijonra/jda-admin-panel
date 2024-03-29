import React, { FC } from 'react';
import styles from './Labels.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface ILabelActive {}

const LabelActive: FC<ILabelActive> = ({}) => {
	return (
		<span className={cx('label-active')}>
			<svg
				aria-hidden='true'
				focusable='false'
				data-prefix='fas'
				data-icon='circle'
				role='img'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 512 512'
				data-fa-i2svg=''>
				<path
					fill='currentColor'
					d='M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z'></path>
			</svg>
		</span>
	);
};

export default LabelActive;
