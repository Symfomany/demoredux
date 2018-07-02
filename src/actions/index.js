import {
  MESSAGES_LIST,
  MESSAGES_REMOVE,
  MESSAGES_ADD,
  MESSAGES_ENABLE
} from "../constants";

// Toutes les actions utilisateurs sur l'UI
// Action Utilisateur de lister les messages
export const getMessagesAction = () => dispatch => {
  return dispatch({
    type: MESSAGES_LIST
    // payload: parametres optionnels
  });
};

export const removeMessagesAction = id => dispatch => {
  return dispatch({
    type: MESSAGES_REMOVE,
    id
    // payload: parametres optionnels
  });
};

// le dispatch conclut une action
export const addMessagesAction = text => dispatch => {
  return dispatch({
    type: MESSAGES_ADD,
    text
    // payload: parametres optionnels
  });
};

// le dispatch conclut une action
export const enableMessagesAction = id => dispatch => {
  return dispatch({
    type: MESSAGES_ENABLE,
    id
    // payload: parametres optionnels
  });
};
