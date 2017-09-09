import React, { Component } from 'react';
import axios from 'axios';
import { Field, reduxForm } from 'redux-form';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';

const instance = axios.create({
  baseURL: 'https://m8z7h5ngq7.execute-api.ap-northeast-2.amazonaws.com/prod'
});

const renderDateTimePicker = ({ input: { onChange, value }, showTime }) => (
  <DateTimePicker
    onChange={onChange}
    time={showTime}
    value={!value ? null : new Date(value)}
  />
)

class MeetupForm extends Component {
  constructor() {
    super();

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data) {
    instance.post('/meetups', data)
      .then((res) => {
        console.log(res);
      });
  }

  render() {
    return (
      <div className="container">
        <form className="col s6" onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div className="row">
            <div className="input-field col s12">
              <Field component="input" type="text" name="title" className="validate"/>
              <label htmlFor="title">제목</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <Field component="input" type="text" name="summary" className="validate"/>
              <label htmlFor="summary">모임요약</label>
            </div>
          </div>

          <div className="row">
            <div className="col s6">
              <Field component={renderDateTimePicker} type="text" name="started_at"/>
              <label htmlFor="started_at">시작일시</label>
            </div>
            <div className="col s6">
              <Field component={renderDateTimePicker} type="text" name="ended_at"/>
              <label htmlFor="ended_at">종료일시</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <Field component="input" type="text" name="location"/>
              <label htmlFor="location">장소</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <Field component="input" type="number" name="limit"/>
              <label htmlFor="limit">참가인원</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <Field component="textarea" id="content" name="content" className="materialize-textarea"/>
              <label htmlFor="content">모임 상세정보</label>
            </div>
          </div>

          <Field component="input" name="choice_type" style={{ display: 'none' }} />

          {/* <label>
            <Field component="input" type="radio" name="type" value="byArrive"/>
            선착순
          </label>

          <label>
            <Field component="input" type="radio" name="type" value="byRandom"/>
            임의추첨
          </label>

          <label>
            <Field component="input" type="radio" name="type" value="manually"/>
            직접선정
          </label> */}

          <button type="submit" className="waves-effect waves-light btn">모임 개설</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'MeetupForm',
  initialValues: {
    choice_type: 1
  }
})(MeetupForm);
