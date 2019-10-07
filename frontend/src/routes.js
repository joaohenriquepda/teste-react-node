import React, { Component }  from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./Services/auth";
import Signup from "./Components/Signup/Signup";


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );

  const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route path="/signup" component={Signup} />
      </Switch>
    </BrowserRouter>
  );
  
  export default Routes;