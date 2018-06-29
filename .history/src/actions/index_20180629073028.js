import { MESSAGES_LIST } from "../constants";

// Toutes les actions utilisateurs sur l'UI

export const getMessagesAction = () => dispatch => {
  console.log("laaa");
  dispatch({
    type: MESSAGES_LIST
  });
};
