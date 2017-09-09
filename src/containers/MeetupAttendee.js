import React, { Component } from 'react';
import axios from 'axios';

class MeetupAttendee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      attendeeList: []
    };
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

  render() {
    return (
      <div className="container">
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
    );
  }
}

export default MeetupAttendee;
