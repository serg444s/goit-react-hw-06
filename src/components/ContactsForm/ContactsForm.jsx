import { useDispatch } from "react-redux";
import { addContact } from "../../redux/actions";
import css from "./ContactsForm.module.css";

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
    <form onSubmit={handleSubmit} className={css.form}>
      <input type="text" name="name" placeholder="Name" className={css.input} />
      <input
        type="number"
        name="number"
        placeholder="Number"
        className={css.input}
      />
      <button type="submit" className={css.btn}>
        Add
      </button>
    </form>
  );
};

export default ContactForm;
