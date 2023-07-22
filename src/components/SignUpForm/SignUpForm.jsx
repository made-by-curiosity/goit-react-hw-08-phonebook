import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
  FromTitle,
  MainButton,
  MainForm,
  MainInput,
} from 'components/MainForm/MainForm.styled';
import { signUp } from 'redux/auth/operations';

export const SignUpForm = ({ formTitle }) => {
  const {
    register,
    handleSubmit,
    // formState: { errors, isValid },
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const dispatch = useDispatch();

  const onSubmit = ({ name, email, password }) => {
    dispatch(
      signUp({
        name,
        email,
        password,
      })
    );
    reset();
  };

  return (
    <MainForm onSubmit={handleSubmit(onSubmit)}>
      {formTitle && <FromTitle>{formTitle}</FromTitle>}
      <label>
        <span>Name</span>
        <MainInput {...register('name')} autoComplete="off" autoFocus />
      </label>
      <label>
        <span>Email</span>
        <MainInput {...register('email')} autoComplete="off" />
      </label>
      <label>
        <span>Password</span>
        <MainInput
          {...register('password')}
          type="password"
          autoComplete="off"
        />
      </label>
      <MainButton type="submit">Sign Up</MainButton>
    </MainForm>
  );
};
