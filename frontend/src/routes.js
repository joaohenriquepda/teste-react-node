import React, { Component }  from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./Services/auth";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/Login/Login";
import Timeline from "./Components/Timeline/Timeline"
import Profile from "./Components/Profile/Profile"
import Post from "./Components/Post/Post"


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
      <PrivateRoute path="/app" component={Timeline} />
      <PrivateRoute path="/profile" component={Profile} />
      <PrivateRoute path="/post" component={Post} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
