import React from 'react'

import Header from './Header'
import Footer from './Footer'

import classes from './Layout.module.css'

const Layout = (props) => {
	return (
		<div className={classes.layout}>
			<Header />
			<main>{props.children}</main>
			<Footer />
		</div>
	)
}

export default Layout
