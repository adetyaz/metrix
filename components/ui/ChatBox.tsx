import Image from 'next/image'
import { BagIcon } from '../icons'

const ChatBox = () => {
	return (
		<div className='card chat-box'>
			<div className='card__top'>
				<div className='chat-box__user'>
					<Image src='/avatar-1.png' alt='user' height={40} width={40} />
					<div>
						<p>Jane doe</p>
						<p>online</p>
					</div>
				</div>
				<div className='chat-box__details'>
					<div>new customer</div>
					<div>
						<p>View Profile</p>
						<div>
							<BagIcon />
							<p>0 orders</p>
						</div>
					</div>
				</div>
			</div>
			<section className='chat-box__messages'>
				<div className='chat-box__time'>12 August 2022</div>
				<div className='chat-box__shared'>
					<div>
						<Image src='/iphone-1.png' alt='phone' />
						<div>
							<p>Iphone 13</p>
							<p>₦730,000.00</p>
						</div>
					</div>
					<p>12 In Stock</p>
				</div>
				<div className='chat-box__chat chat-box__chat--received'>
					<div>
						<p>Hello, I want to make enquiries about your product</p>
					</div>
					<p>12:55 am</p>
				</div>

				<div className='chat-box__chat chat-box__chat--sent'>
					<div>
						<p>Hello Janet, thank you for reaching out</p>
					</div>
					<p>
						<span>12:57 am</span>
						<span>&gt;</span>
					</p>
				</div>
			</section>
		</div>
	)
}

export default ChatBox