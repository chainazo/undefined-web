import React, { Component } from 'react';
import axios from 'axios';

import RegistrationForm from '../components/RegistrationForm';

class Registration extends Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit = data => {
		axios.post('/users', data)
			.then(res => {
				this.props.onSignup(res.data.data);
			});
	};

	render() {
		return (
			<div className="container regiseration-container">
				<div>
					<RegistrationForm
						onSubmit={this.handleSubmit}
					/>
				</div>
			</div>
		);
	}
}

export default Registration;
