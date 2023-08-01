import { products } from '@/lib/data'
import { OrderListItem } from '.'

const RecentOrderCard = () => {
	return (
		<div className='card recent-order-card'>
			<h3>Recent Orders</h3>

			{products.map((product) => (
				<OrderListItem
					id={product.id}
					name={product.name}
					image={product.image}
					price={product.price}
					status={product.status}
				/>
			))}
		</div>
	)
}

export default RecentOrderCard
