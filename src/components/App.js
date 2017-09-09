import React, { Component } from 'react';
import { Link, NavLink, Route, Switch } from 'react-router-dom'
import MeetupDetail from '../containers/MeetupDetail'
import Home from '../containers/Home'
import MeetupForm from '../containers/MeetupForm';
import Registration from '../containers/Registration';
import LoginForm from '../containers/Login';
import MeetupAttendee from '../containers/MeetupAttendee';
import '../static/styles/App.less';
import Logo from '../static/img/logo.png';

class App extends Component {
  render() {
    return (
      <section>
        <nav className="main-nav white" role="navigation">
          <div className="nav-wrapper container">
            <Link id="logo-container" to="/" className="brand-logo">
              <img src={ Logo } alt="logo" className="logoImg img-responsive"/>
            </Link>
            <ul className="right hide-on-med-and-down">
              <li><NavLink exact to="/">홈</NavLink></li>
              <li><NavLink exact to="/signup">회원가입</NavLink></li>
              <li><NavLink exact to="/login">로그인</NavLink></li>
            </ul>
            <ul id="nav-mobile" className="side-nav">
              <li><NavLink exact to="/">홈</NavLink></li>
              <li><NavLink exact to="/signup">회원가입</NavLink></li>
              <li><NavLink exact to="/login">로그인</NavLink></li>
            </ul>
            <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
          </div>
        </nav>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/meetups/:id" component={MeetupDetail}/>
          <Route exact path="/meetups/:id/attendees" component={MeetupAttendee}/>
          <Route exact path="/new" component={MeetupForm}/>
          <Route exact path="/signup" component={Registration}/>
          <Route exact path="/login" component={LoginForm}/>
        </Switch>

        <footer className="page-footer transparent">
            <div className="container">
              <p>chainazo © 2017 <a href="#">Github</a></p>
            </div>
        </footer>
      </section>
    );
  }
}

export default App;
