import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import data from './data';

const initialState = {
  contacts: data
}

  const contactReducer = (state = initialState, action) => {
      switch(action.type){
          default:
              return state;
      }
  }


  const store = createStore(contactReducer, composeWithDevTools());

  export default store;