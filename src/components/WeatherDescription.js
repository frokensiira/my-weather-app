import React from 'react'

const WeatherDescription = props => {
	return <li className="list-style-none">{props.condition}</li>
}

export default WeatherDescription;