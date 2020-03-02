import React from 'react';

class SearchCity extends React.Component {

	state = {
		input: ''
	}

	handleChange = (e) => {

		this.setState({
			input: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()

		this.props.getAPI(this.state.input)

		this.setState({
			input: ''
		})
	}

	render() {
		return (
			<div id="SearchCity" className="mb-5">
				<form onSubmit={(e) => this.handleSubmit(e)}>
					<div className="input-group">
						<input 
						type="text" 
						className="form-control form-control-lg" 
						id="city" 
						value={this.state.input}
						onChange={(e) => this.handleChange(e)}	
						/>

						<div className="input-group-append">
							<button className="btn btn-success btn-lg">Search</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export default SearchCity;
