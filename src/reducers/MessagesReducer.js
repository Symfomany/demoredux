import {
  MESSAGES_LIST,
  MESSAGES_REMOVE,
  MESSAGES_ADD,
  MESSAGES_ENABLE
} from "../constants";

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
    case MESSAGES_REMOVE:
      return {
        messages: state.messages.filter(elt => elt.id !== action.id)
      };
    case MESSAGES_ENABLE:
      const tab = [...state.messages];
      const index = tab.findIndex(elt => elt.id === action.id);
      tab[index].enable = true;
      return {
        messages: tab
      };
    case MESSAGES_ADD:
      return {
        messages: [
          ...state.messages,
          { id: state.messages.length + 1, content: action.text }
        ]
      };
    default:
      return {
        messages: []
      };
  }
};
