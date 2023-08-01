import Head from 'next/head'
import { Navbar, Sidebar } from '.'

const Layout = ({ children }: { children: React.ReactNode }) => {
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
					{children}
				</section>
			</main>
		</>
	)
}

export default Layout
