import { navLinks } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import { GiftIcon, HeadphoneIcon, LogoutIcon } from '../icons'
import { getIcons } from '@/utils'

const Sidebar = () => {
	return (
		<nav className='side-nav'>
			<div className='side-nav__logo'>
				<Image src='/logo.png' alt='logo' height={50} width={50} />
				<h1>Metrix</h1>
			</div>

			<ul className='side-nav__items'>
				{navLinks.map((navLink) => (
					<li>
						<Link href={`/${navLink.link}`} className='side-nav__link'>
							<span className='icon-wrapper'>{getIcons(navLink.link)}</span>
							<span>{navLink.link}</span>
						</Link>
					</li>
				))}
			</ul>

			<div className='side-nav__bottom-links'>
				<button className='btn btn__contact'>
					<HeadphoneIcon />
					<span>Contact Support</span>
				</button>
				<button className='btn btn__gift'>
					<div>
						<GiftIcon />
						<span>Free Gift Awaits You!</span>
					</div>
					<div>
						<span>Upgrade your account</span>
						<span>&lt;</span>
					</div>
				</button>
				<Link href='/logout'>
					<button className='btn btn__danger'>
						<span className='icon-wrapper danger'>
							<LogoutIcon />
						</span>
						<span>Logout</span>
					</button>
				</Link>
			</div>
		</nav>
	)
}

export default Sidebar
