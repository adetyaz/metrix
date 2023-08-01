import Image from 'next/image'
import { BellIcon } from '../icons'

const Navbar = () => {
	return (
		<nav className='nav'>
			<h1>Dashboard</h1>
			<div className='nav__user-details'>
				<button className='btn'>
					<span>Nanny's shop</span>
					<span>&gt;</span>
				</button>
				<BellIcon />
				<Image src='/avatar.png' alt='avatar' height={25} width={25} />
			</div>
		</nav>
	)
}

export default Navbar
