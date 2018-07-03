import { MESSAGES_LIST } from "../constants";

// Toutes les actions utilisateurs sur l'UI
// Action Utilisateur de lister les messages
export const getMessagesAction = () => dispatch => {
  return dispatch({
    type: MESSAGES_LIST
    // payload: parametres optionnels
  });
};
