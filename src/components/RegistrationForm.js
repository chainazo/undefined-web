import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

const RegistrationForm = ({ handleSubmit, onSubmit }) => {
	return (
		<form className="col s6" onSubmit={handleSubmit(onSubmit)}>
			<div className="row">
				<h4>회원가입</h4>
			</div>

			<div className="row">
				<div className="input-field col s12">
					<div className="box">
						<label htmlFor="display_name">이름</label>
						<Field name="display_name" component="input" type="text" />
					</div>
				</div>
			</div>

			<div className="row">
				<div className="input-field col s12">
					<label htmlFor="email">이메일</label>
					<Field
						name="email"
						component="input"
						type="email"
					/>
				</div>
			</div>

			<div className="row">
				<div className="input-field col s12">
					<label htmlFor="phone">휴대폰</label>
					<Field
						name="phone"
						component="input"
						type="text"
					/>
				</div>
			</div>

			<div className="row">
				<div className="input-field col s12">
					<label htmlFor="password">비밀번호</label>
					<Field
						name="password"
						component="input"
						type="password"
					/>
				</div>
			</div>

			<div className="row form-row">
				<div className="col s12">
					<button type="submit" className="waves-effect waves-light btn">회원가입하기</button>
				</div>
			</div>
		</form>
	);
};

RegistrationForm.PropTypes = {
	handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({ form: 'registrationForm' })(RegistrationForm);
