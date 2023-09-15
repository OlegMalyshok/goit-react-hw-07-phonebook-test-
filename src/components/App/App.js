import { Container } from './App.styled';
import { PhonebookFormList } from '../PhonebookFormList';
import { PhonebookForm } from '../PhonebookForm/PhonebookForm';

export const App = () => {
  return (
    <Container>
      <h2>Phonebook</h2>
      <PhonebookForm />
      <PhonebookFormList />
    </Container>
  );
};
