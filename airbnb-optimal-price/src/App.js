import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'

//Components
import LogUp from './components/LogUp'
import Users from './components/user'
import Home from './listings/HomePage'



function App() {
  return (
    <div className="App">

       <Router>
        <Switch>
          <Route exact  path='/' component={LogUp}/>
          <PrivateRoute exact path='/host/:id/properties' component={Users}/>
          <Route exact path="/host/:id/home" component={Home} />
        </Switch>
      </Router> 

    </div>
  );
}

export default App;
