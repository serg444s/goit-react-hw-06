import { contactsInitialState, filterInitialState } from "./constants";
import { addContact, deleteContact, setContactsFilter } from "./actions";

export const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case addContact.type:
      return [...state, action.payload];

    case deleteContact.type:
      return state.filter((contact) => contact.id !== action.payload);
    default:
      return state;
  }
};

export const filtersReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case setContactsFilter.type:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};
