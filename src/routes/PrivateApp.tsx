import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { routes } from "./routing";
import Dashboard from "pages/Dashboard";

function PrivateApp() {
  return (
    <Router>
      <Route path={routes.home} exact component={Dashboard} />
    </Router>
  );
}

export default PrivateApp;
