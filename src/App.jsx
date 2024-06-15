import './App.css';
import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

export default function App() {
  const initialData = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const getInitialContacts = () => {
    const savedContacts = localStorage.getItem('Contacts');
    return savedContacts !== null ? JSON.parse(savedContacts) : initialData;
  };

  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  const handleFilter = event => {
    setFilter(event.target.value);
  };

  const visibleContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteHandler = id => {
    setContacts(contacts.filter(item => item.id !== id));
  };

  const onAddContact = newObj => {
    setContacts([...contacts, newObj]);
  };

  useEffect(() => {
    localStorage.setItem('Contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox handleFilter={handleFilter} />
      <ContactList data={visibleContacts} onDelete={deleteHandler} />
    </div>
  );
}
