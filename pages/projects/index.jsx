import React from 'react'
import Projects from '../../components/projects/Projects'

export const PROJECTS = [
	{
		id: '1',
		name: 'Races Medal NFTs',
		shortDescription:
			'Low carbon footprint NFTs that act as digital medals only races finishers can reedem.',
		image: '../images/finish-lines-project-300h.png',
		description:
			'Project longer description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tempore est beatae expedita magni minima commodi autem hic! Assumenda commodi suscipit obcaecati! Molestias consequuntur consequatur earum modi neque dolor iure aspernatur laudantium eligendi distinctio hic quia aliquam exercitationem cumque dicta nisi, provident perspiciatis quisquam molestiae? Dolorum officiis accusamus ad corrupti!',
		stack: ['React', 'web3', 'solana-blockchain', 'scss', 'figma'],
		github: 'https://github.com/thomas-labrusse',
		url: 'https://google.com/',
	},
	{
		id: '2',
		name: 'OpenSea Rarity Chrome Extension',
		shortDescription: 'Project short description',
		// image: './images/nft-traits-extension-300h.png',
		image: '../images/nft-traits-1.gif',
		description:
			'Project longer description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tempore est beatae expedita magni minima commodi autem hic! Assumenda commodi suscipit obcaecati! Molestias consequuntur consequatur earum modi neque dolor iure aspernatur laudantium eligendi distinctio hic quia aliquam exercitationem cumque dicta nisi, provident perspiciatis quisquam molestiae? Dolorum officiis accusamus ad corrupti!',
		stack: ['React', 'NodeJS', 'Express', 'MongoDB'],
		github: 'https://github.com/thomas-labrusse',
		url: 'https://google.com/',
	},
	{
		id: '3',
		name: 'Attendance Slack Bot',
		shortDescription:
			'Small Slack Bot allowing coworking members to flag their presence',
		image: '../images/slack-bot-project-300h.png',
		description:
			'Project longer description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tempore est beatae expedita magni minima commodi autem hic! Assumenda commodi suscipit obcaecati! Molestias consequuntur consequatur earum modi neque dolor iure aspernatur laudantium eligendi distinctio hic quia aliquam exercitationem cumque dicta nisi, provident perspiciatis quisquam molestiae? Dolorum officiis accusamus ad corrupti!',
		stack: ['Javascript', 'Bolt', 'AWS Lambda', 'Serverless'],
		github: 'https://github.com/thomas-labrusse/slack-bot-whos-coming',
	},
]

const ProjectsPage = () => {
	return (
		<>
			<Projects projects={PROJECTS} />
		</>
	)
}

export default ProjectsPage
