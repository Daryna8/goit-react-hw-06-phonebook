import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const phonebookSlice = createSlice({
  name: 'phonebookData',
  initialState,
  reducers: {
    addContact: (state, { payload }) => {
      state.contacts.push(payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts?.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = phonebookSlice.actions;
export const phonebookReducer = phonebookSlice.reducer;
