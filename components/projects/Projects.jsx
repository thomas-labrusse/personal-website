import React from 'react'

import Separator from '../ui/Separator'

import classes from './Projects.module.css'
import ProjectCard from './ProjectCard'

const Projects = (props) => {
	return (
		<>
			<Separator />
			<div className={classes['projects-cards']}>
				{props.projects.map((project) => (
					<ProjectCard
						key={project.id}
						id={project.id}
						name={project.name}
						slug={project.slug}
						shortDescription={project.shortDescription}
						image={project.image}
						thumbnail={project.thumbnail}
						stack={project.stack}
						github={project.github}
						url={project.url}
					/>
				))}
			</div>
			<Separator />
		</>
	)
}

export default Projects
