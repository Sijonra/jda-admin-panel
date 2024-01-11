import React, { FC } from 'react';
import styles from './Regions.module.scss';
import classNames from 'classnames/bind';
import SVGArrowDownUp from '@/public/assets/common/arrowUpDown.svg';
import RegionTableItem from './RegionItem/RegionItem';
import { regionsData } from './regions.data';

const cx = classNames.bind(styles);

const Regions: FC = () => {
	return (
		<section className={cx('regions')}>
			<div className={cx('regions-left')}>
				<div className={cx('regions-heading')}>
					<div className={cx('regions-heading__title')}>
						<h4>Latest reviews</h4>
						<p>Payment received across all channels</p>
					</div>
				</div>
				<div className={cx('regions-table')}>
					<RegionTableItem
						isTableControl
						id={0}
						countryImg='COUNTRY'
						countryName=''
						users={{ value: 'USERS', percents: '' }}
						transactions={{ value: 'TRANSACTIONS', percents: '' }}
						revenue={{ value: 'REVENUE', percents: '' }}
						rate='CONV. RATE'
					/>
					{regionsData.map((item) => {
						return (
							<RegionTableItem
								key={item.id}
								id={item.id}
								isTableControl={false}
								countryImg={item.country.img}
								countryName={item.country.name}
								users={item.users}
								transactions={item.transactions}
								revenue={item.revenue}
								rate={item.rate}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Regions;
