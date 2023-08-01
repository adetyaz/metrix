const SummaryCard = () => {
	return (
		<div className='card summary-card'>
			<div className='card__top'>
				<div>
					<p>Summary</p>
					<div>
						<span>sales</span>
						<span>&gt;</span>
					</div>
				</div>
				<div>
					<span>Last 7 Days</span>
					<span>&gt;</span>
				</div>
			</div>
			<div className='summary-card__chart'>
				<div className='summary-card__chart--numbers'>
					<span>100k</span>
					<span>80k</span>
					<span>60k</span>
					<span>40k</span>
					<span>20k</span>
				</div>
				<div className='summary-card__chart--bar'>
					<p>Sept 10</p>
				</div>
				<div className='summary-card__chart--bar'>
					<p>Sept 10</p>
				</div>
				<div className='summary-card__chart--bar'>
					<p>Sept 10</p>
				</div>
				<div className='summary-card__chart--bar'>
					<p>Sept 10</p>
				</div>
				<div className='summary-card__chart--bar'>
					<p>Sept 10</p>
				</div>
				<div className='summary-card__chart--bar'>
					<p>Sept 10</p>
				</div>
			</div>
		</div>
	)
}

export default SummaryCard
