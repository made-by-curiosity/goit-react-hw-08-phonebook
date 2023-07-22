import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { AddButton, PhonebookForm } from './Form.styled';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { ErrorMessage, MainInput } from 'components/MainForm/MainForm.styled';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      number: '',
    },
    mode: 'onChange',
  });

  const onSubmit = newContactValues => {
    const hasContact = contacts.find(
      contact => newContactValues.name === contact.name
    );

    if (hasContact) {
      alert(`${newContactValues.name} is already in contacts`);

      return;
    }

    dispatch(addContact(newContactValues));
  };

  return (
    <PhonebookForm
      onSubmit={handleSubmit(data => {
        onSubmit(data);
        reset();
      })}
    >
      <label htmlFor="name">
        <p>Name</p>
        <MainInput
          {...register('name', {
            required: 'Name is required',
            pattern: {
              value:
                /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
              message: 'Name must contain only letters',
            },
            maxLength: {
              value: 20,
              message: "Name shouldn't be longer than 20 characters",
            },
          })}
          type="text"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          errors={errors.name}
          autoComplete="off"
        />
      </label>
      <ErrorMessage>{errors?.name?.message}</ErrorMessage>

      <label htmlFor="number">
        <p>Number</p>
        <MainInput
          {...register('number', {
            required: 'Number is required',
            pattern: {
              value:
                /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}?$/,
              message: 'Invalid phone number',
            },
            maxLength: {
              value: 20,
              message: "Phone shouldn't be longer than 20 characters",
            },
          })}
          type="tel"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          errors={errors.number}
          autoComplete="off"
        />
      </label>
      <ErrorMessage>{errors?.number?.message}</ErrorMessage>
      <AddButton type="submit" disabled={!isValid}>
        Add Contact
      </AddButton>
    </PhonebookForm>
  );
};
