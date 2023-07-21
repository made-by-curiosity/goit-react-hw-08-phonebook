import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
  MainButton,
  MainForm,
  MainInput,
} from 'components/MainForm/MainForm.styled';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
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
      <label>
        <span>Email</span>
        <MainInput {...register('email')} autoComplete="off" />
      </label>
      <label>
        <span>Password</span>
        <MainInput {...register('password')} />
      </label>
      <MainButton type="submit">Log in</MainButton>
    </MainForm>
  );
};
