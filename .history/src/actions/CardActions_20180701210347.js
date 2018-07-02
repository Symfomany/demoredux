import { CARD_ADD, CARD_REMOVE } from "../constants";

// Toutes les actions utilisateurs sur l'UI

export const removeCardAction = id => dispatch => {
  return dispatch({ type: MESSAGES_REMOVE, id });
};

export const addCardAction = text => dispatch => {
  return dispatch({
    type: MESSAGES_ADD,
    text
  });
};
