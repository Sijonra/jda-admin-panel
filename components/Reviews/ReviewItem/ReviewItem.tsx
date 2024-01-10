import React, { FC } from 'react';
import styles from './ReviewItem.module.scss';
import classNames from 'classnames/bind';
import IMG1 from '@/public/assets/Reviews/1.png';
import Image from 'next/image';
import SVGStar from '@/public/assets/common/star.svg';
import SVGStarEmpty from '@/public/assets/common/starEmpty.svg';
import LabelApproved from '@/components/common/LabelApproved/LabelApproved';
import LabelPending from '@/components/common/LabelApproved/LabelPending';
import SVGPoints from '@/public/assets/Reviews/threepoints.svg';

const cx = classNames.bind(styles);

const ReviewItem: FC = () => {
	return (
		<div className={cx('review')}>
			<div className={cx('review-checkbox')}>
				<input type='checkbox' className={cx('review-checkbox__item')} />
			</div>
			<div className={cx('review__image')}>
				<Image src={IMG1} width={53} height={53} alt='review item' />
			</div>
			<p className={cx('review__title')}>
				Fitbit Sense Advanced Smartwatch with Tools fo...
			</p>
			<div className={cx('review-user')}>
				<div className={cx('review-user__avatar')}>R</div>
				<div className={cx('review-user__name')}>Richard Dawkins</div>
			</div>
			<div className={cx('review-stars')}>
				<div className={cx('review-stars__star--active', 'review-stars__star')}>
					<SVGStar />
				</div>
				<div className={cx('review-stars__star--active', 'review-stars__star')}>
					<SVGStar />
				</div>
				<div className={cx('review-stars__star--active', 'review-stars__star')}>
					<SVGStar />
				</div>
				<div className={cx('review-stars__star--active', 'review-stars__star')}>
					<SVGStar />
				</div>
				<div className={cx('review-stars__star--active', 'review-stars__star')}>
					<SVGStar />
				</div>
				{/* <div className={cx('review-stars__star--active', 'review-stars__star')}>
					<SVGStarEmpty />
				</div> */}
			</div>
			<p className={cx('review__text')}>
				<div>
					This Fitbit is fantastic! I was trying to be in better shape and
					needed some motivation, so I decided to treat myself to a new Fitbit.
				</div>
			</p>
			<div className={cx('review__label')}>
				<LabelApproved />
			</div>
			<div className={cx('review-time')}>
				<div className={cx('review-time__accept')}></div>
				<div className={cx('review-time__delete')}></div>
				<div className={cx('review-time__label')}>Just now</div>
				<div className={cx('review-time__button-points')}>
					<SVGPoints />{' '}
				</div>
			</div>
		</div>
	);
};

export default ReviewItem;
