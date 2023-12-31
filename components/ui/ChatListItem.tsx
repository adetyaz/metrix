import { ChatType } from '@/types'
import Image from 'next/image'

const ChatListItem = ({
	id,
	image,
	name,
	chat,
	status,
	online,
	notifs,
}: ChatType) => {
	return (
		<div className='chat-list-item' key={id}>
			<div>
				<Image src={image} alt={name} height={40} width={60} />
			</div>
			<div>
				<h5>{name}</h5>
				<p>{chat}</p>
			</div>
			<div className='chat-list-item__time'>
				<span>new</span>
				<span>12:55 am</span>
			</div>
		</div>
	)
}

export default ChatListItem
