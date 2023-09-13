import { nanoid } from 'nanoid';

export const addContact = (name, number) => ({
  type: 'contacts/addContact',
  payload: { id: nanoid(), name, number },
});

export const deleteContact = contactId => {
  return {
    type: 'contacts/deleteContact',
    payload: contactId,
  };
};

const contactsInitialState = [
  { id: '1', name: 'Eden Clements', number: '645-17-79' },
  { id: '2', name: 'Hermione Kline', number: '443-89-12' },
  { id: '3', name: 'Rosie Simpson', number: '459-12-56' },
  { id: '4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return [...state, action.payload];
    case 'contacts/deleteContact':
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};
