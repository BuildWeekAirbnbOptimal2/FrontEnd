import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'

//Components
import LogUp from './components/LogUp'

// import AllListings from './listings/AllListings'
import Users from './components/user'

// import HomePage from './listings/HomePage';



function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact  path='/login' component={LogUp}/>
          <PrivateRoute exact path='/' component={Users}/>
          <Route exact path="/host/:id/properties" component={Users} />
        </Switch>
      </Router>

      {/* <LogUp />
      <HomePage/> */}

    </div>
  );
}

export default App;
