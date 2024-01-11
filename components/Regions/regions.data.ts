import { StaticImageData } from 'next/image';

import IMGIndia from '@/public/assets/RegionsData/india.png';
import IMGChina from '@/public/assets/RegionsData/china.png';
import IMGKorea from '@/public/assets/RegionsData/south-korea.png';
import IMGUsa from '@/public/assets/RegionsData/usa.png';
import IMGVietnam from '@/public/assets/RegionsData/vietnam.png';

export interface IRegionsData {
	id: number;
	country: {
		img: StaticImageData;
		name: string;
	};
	users: {
		value: string;
		percents: string;
	};
	transactions: {
		value: string;
		percents: string;
	};
	revenue: {
		value: string;
		percents: string;
	};
	rate: string;
}

export const regionsData: IRegionsData[] = [
	{
		id: 1,
		country: {
			img: IMGIndia,
			name: 'India',
		},
		users: {
			value: '92896',
			percents: '(41.6%)',
		},
		transactions: {
			value: '67',
			percents: '(34.3%)',
		},
		revenue: {
			value: '$7560',
			percents: '(36.9%)',
		},
		rate: `14.01%`,
	},
];
