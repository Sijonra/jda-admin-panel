import { TItem } from '@/types/types';
import { create } from 'zustand';
import SVG__HomeIcon from '@/public/assets/sideBarIcons/homeIcon.svg';
import SVG__Cart from '@/public/assets/sideBarIcons/cart.svg';

interface ISideBarItems {
	itemsHome: TItem[];
	itemsApps: TItem[];
	// itemsPages: TItem[];
	// itemsModules: TItem[];
	// itemsDocumentation: TItem[];
}

const sideBarItems = create<ISideBarItems>((set) => ({
	itemsHome: [
		{
			id: 0,
			arrow: true,
			title: 'Home',
			svg: SVG__HomeIcon,
			subItems: [
				{
					id: 0,
					title: 'E commerce',
					arrow: false,
				},
				{
					id: 1,
					title: 'Project manager',
					arrow: false,
				},
				{
					id: 2,
					title: 'CRM',
					arrow: false,
					labelNew: true,
				},
				{
					id: 3,
					title: 'Social feed',
					arrow: false,
				},
			],
		},
	],
	itemsApps: [
		{
			id: 0,
			arrow: true,
			title: 'E Commerce',
			svg: SVG__Cart,
			subItems: [
				{
					id: 0,
					title: 'Admin',
					arrow: true,
					content: [
						'Add product',
						'Products',
						'Customers',
						'Customers details',
						'Orders',
						'Order details',
						'Refund',
					],
				},
				{
					id: 1,
					title: 'Customer',
					arrow: true,
					content: [
						'Homepage',
						'Product details',
						'Product filter',
						'Cart',
						'Checkout',
						'Shipping info',
						'Profile',
						'Favorite stores',
						'Wishlist',
						'Order tracking',
						'Invoice',
					],
				},
			],
		},
	],
}));

export default sideBarItems;
