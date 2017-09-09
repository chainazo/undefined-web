import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';

import RegistrationForm from '../components/RegistrationForm';

// Action creators
import { registrationRequest } from '../reducers/auth';

class Registration extends Component {
	constructor(props) {
		super(props);
	}
	static propTypes = {
		registrationRequest: PropTypes.func.isRequired
	};

	handleRegistration = data => {
		this.props.registrationRequest(data);
	};

	validateEmail = event => {
		// TODO: need to make async method for validating email
	};

	render() {
		return (
			<div className="regiseration-container">
				<div>
					<RegistrationForm
						onSubmit={values => this.handleRegistration(values)}
						{...this.props}
					/>
				</div>
			</div>
		);
	}
}

Registration = reduxForm({
	form: 'registration'
})(Registration);

const selector = formValueSelector('registration'); // <-- same as form name

const mapDispatchToProps = dispatch => {
	return {
		registrationRequest: data => {
			return dispatch(registrationRequest(data));
		}
	};
};

export default connect(null, mapDispatchToProps)(Registration);
