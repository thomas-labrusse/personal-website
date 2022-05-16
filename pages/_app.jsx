import '../styles/styles.css'

import Layout from '../components/layout/Layout'

function MyApp({ Component, pageProps }) {
	// The Component prop is the active page
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
