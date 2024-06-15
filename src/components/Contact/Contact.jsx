import css from './Contact.module.css';

export default function Contact({ contact }) {
  return (
    <div className={css.cardWrapper}>
      <div className={css.cardStyle}>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
    </div>
  );
}
