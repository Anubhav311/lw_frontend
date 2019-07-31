import React from 'react';
import ReactDOM from "react-dom";
import {withRouter, Router, Route, Switch, Redirect} from 'react-router-dom';
import history from './history';

import './App.css';
import LandingPage from './components/LandingPage'
import ApplicationForm from './components/ApplicationForm';


function App() {
  return (
    <Router className="App" history={history}>
      <Route exact path="/" component={LandingPage}/>
      <Route path="/apply" component={ApplicationForm}/>
    </Router>
  );
}

export default App;
