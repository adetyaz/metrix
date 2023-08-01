import { PieIcon } from '../icons'

const SalesCard = () => {
	return (
		<div className='card sales-card'>
			<div className='card__top'>
				<div className='icon-wrapper accent'>
					<PieIcon />
				</div>
				<div>
					<span>This Week</span>
					<span>&gt;</span>
				</div>
			</div>
			<div className='card__bottom'>
				<div className='card__info'>
					<p className='card__label'>Sales</p>
					<h5 className='card__unit'>₦4,000,000.00</h5>
				</div>

				<div className='card__info'>
					<p className='card__label'>Volume</p>
					<h5 className='card__unit'>450</h5>
				</div>
			</div>
		</div>
	)
}

export default SalesCard
