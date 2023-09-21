import { Formik } from 'formik';
import { StyledForm, StyledField, StyledError } from './PhonebookForm.styled';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';

const schema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
    .required('Required!')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
    )
    .required('Required!')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
});

export const PhonebookForm = () => {
  const dispatch = useDispatch();

  const handleAddContact = (values, { resetForm }) => {
    dispatch(addContact({ name: values.name, number: values.number }));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={handleAddContact}
    >
      <StyledForm>
        <div>
          <label>Name</label>
          <StyledField
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
          <StyledError name="name" className="error" />
        </div>
        <div>
          <label>Number</label>
          <StyledField
            type="tel"
            id="number"
            name="number"
            placeholder="Number"
            required
          />
          <StyledError name="number" className="error" />
        </div>
        <button type="submit">Add contact</button>
      </StyledForm>
    </Formik>
  );
};
