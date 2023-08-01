import {
	CartInventoryCard,
	CustomersCard,
	Layout,
	MarketingCard,
	OrdersCard,
	ProductInventoryCard,
	RecentOrderCard,
	SalesCard,
	SummaryCard,
} from '@/components/ui'

export default function Home() {
	return (
		<Layout>
			<div className='dashboard'>
				<div>
					<SalesCard />
					<CustomersCard />
					<OrdersCard />
				</div>
				<div className='dashboard__reports'>
					<div className='dashboard__inventory'>
						<div className='dashboard__chart-details'>
							<MarketingCard />
							<div>
								<ProductInventoryCard />
								<CartInventoryCard />
							</div>
						</div>
						<SummaryCard />
					</div>
					<RecentOrderCard />
				</div>
			</div>
		</Layout>
	)
}
