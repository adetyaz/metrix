import {
	BagIcon,
	ChatIcon,
	FolderIcon,
	HomeIcon,
	SettingsIcon,
	UsersIcon,
} from '@/components/icons'

export const getIcons = (link: string) => {
	if (link === 'Dashboard') {
		return <HomeIcon />
	} else if (link === 'Orders') {
		return <BagIcon />
	} else if (link === 'Customers') {
		return <UsersIcon />
	} else if (link === 'Inventory') {
		return <FolderIcon />
	} else if (link === 'Conversations') {
		return <ChatIcon />
	} else if (link === 'Settings') {
		return <SettingsIcon />
	}
}
