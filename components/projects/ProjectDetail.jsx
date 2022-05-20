import React from 'react'

import Tag from '../ui/Tag'
import Separator from '../ui/Separator'

import classes from './ProjectDetail.module.css'

const Project = (props) => {
	const { name, shortDescription, image, description, stack, github, url } =
		props

	return (
		<div className={classes.project}>
			<Separator />
			<h1 className={classes.name}>{name}</h1>
			<p className={classes['main-description']}>{shortDescription}</p>
			<div className={classes['image-container']}>
				<img className={classes.image} src={image} alt={name}></img>
			</div>
			<p className={classes.description}>{description}</p>
			<div className={classes.tags}>
				{stack.map((tag) => (
					<Tag label={tag} />
				))}
			</div>
			{github && (
				<div className={classes.link}>
					<img
						src='/images/icons/github-icon-dark.svg'
						alt='github icon'
						className={classes.icon}
					/>
					<span className={classes.url}>
						<a href={github} target='_blank'>
							{github}
						</a>
					</span>
				</div>
			)}
			{url && (
				<div className={classes.link}>
					<img
						src='/images/icons/globe-icon.svg'
						alt='world icon'
						className={classes.icon}
					/>
					<span className={classes.url}>
						<a href={url} target='_blank'>
							{url}
						</a>
					</span>
				</div>
			)}
			<Separator />
		</div>
	)
}

export default Project
