import {Add, GET, UPDATE, DELETE, SELECT, CLEAR, DELETEALL} from './actionContants';
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
  
  export const deleteContact = (id) => ({
    type: DELETE,
    payload : id
  })

  export const selectContact = (id) => ({
    type: SELECT,
    payload : id
  })

  export const clearContact = () => ({
    type:  CLEAR,
  })

  export const deleteAllContact = () => ({
    type:   DELETEALL,
  })
  
  