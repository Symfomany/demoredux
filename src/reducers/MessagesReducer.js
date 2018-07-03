import { MESSAGES_LIST } from "../constants";

// State initial pour le Reducers des messagges
const initialState = {
  messages: [
    { id: 1, content: "Mon Premier Message", enabled: false },
    { id: 2, content: "Mon Second Message", enabled: false },
    { id: 3, content: "Mon Troisième Message", enabled: false }
  ]
};

// Reducer =  State + Action

export default (state = initialState, action) => {
  switch (action.type) {
    case MESSAGES_LIST:
      return initialState;
    default:
      return {
        messages: []
      };
  }
};
