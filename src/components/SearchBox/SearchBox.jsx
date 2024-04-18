import { useDispatch } from "react-redux";
import { setContactsFilter } from "../../redux/actions";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const value = evt.target.value;
    dispatch(setContactsFilter(value));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Find contact"
        onChange={handleChange}
        className={css.input}
      />
    </div>
  );
};

export default SearchBox;
