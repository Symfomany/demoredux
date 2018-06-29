import { MESSAGES_LIST } from "../constants";

// State initial pour le Reducers des messagges
const initialState = {
  messages: [
    { id: 1, content: "Mon Premier Message" },
    { id: 2, content: "Mon Second Message" },
    { id: 3, content: "Mon Troisième Message" }
  ]
};

// Reducer =  State + Action

export default (state = initialState, action) => {
  switch (action.type) {
    case MESSAGES_LIST:
      return state;
    default:
      return state;
  }
};
