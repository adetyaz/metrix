import { ChatBox, ChatList, Layout } from '@/components/ui'

const index = () => {
	return (
		<Layout>
			<div className='conversations'>
				<div>
					<h2>Conversations with Customers</h2>
					<button className='btn'>New Message</button>
				</div>
				<div className='conversations__chat-box'>
					<ChatList />
					<ChatBox />
				</div>
			</div>
		</Layout>
	)
}

export default index
