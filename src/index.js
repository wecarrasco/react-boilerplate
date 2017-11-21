// @flow

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import store, { history } from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./containers/App";
// $FlowFixMe
import registerServiceWorker from "./registerServiceWorker";
import appSagas from "./containers/App/sagas";
import LanguageProvider from "./containers/LanguageProvider";
import i18n from "./i18n";

import { addLocaleData } from "react-intl";
// $FlowFixMe
import en from "react-intl/locale-data/en";
// $FlowFixMe
import es from "react-intl/locale-data/es";

addLocaleData([...en, ...es]);

if (process.env.NODE_ENV === "production") {
  require("loggly-jslogger");
}

// $FlowFixMe
appSagas.map(store.runSaga);
ReactDOM.render(
  <Provider store={store}>
    <LanguageProvider messages={i18n.messages}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </LanguageProvider>
  </Provider>,
  // $FlowFixMe
  document.getElementById("root")
);
registerServiceWorker();
