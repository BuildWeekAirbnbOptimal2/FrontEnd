import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Components
import LogUp from './components/LogUp'
import ListingsPage from './listings/ListingsPage';


function App() {
  return (
    <div className="App">
      <LogUp />
      {/* <ListingsPage/> */}
    </div>
  );
}

export default App;
