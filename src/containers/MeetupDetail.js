import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import marked from 'react-marked';
import Avatar from '../static/img/avatar.jpg';



class MeetupDetail extends Component {
  constructor (props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      title: '',
      started_at: '',
      ended_at: '',
      cover_image_url: '',
      summary: '',
      location: '',
      choice_type: '',
      content: '',
      confirmedList: [],
      waitingList: []
    };
  }

  componentDidMount() {
    axios.get(`/meetups/${this.state.id}`)
      .then(res => {
        this.setState(res.data.data);
        return axios.get(`/meetups/${this.state.id}/attendees?state=0`);
      })
      .then(res => {
        this.setState({ confirmedList: res.data.data });
        return axios.get(`/meetups/${this.state.id}/attendees?state=1`);
      })
      .then(res => {
        this.setState({ waitingList: res.data.data });
      })
  }

  renderUserConfirmed = () => {
    return this.state.confirmedList.map((user) => {
      return (
        <div className="chip" key={user.id}>
          <img src={Avatar} alt="Contact Person"/>{user.display_name}
        </div>
      )
    });
  };

  renderUserWaiting = () => {
    return this.state.waitingList.map((user) => {
      return (
        <div className="chip" key={user.id}>
          <img src={Avatar} alt="Contact Person"/>{user.display_name}
        </div>
      )
    });
  };

  render () {
    const detail = this.state;
    return (
      <div className="container container-body">
        <div className="meetup-title-section">
          <div className="meetup-title">{detail.title}</div>
          {/* <div className="meetup-user">
            by {detail.user.name}<img className="user-thumbnail circle" src={detail.user.photo}/>
          </div> */}
          <div className="meetup-summary">{detail.summary}</div>
        </div>

        <div className="row meetup-box">
          <div className="col s12 m5">
            <img className="meetup-thumbnail img-responsive" src={detail.cover_image_url}/>
          </div>
          <div className="col s12 m7">
            <table>
              <tbody>
              <tr>
                <td>모임 기간</td>
                <td>{moment(detail.started_at).format('YYYY-MM-DD A hh:mm')} ~ {moment(detail.ended_at).format('YYYY-MM-DD A hh:mm')}</td>
              </tr>
              <tr>
                <td>장소</td>
                <td>{detail.location}</td>
              </tr>
              {/* <tr>
                <td>참가 인원</td>
                <td>{detail.number}</td>
              </tr> */}
              <tr>
                <td>모집 방법</td>
                <td>{detail.choice_type}</td>
              </tr>
              </tbody>
            </table>
            <div className="row">
              <button className="waves-effect waves-light btn">모임 참가하기</button>
            </div>
          </div>


          <div className="col s12">
            <h2>내용</h2>
            <div className="meetup-contents">
              { marked(detail.content) }
            </div>
          </div>
          <div className="col s12">
            <h2>확정자</h2>
            <div>{this.renderUserConfirmed()}</div>
            <h2>대기자</h2>
            <div>{this.renderUserWaiting()}</div>
          </div>

        </div>
      </div>
    );
  }
}

export default MeetupDetail;
