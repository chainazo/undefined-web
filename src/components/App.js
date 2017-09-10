import React, { Component } from 'react';
import { Link, NavLink, Route, Switch, Redirect } from 'react-router-dom'
import axios from 'axios';
import MeetupDetail from '../containers/MeetupDetail'
import Home from '../containers/Home'
import MeetupForm from '../containers/MeetupForm';
import Registration from '../containers/Registration';
import LoginForm from '../containers/Login';
import MeetupAttendee from '../containers/MeetupAttendee';
import '../static/styles/App.less';
import Logo from '../static/img/logo.png';

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null
    };

    this.setUser = this.setUser.bind(this);
  }

  setUser(user) {
    this.setState({ user });
    window.localStorage.setItem('Authorization', user.authenticate_token);
    axios.defaults.headers.common['Authorization'] = user.authenticate_token;
  }

  renderNavMenu() {
    return this.state.user
      ?
        <ul className="right hide-on-med-and-down">
          <li><NavLink exact to="/">홈</NavLink></li>
          <li><NavLink exact to="/new">모임 만들기</NavLink></li>
        </ul>
      :
        <ul className="right hide-on-med-and-down">
          <li><NavLink exact to="/signup">회원가입</NavLink></li>
          <li><NavLink exact to="/login">로그인</NavLink></li>
        </ul>;
  }

  renderMobileMenu() {
    return this.state.user
      ?
        <ul id="nav-mobile" className="side-nav">
          <li><NavLink exact to="/">홈</NavLink></li>
          <li><NavLink exact to="/new">모임 만들기</NavLink></li>
        </ul>
      :
        <ul id="nav-mobile" className="side-nav">
          <li><NavLink exact to="/signup">회원가입</NavLink></li>
          <li><NavLink exact to="/login">로그인</NavLink></li>
        </ul>;
  }

  render() {
    return (
      <section>
        <nav className="main-nav white" role="navigation">
          <div className="nav-wrapper container">
            <Link id="logo-container" to="/" className="brand-logo">
              <img src={ Logo } alt="logo" className="logoImg img-responsive"/>
            </Link>
            { this.renderNavMenu() }
            { this.renderMobileMenu() }
            <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
          </div>
        </nav>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/meetups/:id" component={MeetupDetail}/>
          <Route exact path="/meetups/:id/attendees" component={MeetupAttendee}/>
          <Route exact path="/new" render={(props) => (
            this.state.user
              ? <MeetupForm { ...props }/>
              : <Redirect to="/"/>
          )}/>
          <Route exact path="/signup" render={(props) => (
            this.state.user
              ? <Redirect to="/"/>
              : <Registration
                  { ...props }
                  onSignup={(user) => this.setUser(user)}
                />
          )}/>
          <Route exact path="/login" render={(props) => (
            this.state.user
              ? <Redirect to="/"/>
              : <LoginForm
                  { ...props }
                  onLogin={(user) => this.setUser(user)} />
          )}/>
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
