'use client';

import styles from './Reviews.module.scss';
import React from 'react';
import classNames from 'classnames/bind';
import SVGPoints from '@/public/assets/Reviews/threepoints.svg';
import SVGSearch from '@/public/assets/common/search.svg';

const cx = classNames.bind(styles);

const Reviews = () => {
	return (
		<section className={cx('reviews')}>
			<div className={cx('reviews-heading')}>
				<div className={cx('reviews-heading__title')}>
					<h4>Latest reviews</h4>
					<p>Payment received across all channels</p>
				</div>
				<div className={cx('reviews-heading-controls')}>
					<div className={cx('reviews-heading__search')}>
						<input type='text' placeholder='Search' />
						<SVGSearch />
					</div>
					<button
						className={cx(
							'reviews-heading__button',
							'reviews-heading__button--all'
						)}>
						All products
					</button>
					<button
						className={cx(
							'reviews-heading__button',
							'reviews-heading__button--more'
						)}>
						<SVGPoints />
					</button>
				</div>
			</div>
		</section>
	);
};

export default Reviews;
