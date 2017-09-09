import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';

import RegisterationFrom from '../components/RegisterationFrom';

class Registeration extends Component {
	constructor(props) {
		super(props);
	}

	handleRegisteration = data => {
		this.props.registerationRequest(data);
	};

	validateEmail = event => {
		// TODO: need to make async method for validating email
	};

	render() {
		return (
			<div className="regiseration-container">
				<div>
					<RegisterationFrom
						onSubmit={values => this.handleRegisteration(values)}
						{...this.props}
					/>
				</div>
			</div>
		);
	}
}

Registeration = reduxForm({
	form: 'registeration'
})(Registeration);

const selector = formValueSelector('registeration'); // <-- same as form name

const mapDispatchToProps = dispatch => {
	return {
		registerationRequest: data => {
			return dispatch(registerationRequest(data));
		}
	};
};

export default connect(null, mapDispatchToProps)(Registeration);
