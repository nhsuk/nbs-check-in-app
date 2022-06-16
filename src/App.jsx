import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Main } from "./Main";
import { LocationIndicator } from "./LocationIndicator";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <h1>Hello</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/about">
          <p>about</p>
        </Route>
        <Route path="/users">
          <p>users</p>
        </Route>
        <Route path="/">
          <p>home</p>
        </Route>
      </Switch>
    </Router>
  );
};
