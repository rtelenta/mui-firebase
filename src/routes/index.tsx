import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateApp from "./PrivateApp";
import PublicApp from "./PublicApp";
import useUser from "state/user/useUser";

function RootApp() {
  const { user } = useUser();

  return (
    <Router>
      <Route render={() => (user ? <PrivateApp /> : <PublicApp />)} />
    </Router>
  );
}

export default RootApp;
