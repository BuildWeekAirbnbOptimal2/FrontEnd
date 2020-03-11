import React, { useState } from "react";
import { Route, Switch} from "react-router";
import { IdContext } from "./contexts/IdContext";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import HomePage from "./listings/HomePage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [loginState, setLoginState] = useState("");
  const [id, setId] = useState("");

  return (
    <IdContext.Provider value={{ loginState, setLoginState, id, setId }}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <PrivateRoute exact path="/homepage" component={HomePage} />
        </Switch>
      </div>
    </IdContext.Provider>
  );
}

export default App;
