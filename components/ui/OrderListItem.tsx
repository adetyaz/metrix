import { ProductListType } from '@/types'
import Image from 'next/image'

const OrderListItem = ({ id, name, image, price, status }: ProductListType) => {
	return (
		<div className='order-list' key={id}>
			<div className='order-list__details'>
				<Image src={image} alt={name} height={50} width={50} />
				<div>
					<p>{name}</p>
					<p>{price}</p>
				</div>
			</div>
			<div className='order-list__status'>
				<span>12 Sept 2022</span>
				<span
					className={
						status === 'completed'
							? 'order-list__status--completed'
							: 'order-list__status--pending'
					}
				>
					{status}
				</span>
			</div>
		</div>
	)
}

export default OrderListItem
