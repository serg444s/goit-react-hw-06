import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactsForm/ContactsForm";
import SearchBox from "../SearchBox/SearchBox";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
