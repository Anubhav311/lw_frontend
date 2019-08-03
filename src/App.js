import React from 'react';
import ReactDOM from "react-dom";
import {withRouter, Router, Route, Switch, Redirect} from 'react-router-dom';
import history from './history';
import { Link } from 'react-router-dom';

import './App.css';
import LandingPage from './components/LandingPage/LandingPage'
import ApplicationForm from './components/ApplicationForm/ApplicationForm';
import Login from './components/Login/Login';


function App() {
  return (
    <Router className="App" history={history}>
      <nav className="navbar">
        <Link to="/"><p className="logo">LinkWork</p></Link>
        <ul className="landing-page-navbuttons">
          <Link to="/apply"><li>Apply</li></Link>
          {/* <li>FAQs</li> */}
          <Link to="/login"><li>Login</li></Link>
        </ul>
      </nav>
      <Route exact path="/" component={LandingPage}/>
      <Route path="/apply" component={ApplicationForm}/>
      <Route path="/login" component={Login}/>
    </Router>
  );
}

export default App;
