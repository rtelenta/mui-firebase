import React from "react";
import { Route } from "react-router-dom";
import { routes } from "./routing";
import Home from "pages/Home";

function PublicApp() {
  return <Route path={routes.home} component={Home} />;
}

export default PublicApp;
