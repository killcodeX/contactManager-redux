import {Add, GET, UPDATE} from './actionContants';
// actions

export const addContact = (contact) => {
    return {
      type: Add ,
      payload: contact,
    };
  };


  export const getContact = (id) => ({
    type: GET,
    payload : id
  })

  export const updateContact = (contact) => ({
    type: UPDATE,
    payload : contact
  })
  
  