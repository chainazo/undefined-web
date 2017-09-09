import React, { Component } from 'react';
import axios from 'axios';

class MeetupAttendee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      attendeeList: []
    };

    this.approveAttendee = this.approveAttendee.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    axios.get(`/meetups/${id}/attendees`)
      .then(res => {
        this.setState({
          attendeeList: res.data.data.map(v => ({ ...v, checked: false }))
        });
      });
  }

  toggleCheckbox(index) {
    const newList = this.state.attendeeList;
    newList[index].checked = !newList[index].checked;

    this.setState({ attendeeList: newList });
  }

  approveAttendee() {
    const { id } = this.props.match.params;
    const candidates = this.state.attendeeList
      .filter(v => v.checked)
      .map(v => v.id);

    axios.post(`/meetups/${id}/approve`, candidates)
      .then(res => {
        console.log(res);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <table className="responsive-table striped">
            <thead>
              <tr>
                <th>이름</th>
                <th>휴대폰번호</th>
                <th>이메일</th>
                <th>참석 확정하기</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.attendeeList.map((v, i) => (
                  <tr key={v.id}>
                    <td>{v.name}</td>
                    <td>{v.phone}</td>
                    <td>{v.email}</td>
                    <td>
                      <input
                        id={v.id}
                        type="checkbox"
                        checked={v.checked}
                        onClick={() => this.toggleCheckbox(i)}
                        />
                      <label htmlFor={v.id}>선정</label>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div className="row right-align">
          <button
            className="waves-effect waves-light btn"
            onClick={this.approveAttendee}>
            참가 확정
          </button>
        </div>
      </div>
    );
  }
}

export default MeetupAttendee;