const MarketingCard = () => {
	return (
		<div className='card marketing-card'>
			<div className='card__top'>
				<p>Marketing</p>
				<div>
					<span>This Week</span>
					<span>&gt;</span>
				</div>
			</div>
			<div className='card__top'>
				<div className='marketing-card__goals'>
					<span></span>
					<p>Acquisition</p>
				</div>
				<div className='marketing-card__goals'>
					<span></span>
					<p>Purchase</p>
				</div>
				<div className='marketing-card__goals'>
					<span></span>
					<p>Retention</p>
				</div>
			</div>
			<div className='marketing-card__wrapper'>
				<div className='marketing-card__doughnut-chart'></div>
			</div>
		</div>
	)
}

export default MarketingCard
