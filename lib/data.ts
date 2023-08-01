import { ChatType, NavType, ProductListType } from '@/types'

export const navLinks: NavType[] = [
	{
		link: 'Dashboard',
	},
	{
		link: 'Orders',
	},
	{
		link: 'Customers',
	},
	{
		link: 'Inventory',
	},
	{
		link: 'Conversations',
	},
	{
		link: 'Settings',
	},
]

export const products: ProductListType[] = [
	{
		id: 1,
		name: 'iPhone 13',
		image: '/phone-1.png',
		price: '₦730,000.00 x 1',
		status: 'pending',
	},
	{
		id: 2,
		name: 'iPhone 13',
		image: '/phone-2.png',
		price: '₦730,000.00 x 1',
		status: 'completed',
	},
	{
		id: 3,
		name: 'iPhone 13',
		image: '/phone-1.png',
		price: '₦730,000.00 x 1',
		status: 'pending',
	},
	{
		id: 4,
		name: 'iPhone 13',
		image: '/phone-2.png',
		price: '₦730,000.00 x 1',
		status: 'completed',
	},
	{
		id: 5,
		name: 'iPhone 13',
		image: '/phone-2.png',
		price: '₦730,000.00 x 1',
		status: 'completed',
	},
	{
		id: 6,
		name: 'iPhone 13',
		image: '/phone-2.png',
		price: '₦730,000.00 x 1',
		status: 'completed',
	},
	{
		id: 7,
		name: 'iPhone 13',
		image: '/phone-2.png',
		price: '₦730,000.00 x 1',
		status: 'pending',
	},
	{
		id: 8,
		name: 'iPhone 13',
		image: '/phone-2.png',
		price: '₦730,000.00 x 1',
		status: 'pending',
	},
	{
		id: 9,
		name: 'iPhone 13',
		image: '/phone-2.png',
		price: '₦730,000.00 x 1',
		status: 'pending',
	},
]

export const chats: ChatType[] = [
	{
		id: 1,
		image: '/avatar-2.png',
		name: 'Jane Doe',
		chat: 'Hi, i want make enquiries about yo...',
		status: 'new',
		online: true,
		notifs: '',
	},
	{
		id: 2,
		image: '/avatar-3.png',
		name: 'Janet Adebayo',
		chat: 'Hi, i want make enquiries about yo...',
		status: 'new',
		online: true,
		notifs: '',
	},
	{
		id: 3,
		image: '/avatar-4.png',
		name: 'Kunle Adekunle',
		chat: 'Hi, i want make enquiries about yo...',
		status: 'new',
		online: false,
		notifs: '',
	},
	{
		id: 4,
		image: '/avatar-2.png',
		name: 'Jane Doe',
		chat: 'Hi, i want make enquiries about yo...',
		status: '',
		online: false,
		notifs: '',
	},
	{
		id: 5,
		image: '/avatar-3.png',
		name: 'Janet Adebayo',
		chat: 'Hi, i want make enquiries about yo...',
		status: '',
		online: false,
		notifs: '',
	},
	{
		id: 6,
		image: '/avatar-4.png',
		name: 'Kunle Adekunle',
		chat: 'Hi, i want make enquiries about yo...',
		status: '',
		online: true,
		notifs: '',
	},
]
