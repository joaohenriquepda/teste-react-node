import React, { Component }  from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./Services/auth";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/Login/Login";


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
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={SignUp} />
      {/* <PrivateRoute path="/app" component={Timeline} /> */}
      {/* <PrivateRoute path="/profile" component={Profile} /> */}
      {/* <PrivateRoute path="/post" component={Postagem} /> */}
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
