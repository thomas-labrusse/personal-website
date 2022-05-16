import React from 'react'
import Project from './Project'

import Separator from '../ui/Separator'

import classes from './Projects.module.css'

const PROJECTS = [
	{
		id: 1,
		name: 'Project 1',
		shortDescription: 'Project short description',
		image: './images/finish-lines-project.png',
		description:
			'Project longer description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tempore est beatae expedita magni minima commodi autem hic! Assumenda commodi suscipit obcaecati! Molestias consequuntur consequatur earum modi neque dolor iure aspernatur laudantium eligendi distinctio hic quia aliquam exercitationem cumque dicta nisi, provident perspiciatis quisquam molestiae? Dolorum officiis accusamus ad corrupti!',
		stack: ['React', 'web3', 'scss', 'figma'],
		github: 'https://github.com/thomas-labrusse',
		url: 'https://google.com/',
	},
]

const Projects = () => {
	return (
		<>
			<Separator />
			<div className={classes.projects}>
				{PROJECTS.map((project) => (
					<Project
						id={project.id}
						name={project.name}
						shortDescription={project.shortDescription}
						image={project.image}
						description={project.description}
						stack={project.stack}
						github={project.github}
						url={project.url}
					/>
				))}
			</div>
		</>
	)
}

export default Projects
