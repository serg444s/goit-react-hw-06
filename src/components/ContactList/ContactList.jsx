import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const filters = useSelector((state) => state.filters.name);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <div>
      <ul>
        {visibleContacts.map((contact) => {
          return (
            <li key={contact.id}>
              <Contact contact={contact} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
