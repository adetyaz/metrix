import { UsersIcon } from '../icons'

const CustomersCard = () => {
	return (
		<div className='card customer-card'>
			<div className='card__top'>
				<div className='icon-wrapper secondary'>
					<UsersIcon />
				</div>
				<div>
					<span>This Week</span>
					<span>&gt;</span>
				</div>
			</div>
			<div className='card__bottom'>
				<div className='card__info'>
					<p className='card__label'>Customers</p>
					<h5 className='card__unit'>1,250 </h5>
				</div>

				<div className='card__info'>
					<p className='card__label'>Active</p>
					<h5 className='card__unit'>1,180</h5>
				</div>
			</div>
		</div>
	)
}

export default CustomersCard
