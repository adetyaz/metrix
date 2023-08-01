import '@/styles/globals.scss'
import '@fontsource-variable/inter'
import '@fontsource/poppins'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
