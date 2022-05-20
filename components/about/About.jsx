import React from 'react'
import Link from 'next/link'

import classes from './About.module.css'

const About = () => {
	return (
		<div className={classes.about}>
			<p>
				<span>Hi,</span>
				<br />
				<span>I’m Thomas, and here is a little more about me.</span>
			</p>
			<p>
				<span>
					I’ve been working in startups finance departments most of my adult
					life, and have enjoyed being surrounded by passionate builders from
					very different backgrounds and industries (
					<span className={classes.link}>
						<a href='https://www.netatmo.com/fr-fr' target='_blank'>
							IoT
						</a>
					</span>
					,{' '}
					<span className={classes.link}>
						<a href='https://www.dailymotion.com/' target='_blank'>
							streaming
						</a>
					</span>
					,{' '}
					<span className={classes.link}>
						<a href='https://www.habx.com' target='_blank'>
							PropTech
						</a>
					</span>
					).
				</span>
			</p>
			<p>
				<span>
					Since early 2021 I’ve been learning how to code. I'm very grateful to
					have been able to use my time to do this. Learning and share
					knowledge, in all aspects of life, as always been, and will remain my
					main driver.
				</span>
			</p>
			<p>
				<span>
					I’m currently working with the following technologies : JS(ES6),
					React, NextJS, NodeJS, Express, MongoDB, Web3 libraries (ethers,
					solana).
				</span>
			</p>
			<p>
				<span>
					If you’re interested, feel free to check out some of the small{' '}
					<span className={classes.link}>
						<Link href='/projects'>projects</Link>
					</span>{' '}
					I’ve created, either as learning experiments, for my personal use, or
					both.
				</span>
			</p>
			<p>
				<span>
					I’m open to work on meaningful projects. I’m mostly sector agnostic
					but will not work for any industry that doesn’t align with my idea of
					a healthy physical, social, and intellectual life.
				</span>
			</p>
			<p>
				<span>
					Feel free to reach out to me at the address below, via{' '}
					<span className={classes.link}>
						<a
							href='https://www.linkedin.com/in/thomas-labrusse/'
							target='_blank'
						>
							LinkedIn
						</a>
					</span>{' '}
					or any means you wish.
					<br />
					I'll be happy to chat.
				</span>
			</p>
			<p>
				<span>Have a great day</span>
			</p>
			<h1>Contact</h1>
			<p>
				<span>labrusse.thomas [at] gmail [dot] com</span>
			</p>
		</div>
	)
}

export default About
