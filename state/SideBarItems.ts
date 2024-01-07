import { TItem } from '@/types/types';
import { create } from 'zustand';
import SVG__HomeIcon from '@/public/assets/sideBarIcons/homeIcon.svg';
import SVG__Cart from '@/public/assets/sideBarIcons/cart.svg';
import SVG__Phone from '@/public/assets/sideBarIcons/phone.svg';
import SVG__Board from '@/public/assets/sideBarIcons/board.svg';
import SVG__Chat from '@/public/assets/sideBarIcons/chat.svg';
import SVG__Email from '@/public/assets/sideBarIcons/mail.svg';
import SVG__Events from '@/public/assets/sideBarIcons/events.svg';
import SVG__Kanban from '@/public/assets/sideBarIcons/canban.svg';
import SVG__Social from '@/public/assets/sideBarIcons/social.svg';
import SVG__Calendar from '@/public/assets/sideBarIcons/calendar.svg';

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
		{
			id: 1,
			arrow: true,
			title: 'CRM',
			labelActive: true,
			svg: SVG__Phone,
			subItems: [
				{
					id: 0,
					title: 'Analytics',
					arrow: false,
				},
				{
					id: 1,
					title: 'Deals',
					arrow: false,
					labelNew: true,
				},
				{
					id: 2,
					title: 'Deal detail',
					arrow: false,
				},
				{
					id: 3,
					title: 'Leads',
					arrow: false,
				},
				{
					id: 4,
					title: 'Lead details',
					arrow: false,
				},
				{
					id: 5,
					title: 'Reports',
					arrow: false,
				},
				{
					id: 6,
					title: 'Report details',
					arrow: false,
					labelNew: true,
				},
				{
					id: 7,
					title: 'Add contact',
					arrow: false,
				},
			],
		},
		{
			id: 2,
			arrow: true,
			title: 'Project management',
			svg: SVG__Board,
			subItems: [
				{
					id: 0,
					title: 'Create new',
					arrow: false,
				},
				{
					id: 1,
					title: 'Project list',
					arrow: false,
				},
				{
					id: 2,
					title: 'Project card',
					arrow: false,
				},
				{
					id: 3,
					title: 'Project board',
					arrow: false,
				},
				{
					id: 4,
					title: 'Todo list',
					arrow: false,
				},
				{
					id: 5,
					title: 'Project details',
					arrow: false,
				},
			],
		},
		{
			id: 3,
			arrow: false,
			title: 'Chat',
			svg: SVG__Chat,
		},
		{
			id: 4,
			arrow: true,
			title: 'Email',
			svg: SVG__Email,
			subItems: [
				{
					id: 0,
					title: 'Inbox',
					arrow: false,
				},
				{
					id: 1,
					title: 'Email details',
					arrow: false,
				},
				{
					id: 2,
					title: 'Compose',
					arrow: false,
				},
			],
		},
		{
			id: 5,
			arrow: true,
			title: 'Events',
			svg: SVG__Events,
			subItems: [
				{
					id: 0,
					title: 'Create event',
					arrow: false,
				},
				{
					id: 1,
					title: 'Event detail',
					arrow: false,
				},
			],
		},
		{
			id: 6,
			arrow: true,
			title: 'Kanban',
			svg: SVG__Kanban,
			labelActive: true,
			subItems: [
				{
					id: 0,
					title: 'Kanban',
					arrow: false,
				},
				{
					id: 1,
					title: 'Boards',
					labelNew: true,
					arrow: false,
				},
				{
					id: 2,
					title: 'Create board',
					arrow: false,
				},
			],
		},
		{
			id: 7,
			arrow: true,
			title: 'Social',
			svg: SVG__Social,
			subItems: [
				{
					id: 0,
					title: 'Profile',
					arrow: false,
				},
				{
					id: 1,
					title: 'Settings',
					arrow: false,
				},
			],
		},
		{
			id: 8,
			arrow: false,
			title: 'Calendar',
			svg: SVG__Calendar,
		},
	],
}));

export default sideBarItems;
