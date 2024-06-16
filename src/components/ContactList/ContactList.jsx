import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { deleteContact, selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filterName = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterName.toLowerCase())
  );

  const deleteHandler = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.cardList}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={css.cardListItem}>
          <Contact contact={contact}></Contact>
          <button
            className={css.deleteBtn}
            onClick={() => deleteHandler(contact.id)}
          >
            DELETE
          </button>
        </li>
      ))}
    </ul>
  );
}
