import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { setContactsFilter } from "../../redux/filtersSlice";

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
