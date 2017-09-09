import React, { Component } from 'react';
import axios from 'axios';

import RegistrationForm from '../components/RegistrationForm';

const instance = axios.create({
	baseURL: 'http://env-trueland.dbkbppqwqx.ap-northeast-2.elasticbeanstalk.com'
});

class Registration extends Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit = data => {
		instance.post('/users', data)
			.then(res => {
				console.log(res);
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
