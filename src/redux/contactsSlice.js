import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsInitialState = [
  { id: 0, name: "Joe Biden", number: "0502252552" },
  { id: 1, name: "Emmanuel Macron", number: "0978858855" },
  { id: 2, name: "Olaf Scholz", number: "0442332323" },
  { id: 3, name: "Boris Johnson", number: "0496656655" },
  { id: 4, name: "Valery Zaluzhny", number: "0999999999" },
];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },

    deleteContact: {
      reducer(state, action) {
        const index = state.findIndex((task) => task.id === action.payload);
        state.splice(index, 1);
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
