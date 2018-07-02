import {
  MESSAGES_LIST,
  MESSAGES_REMOVE,
  MESSAGES_ADD,
  MESSAGES_ENABLE
} from "../constants";

// Toutes les actions utilisateurs sur l'UI

export const getMessagesAction = () => dispatch => {
  return dispatch({
    type: MESSAGES_LIST
  });
};

export const searchAction = texte => dispatch => {
  return dispatch({ type: MESSAGES_SEARCH, texte });
};

export const removeAction = id => dispatch => {
  return dispatch({
    type: MESSAGES_REMOVE,
    id
  });
};

export const enableAction = id => dispatch => {
  return dispatch({ type: MESSAGES_ENABLE, id });
};

export const addAction = text => dispatch => {
  return dispatch({
    type: MESSAGES_ADD,
    text
  });
};
