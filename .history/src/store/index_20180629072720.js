// Créer un Store à partir de la combinaison de Reducers
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";

// Configurer notre arbre de vérite = Store
export default function configureStore() {
  return createStore(
    rootReducer,
    //applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  //applyMiddleware(thunk)
  // Synchronise le Debuger Chrome Devtools Redux
}
