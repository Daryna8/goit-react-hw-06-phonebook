import { actionTypes } from './actionTypes';

const initialState = {
  contacts: [],
  filter: '',
};

export const phonebookReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.addContact:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case actionTypes.deleteContact:
      const deleteId = action.payload;
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== deleteId),
      };
    default:
      return state;
  }
};
