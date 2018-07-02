import { CARD_REMOVE, CARD_ADD } from "../constants";

// State initial pour le Reducers des messagges
const initialState = {
  card: []
};

// Reducer =  State + Action

export default (state = initialState, action) => {
  switch (action.type) {
    case CARD_REMOVE:
      return initialState;

    case CARD_ADD:
      const addCard = [
        ...state.card,
        { id: state.messages.length + 1, content: action.text }
      ];
      return { card: addCard };

    default:
      return initialState;
  }
};
