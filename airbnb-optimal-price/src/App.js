import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'

//Components
import LogUp from './components/LogUp'



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

    </div>
  );
}

export default App;
