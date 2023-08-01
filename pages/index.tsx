import {
	CartInventoryCard,
	CustomersCard,
	MarketingCard,
	Navbar,
	OrdersCard,
	ProductInventoryCard,
	RecentOrderCard,
	SalesCard,
	Sidebar,
	SummaryCard,
} from '@/components/ui'
import Head from 'next/head'

export default function Home() {
	return (
		<>
			<Head>
				<title>Metrix</title>
				<meta name='description' content='Get all your data at one stop' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/logo.png' />
			</Head>

			<main>
				<Sidebar />
				<section>
					<Navbar />
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
				</section>
			</main>
		</>
	)
}
