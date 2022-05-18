import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Tag from '../ui/Tag'

import classes from './ProjectCard.module.css'

const ProjectCard = (props) => {
	const router = useRouter()

	const { id, name, shortDescription, image, stack, github, url } = props

	const showProjectDetailHandler = () => {
		router.push('/projects/' + id)
	}

	return (
		<div className={classes.card}>
			<div className={classes['image-container']}>
				<img src={image} />
			</div>
			<div className={classes['card-infos']}>
				<h1 className={classes.name}>{name}</h1>
				<p className={classes.description}>{shortDescription}</p>
				<div className={classes.tags}>
					{stack.map((tag) => (
						<Tag label={tag} />
					))}
				</div>
				<div className={classes['links-container']}>
					{github && (
						<a href={github} target='_blank'>
							<img
								src='/images/github-icon-dark.svg'
								alt='github icon'
								className={classes.icon}
							/>
						</a>
					)}
					{url && (
						<a href={url} target='_blank'>
							<img
								src='/images/globe-icon.svg'
								alt='world icon'
								className={classes.icon}
							/>
						</a>
					)}
				</div>
			</div>
			<div className={classes['button-container']}>
				<button className={classes.button} onClick={showProjectDetailHandler}>
					more
				</button>
				{/* <div className={classes.test}>
					<Link href={`/${id}`}>
						<p>{`goes to : ${id}`}</p>
					</Link>
				</div> */}
			</div>
		</div>
	)
}

export default ProjectCard
