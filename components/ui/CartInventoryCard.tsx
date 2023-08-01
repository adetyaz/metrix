import { CartIcon } from '../icons'

const CartInventoryCard = () => {
	return (
		<div className='card cart-inventory-card'>
			<div className='card__top'>
				<div className='icon-wrapper secondary'>
					<CartIcon />
				</div>
				<div>
					<span>This Week</span>
					<span>&gt;</span>
				</div>
			</div>
			<div className='card__bottom'>
				<div className='card__info'>
					<p className='card__label'>Abandoned Cart</p>
					<h5 className='card__unit'>20% </h5>
				</div>

				<div className='card__info'>
					<p className='card__label'>Customers</p>
					<h5 className='card__unit'>30</h5>
				</div>
			</div>
		</div>
	)
}

export default CartInventoryCard
