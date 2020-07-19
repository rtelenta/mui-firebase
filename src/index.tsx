import React from "react";
import ReactDOM from "react-dom";
import RootApp from "./routes";
import * as serviceWorker from "./serviceWorker";
import CssBaseline from "@material-ui/core/CssBaseline";
import { UserProvider } from "state/user/context";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <CssBaseline />
      <RootApp />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
