import { actionTypes } from './actionTypes';

export const addContact = newContact => ({
  type: actionTypes.addContact,
  payload: newContact,
});

export const deleteContact = id => ({
  type: actionTypes.deleteContact,
  payload: id,
});
