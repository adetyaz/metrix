import {
	BagIcon,
	ChatIcon,
	FolderIcon,
	HomeIcon,
	SettingsIcon,
	UsersIcon,
} from '@/components/icons'

export const getIcons = (link: string) => {
	if (link === 'dashboard') {
		return <HomeIcon />
	} else if (link === 'orders') {
		return <BagIcon />
	} else if (link === 'customers') {
		return <UsersIcon />
	} else if (link === 'inventory') {
		return <FolderIcon />
	} else if (link === 'conversations') {
		return <ChatIcon />
	} else if (link === 'settings') {
		return <SettingsIcon />
	}
}
