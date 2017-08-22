// @flow

import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

if (process.env.NODE_ENV === "production") {
  require("loggly-jslogger");
}

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
