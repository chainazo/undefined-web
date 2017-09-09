import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMeetupAttendee, testActionCreator } from '../actions';

class MeetupAttendee extends Component {
  componentDidMount() {
    fetchMeetupAttendee(this.props.match.params.id);
    testActionCreator();
  }

  render() {
    console.log(this.props.meetupAttendee)
    return (
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>휴대폰번호</th>
            <th>이메일</th>
            <th>선정하기</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    meetupAttendee: state.lists.attendee
  };
}

export default connect(mapStateToProps, { fetchMeetupAttendee, testActionCreator })(MeetupAttendee);
