import React from 'react';
import {Route, Switch} from 'react-router-dom';
//Components
import NavBar from './navigation/NavBar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import FormIndex from './components/FormIndex';
function App() {
  return (
      <div className="App">
         <Switch>
           <Route path='/src/components/Login'  component={Login} />
           <Route path='/src/components/SignUp' component={SignUp}/>
           <NavBar />
         </Switch>
           <FormIndex />
      </div>
    
  );
}

export default App;
