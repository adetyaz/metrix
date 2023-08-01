import { FolderIcon } from '../icons'

const ProductInventoryCard = () => {
	return (
		<div className='card product-inventory-card'>
			<div className='card__top'>
				<div className='icon-wrapper accent'>
					<FolderIcon />
				</div>
			</div>
			<div className='card__bottom'>
				<div className='card__info'>
					<p className='card__label'>All Products</p>
					<h5 className='card__unit'>45</h5>
				</div>

				<div className='card__info'>
					<p className='card__label'>Active</p>
					<h5 className='card__unit'>32</h5>
				</div>
			</div>
		</div>
	)
}

export default ProductInventoryCard
