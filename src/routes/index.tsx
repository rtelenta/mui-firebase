import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateApp from "./PrivateApp";
import PublicApp from "./PublicApp";

function RootApp() {
  return (
    <Router>
      <Route render={() => (false ? <PrivateApp /> : <PublicApp />)} />
    </Router>
  );
}

export default RootApp;
