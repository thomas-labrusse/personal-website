import React from 'react'
import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'

import classes from './Layout.module.css'

const Layout = (props) => {
	return (
		<div className={classes.layout}>
			<Head>
				<link rel='shortcut icon' href='/favicon.ico' />
			</Head>
			<Header />
			<main>{props.children}</main>
			<Footer />
		</div>
	)
}

export default Layout
