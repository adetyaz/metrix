import { BagIcon } from '../icons'

const OrdersCard = () => {
	return (
		<div className='card order-card'>
			<div className='card__top'>
				<div className='icon-wrapper accent'>
					<BagIcon />
				</div>
				<div>
					<span>This Week</span>
					<span>&gt;</span>
				</div>
			</div>
			<div className='card__bottom'>
				<div className='card__info'>
					<p className='card__label'>All Orders</p>
					<h5 className='card__unit'>450</h5>
				</div>
				<div className='card__info'>
					<p className='card__label'>Pending</p>
					<h5 className='card__unit'>4</h5>
				</div>
				<div className='card__info'>
					<p className='card__label'>Completed</p>
					<h5 className='card__unit'>455</h5>
				</div>
			</div>
		</div>
	)
}

export default OrdersCard
