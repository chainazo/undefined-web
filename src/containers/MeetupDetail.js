import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moim from '../components/Moim';
import { fetchMeetupDetail } from '../actions/index';

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

  render () {
    let detail = this.props.meetupDetail;
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m4">
            <img className="moim-thumbnail" src={detail.thumbnail}/>
          </div>
          <div className="col s12 m8">
            <div className="meetup-title">{detail.title}</div>
            <div className="meetup-summary">{detail.summary}</div>
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
