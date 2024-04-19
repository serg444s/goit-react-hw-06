import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const value = evt.target.value;
    dispatch(changeFilter(value));
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
