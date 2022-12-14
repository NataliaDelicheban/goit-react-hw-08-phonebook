import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Container from './Container/Container';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import {Filter} from './Filter/Filter';

import { fetchContacts, addContact, removeContact } from 'redux/contacts/contacts-operations';
import { setFilter } from 'redux/filter/filter-actions';

import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';

import css from "../MyContacts/my-contacts.module.css";

const MyContacts =() => {
  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  const onAddContact = (payload) => {
    dispatch(addContact(payload));
  };

  const onRemoveContact = (id) => {
    dispatch(removeContact(id));
  }

  const onSetFilter = ({target}) => {
    dispatch(setFilter(target.value));
  }

    return (
      <div className={css.contacts}>
        <Container title='Create New Contact'>
        {/* <h1>Phonebook</h1> */}
        <ContactForm onSubmit={onAddContact} />
        </Container>
        <Container title='Contacts'>
        {/* <h2>Contacts</h2> */}
        <Filter onChange={onSetFilter} value={filter} />
        <ContactList contacts={contacts} removeContact={onRemoveContact} />
        </Container>
      </div>
    );
}

export default MyContacts;