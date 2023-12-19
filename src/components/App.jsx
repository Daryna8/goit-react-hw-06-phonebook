// import React, { useEffect } from 'react';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import s from './PhoneBook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  deleteContact,
  setFilter,
} from '../redux/phonebook/phonebookSlice';

export const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.phonebookData.contacts);
  const filter = useSelector(state => state.phonebookData.filter);

  const handleChangeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleAddContact = newContact => {
    if (contacts.map(c => c.name).includes(newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={s.phonebook}>
      <h1>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />

      <div className={s.contacts}>
        <h2>Contacts</h2>
        <Filter filter={filter} handleChangeInput={handleChangeFilter} />
        <ContactList
          filteredContacts={filteredContacts}
          handleDeleteContact={handleDeleteContact}
        />
      </div>
    </div>
  );
};
