import { MESSAGES_LIST } from "../constants";

// Toutes les actions utilisateurs sur l'UI

export const getMessagesAction = () => dispatch => {
  return {
    type: MESSAGES_LIST
  };
};
