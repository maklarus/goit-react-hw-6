import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({ data, onDelete }) {
  return (
    <ul className={css.cardList}>
      {data.map(item => (
        <li key={item.id} className={css.cardListItem}>
          <Contact
            data={item}
            setContacts={onDelete}
            deleteHandler={onDelete}
          ></Contact>
        </li>
      ))}
    </ul>
  );
}
