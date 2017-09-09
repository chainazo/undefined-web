import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moim from '../components/Moim';
import { fetchMeetupDetail } from '../actions/index';
// import { marked } from 'react-marked';
import marked from 'react-marked';
import Avatar from '../static/img/avatar.jpg';



class MeetupDetail extends Component {
  constructor (props) {
    super(props);
    this.state = {
      detailId: this.props.match.params.id,
    };
  }

  componentDidMount() {
    this.props.fetchMeetupDetail(this.state.detailId);
  }

  renderMoim = () => {
    return this.props.meetupDetail.map((moim) => {
      return <li key={moim.id}><Moim moimData={moim}/></li>;
    });
  };

  renderUserConfirmed = () => {
    return this.props.meetupDetail.confirmedList.map((user) => {
      return (
        <div className="chip" key={user.name}>
          <img src={Avatar} alt="Contact Person"/>{user.name}
        </div>
      )
    });
  };

  renderUserWaiting = () => {
    return this.props.meetupDetail.waitingList.map((user) => {
      return (
        <div className="chip" key={user.name}>
          <img src={Avatar} alt="Contact Person"/>{user.name}
        </div>
      )
    });
  };

  getMarkdownText() {
    var rawMarkup = marked('This is _Markdown_.', {sanitize: true});
    return { __html: rawMarkup };
  }

  render () {
    let detail = this.props.meetupDetail;
    return (
      <div className="container container-body">
        <div className="meetup-title-section">
          <div className="meetup-title">{detail.title}</div>
          <div className="meetup-user">
            by {detail.user.name}<img className="user-thumbnail circle" src={detail.user.photo}/>
          </div>
          <div className="meetup-summary">{detail.summary}</div>
        </div>

        <div className="row meetup-box">
          <div className="col s12 m5">
            <img className="meetup-thumbnail img-responsive" src={detail.thumbnail}/>
          </div>
          <div className="col s12 m7">
            <table>
              <tbody>
              <tr>
                <td>모임 일자</td>
                <td>{detail.date}</td>
              </tr>
              <tr>
                <td>등록 기간</td>
                <td>2017년 9월 1일 12:00 ~ 2017년 9월 7일 6:00</td>
              </tr>
              <tr>
                <td>장소</td>
                <td>{detail.location}</td>
              </tr>
              <tr>
                <td>참가 인원</td>
                <td>{detail.number}</td>
              </tr>
              <tr>
                <td>모집 방법</td>
                <td>{detail.type}</td>
              </tr>
              </tbody>
            </table>
          </div>


          <div className="col s12">
            <h2>내용</h2>
            <div className="meetup-contents">
              { marked(detail.contents) }
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

export default connect((state) => {
  return {
    meetupDetail: state.lists.meetupDetail
  };
}, { fetchMeetupDetail })(MeetupDetail);
