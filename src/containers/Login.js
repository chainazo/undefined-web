import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class LoginForm extends Component {
  render() {
    return (
      <div className="container">
        <form className="col s6" onSubmit={this.props.handleSubmit}>
          <div className="row">
            <h4>로그인</h4>

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
                <button type="submit" className="waves-effect waves-light btn">로그인</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default reduxForm({ form: 'LoginForm' })(LoginForm);
