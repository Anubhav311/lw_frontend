import React from 'react';
import ReactDOM from "react-dom";

import './App.css';
import LandingPage from './components/LandingPage'
import ApplicationForm from './components/ApplicationForm';


function App() {
  return (
    <div className="App">
      <LandingPage/>
      <ApplicationForm/>
    </div>
  );
}

export default App;
