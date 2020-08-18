import React from "react";
import Home from "./onepirate/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Report from "./wizard/Report";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/tip">
            <Report />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
