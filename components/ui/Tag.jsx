import React from 'react'

import classes from './Tag.module.css'

const Tag = (props) => {
	return (
		<div className={classes.tag}>
			<span>{props.label}</span>
		</div>
	)
}

export default Tag
