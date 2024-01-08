'use client';

import React, { FC } from 'react';
import styles from './EcommerceSells.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const EcommerceSells: FC = () => {
	return (
		<div className={cx('ecommerce-sells')}>
			<div className={cx('ecommerce-business')}>
				<h2 className={cx('ecommerce-business__title')}>Ecommerce Dashboard</h2>
				<h4 className={cx('ecommerce-business__subtitle')}>
					Here’s what’s going on at your business right now
				</h4>
				<ul className={cx('business-list')}>
					<li>
						<div className={cx('business-list__icons')}>
							<svg
								className={cx('folder')}
								data-fa-transform='down-4 rotate--10 left-4'
								aria-hidden='true'
								focusable='false'
								data-prefix='fas'
								data-icon='square'
								role='img'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 448 512'
								data-fa-i2svg=''>
								<g transform='translate(224 256)'>
									<g transform='translate(-128, 128)  scale(1, 1)  rotate(-10 0 0)'>
										<path
											fill='currentColor'
											d='M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96z'
											transform='translate(-224 -256)'></path>
									</g>
								</g>
							</svg>
							<svg
								className={cx('circle')}
								data-fa-transform='up-4 right-3 grow-2'
								aria-hidden='true'
								focusable='false'
								data-prefix='fas'
								data-icon='circle'
								role='img'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 512 512'
								data-fa-i2svg=''>
								<g transform='translate(256 256)'>
									<g transform='translate(96, -128)  scale(1.125, 1.125)  rotate(0 0 0)'>
										<path
											fill='currentColor'
											d='M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z'
											transform='translate(-256 -256)'></path>
									</g>
								</g>
							</svg>
						</div>
						<div>
							<h5 className={cx('business-list__title')}>57 new orders</h5>
							<p className={cx('business-list__subtitle')}>
								Awating processing
							</p>
						</div>
					</li>
					<li>
						<div className={cx('business-list__icons')}>
							<svg
								className={cx('folder')}
								data-fa-transform='down-4 rotate--10 left-4'
								aria-hidden='true'
								focusable='false'
								data-prefix='fas'
								data-icon='square'
								role='img'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 448 512'
								data-fa-i2svg=''>
								<g transform='translate(224 256)'>
									<g transform='translate(-128, 128)  scale(1, 1)  rotate(-10 0 0)'>
										<path
											fill='currentColor'
											d='M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96z'
											transform='translate(-224 -256)'></path>
									</g>
								</g>
							</svg>
							<svg
								className={cx('circle')}
								data-fa-transform='up-4 right-3 grow-2'
								aria-hidden='true'
								focusable='false'
								data-prefix='fas'
								data-icon='circle'
								role='img'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 512 512'
								data-fa-i2svg=''>
								<g transform='translate(256 256)'>
									<g transform='translate(96, -128)  scale(1.125, 1.125)  rotate(0 0 0)'>
										<path
											fill='currentColor'
											d='M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z'
											transform='translate(-256 -256)'></path>
									</g>
								</g>
							</svg>
						</div>
						<div>
							<h5 className={cx('business-list__title')}>5 orders</h5>
							<p className={cx('business-list__subtitle')}>On hold</p>
						</div>
					</li>
					<li>
						<div className={cx('business-list__icons')}>
							<svg
								className={cx('folder')}
								data-fa-transform='down-4 rotate--10 left-4'
								aria-hidden='true'
								focusable='false'
								data-prefix='fas'
								data-icon='square'
								role='img'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 448 512'
								data-fa-i2svg=''>
								<g transform='translate(224 256)'>
									<g transform='translate(-128, 128)  scale(1, 1)  rotate(-10 0 0)'>
										<path
											fill='currentColor'
											d='M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96z'
											transform='translate(-224 -256)'></path>
									</g>
								</g>
							</svg>
							<svg
								className={cx('circle')}
								data-fa-transform='up-4 right-3 grow-2'
								aria-hidden='true'
								focusable='false'
								data-prefix='fas'
								data-icon='circle'
								role='img'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 512 512'
								data-fa-i2svg=''>
								<g transform='translate(256 256)'>
									<g transform='translate(96, -128)  scale(1.125, 1.125)  rotate(0 0 0)'>
										<path
											fill='currentColor'
											d='M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z'
											transform='translate(-256 -256)'></path>
									</g>
								</g>
							</svg>
						</div>
						<div>
							<h5 className={cx('business-list__title')}>15 products</h5>
							<p className={cx('business-list__subtitle')}>Out of stock</p>
						</div>
					</li>
				</ul>
			</div>
			<div className={cx('sells')}>
				<div className={cx('sells-heading')}>
					<div className={cx('sells-heading__text')}>
						<h2 className={cx('ecommerce-business__title', 'sells__title')}>
							Total sells
						</h2>
						<h4 className={cx('ecommerce-business__subtitle')}>
							Payment received across all channels
						</h4>
					</div>
					<select name='' id='' className={cx('sells-heading__select')}>
						<option value='Mar 1 - 31, 2022'>Mar 1 - 31, 2022</option>
						<option value='April 1 - 30, 2022'>April 1 - 30, 2022</option>
						<option value='May 1 - 31, 2022'>May 1 - 31, 2022</option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default EcommerceSells;
