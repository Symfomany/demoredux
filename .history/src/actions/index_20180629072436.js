import { MESSAGES_LIST } from "../constants";

// Toutes les actions utilisateurs sur l'UI

export const getMessagesAction = dispatch => {
  dispatch({
    type: MESSAGES_LIST
  });
};
