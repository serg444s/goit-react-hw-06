import { FaPhone, FaUser } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/actions";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div>
      <p>
        <FaUser />
        Name: {contact.name}
      </p>
      <p>
        <FaPhone />
        Number: {contact.number}
      </p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
