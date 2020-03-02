import React from 'react';
import SearchCity from './components/SearchCity';
import WeatherReport from './components/WeatherReport';
import axios from 'axios';
import Error from './components/Error'

class App extends React.Component {
	state = {
		errorMessage: false,
		report: null,
		title: ''
	}
	
	getAPI = (city) => {

		const API_KEY = 'a9f6719e37f20890ebff5d91724dec1f';
		const BASE_URL = 'https://api.openweathermap.org/data/2.5/'

		this.setState({
			title: city
		})

		axios.get(`${BASE_URL}weather?q=${city}&units=metric&appid=${API_KEY}`)
		.then(response => {
			this.setState({
				report: response.data,
				errorMessage: false
			})
		})
		.catch(err => {
			this.setState({
				report: null,
				errorMessage: true
			})
		})
	}

	render() {
		return (
			<div id="app">
				<div className="container my-5">
					<h1 className="text-center mb-5">
						<span role="img" aria-label="Weather?">🌦❔</span>
					</h1>

					<SearchCity getAPI={this.getAPI}/>

					{
						this.state.report
						? (
							<WeatherReport city={this.state.report}/>
						)
						: ''
					}

					{this.state.errorMessage ? <Error title={this.state.title}/> : ''}
					
				</div>
			</div>
		)
	}
}

export default App;
