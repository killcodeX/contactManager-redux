// global state
import data from "../data";
import { Add, GET, UPDATE } from "../actions/actionContants";

const initialState = {
  contacts: data,
  contact: null,
};

// Reducers
const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case Add:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };

    case GET:
      let arr = state.contacts.filter(
        (contact) => contact.id == action.payload
      );
      arr = arr.values();
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        contact: arr,
      };

    case UPDATE:
      return {
        ...state,
        contacts: state.contacts.map(contact => contact.id == action.payload.id? action.payload : contact),
      };
    default:
      return state;
  }
};

export default contactReducer;
