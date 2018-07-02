import { CARD_ADD, CARD_REMOVE } from "../constants";

// Toutes les actions utilisateurs sur l'UI

export const removeCardAction = id => dispatch => {
  return dispatch({ type: MESSAGES_REMOVE, id });
};

// add
export const addCardAction = id => dispatch => {
  return dispatch({
    type: MESSAGES_ADD,
    text
  });
};
