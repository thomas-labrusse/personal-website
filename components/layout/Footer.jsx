import React from 'react'
import classes from './Footer.module.css'

const Footer = () => {
	return (
		<div className={classes.footer}>
			<div className={classes['icons-container']}>
				<a href='https://github.com/thomas-labrusse' target='_blank'>
					<img
						src='/images/icons/github-icon.svg'
						alt='github icon'
						className={classes.icon}
					/>
				</a>
				<a href='https://www.linkedin.com/in/thomas-labrusse/' target='_blank'>
					<img
						src='/images/icons/linkedin-icon.svg'
						alt='github icon'
						className={classes.icon}
					/>
				</a>
			</div>
		</div>
	)
}

export default Footer
