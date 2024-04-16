import { useDispatch } from "react-redux";
import { setContactsFilter } from "../../redux/actions";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const name = evt.target.value;
    console.log(name);
    dispatch(setContactsFilter(name));
  };

  return (
    <div>
      <label>
        Find contacts
        <input
          type="text"
          placeholder="enter name..."
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default SearchBox;
