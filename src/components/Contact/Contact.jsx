import { FaPhone, FaUser } from "react-icons/fa6";

const Contact = ({ contact }) => {
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
      <button type="button" onClick={() => {}}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
