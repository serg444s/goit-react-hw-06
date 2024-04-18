import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactsForm/ContactsForm";
import SearchBox from "../SearchBox/SearchBox";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/selectors";

import "./App.css";

function App() {
  const contacts = useSelector(selectContacts);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <h1 className="title">My phonebook</h1>
      <div className="container">
        <div className="phone">
          <div>
            <ContactForm />
            <SearchBox />
            {contacts.length > 0 ? (
              <ContactList />
            ) : (
              <p>There are no contacts...</p>
            )}
          </div>
          <div className="bottom"></div>
        </div>
      </div>
    </>
  );
}

export default App;
