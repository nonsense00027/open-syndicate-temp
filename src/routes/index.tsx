import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Landing from "pages/Landing";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Landing />} />
      </Switch>
    </Router>
  );
}

export default Routes;
