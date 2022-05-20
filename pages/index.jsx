import React from 'react'
import Head from 'next/head'

import About from '../components/about/About'

const HomePage = () => {
	return (
		<>
			<Head>
				<title>About me</title>
				<meta
					name='description'
					content="Mu current focus and a few projects I've been working on."
				/>
			</Head>
			<About />
		</>
	)
}

export default HomePage
