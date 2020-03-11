import React from "react";
import { Route, Redirect } from "react-router";
import { IdContext } from "../contexts/IdContext";

const PrivateRoute = ({ component: Component, ...stuff }) => {
  return (
    <Route
      {...stuff}
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;