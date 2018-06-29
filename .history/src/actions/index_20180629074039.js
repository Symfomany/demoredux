import { MESSAGES_LIST } from "../constants";

// Toutes les actions utilisateurs sur l'UI

export const getMessagesAction = () => dispatch => {
  return dispatch({
    type: MESSAGES_LIST
  });
};
