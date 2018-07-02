import { CARD_ADD, CARD_REMOVE } from "../constants";

// Toutes les actions utilisateurs sur l'UI

// remove
export const removeCardAction = id => dispatch => {
  return dispatch({ type: CARD_REMOVE, id });
};

// add
export const addCardAction = id => dispatch => {
  return dispatch({ type: CARD_ADD, id });
};
