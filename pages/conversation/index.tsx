import { ChatBox, ChatList, Navbar, Sidebar } from '@/components/ui'
import Head from 'next/head'

const index = () => {
	return (
		<>
			<Head>
				<title>Metrix - Conversations</title>
				<meta name='description' content='User Messages' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/logo.png' />
			</Head>

			<main>
				<Sidebar />
				<section>
					<Navbar />
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
				</section>
			</main>
		</>
	)
}

export default index
