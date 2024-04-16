import { useDispatch } from "react-redux";
import { addContact } from "../../redux/actions";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value;
    dispatch(addContact(name, number));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" />
      </label>

      <label>
        Number
        <input type="number" name="number" />
      </label>

      <button type="submit"> Add contact</button>
    </form>
  );
};

export default ContactForm;
