import { MESSAGES_LIST, MESSAGES_REMOVE, MESSAGES_ADD } from "../constants";

// Toutes les actions utilisateurs sur l'UI

export const getMessagesAction = () => dispatch => {
  return dispatch({
    type: MESSAGES_LIST
  });
};

export const removeAction = id => dispatch => {
  return dispatch({
    type: MESSAGES_REMOVE,
    id
  });
};

export const addAction = id => dispatch => {
  return dispatch({
    type: MESSAGES_ADD,
    text
  });
};
