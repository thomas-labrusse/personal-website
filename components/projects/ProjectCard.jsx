import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Tag from '../ui/Tag'

import classes from './ProjectCard.module.css'

const ProjectCard = (props) => {
	const router = useRouter()

	const {
		id,
		name,
		slug,
		shortDescription,
		image,
		thumbnail,
		stack,
		github,
		url,
	} = props

	const showProjectDetailHandler = () => {
		router.push('/projects/' + slug)
	}

	return (
		<div className={classes.card}>
			<div className={classes['image-container']}>
				<img src={thumbnail} alt={name} className={classes.image} />
			</div>
			<div className={classes['card-infos']}>
				<div className={classes['text-description']}>
					<h1 className={classes.name}>{name}</h1>
					<p className={classes.description}>{shortDescription}</p>
				</div>
				<div className={classes['bottom-container']}>
					<div className={classes.tags}>
						{stack.map((tag, id) => (
							<Tag label={tag} key={id} />
						))}
					</div>
					<div className={classes['card-bottom']}>
						<div className={classes['links-container']}>
							{github && (
								<a href={github} target='_blank'>
									<img
										src='/images/icons/github-icon-dark.svg'
										alt='github icon'
										className={classes.icon}
									/>
								</a>
							)}
							{url && (
								<a href={url} target='_blank'>
									<img
										src='/images/icons/globe-icon.svg'
										alt='world icon'
										className={classes.icon}
									/>
								</a>
							)}
						</div>
						<div className={classes['more-container']}>
							<button
								className={classes.button}
								onClick={showProjectDetailHandler}
							>
								<span className={classes['button-text']}>see more</span>
								<img
									src='/images/icons/arrow-right-icon.svg'
									className={classes['button-icon']}
									alt='arrow right icon'
								/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
