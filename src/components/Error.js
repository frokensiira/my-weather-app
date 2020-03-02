import React from 'react'

const Error = props => {
	return <div className="alert alert-warning">Oh, sorry, something went wrong. You sure the place {props.title} exists?</div>
}

export default Error;