import { nanoid } from 'nanoid';
import css from './SearchBox.module.css';

export default function SearchBox({ handleFilter }) {
  const contactSearch = nanoid();

  return (
    <div className={css.searchWrapper}>
      <label htmlFor={contactSearch}>Find contacts by name</label>
      <input
        type="text"
        name="contactSearch"
        id={contactSearch}
        onChange={handleFilter}
      />
    </div>
  );
}
