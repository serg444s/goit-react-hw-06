import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactsForm/ContactsForm";
import SearchBox from "../SearchBox/SearchBox";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="title">My phonebook</h1>
      <div className="container">
        <div className="phone">
          <div>
            <ContactForm />
            <SearchBox />
            <ContactList />
          </div>
          <div className="bottom"></div>
        </div>
      </div>
    </>
  );
}

export default App;
