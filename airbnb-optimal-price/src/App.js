import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'

//Components
import LogUp from './components/LogUp'
<<<<<<< HEAD
import AllListings from './listings/AllListings'
import Users from './components/user'
=======
import HomePage from './listings/HomePage';

>>>>>>> a19d5404573ae2fe6b75ec4f804f0baf587a8a8c

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Router>
        <Switch>
          <Route exact  path='/login' component={LogUp}/>
          <PrivateRoute exact path='/' component={Users}/>
          <Route exact path="/host/:id/properties" component={Users} />
        </Switch>
      </Router>
=======
      <LogUp />
      <HomePage/>
>>>>>>> a19d5404573ae2fe6b75ec4f804f0baf587a8a8c
    </div>
  );
}

export default App;
