import React from 'react'

import About from '../components/about/About'
import { PROJECTS } from '../pages/projects'

const HomePage = () => {
	console.log(PROJECTS)
	return (
		<>
			<About />
		</>
	)
}

export default HomePage
