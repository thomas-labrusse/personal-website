import React from 'react'
import Project from './Project'

import Separator from '../ui/Separator'

import classes from './Projects.module.css'

const PROJECTS = [
	{
		id: 1,
		name: 'Races Medal NFTs',
		shortDescription:
			'Low carbon footprint NFTs that act as digital medals only races finishers can reedem.',
		image: './images/finish-lines-project.png',
		description:
			'Project longer description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tempore est beatae expedita magni minima commodi autem hic! Assumenda commodi suscipit obcaecati! Molestias consequuntur consequatur earum modi neque dolor iure aspernatur laudantium eligendi distinctio hic quia aliquam exercitationem cumque dicta nisi, provident perspiciatis quisquam molestiae? Dolorum officiis accusamus ad corrupti!',
		stack: ['React', 'web3', 'solana-blockchain', 'scss', 'figma'],
		github: 'https://github.com/thomas-labrusse',
		url: 'https://google.com/',
	},
	{
		id: 2,
		name: 'OpenSea Rarity Chrome Extension',
		shortDescription: 'Project short description',
		image: './images/finish-lines-project.png',
		description:
			'Project longer description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tempore est beatae expedita magni minima commodi autem hic! Assumenda commodi suscipit obcaecati! Molestias consequuntur consequatur earum modi neque dolor iure aspernatur laudantium eligendi distinctio hic quia aliquam exercitationem cumque dicta nisi, provident perspiciatis quisquam molestiae? Dolorum officiis accusamus ad corrupti!',
		stack: ['React', 'NodeJS', 'Express', 'MongoDB'],
		github: 'https://github.com/thomas-labrusse',
		url: 'https://google.com/',
	},
	{
		id: 3,
		name: 'Attendance Slack Bot',
		shortDescription:
			'Small Slack Bot allowing coworking members to flag their presence',
		image: './images/slack-bot-project.png',
		description:
			'Project longer description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tempore est beatae expedita magni minima commodi autem hic! Assumenda commodi suscipit obcaecati! Molestias consequuntur consequatur earum modi neque dolor iure aspernatur laudantium eligendi distinctio hic quia aliquam exercitationem cumque dicta nisi, provident perspiciatis quisquam molestiae? Dolorum officiis accusamus ad corrupti!',
		stack: ['Javascript', 'Bolt', 'AWS Lambda', 'Serverless'],
		github: 'https://github.com/thomas-labrusse/slack-bot-whos-coming',
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
