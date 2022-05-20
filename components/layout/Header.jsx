import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import classes from './Header.module.css'
import profilePic from '../../public/images/photo-id-format.png'

const Header = () => {
	return (
		<div className={classes.header}>
			<div className={classes['image-container']}>
				<Image src={profilePic} alt='id photo' className={classes.photo} />
			</div>
			<div className={classes.navbar}>
				<div className={`${classes.link} ${classes.left}`}>
					<Link href='/'>About</Link>
				</div>
				<div className={classes.separation}></div>
				<div className={`${classes.link} ${classes.right}`}>
					<Link href='/projects'>Projects</Link>
				</div>
			</div>
		</div>
	)
}

export default Header
