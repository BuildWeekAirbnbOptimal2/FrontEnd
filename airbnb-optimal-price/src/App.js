import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Components
import LogUp from './components/LogUp'
import HomePage from './listings/HomePage';


function App() {
  return (
    <div className="App">
      <LogUp />
      <HomePage/>
    </div>
  );
}

export default App;
