import React from "react";
import { Route, Switch } from "react-router-dom";
//Components
import NavBar from "./navigation/NavBar";
import FormIndex from "./components/FormIndex";


function App() {
  return (
    <div className="App">
      <Switch>
        <NavBar />
      </Switch>
      <FormIndex />
    </div>
  );
}

export default App;
