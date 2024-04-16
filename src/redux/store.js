import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { combineReducers } from "redux";

const contactsInitialState = [
  { id: 0, name: "Learn HTML and CSS", number: "0502554" },
  { id: 1, name: "Get good at JavaScript", number: "52452244" },
  { id: 2, name: "Master React", number: "234324" },
  { id: 3, name: "Discover Redux", number: "9789789" },
  { id: 4, name: "Build amazing apps", number: "8797865" },
];

const filterInitialState = {
  name: "",
};

const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case "contacts/addContact":
      return [...state, action.payload];

    case "contacts/deleteContact":
      return state.filter((contact) => contact.id !== action.payload);
    default:
      return state;
  }
};

const filtersReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case "filters/setContactsFilter":
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
