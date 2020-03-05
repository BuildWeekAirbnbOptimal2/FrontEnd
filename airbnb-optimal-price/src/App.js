import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'

//Components
import LogUp from './components/LogUp'
import AllListings from './listings/AllListings'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute exact path='/listings' component={AllListings}/>
          <Route  path='/' component={LogUp}/>
          <LogUp />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
