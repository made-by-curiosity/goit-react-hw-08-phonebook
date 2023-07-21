import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
  MainButton,
  MainForm,
  MainInput,
} from 'components/MainForm/MainForm.styled';
import { signUp } from 'redux/auth/operations';

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
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
      <label>
        <span>Name</span>
        <MainInput {...register('name')} autoComplete="off" />
      </label>
      <label>
        <span>Email</span>
        <MainInput {...register('email')} autoComplete="off" />
      </label>
      <label>
        <span>Password</span>
        <MainInput {...register('password')} />
      </label>
      <MainButton type="submit">Sign Up</MainButton>
    </MainForm>
  );
};
