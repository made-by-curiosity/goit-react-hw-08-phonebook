import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
  ErrorMessage,
  FromTitle,
  MainButton,
  MainForm,
  MainInput,
} from 'components/MainForm/MainForm.styled';
import { logIn } from 'redux/auth/operations';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    email: yup
      .string()
      .email('Email should have valid form "example@mail.com"')
      .required('This field is required!'),
    password: yup.string().required('This field is required!'),
  })
  .required();

export const LoginForm = ({ formTitle }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
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
        <MainInput
          {...register('email')}
          autoFocus
          autoComplete="off"
          errors={errors.email}
        />
      </label>
      {errors.email?.message && (
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
      )}
      <label>
        <span>Password</span>
        <MainInput
          {...register('password')}
          type="password"
          autoComplete="off"
          errors={errors.password}
        />
      </label>
      {errors.password?.message && (
        <ErrorMessage>{errors.password?.message}</ErrorMessage>
      )}
      <MainButton type="submit">Log in</MainButton>
    </MainForm>
  );
};
