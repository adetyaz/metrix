import { chats } from '@/lib/data'
import { ChatListItem } from '.'
import { SearchIcon } from '../icons'

const ChatList = () => {
	return (
		<div className='card chat-list'>
			<form>
				<span className='chat-list__search-icon'>
					<SearchIcon />
				</span>
				<input
					type='text'
					placeholder='Search...'
					className='chat-list__search-input'
				/>
			</form>

			<div>
				{chats.map((chat) => (
					<ChatListItem
						key={chat.id}
						id={chat.id}
						name={chat.name}
						image={chat.image}
						chat={chat.chat}
						status={chat.status}
						notifs={chat.notifs}
						online={chat.online}
					/>
				))}
			</div>
		</div>
	)
}

export default ChatList
