import React, { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import s from './PhoneBook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../redux/phonebook/selectors';
import { addContact, deleteContact } from '../redux/phonebook/actions';

export const App = () => {
  // const [contacts, setContacts] = useState([]);
  const contacts = useSelector(selectContacts);
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      // dispatch(setContacts(JSON.parse(savedContacts)))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

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

  const filteredContacts = getFilteredContacts();
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
