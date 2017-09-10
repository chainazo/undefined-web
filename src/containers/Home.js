import React, { Component } from 'react';
import axios from 'axios';
import Meetup from '../components/Meetup';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      meetupList: [],
      after: 0
    };

    this.fetchMeetupList = this.fetchMeetupList.bind(this);
  }

  componentDidMount () {
    this.fetchMeetupList();
  }

  fetchMeetupList() {
    const oldList = this.state.meetupList;

    axios.get(`/meetups?count=9${this.state.after ? `&after=${this.state.after}` : ''}`)
      .then(res => {
        this.setState({
          meetupList: [ ...oldList, ...res.data.data ],
          after: res.data.paging.after
        });
      });
  }

  renderMeetup () {
    console.log(this.state.meetupList[0]);
    return this.state.meetupList.map(meetup => (
      <div className="col s6 m4">
        <Meetup key={meetup.id} meetup={meetup}/>
      </div>
    ));
  }

  render () {
    return (
      <div>
        <section>
          <div className="intro section no-pad-bot push-section-up" id="index-banner">
            <div className="container">
              <div className="search-container">
                <input id="moimSearch" className="browser-default" type="search" placeholder="원하는 주제로, 새로운 사람과."/>
                <div className="search-btn-container">
                  <i className="material-icons">&#xE8B6;</i>
                  <i className="material-icons">&#xE878;</i>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="moim-list-section">
          <div className="container">
            <div className="row">
              { this.renderMeetup() }
            </div>
            <div className="center-align">
            <button
              className="waves-effect waves-light btn"
              onClick={this.fetchMeetupList}>
              더 불러오기
            </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
