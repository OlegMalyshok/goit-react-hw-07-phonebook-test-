import { deleteContact } from 'redux/operations';
import { ContactFilter } from './ContactFilter';
import { useDispatch, useSelector } from 'react-redux';

export const PhonebookFormList = () => {
  const contactsList = useSelector(state => {
    const filter = state.filter.toLowerCase();
    return state.contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  });

  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <ContactFilter />
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
  );
};
