import { Container } from './App.styled';
import { PhonebookFormList } from '../PhonebookFormList';
import { PhonebookForm } from '../PhonebookForm/PhonebookForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h2>Phonebook</h2>
      <PhonebookForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <PhonebookFormList />
    </Container>
  );
};
