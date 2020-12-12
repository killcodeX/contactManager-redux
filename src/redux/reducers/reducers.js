// global state
import data from '../data';

const initialState = {
    contacts: data,
    counter: 0,
    value: "xyz",
  };




// Reducers
const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_CONTACT":
        return {
          ...state,
          contacts: [action.payload, ...state.contacts],
        };
      default:
        return state;
    }
  };



  export default contactReducer;