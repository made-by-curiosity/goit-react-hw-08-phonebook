import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
  FromTitle,
  MainButton,
  MainForm,
  MainInput,
} from 'components/MainForm/MainForm.styled';
import { logIn } from 'redux/auth/operations';

export const LoginForm = ({ formTitle }) => {
  const {
    register,
    handleSubmit,
    // formState: { errors, isValid },
    reset,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const dispatch = useDispatch();

  const onSubmit = ({ email, password }) => {
    dispatch(
      logIn({
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
        <span>Email</span>
        <MainInput {...register('email')} autoFocus />
      </label>
      <label>
        <span>Password</span>
        <MainInput
          {...register('password')}
          type="password"
          autoComplete="off"
        />
      </label>
      <MainButton type="submit">Log in</MainButton>
    </MainForm>
  );
};
