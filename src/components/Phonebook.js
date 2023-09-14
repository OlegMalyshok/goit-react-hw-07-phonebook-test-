import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from 'redux/contactsSlice';
import { setFilter } from 'redux/filterSlice';
import { PhoneForm } from './PhonebookForm';

export const Phonebook = () => {
  const contactsList = useSelector(state => {
    const filter = state.filter.toLowerCase();
    return state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  });

  const dispatch = useDispatch();
  let nameInput = '';
  let numberInput = '';

  const handleNameChange = event => {
    nameInput = event.target.value;
  };

  const handleNumberChange = event => {
    numberInput = event.target.value;
  };

  const handleAddContact = event => {
    event.preventDefault();
    dispatch(addContact(nameInput, numberInput));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = event => {
    const filterValue = event.target.value;
    dispatch(setFilter(filterValue));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <PhoneForm onSubmit={handleAddContact}>
        <input
          type="text"
          placeholder="Name"
          required
          onChange={handleNameChange}
        ></input>
        <input
          type="tel"
          placeholder="Number"
          required
          onChange={handleNumberChange}
        ></input>
        <button type="submit" onClick={handleAddContact}>
          Add contact
        </button>
      </PhoneForm>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        placeholder="Enter a name"
        onChange={handleFilterChange}
      ></input>
      <div>
        <ul>
          {contactsList.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button onClick={() => handleDeleteContact(contact.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
