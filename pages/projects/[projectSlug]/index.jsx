import React from 'react'
import Head from 'next/head'

import ProjectDetail from '../../../components/projects/ProjectDetail'
import { PROJECTS } from '../index'

const ProjectDetailPage = (props) => {
	return (
		<div>
			<Head>
				<title>{props.projectData.name}</title>
				<meta name='description' content={props.projectData.shortDescription} />
			</Head>
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
	return {
		fallback: false,
		paths: PROJECTS.map((project) => ({
			params: {
				projectSlug: project.slug,
			},
		})),
	}
	// return {
	// 	fallback: false,
	// 	paths: [
	// 		{ params: { projectId: '1' } },
	// 		{ params: { projectId: '2' } },
	// 		{ params: { projectId: '3' } },
	// 	],
	// }
}

export async function getStaticProps(context) {
	const projectSlug = context.params.projectSlug
	const data = PROJECTS.filter((project) => project.slug === projectSlug)

	return {
		props: {
			projectData: data[0],
		},
	}
}

export default ProjectDetailPage
