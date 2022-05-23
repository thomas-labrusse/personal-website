import Head from 'next/head'
import '../styles/styles.css'

import Layout from '../components/layout/Layout'

function MyApp({ Component, pageProps }) {
	// The Component prop is the active page
	return (
		<>
			<Head>
				<link
					rel='shortcut icon'
					type='image/x-icon'
					href='/images/favicon.ico'
				/>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

export default MyApp
