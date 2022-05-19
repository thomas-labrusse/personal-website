import React from 'react'

import ProjectDetail from '../../../components/projects/ProjectDetail'
import { PROJECTS } from '../../projects'

const ProjectDetailPage = (props) => {
	return (
		<div>
			<ProjectDetail
				name={props.projectData.name}
				shortDescription={props.projectData.shortDescription}
				image={props.projectData.image}
				description={props.projectData.description}
				stack={props.projectData.stack}
				github={props.projectData.github}
				url={props.projectData.url}
			/>
		</div>
	)
}

export async function getStaticPaths() {
	console.log(PROJECTS)

	// return {
	// 	fallback: 'blocking',
	// 	paths: PROJECTS.map((project) => ({
	// 		params: {
	// 			projectId: project.id,
	// 		},
	// 	})),
	// }
	return {
		fallback: false,
		paths: [
			{ params: { projectId: '1' } },
			{ params: { projectId: '2' } },
			{ params: { projectId: '3' } },
		],
	}
}

export async function getStaticProps(context) {
	const projectId = context.params.projectId
	const data = PROJECTS.filter((project) => project.id === projectId)

	return {
		props: {
			projectData: data[0],
		},
	}
}

export default ProjectDetailPage
