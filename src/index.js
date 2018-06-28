import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";
import configureStore from "./store";

// Le provider de redux va fournir le Store pour l'ensemble de nos
// composants
ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
