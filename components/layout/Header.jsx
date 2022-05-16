import React from 'react'
import Link from 'next/link'
import classes from './Header.module.css'

const Header = () => {
	return (
		<div className={classes.header}>
			<div className={classes['image-container']}>
				<img
					src='./images/photo-id-format.png'
					alt='id photo'
					className={classes.photo}
				/>
			</div>
			<div className={classes.navbar}>
				<div className={`${classes.link} ${classes.left}`}>
					<Link href='/'>About</Link>
				</div>
				<div className={classes.separation}></div>
				<div className={`${classes.link} ${classes.right}`}>
					<Link href='/'>Projects</Link>
				</div>
			</div>
		</div>
	)
}

export default Header
