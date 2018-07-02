// Créer un Store à partir de la combinaison de Reducers
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Configurer notre arbre de vérite = Store
export default function configureStore() {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
  //applyMiddleware(thunk)
  // Synchronise le Debuger Chrome Devtools Redux
}
