import React from 'react';
import WeatherDescription from './WeatherDescription'

const WeatherReport = props => {

	const conditions = props.city.weather.map(weatherObject => {
        return <WeatherDescription key={Math.random()} condition={weatherObject.description}/>
	})

	const { name, main } = props.city

	return (
		<div id="WeatherReport">
			<div className="card bg-dark text-white">
				<div className="card-body text-center">
					<h5 className="card-title">The temperature in {name} is {main.temp} &deg; C right now, with a humidity of {main.humidity} %.</h5>
					<h6 className="card-text mt-3 mb-1">Current weather is: </h6>
					<ul className="list-unstyled mb-0">
						{conditions}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default WeatherReport;
