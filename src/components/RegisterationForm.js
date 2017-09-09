import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

const RegisterationFrom = ({ handleSubmit, validateEmail, handlesignIn }) => {
	return (
		<form className="registeration-form">
			<div className="title">Sign up</div>

			<div className="row">
				<div className="col-xs-6">
					<div className="box">
						<label htmlFor="firstName">First Name</label>
						<Field name="firstName" component="input" type="text" />
					</div>
				</div>

				<div className="col-xs-6">
					<label htmlFor="lastName">Last Name</label>
					<Field name="lastName" component="input" type="text" />
				</div>
			</div>

			<div className="row">
				<div>
					<label htmlFor="email">Email</label>
					<Field
						name="email"
						onChange={validateEmail}
						component="input"
						type="text"
					/>
				</div>
				{false && <div>This E-mail already exists.</div>}
			</div>

			<div className="row">
				<div>
					<label htmlFor="password">Password</label>
					<Field
						name="email"
						onChange={validateEmail}
						component="input"
						type="password"
					/>
				</div>
			</div>

			<div className="row form-row">
				<div>
					<button type="submit">Sign Up</button>
				</div>
			</div>
		</form>
	);
};

RegisterationFrom.PropTypes = {
	handleSubmit: PropTypes.func.isRequired,
	validateEmail: PropTypes.func.isRequired,
	handlesignIn: PropTypes.func.isRequired
};

export default reduxForm({ form: 'registerationForm' })(RegisterationFrom);
