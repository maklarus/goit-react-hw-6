import css from './Contact.module.css';

export default function Contact({ data: { id, name, number }, deleteHandler }) {
  return (
    <div className={css.cardWrapper}>
      <div className={css.cardStyle}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button className={css.deleteBtn} onClick={() => deleteHandler(id)}>
        DELETE
      </button>
    </div>
  );
}
